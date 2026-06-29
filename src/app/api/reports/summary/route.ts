import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import {
  getWorkdaysInMonth,
  toLocalDateKey,
  groupWorkdaysByWeek,
  resolveStatus,
  LeaveEntry
} from "@/lib/reports"

export async function GET(req: Request) {
  const session = await auth()
  if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })
  if (session.user.role === "EMPLOYEE") return new NextResponse("Forbidden", { status: 403 })

  const { searchParams } = new URL(req.url)
  const year = parseInt(searchParams.get("year") || String(new Date().getFullYear()))
  const month = parseInt(searchParams.get("month") || String(new Date().getMonth() + 1))

  const workdays = getWorkdaysInMonth(year, month)
  const startDate = new Date(year, month - 1, 1)
  const endDate = new Date(year, month, 0, 23, 59, 59)

  const [users, allPresensi, allLeaveRequests] = await Promise.all([
    prisma.user.findMany({
      where: { status: "ACTIVE", role: { not: "ADMIN" } },
      select: { id: true, fullName: true, employeeId: true },
      orderBy: { fullName: "asc" },
    }),
    prisma.presensi.findMany({
      where: { date: { gte: startDate, lte: endDate } },
      select: { userId: true, date: true, status: true },
    }),
    prisma.leaveRequest.findMany({
      where: {
        status: "APPROVED",
        startDate: { lte: endDate },
        endDate: { gte: startDate },
      },
      select: { userId: true, type: true, startDate: true, endDate: true },
    }),
  ])

  // Index presensi: userId → dateKey → status
  const presensiMap = new Map<string, Map<string, string>>()
  for (const p of allPresensi) {
    if (!presensiMap.has(p.userId)) presensiMap.set(p.userId, new Map())
    presensiMap.get(p.userId)!.set(toLocalDateKey(p.date), p.status)
  }

  // Index leave: userId → LeaveEntry[]
  const leaveMap = new Map<string, LeaveEntry[]>()
  for (const lr of allLeaveRequests) {
    if (!leaveMap.has(lr.userId)) leaveMap.set(lr.userId, [])
    leaveMap.get(lr.userId)!.push({ type: lr.type, startDate: lr.startDate, endDate: lr.endDate })
  }

  // Per-employee summary
  const employees = users.map(user => {
    const userPresensi = presensiMap.get(user.id) ?? new Map<string, string>()
    const userLeave = leaveMap.get(user.id) ?? []
    let hadir = 0, terlambat = 0, absen = 0, izin = 0, sakit = 0, dinas = 0

    for (const wd of workdays) {
      const dk = toLocalDateKey(wd)
      const status = resolveStatus(userPresensi.get(dk), userLeave, wd)
      if (status === "PRESENT") hadir++
      else if (status === "LATE") terlambat++
      else if (status === "ABSENT") absen++
      else if (status === "PERMIT") izin++
      else if (status === "SICK") sakit++
      else if (status === "DINAS") dinas++
    }

    const effective = hadir + terlambat + izin + sakit + dinas
    const rate = workdays.length > 0 ? Math.round((effective / workdays.length) * 1000) / 10 : 0

    return { userId: user.id, fullName: user.fullName, employeeId: user.employeeId, hadir, terlambat, absen, izin, sakit, dinas, rate }
  })

  const totals = employees.reduce(
    (acc, e) => ({
      hadir: acc.hadir + e.hadir,
      terlambat: acc.terlambat + e.terlambat,
      absen: acc.absen + e.absen,
      izin: acc.izin + e.izin,
      sakit: acc.sakit + e.sakit,
      dinas: acc.dinas + e.dinas,
    }),
    { hadir: 0, terlambat: 0, absen: 0, izin: 0, sakit: 0, dinas: 0 }
  )

  // Weekly data for bar chart
  const weeks = groupWorkdaysByWeek(workdays)
  const weeklyData = weeks.map(({ label, dates }) => {
    let hadir = 0, absen = 0
    for (const user of users) {
      const userPresensi = presensiMap.get(user.id) ?? new Map<string, string>()
      const userLeave = leaveMap.get(user.id) ?? []
      for (const d of dates) {
        const dk = toLocalDateKey(d)
        const status = resolveStatus(userPresensi.get(dk), userLeave, d)
        if (status === "ABSENT") absen++
        else hadir++
      }
    }
    return { label, hadir, absen }
  })

  return NextResponse.json({
    year,
    month,
    workdays: workdays.length,
    employees,
    totals,
    weeklyData,
  })
}

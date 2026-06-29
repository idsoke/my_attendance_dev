import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { getWorkdaysInMonth, toLocalDateKey, resolveStatus, LeaveEntry } from "@/lib/reports"

const DAY_NAMES = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

export async function GET(req: Request) {
  const session = await auth()
  if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

  const { searchParams } = new URL(req.url)
  const year = parseInt(searchParams.get("year") || String(new Date().getFullYear()))
  const month = parseInt(searchParams.get("month") || String(new Date().getMonth() + 1))
  const targetUserId = searchParams.get("userId") || session.user.id

  // EMPLOYEE can only view their own data
  if (session.user.role === "EMPLOYEE" && targetUserId !== session.user.id) {
    return new NextResponse("Forbidden", { status: 403 })
  }

  const user = await prisma.user.findUnique({
    where: { id: targetUserId },
    select: { id: true, fullName: true, employeeId: true },
  })
  if (!user) return new NextResponse("User not found", { status: 404 })

  const workdays = getWorkdaysInMonth(year, month)
  const startDate = new Date(year, month - 1, 1)
  const endDate = new Date(year, month, 0, 23, 59, 59)

  const [presensiRecords, leaveRequests] = await Promise.all([
    prisma.presensi.findMany({
      where: { userId: targetUserId, date: { gte: startDate, lte: endDate } },
      select: { date: true, status: true, checkIn: true, checkOut: true },
    }),
    prisma.leaveRequest.findMany({
      where: {
        userId: targetUserId,
        status: "APPROVED",
        startDate: { lte: endDate },
        endDate: { gte: startDate },
      },
      select: { type: true, startDate: true, endDate: true },
    }),
  ])

  const presensiMap = new Map<string, (typeof presensiRecords)[0]>()
  for (const p of presensiRecords) {
    presensiMap.set(toLocalDateKey(p.date), p)
  }

  const leaves: LeaveEntry[] = leaveRequests.map(lr => ({
    type: lr.type,
    startDate: lr.startDate,
    endDate: lr.endDate,
  }))

  const summary = { hadir: 0, terlambat: 0, absen: 0, izin: 0, sakit: 0, dinas: 0 }

  const days = workdays.map(wd => {
    const dk = toLocalDateKey(wd)
    const presensi = presensiMap.get(dk)
    const status = resolveStatus(presensi?.status, leaves, wd)

    if (status === "PRESENT") summary.hadir++
    else if (status === "LATE") summary.terlambat++
    else if (status === "ABSENT") summary.absen++
    else if (status === "PERMIT") summary.izin++
    else if (status === "SICK") summary.sakit++
    else if (status === "DINAS") summary.dinas++

    const fmt = (d: Date | null | undefined) =>
      d ? new Date(d).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) : null

    // Determine leaveType label
    let leaveType: string | null = null
    if (!presensi && status !== "ABSENT") {
      const dk2 = dk
      const match = leaveRequests.find(lr => {
        const startKey = toLocalDateKey(new Date(lr.startDate))
        const endKey = toLocalDateKey(new Date(lr.endDate))
        return dk2 >= startKey && dk2 <= endKey
      })
      if (match) leaveType = match.type
    }

    return {
      date: dk,
      dayName: DAY_NAMES[wd.getDay()],
      status,
      checkIn: fmt(presensi?.checkIn),
      checkOut: fmt(presensi?.checkOut),
      leaveType,
    }
  })

  return NextResponse.json({
    userId: user.id,
    fullName: user.fullName,
    employeeId: user.employeeId,
    year,
    month,
    workdays: workdays.length,
    summary,
    days,
  })
}

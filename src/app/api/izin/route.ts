import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { differenceInCalendarDays } from "date-fns"

function countWorkdays(start: Date, end: Date): number {
    let count = 0
    const cur = new Date(start)
    while (cur <= end) {
        const day = cur.getDay()
        if (day !== 0 && day !== 6) count++
        cur.setDate(cur.getDate() + 1)
    }
    return count
}

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    const { searchParams } = new URL(req.url)
    const status = searchParams.get("status") ?? undefined
    const userId = searchParams.get("userId") ?? undefined

    const isPrivileged = session.user.role === "ADMIN" || session.user.role === "MANAGER"

    const where: any = {}
    if (!isPrivileged) {
        where.userId = session.user.id
    } else if (userId) {
        where.userId = userId
    }
    if (status) where.status = status

    const requests = await prisma.leaveRequest.findMany({
        where,
        include: {
            user: { select: { id: true, fullName: true, email: true, employeeId: true } },
            approvedBy: { select: { id: true, fullName: true } },
        },
        orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(requests)
}

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    const body = await req.json()
    const { type, startDate, endDate, reason } = body

    if (!type || !startDate || !endDate || !reason) {
        return NextResponse.json({ error: "Semua field wajib diisi." }, { status: 400 })
    }

    const validTypes = ["CUTI", "SAKIT", "DINAS", "IZIN"]
    if (!validTypes.includes(type)) {
        return NextResponse.json({ error: "Tipe izin tidak valid." }, { status: 400 })
    }

    const start = new Date(startDate)
    const end = new Date(endDate)
    if (start > end) {
        return NextResponse.json({ error: "Tanggal mulai harus sebelum tanggal selesai." }, { status: 400 })
    }

    // Check quota for CUTI
    if (type === "CUTI") {
        const year = start.getFullYear()
        const workdays = countWorkdays(start, end)
        let balance = await prisma.leaveBalance.findUnique({
            where: { userId_year: { userId: session.user.id, year } },
        })
        if (!balance) {
            balance = await prisma.leaveBalance.create({
                data: { userId: session.user.id, year, totalDays: 12, usedDays: 0 },
            })
        }
        const remaining = balance.totalDays - balance.usedDays
        if (workdays > remaining) {
            return NextResponse.json({
                error: `Saldo cuti tidak cukup. Sisa: ${remaining} hari, Dibutuhkan: ${workdays} hari.`,
            }, { status: 400 })
        }
    }

    // Check for overlapping pending/approved requests
    const overlap = await prisma.leaveRequest.findFirst({
        where: {
            userId: session.user.id,
            status: { in: ["PENDING", "APPROVED"] },
            startDate: { lte: end },
            endDate: { gte: start },
        },
    })
    if (overlap) {
        return NextResponse.json({
            error: "Anda sudah memiliki pengajuan izin yang tumpang tindih pada rentang tanggal tersebut.",
        }, { status: 409 })
    }

    const request = await prisma.leaveRequest.create({
        data: {
            userId: session.user.id,
            type,
            startDate: start,
            endDate: end,
            reason,
        },
    })

    return NextResponse.json(request, { status: 201 })
}

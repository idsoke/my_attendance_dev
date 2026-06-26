import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    const { searchParams } = new URL(req.url)
    const yearParam = searchParams.get("year")
    const year = yearParam ? parseInt(yearParam) : new Date().getFullYear()

    // Admin/Manager can query other users' balance
    const targetUserId = (session.user.role === "ADMIN" || session.user.role === "MANAGER")
        ? (searchParams.get("userId") ?? session.user.id)
        : session.user.id

    let balance = await prisma.leaveBalance.findUnique({
        where: { userId_year: { userId: targetUserId, year } },
    })

    // Auto-create balance record if it doesn't exist
    if (!balance) {
        balance = await prisma.leaveBalance.create({
            data: { userId: targetUserId, year, totalDays: 12, usedDays: 0 },
        })
    }

    return NextResponse.json({
        ...balance,
        remaining: balance.totalDays - balance.usedDays,
    })
}

import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

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

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    const { id } = await params
    const request = await prisma.leaveRequest.findUnique({
        where: { id },
        include: {
            user: { select: { id: true, fullName: true, email: true, employeeId: true } },
            approvedBy: { select: { id: true, fullName: true } },
        },
    })

    if (!request) return new NextResponse("Not Found", { status: 404 })

    const isPrivileged = session.user.role === "ADMIN" || session.user.role === "MANAGER"
    if (!isPrivileged && request.userId !== session.user.id) {
        return new NextResponse("Forbidden", { status: 403 })
    }

    return NextResponse.json(request)
}

// PATCH: approve / reject (admin/manager) or cancel (owner)
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    const { id } = await params
    const request = await prisma.leaveRequest.findUnique({ where: { id } })
    if (!request) return new NextResponse("Not Found", { status: 404 })

    const isPrivileged = session.user.role === "ADMIN" || session.user.role === "MANAGER"
    const isOwner = request.userId === session.user.id

    if (!isPrivileged && !isOwner) return new NextResponse("Forbidden", { status: 403 })

    const body = await req.json()
    const { action, approverNote } = body // action: "approve" | "reject" | "cancel"

    if (!["approve", "reject", "cancel"].includes(action)) {
        return NextResponse.json({ error: "Action tidak valid." }, { status: 400 })
    }

    // Owner can only cancel their own PENDING requests
    if (action === "cancel") {
        if (!isOwner) return new NextResponse("Forbidden", { status: 403 })
        if (request.status !== "PENDING") {
            return NextResponse.json({ error: "Hanya pengajuan dengan status PENDING yang bisa dibatalkan." }, { status: 400 })
        }
        const updated = await prisma.leaveRequest.update({
            where: { id },
            data: { status: "CANCELLED" },
        })
        return NextResponse.json(updated)
    }

    // Approve/Reject: privileged only
    if (!isPrivileged) return new NextResponse("Forbidden", { status: 403 })
    if (request.status !== "PENDING") {
        return NextResponse.json({ error: "Hanya pengajuan dengan status PENDING yang bisa diproses." }, { status: 400 })
    }

    const newStatus = action === "approve" ? "APPROVED" : "REJECTED"

    const updated = await prisma.leaveRequest.update({
        where: { id },
        data: {
            status: newStatus,
            approvedById: session.user.id,
            approverNote: approverNote ?? null,
        },
    })

    // When CUTI is approved, deduct from LeaveBalance
    if (action === "approve" && request.type === "CUTI") {
        const year = new Date(request.startDate).getFullYear()
        const days = countWorkdays(new Date(request.startDate), new Date(request.endDate))
        await prisma.leaveBalance.upsert({
            where: { userId_year: { userId: request.userId, year } },
            update: { usedDays: { increment: days } },
            create: { userId: request.userId, year, totalDays: 12, usedDays: days },
        })
    }

    return NextResponse.json(updated)
}

// DELETE: only owner can delete PENDING requests
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    const { id } = await params
    const request = await prisma.leaveRequest.findUnique({ where: { id } })
    if (!request) return new NextResponse("Not Found", { status: 404 })

    const isAdmin = session.user.role === "ADMIN"
    const isOwner = request.userId === session.user.id

    if (!isAdmin && !isOwner) return new NextResponse("Forbidden", { status: 403 })
    if (!isAdmin && request.status !== "PENDING") {
        return NextResponse.json({ error: "Hanya pengajuan PENDING yang bisa dihapus." }, { status: 400 })
    }

    await prisma.leaveRequest.delete({ where: { id } })
    return new NextResponse(null, { status: 204 })
}

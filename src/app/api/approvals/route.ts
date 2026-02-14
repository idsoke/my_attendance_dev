import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const users = await prisma.user.findMany({
            where: {
                status: "PENDING",
            },
            include: {
                jenjang: true,
                upa: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        })

        return NextResponse.json(users)
    } catch (error) {
        console.error("GET /api/approvals error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const { userId, action } = await req.json()

        if (!userId || !action) {
            return new NextResponse("Missing required fields", { status: 400 })
        }

        if (action === "approve") {
            await prisma.user.update({
                where: { id: userId },
                data: { status: "ACTIVE" },
            })
        } else if (action === "reject") {
            await prisma.user.delete({
                where: { id: userId },
            })
        } else {
            return new NextResponse("Invalid action", { status: 400 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("PATCH /api/approvals error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

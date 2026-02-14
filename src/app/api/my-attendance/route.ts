import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET(req: Request) {
    try {
        const session = await auth()
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const isAdmin = session.user.role === "ADMIN"

        const attendances = await prisma.attendance.findMany({
            where: isAdmin ? {} : {
                userId: session.user.id
            },
            include: {
                activity: {
                    select: {
                        title: true,
                        date: true,
                        location: true
                    }
                },
                user: isAdmin ? {
                    select: {
                        fullName: true,
                        role: true
                    }
                } : false
            },
            orderBy: {
                timestamp: 'desc'
            }
        })

        return NextResponse.json({ attendances })
    } catch (error) {
        console.error("My attendance error:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

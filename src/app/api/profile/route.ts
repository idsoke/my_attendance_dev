import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
    try {
        const session = await auth()
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: {
                id: true,
                fullName: true,
                email: true,
                phoneNumber: true,
                role: true,
                status: true,
                createdAt: true,
                upa: {
                    select: {
                        name: true,
                        location: true,
                    },
                },
                jenjang: {
                    select: {
                        name: true,
                        description: true,
                    },
                },
                _count: {
                    select: {
                        activities: true,
                    },
                },
            },
        })

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 })
        }

        return NextResponse.json(user)
    } catch (error) {
        console.error("Error fetching profile:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const session = await auth()
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const body = await req.json()
        const { fullName, phoneNumber } = body

        // Validate input
        if (!fullName || fullName.trim() === "") {
            return NextResponse.json({ error: "Full name is required" }, { status: 400 })
        }

        const updatedUser = await prisma.user.update({
            where: { id: session.user.id },
            data: {
                fullName: fullName.trim(),
                phoneNumber: phoneNumber?.trim() || null,
            },
            select: {
                id: true,
                fullName: true,
                email: true,
                phoneNumber: true,
                role: true,
                status: true,
                createdAt: true,
                upa: {
                    select: {
                        name: true,
                        location: true,
                    },
                },
                jenjang: {
                    select: {
                        name: true,
                        description: true,
                    },
                },
                _count: {
                    select: {
                        activities: true,
                    },
                },
            },
        })

        return NextResponse.json(updatedUser)
    } catch (error) {
        console.error("Error updating profile:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}


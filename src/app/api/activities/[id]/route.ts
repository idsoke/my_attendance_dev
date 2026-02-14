import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { activitySchema } from "@/lib/validations/activity"
import { NextResponse } from "next/server"
import { z } from "zod"


export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        const activity = await prisma.activity.findUnique({
            where: { id },
            include: {
                user: { select: { fullName: true, email: true } },
                upa: { select: { name: true } },
                attendances: {
                    include: {
                        user: { select: { fullName: true } }
                    },
                    orderBy: { timestamp: 'desc' }
                }
            }
        })

        if (!activity) return new NextResponse("Not Found", { status: 404 })

        return NextResponse.json(activity)
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const activity = await prisma.activity.findUnique({
            where: { id },
        })

        if (!activity) return new NextResponse("Not Found", { status: 404 })

        // Authorization check: Only Admin or Owner can delete
        if (session.user.role !== "ADMIN" && activity.userId !== session.user.id) {
            return new NextResponse("Forbidden", { status: 403 })
        }

        await prisma.activity.delete({
            where: { id },
        })

        return new NextResponse(null, { status: 204 })
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const activity = await prisma.activity.findUnique({
            where: { id },
        })

        if (!activity) return new NextResponse("Not Found", { status: 404 })

        // Authorization check
        if (session.user.role !== "ADMIN" && activity.userId !== session.user.id) {
            return new NextResponse("Forbidden", { status: 403 })
        }

        const json = await req.json()
        const body = activitySchema.partial().parse(json)

        const updatedActivity = await prisma.activity.update({
            where: { id },
            data: {
                ...body,
                isActive: (json as any).isActive,
                latitude: (json as any).latitude,
                longitude: (json as any).longitude,
                radius: (json as any).radius,
            },
        })

        return NextResponse.json(updatedActivity)
    } catch (error) {
        console.error("PATCH /api/activities/[id] error:", error)
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify((error as any).errors), { status: 400 })
        }
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

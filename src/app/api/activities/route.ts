import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { activitySchema } from "@/lib/validations/activity"
import { NextResponse } from "next/server"
import { z } from "zod"

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    const { user } = session
    let where: any = {}

    // Scope Filtering
    if (user.role === "ADMIN") {
        // No filter
    } else if (user.role === "EDITOR") {
        // Editor sees activities within their UPA
        if (user.upaId) {
            where.upaId = user.upaId
        } else {
            // If no UPA assigned, maybe see nothing or all? 
            // Requirement says "Dibatasi berdasarkan UPA".
            where.upaId = "NO_ACCESS"
        }
    } else if (user.role === "USER") {
        // User sees own activities
        // If Pembimbing, sees UPA activities?
        // Requirement: "Pembimbing: Monitoring kegiatan anggota UPA"
        // We need to know if user is Pembimbing. 
        // Current schema doesn't have explicit "Pembimbing" role, maybe it's a flag or implied?
        // "Sub Role: Pembimbing / Admin Group UPA"
        // Let's assume if they have a specific permission or just check logic.
        // For now, standard user = own data.
        where.userId = user.id
    }

    const activities = await prisma.activity.findMany({
        where,
        include: {
            user: {
                select: { fullName: true, email: true },
            },
            upa: {
                select: { name: true },
            },
            attendances: {
                include: {
                    user: {
                        select: { fullName: true }
                    }
                },
                orderBy: { timestamp: 'desc' }
            },
        },
        orderBy: { date: "desc" },
    })

    // Map to include flag field explicitly
    const activitiesWithFlag = activities.map((a: any) => ({
        ...a,
        flag: a.flag ?? 0
    }))

    return NextResponse.json({ activities: activitiesWithFlag })
}

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const json = await req.json()
        const body = activitySchema.parse(json)

        if (!session.user.upaId) {
            return new NextResponse("User does not belong to a UPA", { status: 400 })
        }

        const activity = await prisma.activity.create({
            data: {
                title: body.title,
                description: body.description,
                date: body.date,
                location: body.location,
                flag: (body as any).flag ?? 0,
                isActive: (body as any).isActive ?? true,
                latitude: (body as any).latitude,
                longitude: (body as any).longitude,
                radius: (body as any).radius ?? 100,
                userId: session.user.id,
                upaId: session.user.upaId,
                answers: (body.answers as any) ?? undefined,
            } as any,
        })

        return NextResponse.json(activity)
    } catch (error: any) {
        console.error("POST /api/activities error:", error)
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify((error as any).errors), { status: 400 })
        }
        // Handle Foreign Key Constraint Violation (likely stale session user ID or UPA ID)
        if (error.code === 'P2003') {
            return new NextResponse("Session invalid or expired (Foreign Key Constraint). Please logout and login again.", { status: 401 })
        }
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

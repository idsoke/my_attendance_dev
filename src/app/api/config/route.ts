import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { z } from "zod"

// Schema used for validation
const configSchema = z.object({
    key: z.string().min(1),
    value: z.string().min(1),
    description: z.string().optional(),
})

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const { searchParams } = new URL(req.url)
        const key = searchParams.get("key")

        if (key) {
            // Fetch specific config
            const config = await prisma.applicationConfig.findUnique({
                where: { key },
            })
            return NextResponse.json(config || null)
        } else {
            // Fetch all configs (ADMIN ONLY)
            if (session.user.role !== "ADMIN") {
                return new NextResponse("Forbidden", { status: 403 })
            }

            const configs = await prisma.applicationConfig.findMany({
                orderBy: { key: 'asc' }
            })
            return NextResponse.json(configs)
        }
    } catch (error) {
        console.error("GET /api/config error:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    try {
        const json = await req.json()
        const body = configSchema.parse(json)

        const config = await prisma.applicationConfig.upsert({
            where: { key: body.key },
            update: {
                value: body.value,
                description: body.description
            },
            create: {
                key: body.key,
                value: body.value,
                description: body.description
            }
        })

        return NextResponse.json(config)
    } catch (error) {
        console.error("POST /api/config error:", error)
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify((error as any).errors), { status: 400 })
        }
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

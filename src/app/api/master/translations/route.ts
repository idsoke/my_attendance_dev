import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { z } from "zod"

const translationSchema = z.object({
    variableName: z.string().min(1, "Variable name is required"),
    indonesiaValue: z.string().min(1, "Indonesia value is required"),
    englishValue: z.string().min(1, "English value is required"),
    isActive: z.boolean().default(true),
})

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const translations = await prisma.translation.findMany({
            orderBy: { variableName: "asc" },
        })
        return NextResponse.json(translations)
    } catch (error) {
        console.error("GET /api/master/translations error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const json = await req.json()
        const body = translationSchema.parse(json)

        const existing = await prisma.translation.findUnique({
            where: { variableName: body.variableName },
        })

        if (existing) {
            return new NextResponse("Variable name already exists", { status: 409 })
        }

        const translation = await prisma.translation.create({
            data: body,
        })

        return NextResponse.json(translation)
    } catch (error) {
        console.error("POST /api/master/translations error:", error)
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify((error as any).errors), { status: 400 })
        }
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

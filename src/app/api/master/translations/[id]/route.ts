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

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const translation = await prisma.translation.findUnique({ where: { id } })
        if (!translation) return new NextResponse("Not Found", { status: 404 })
        return NextResponse.json(translation)
    } catch (error) {
        console.error(`GET /api/master/translations/${id} error:`, error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const json = await req.json()
        const body = translationSchema.partial().parse(json)
        const translation = await prisma.translation.update({
            where: { id },
            data: body,
        })
        return NextResponse.json(translation)
    } catch (error) {
        console.error(`PATCH /api/master/translations/${id} error:`, error)
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify((error as any).errors), { status: 400 })
        }
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        await prisma.translation.delete({ where: { id } })
        return new NextResponse(null, { status: 204 })
    } catch (error) {
        console.error(`DELETE /api/master/translations/${id} error:`, error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

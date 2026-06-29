import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const translations = await prisma.translation.findMany({
            where: { isActive: true },
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
        const { variableName, indonesiaValue, englishValue } = await req.json()
        const translation = await prisma.translation.create({
            data: { variableName, indonesiaValue, englishValue },
        })
        return NextResponse.json(translation)
    } catch (error) {
        console.error("POST /api/master/translations error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const { id, variableName, indonesiaValue, englishValue, isActive } = await req.json()
        const translation = await prisma.translation.update({
            where: { id },
            data: { variableName, indonesiaValue, englishValue, isActive },
        })
        return NextResponse.json(translation)
    } catch (error) {
        console.error("PATCH /api/master/translations error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function DELETE(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const { id } = await req.json()
        await prisma.translation.delete({ where: { id } })
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("DELETE /api/master/translations error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

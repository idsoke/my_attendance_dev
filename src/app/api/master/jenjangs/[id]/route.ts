import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { jenjangSchema } from "@/lib/validations/master"
import { NextResponse } from "next/server"

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
        await prisma.jenjang.delete({
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
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const json = await req.json()
        const body = jenjangSchema.partial().parse(json)

        const jenjang = await prisma.jenjang.update({
            where: { id },
            data: body,
        })

        return NextResponse.json(jenjang)
    } catch (error) {
        return new NextResponse("Invalid Request", { status: 400 })
    }
}

import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { z } from "zod"

const dpcSchema = z.object({
    kodeDpc: z.string().min(1, "Kode DPC is required"),
    namaDpc: z.string().min(1, "Nama DPC is required"),
    isActive: z.boolean().default(true),
})

// GET single DPC
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const dpc = await prisma.dpc.findUnique({ where: { id } })
        if (!dpc) return new NextResponse("Not Found", { status: 404 })
        return NextResponse.json(dpc)
    } catch (error) {
        console.error(`GET /api/master/dpc/${id} error:`, error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

// UPDATE DPC
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
        const body = dpcSchema.partial().parse(json)
        const dpc = await prisma.dpc.update({
            where: { id },
            data: body,
        })
        return NextResponse.json(dpc)
    } catch (error) {
        console.error(`PATCH /api/master/dpc/${id} error:`, error)
        if (error instanceof z.ZodError) {
            return new NextResponse(error.message, { status: 400 })
        }
        return new NextResponse("Internal Error", { status: 500 })
    }
}

// DELETE DPC
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
        await prisma.dpc.delete({ where: { id } })
        return new NextResponse(null, { status: 204 })
    } catch (error) {
        console.error(`DELETE /api/master/dpc/${id} error:`, error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

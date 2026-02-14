import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { z } from "zod"

const dpcSchema = z.object({
    kodeDpc: z.string().min(1, "Kode DPC is required"),
    namaDpc: z.string().min(1, "Nama DPC is required"),
    isActive: z.boolean().default(true),
})

// GET all DPCs
export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const dpcs = await prisma.dpc.findMany({
            orderBy: { createdAt: "desc" },
        })
        return NextResponse.json(dpcs)
    } catch (error) {
        console.error("GET /api/master/dpc error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

// CREATE new DPC
export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const json = await req.json()
        const body = dpcSchema.parse(json)

        const existingDpc = await prisma.dpc.findUnique({
            where: { kodeDpc: body.kodeDpc },
        })

        if (existingDpc) {
            return new NextResponse("Kode DPC already exists", { status: 409 })
        }

        const dpc = await prisma.dpc.create({
            data: body,
        })

        return NextResponse.json(dpc)
    } catch (error) {
        console.error("POST /api/master/dpc error:", error)
        if (error instanceof z.ZodError) {
            return new NextResponse(error.message, { status: 400 })
        }
        return new NextResponse("Internal Error", { status: 500 })
    }
}

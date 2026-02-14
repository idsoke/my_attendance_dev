import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { z } from "zod"

const pertanyaanSchema = z.object({
    pertanyaan: z.string().min(1, "Pertanyaan is required"),
    tipeJawaban: z.enum(["TEXTBOX", "OPTION", "TANGGAL", "LISTBOX"]),
    opsiJawaban: z.array(z.string()).optional(),
    isRequired: z.boolean().default(true),
    sourceList: z.string().optional(),
    type_kegiatan: z.string().max(15).optional(),
    isActive: z.boolean().default(true),
})

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const pertanyaans = await prisma.pertanyaan.findMany({
            orderBy: [
                { urutan: 'asc' },
                { createdAt: 'desc' }
            ],
        })
        return NextResponse.json(pertanyaans)
    } catch (error) {
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
        const body = pertanyaanSchema.parse(json)

        // Validation logic based on type
        if (body.tipeJawaban === "OPTION" && (!body.opsiJawaban || body.opsiJawaban.length === 0)) {
            return new NextResponse("Opsi Jawaban is required for OPTION type", { status: 400 })
        }
        if (body.tipeJawaban === "LISTBOX" && !body.sourceList) {
            return new NextResponse("Source List is required for LISTBOX type", { status: 400 })
        }

        const pertanyaan = await prisma.pertanyaan.create({
            data: {
                ...body,
                opsiJawaban: body.opsiJawaban ? JSON.stringify(body.opsiJawaban) : undefined
            },
        })

        return NextResponse.json(pertanyaan)
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse(error.message, { status: 400 })
        }
        console.error(error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

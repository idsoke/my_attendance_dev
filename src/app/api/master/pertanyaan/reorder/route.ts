
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { z } from "zod"

const reorderSchema = z.object({
    items: z.array(z.object({
        id: z.string(),
        urutan: z.number()
    }))
})

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const json = await req.json()
        const body = reorderSchema.parse(json)

        // Update multiple records in a transaction
        await prisma.$transaction(
            body.items.map((item) =>
                (prisma as any).pertanyaan.update({
                    where: { id: item.id },
                    data: { urutan: item.urutan },
                })
            )
        )

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Reorder Error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { upaSchema } from "@/lib/validations/master"
import { NextResponse } from "next/server"

export async function GET() {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    const upas = await prisma.upa.findMany({
        orderBy: { name: "asc" },
        include: {
            dpc: true,
            _count: {
                select: { users: true, activities: true },
            },
        },
    })

    return NextResponse.json(upas)
}

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const json = await req.json()
        const body = upaSchema.parse(json)

        const upa = await prisma.upa.create({
            data: body,
        })

        // Create audit log
        await prisma.auditLog.create({
            data: {
                action: "CREATE_UPA",
                resource: "Upa",
                details: { upaId: upa.id, name: upa.name },
                userId: session.user.id,
            },
        })

        return NextResponse.json(upa, { status: 201 })
    } catch (error) {
        console.error("Error creating UPA:", error)
        return new NextResponse("Invalid Request", { status: 400 })
    }
}

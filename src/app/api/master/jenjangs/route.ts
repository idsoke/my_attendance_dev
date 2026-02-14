import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { jenjangSchema } from "@/lib/validations/master"
import { NextResponse } from "next/server"

export async function GET() {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    const jenjangs = await prisma.jenjang.findMany({
        orderBy: { name: "asc" },
        include: {
            _count: {
                select: { users: true },
            },
        },
    })

    return NextResponse.json(jenjangs)
}

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const json = await req.json()
        const body = jenjangSchema.parse(json)

        const jenjang = await prisma.jenjang.create({
            data: body,
        })

        // Create audit log
        await prisma.auditLog.create({
            data: {
                action: "CREATE_JENJANG",
                resource: "Jenjang",
                details: { jenjangId: jenjang.id, name: jenjang.name },
                userId: session.user.id,
            },
        })

        return NextResponse.json(jenjang, { status: 201 })
    } catch (error) {
        console.error("Error creating Jenjang:", error)
        return new NextResponse("Invalid Request", { status: 400 })
    }
}

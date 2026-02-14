import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { jenjangSchema } from "@/lib/validations/master"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    const jenjangs = await prisma.jenjang.findMany({
        orderBy: { name: "asc" },
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

        return NextResponse.json(jenjang)
    } catch (error) {
        return new NextResponse("Invalid Request", { status: 400 })
    }
}

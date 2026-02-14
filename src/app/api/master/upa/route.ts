import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { upaSchema } from "@/lib/validations/master"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    const upas = await prisma.upa.findMany({
        orderBy: { name: "asc" },
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

        return NextResponse.json(upa)
    } catch (error) {
        return new NextResponse("Invalid Request", { status: 400 })
    }
}

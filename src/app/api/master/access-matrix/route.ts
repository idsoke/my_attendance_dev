import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { z } from "zod"

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const menus = await prisma.menu.findMany({
            orderBy: { order: "asc" },
            include: {
                accesses: true,
            },
        })
        return NextResponse.json(menus)
    } catch (error) {
        console.error("GET /api/master/access-matrix error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

const updateAccessSchema = z.object({
    role: z.enum(["ADMIN", "EDITOR", "USER", "PENGGUNA", "SEKRETARIS"]),
    menuId: z.string(),
    canAccess: z.boolean(),
})

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user || session.user.role !== "ADMIN") {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const json = await req.json()
        const body = updateAccessSchema.parse(json)

        const access = await prisma.roleAccess.upsert({
            where: {
                role_menuId: {
                    role: body.role,
                    menuId: body.menuId,
                },
            },
            update: {
                canAccess: body.canAccess,
            },
            create: {
                role: body.role,
                menuId: body.menuId,
                canAccess: body.canAccess,
            },
        })

        return NextResponse.json(access)
    } catch (error) {
        console.error("POST /api/master/access-matrix error:", error)
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify((error as any).errors), { status: 400 })
        }
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

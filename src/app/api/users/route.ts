import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { userSchema } from "@/lib/validations/auth"
import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { getUserScope } from "@/lib/dal/user"

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    try {
        const scope = getUserScope(session.user)
        const users = await prisma.user.findMany({
            where: scope,
            include: {
                upa: true,
                jenjang: true,
            },
            orderBy: { createdAt: "desc" },
        })

        // Remove password from response
        const sanitizedUsers = users.map(({ password, ...user }: any) => user)

        return NextResponse.json({ users: sanitizedUsers })
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
        const body = userSchema.parse(json)

        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: body.email },
                    { phoneNumber: body.phoneNumber }
                ]
            }
        })

        if (existingUser) {
            if (existingUser.email === body.email) {
                return new NextResponse("Email already exists", { status: 409 })
            }
            if (existingUser.phoneNumber === body.phoneNumber) {
                return new NextResponse("Phone number already exists", { status: 409 })
            }
        }

        const hashedPassword = await hash(body.password || "123456", 10)

        const user = await prisma.user.create({
            data: {
                ...body,
                password: hashedPassword,
            },
        })

        const { password, ...sanitizedUser } = user
        return NextResponse.json(sanitizedUser)
    } catch (error) {
        if (error instanceof Error) {
            return new NextResponse(error.message, { status: 400 })
        }
        return new NextResponse("Invalid Request", { status: 400 })
    }
}

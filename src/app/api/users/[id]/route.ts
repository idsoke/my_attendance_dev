import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { userSchema } from "@/lib/validations/auth"
import { NextResponse } from "next/server"
import { hash } from "bcryptjs"

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    const user = await prisma.user.findUnique({
        where: { id },
        include: { upa: true, jenjang: true },
    })

    if (!user) return new NextResponse("User not found", { status: 404 })

    // Check access scope
    if (session.user.role !== "ADMIN" && session.user.id !== user.id) {
        // If Editor, check UPA
        if (session.user.role === "EDITOR" && session.user.upaId === user.upaId) {
            // Allowed
        } else {
            return new NextResponse("Forbidden", { status: 403 })
        }
    }

    const { password, ...sanitizedUser } = user
    return NextResponse.json(sanitizedUser)
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const session = await auth()
    if (!session?.user) return new NextResponse("Unauthorized", { status: 401 })

    // Only Admin can update other users
    if (session.user.role !== "ADMIN" && session.user.id !== id) {
        return new NextResponse("Forbidden", { status: 403 })
    }

    try {
        const json = await req.json()
        const body = userSchema.partial().parse(json)

        if (body.password) {
            body.password = await hash(body.password, 10)
        }

        // Check for uniqueness if email or phoneNumber is being updated
        if (body.email || body.phoneNumber) {
            const existingUser = await prisma.user.findFirst({
                where: {
                    AND: [
                        { NOT: { id: id } },
                        {
                            OR: [
                                body.email ? { email: body.email } : {},
                                body.phoneNumber ? { phoneNumber: body.phoneNumber } : {}
                            ]
                        }
                    ]
                }
            })

            if (existingUser) {
                if (body.email && existingUser.email === body.email) {
                    return new NextResponse("Email already exists", { status: 409 })
                }
                if (body.phoneNumber && existingUser.phoneNumber === body.phoneNumber) {
                    return new NextResponse("Phone number already exists", { status: 409 })
                }
            }
        }

        // Prevent non-admin from changing role or UPA/Jenjang
        if (session.user.role !== "ADMIN") {
            delete body.role
            delete body.upaId
            delete body.jenjangId
        }

        const user = await prisma.user.update({
            where: { id },
            data: body,
        })

        const { password, ...sanitizedUser } = user
        return NextResponse.json(sanitizedUser)
    } catch (error) {
        return new NextResponse("Invalid Request", { status: 400 })
    }
}

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
        await prisma.user.delete({
            where: { id },
        })

        return new NextResponse(null, { status: 204 })
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}

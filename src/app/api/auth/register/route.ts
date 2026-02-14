import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"
import { z } from "zod"

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string().min(1),
    phoneNumber: z.string().min(1),
})

export async function POST(req: Request) {
    try {
        const json = await req.json()
        const body = registerSchema.parse(json)

        const existingUser = await prisma.user.findUnique({
            where: { email: body.email },
        })

        if (existingUser) {
            return NextResponse.json(
                { message: "Email already registered" },
                { status: 400 }
            )
        }

        const hashedPassword = await hash(body.password, 10)

        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: hashedPassword,
                fullName: body.fullName,
                phoneNumber: body.phoneNumber,
                role: "USER",
                status: "PENDING",
            },
        })

        return NextResponse.json(
            { message: "User registered successfully", userId: user.id },
            { status: 201 }
        )
    } catch (error) {
        console.error("POST /api/auth/register error:", error)
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { message: "Invalid input", errors: (error as any).errors },
                { status: 400 }
            )
        }
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }
}

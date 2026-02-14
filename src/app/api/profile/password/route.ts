
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { compare, hash } from "bcryptjs"
import { z } from "zod"

const passwordChangeSchema = z.object({
    newPassword: z.string().min(6, "Password baru minimal 6 karakter"),
    confirmPassword: z.string().min(1, "Konfirmasi password wajib diisi")
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Password baru dan konfirmasi tidak cocok",
    path: ["confirmPassword"],
})

export async function POST(req: NextRequest) {
    try {
        const session = await auth()
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const body = await req.json()
        const validation = passwordChangeSchema.safeParse(body)

        if (!validation.success) {
            return NextResponse.json({ error: validation.error.errors[0].message }, { status: 400 })
        }

        const { newPassword } = validation.data

        // Get user from db to get password hash
        const user = await prisma.user.findUnique({
            where: { id: session.user.id }
        })

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 })
        }

        // Hash new password
        const hashedPassword = await hash(newPassword, 10)

        // Update password
        await prisma.user.update({
            where: { id: user.id },
            data: { password: hashedPassword }
        })

        return NextResponse.json({ message: "Password berhasil diubah" })

    } catch (error) {
        console.error("Error changing password:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

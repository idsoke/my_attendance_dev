import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Seeding pending users for approval...")

    const password = await hash("password123", 10)

    const users = [
        {
            email: "john.doe@example.com",
            password,
            fullName: "John Doe",
            phoneNumber: "081234567801",
            role: "USER" as const,
            status: "PENDING" as const,
        },
        {
            email: "jane.smith@example.com",
            password,
            fullName: "Jane Smith",
            phoneNumber: "081234567802",
            role: "USER" as const,
            status: "PENDING" as const,
        },
        {
            email: "bob.wilson@example.com",
            password,
            fullName: "Bob Wilson",
            phoneNumber: "081234567803",
            role: "USER" as const,
            status: "PENDING" as const,
        },
    ]

    for (const userData of users) {
        await prisma.user.upsert({
            where: { email: userData.email },
            update: {},
            create: userData,
        })
    }

    console.log("✅ Pending users seeded")
}

main()
    .catch((e) => {
        console.error("❌ Seed failed:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

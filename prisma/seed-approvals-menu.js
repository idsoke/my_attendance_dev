const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Seeding menu for Approvals...")

    const approvalsMenu = await prisma.menu.upsert({
        where: { path: "/approvals" },
        update: {},
        create: {
            label: "Approvals",
            path: "/approvals",
            group: "Main",
            order: 2,
        },
    })

    await prisma.roleAccess.upsert({
        where: {
            role_menuId: {
                role: "ADMIN",
                menuId: approvalsMenu.id,
            },
        },
        update: {},
        create: {
            role: "ADMIN",
            menuId: approvalsMenu.id,
            canAccess: true,
        },
    })

    console.log("✅ Approvals menu seeded")
}

main()
    .catch((e) => {
        console.error("❌ Seed failed:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

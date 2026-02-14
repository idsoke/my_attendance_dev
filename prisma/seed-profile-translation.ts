import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Add menu.profile translation
    await prisma.translation.upsert({
        where: { variableName: "menu.profile" },
        update: {},
        create: {
            variableName: "menu.profile",
            indonesiaValue: "Profil",
            englishValue: "Profile",
            isActive: true,
        },
    })

    console.log("✅ Translation 'menu.profile' added successfully")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

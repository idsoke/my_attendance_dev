const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const menus = [
        { label: "Dashboard", path: "/dashboard", group: "Main", order: 1 },
        { label: "Activities", path: "/activities", group: "Main", order: 2 },
        { label: "Kegiatan", path: "/kegiatan", group: "Main", order: 2 },
        { label: "Anggota", path: "/master/anggota", group: "Master Data", order: 3 },
        { label: "Jenjang", path: "/master/jenjang", group: "Master Data", order: 4 },
        { label: "DPC", path: "/master/dpc", group: "Master Data", order: 5 },
        { label: "Pertanyaan", path: "/master/pertanyaan", group: "Master Data", order: 6 },
        { label: "Kata", path: "/master/translations", group: "Master Data", order: 7 },
        { label: "Access Matrix", path: "/master/access-matrix", group: "Settings", order: 8 },
    ]

    for (const menu of menus) {
        await prisma.menu.upsert({
            where: { path: menu.path },
            update: menu,
            create: menu,
        })
    }
    console.log("Menus seeded successfully")
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

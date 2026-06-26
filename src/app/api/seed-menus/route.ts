import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const menus = [
            { label: "Dashboard", path: "/dashboard", group: "Main", order: 1 },
            { label: "Activities", path: "/activities", group: "Main", order: 2 },
            { label: "Kegiatan", path: "/kegiatan", group: "Main", order: 2 },
            { label: "Anggota", path: "/master/anggota", group: "Master Data", order: 3 },
            { label: "Pertanyaan", path: "/master/pertanyaan", group: "Master Data", order: 4 },
            { label: "Kata", path: "/master/translations", group: "Master Data", order: 5 },
            { label: "Access Matrix", path: "/master/access-matrix", group: "Settings", order: 6 },
        ]

        for (const menu of menus) {
            await prisma.menu.upsert({
                where: { path: menu.path },
                update: menu,
                create: menu,
            })
        }

        return NextResponse.json({ message: "Menus seeded successfully" })
    } catch (error) {
        console.error("Error seeding menus:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

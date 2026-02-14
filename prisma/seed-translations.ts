import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Seeding translations...")

    const translations = [
        { variableName: "activities.title", indonesiaValue: "Aktivitas", englishValue: "Activities" },
        { variableName: "activities.subtitle", indonesiaValue: "Kelola dan lacak semua aktivitas", englishValue: "Manage and track all activities" },
        { variableName: "activities.add", indonesiaValue: "Tambah Aktivitas", englishValue: "Add Activity" },
        { variableName: "activities.export", indonesiaValue: "Ekspor ke Excel", englishValue: "Export to Excel" },
        { variableName: "activities.search", indonesiaValue: "Cari berdasarkan judul atau deskripsi...", englishValue: "Search by title or description..." },
        { variableName: "activities.filterUser", indonesiaValue: "Filter berdasarkan Pengguna", englishValue: "Filter by User" },
        { variableName: "activities.filterUpa", indonesiaValue: "Filter berdasarkan UPA", englishValue: "Filter by UPA" },
        { variableName: "activities.selectUser", indonesiaValue: "Pilih pengguna...", englishValue: "Select user..." },
        { variableName: "activities.selectUpa", indonesiaValue: "Pilih UPA...", englishValue: "Select UPA..." },
        { variableName: "activities.noActivities", indonesiaValue: "Tidak ada aktivitas ditemukan", englishValue: "No activities found" },
        { variableName: "activities.showing", indonesiaValue: "Menampilkan", englishValue: "Showing" },
        { variableName: "activities.to", indonesiaValue: "sampai", englishValue: "to" },
        { variableName: "activities.of", indonesiaValue: "dari", englishValue: "of" },

        // Sidebar
        { variableName: "menu.dashboard", indonesiaValue: "Dasbor", englishValue: "Dashboard" },
        { variableName: "menu.activities", indonesiaValue: "Aktivitas", englishValue: "Activities" },
        { variableName: "menu.kegiatan", indonesiaValue: "Kegiatan", englishValue: "Activities (Simple)" },
        { variableName: "menu.approvals", indonesiaValue: "Persetujuan", englishValue: "Approvals" },
        { variableName: "menu.masterData", indonesiaValue: "Data Master", englishValue: "Master Data" },
        { variableName: "menu.members", indonesiaValue: "Anggota", englishValue: "Members" },
        { variableName: "menu.levels", indonesiaValue: "Jenjang", englishValue: "Levels" },
        { variableName: "menu.upa", indonesiaValue: "UPA", englishValue: "UPA" },
        { variableName: "menu.dpc", indonesiaValue: "DPC", englishValue: "DPC" },
        { variableName: "menu.questions", indonesiaValue: "Pertanyaan", englishValue: "Questions" },
        { variableName: "menu.translations", indonesiaValue: "Kata", englishValue: "Translations" },
        { variableName: "menu.accessMatrix", indonesiaValue: "Matriks Akses", englishValue: "Access Matrix" },
        { variableName: "menu.signOut", indonesiaValue: "Keluar", englishValue: "Sign Out" },
    ]

    for (const t of translations) {
        await prisma.translation.upsert({
            where: { variableName: t.variableName },
            update: {
                indonesiaValue: t.indonesiaValue,
                englishValue: t.englishValue,
            },
            create: {
                variableName: t.variableName,
                indonesiaValue: t.indonesiaValue,
                englishValue: t.englishValue,
                isActive: true,
            },
        })
    }

    console.log("✅ Translations seeded")
}

main()
    .catch((e) => {
        console.error("❌ Seed failed:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Starting seed...")

    // 1. Master Data: Pertanyaan
    const q1 = await prisma.pertanyaan.create({
        data: {
            pertanyaan: "Berapa jumlah peserta yang hadir?",
            tipeJawaban: "TEXTBOX",
            isRequired: true,
            type_kegiatan: "Monitoring",
            isActive: true,
        },
    })
    const q2 = await prisma.pertanyaan.create({
        data: {
            pertanyaan: "Apakah kegiatan berjalan lancar?",
            tipeJawaban: "OPTION",
            opsiJawaban: ["Ya", "Tidak", "Kurang Lancar"],
            isRequired: true,
            type_kegiatan: "Monitoring",
            isActive: true,
        },
    })
    const q3 = await prisma.pertanyaan.create({
        data: {
            pertanyaan: "Pilih Kategori Kegiatan",
            tipeJawaban: "LISTBOX",
            opsiJawaban: ["Rutin", "Khusus", "Insidentil"],
            isRequired: false,
            type_kegiatan: "Umum",
            isActive: true,
        },
    })
    console.log("✅ Created Pertanyaan")

    // 4a. Application Config
    await prisma.applicationConfig.upsert({
        where: { key: "MONITORING_START_DATE" },
        update: {},
        create: {
            key: "MONITORING_START_DATE",
            value: "2026-01-01",
            description: "Tanggal mulai periode monitoring (Format: YYYY-MM-DD)",
        }
    })
    console.log("✅ Created Application Config")

    // 5. Master Data: Translation
    await prisma.translation.upsert({
        where: { variableName: "WELCOME_MSG" },
        update: {},
        create: { variableName: "WELCOME_MSG", indonesiaValue: "Selamat Datang", englishValue: "Welcome" },
    })
    await prisma.translation.upsert({
        where: { variableName: "LOGIN_BTN" },
        update: {},
        create: { variableName: "LOGIN_BTN", indonesiaValue: "Masuk", englishValue: "Login" },
    })

    // Menu Translations
    const menuTranslations = [
        { key: "menu.dashboard", id: "Dashboard", en: "Dashboard" },
        { key: "menu.activities", id: "Aktivitas", en: "Activities" },
        { key: "menu.kegiatan", id: "Kegiatan", en: "Activities (Simple)" },
        { key: "menu.profile", id: "Profil", en: "Profile" },
        { key: "menu.approvals", id: "Persetujuan", en: "Approvals" },
        { key: "menu.masterData", id: "Data Master", en: "Master Data" },
        { key: "menu.members", id: "Anggota", en: "Members" },
        { key: "menu.questions", id: "Pertanyaan", en: "Questions" },
        { key: "menu.translations", id: "Terjemahan", en: "Translations" },
        { key: "menu.accessMatrix", id: "Matriks Akses", en: "Access Matrix" },
        { key: "menu.signOut", id: "Keluar", en: "Sign Out" },
    ]

    for (const t of menuTranslations) {
        await prisma.translation.upsert({
            where: { variableName: t.key },
            update: {},
            create: { variableName: t.key, indonesiaValue: t.id, englishValue: t.en },
        })
    }
    console.log("✅ Created Translations")

    // 6. Access Matrix: Menu & RoleAccess
    const menuDashboard = await prisma.menu.upsert({
        where: { path: "/dashboard" },
        update: {},
        create: { label: "Dashboard", path: "/dashboard", group: "Main", order: 1 },
    })
    const menuActivities = await prisma.menu.upsert({
        where: { path: "/activities" },
        update: {},
        create: { label: "Activities", path: "/activities", group: "Main", order: 2 },
    })
    const menuKegiatan = await prisma.menu.upsert({
        where: { path: "/kegiatan" },
        update: {},
        create: { label: "Kegiatan", path: "/kegiatan", group: "Main", order: 3 },
    })
    const menuMonitoring = await prisma.menu.upsert({
        where: { path: "/monitoring" },
        update: {},
        create: { label: "Monitoring", path: "/monitoring", group: "Main", order: 4 },
    })
    const menuProfile = await prisma.menu.upsert({
        where: { path: "/profile" },
        update: {},
        create: { label: "Profile", path: "/profile", group: "User", order: 4 },
    })
    const menuApprovals = await prisma.menu.upsert({
        where: { path: "/approvals" },
        update: {},
        create: { label: "Approvals", path: "/approvals", group: "Admin", order: 5 },
    })

    const menuMasterAnggota = await prisma.menu.upsert({
        where: { path: "/master/anggota" },
        update: {},
        create: { label: "Master Anggota", path: "/master/anggota", group: "Master Data", order: 6 },
    })
    const menuMasterPertanyaan = await prisma.menu.upsert({
        where: { path: "/master/pertanyaan" },
        update: {},
        create: { label: "Master Pertanyaan", path: "/master/pertanyaan", group: "Master Data", order: 7 },
    })
    const menuMasterAccessMatrix = await prisma.menu.upsert({
        where: { path: "/master/access-matrix" },
        update: {},
        create: { label: "Access Matrix", path: "/master/access-matrix", group: "Master Data", order: 8 },
    })

    const menuMasterTranslations = await prisma.menu.upsert({
        where: { path: "/master/translations" },
        update: {},
        create: { label: "Translations", path: "/master/translations", group: "Master Data", order: 9 },
    })


    // Grant Access
    const adminRoles = [
        menuDashboard.id, menuActivities.id, menuKegiatan.id, menuMonitoring.id, menuProfile.id,
        menuApprovals.id, menuMasterAnggota.id, menuMasterPertanyaan.id, menuMasterAccessMatrix.id, menuMasterTranslations.id
    ]

    const employeeRoles = [
        menuDashboard.id, menuActivities.id, menuKegiatan.id, menuMonitoring.id, menuProfile.id
    ]

    for (const menuId of adminRoles) {
        await prisma.roleAccess.upsert({
            where: { role_menuId: { role: "ADMIN", menuId } },
            update: { canAccess: true },
            create: { role: "ADMIN", menuId, canAccess: true },
        })
    }

    for (const menuId of employeeRoles) {
        await prisma.roleAccess.upsert({
            where: { role_menuId: { role: "EMPLOYEE", menuId } },
            update: { canAccess: true },
            create: { role: "EMPLOYEE", menuId, canAccess: true },
        })
    }
    console.log("✅ Created Menus & RoleAccess")

    // 7. Users
    const adminPassword = await hash("admin123", 10)
    const admin = await prisma.user.upsert({
        where: { email: "admin@example.com" },
        update: {},
        create: {
            email: "admin@example.com",
            password: adminPassword,
            fullName: "Super Admin",
            phoneNumber: "08111111111",
            role: "ADMIN",
            status: "ACTIVE",
        },
    })

    const userPassword = await hash("user123", 10)
    const user = await prisma.user.upsert({
        where: { email: "user@example.com" },
        update: {},
        create: {
            email: "user@example.com",
            password: userPassword,
            fullName: "Regular User",
            phoneNumber: "08222222222",
            employeeId: "EMP0002",
            role: "EMPLOYEE",
            status: "ACTIVE",
        },
    })

    const managerPassword = await hash("manager123", 10)
    const manager = await prisma.user.upsert({
        where: { email: "manager@example.com" },
        update: {},
        create: {
            email: "manager@example.com",
            password: managerPassword,
            fullName: "Manager Baru",
            phoneNumber: "08333333333",
            role: "MANAGER",
            status: "PENDING",
        },
    })
    console.log("✅ Created Users")

    // 8. Activities
    await prisma.activity.createMany({
        data: [
            {
                title: "Rapat Bulanan",
                description: "Evaluasi kegiatan bulan lalu",
                date: new Date("2024-01-10"),
                location: "Aula Utama",
                userId: admin.id,
                flag: 0, // Normal
            },
            {
                title: "Monitoring Kelas A",
                description: "Kunjungan monitoring rutin",
                date: new Date("2024-01-12"),
                location: "Kelas A",
                userId: user.id,
                flag: 1, // Monitoring
                answers: { "q_1": "25 Peserta", "q_2": "Ya" },
            },
        ],
    })
    console.log("✅ Created Activities")

    console.log("🎉 Seed completed successfully!")
    console.log("\n📝 Test Credentials:")
    console.log("Admin    : admin@example.com / admin123")
    console.log("Employee : user@example.com / user123")
    console.log("Manager  : manager@example.com / manager123")
}

main()
    .catch((e) => {
        console.error("❌ Seed failed:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

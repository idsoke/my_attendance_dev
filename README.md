# AttendIQ

Sistem manajemen absensi karyawan berbasis web dengan validasi lokasi (GPS), manajemen izin/cuti, dan dashboard monitoring real-time, dibangun menggunakan Next.js dan Prisma.

## Fitur Utama

- Check-in / check-out harian dengan validasi lokasi (GPS) dan foto
- Pengajuan dan persetujuan izin / cuti karyawan
- Manajemen kegiatan/event dengan geofencing absensi
- Dashboard monitoring kehadiran real-time
- Autentikasi dan kontrol akses berbasis peran (ADMIN, MANAGER, EMPLOYEE)
- Approval workflow pendaftaran karyawan baru
- Multi-bahasa (Indonesia / English)
- Audit log aktivitas sistem

## Teknologi yang Digunakan

### Core & Framework

- **Next.js 16** — Framework React utama (SSR, App Router)
- **React 19** — Library UI
- **TypeScript** — Tipe statis
- **Prisma ORM** — Akses database MySQL
- **NextAuth v5** — Autentikasi dan manajemen sesi

### Styling & UI

- **Tailwind CSS v4** — Utility-first CSS
- **Lucide React** — Ikon
- **Recharts** — Visualisasi data / grafik
- **Radix UI** — Komponen UI headless (Dialog, Select, Checkbox, dll)
- **@dnd-kit** — Drag-and-drop

### Testing

- **Vitest** — Unit testing
- **Playwright** — End-to-end testing

## Memulai Pengembangan

### Prasyarat

- Node.js 18+
- MySQL Server

### Instalasi

1. Install dependencies:
   ```bash
   npm install
   ```

2. Salin file environment variable, lalu sesuaikan nilainya:
   ```bash
   cp .env.example .env
   ```

3. Generate Prisma Client:
   ```bash
   npm run db:generate
   ```

4. Push schema ke database:
   ```bash
   npm run db:push
   ```

5. Seed database (opsional):
   ```bash
   npm run db:seed
   node seed-menus.js
   ```

6. Jalankan development server:
   ```bash
   npm run dev
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser.

Untuk panduan setup database MySQL secara lebih detail, lihat [MYSQL_SETUP.md](./MYSQL_SETUP.md).

## Peran Pengguna

| Role | Akses |
|------|-------|
| `ADMIN` | Akses penuh: kelola semua user, kegiatan, izin, dan konfigurasi |
| `MANAGER` | Lihat semua data, setujui/tolak pengajuan izin |
| `EMPLOYEE` | Absensi harian, ajukan izin, lihat riwayat sendiri |

## Script yang Tersedia

| Script | Keterangan |
|--------|-----------|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Build aplikasi untuk produksi |
| `npm run start` | Menjalankan production server |
| `npm run lint` | Menjalankan linter |
| `npm run test` | Menjalankan unit test (Vitest) |
| `npm run test:e2e` | Menjalankan end-to-end test (Playwright) |
| `npm run db:generate` | Generate Prisma Client |
| `npm run db:push` | Push schema Prisma ke database |
| `npm run db:migrate` | Menjalankan migrasi database |
| `npm run db:seed` | Seed data awal ke database |
| `npm run db:studio` | Membuka Prisma Studio |

## Struktur Project

```
src/
├── app/
│   ├── (auth)/           # Halaman login & register
│   ├── (dashboard)/      # Halaman dashboard
│   │   ├── dashboard/    # Halaman utama + check-in/out
│   │   ├── izin/         # Pengajuan izin karyawan
│   │   │   └── admin/    # Persetujuan izin (Admin/Manager)
│   │   ├── kegiatan/     # Manajemen kegiatan/event
│   │   ├── monitoring/   # Monitoring absensi kegiatan
│   │   ├── my-attendance/# Riwayat absensi harian
│   │   ├── approvals/    # Persetujuan pendaftaran user
│   │   ├── profile/      # Profil & ganti password
│   │   └── master/       # Master data (Admin)
│   └── api/              # API routes
│       ├── auth/         # Register & NextAuth
│       ├── activities/   # CRUD kegiatan + absensi
│       ├── izin/         # Manajemen izin/cuti
│       ├── users/        # Manajemen user
│       ├── profile/      # Profil & password
│       ├── approvals/    # Approval pendaftaran
│       └── master/       # Master data & access matrix
├── components/
│   ├── ui/               # Reusable UI components
│   └── layout/           # Sidebar, Navbar
├── lib/
│   ├── validations/      # Zod schemas
│   ├── dal/              # Data access layer
│   └── generated/        # Prisma client (generated)
└── types/                # TypeScript type definitions
```

## Dokumentasi

- [API.md](./API.md) — Dokumentasi endpoint API lengkap
- [DEPLOYMENT.md](./DEPLOYMENT.md) — Panduan deployment
- [MYSQL_SETUP.md](./MYSQL_SETUP.md) — Panduan setup database MySQL
- [CONTRIBUTING.md](./CONTRIBUTING.md) — Panduan kontribusi
- [CHECKLIST.md](./CHECKLIST.md) — Status pengembangan fitur

## Lisensi

Proyek ini menggunakan lisensi MIT.

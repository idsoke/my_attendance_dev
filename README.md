# AttendIQ

Sistem manajemen absensi karyawan berbasis web dengan validasi lokasi (GPS) dan dashboard monitoring real-time, dibangun menggunakan Next.js dan Prisma.

## Fitur Utama

- Check-in / check-out absensi dengan validasi lokasi dan foto
- Riwayat absensi per karyawan
- Dashboard monitoring untuk admin
- Manajemen data master (UPA, DPC, Jenjang, dll)
- Autentikasi dan kontrol akses berbasis peran (Admin, Editor, User)
- Approval workflow

## Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan stack teknologi modern untuk menjamin performa, skalabilitas, dan kemudahan pengembangan.

### Core & Framework

- **Next.js 16** - Framework React utama untuk rendering server-side (SSR) dan routing
- **React 19** - Library UI terbaru untuk membangun antarmuka pengguna interaktif
- **TypeScript** - Superset JavaScript yang menambahkan tipe statis untuk kode yang lebih aman
- **Prisma ORM** - ORM modern untuk akses database MySQL
- **NextAuth v5** - Autentikasi dan manajemen sesi

### Styling & UI

- **Tailwind CSS v4** - Framework CSS utility-first untuk desain yang cepat dan responsif
- **Lucide React** - Koleksi ikon yang ringan dan konsisten
- **Recharts** - Library charting untuk visualisasi data/grafik
- **Radix UI** - Komponen UI headless yang aksesibel (digunakan untuk Checkbox, dll)
- **@dnd-kit** - Toolkit ringan dan performan untuk antarmuka drag-and-drop

### Testing

- **Vitest** - Unit testing
- **Playwright** - End-to-end testing

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
   ```

6. Jalankan development server:
   ```bash
   npm run dev
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser.

Untuk panduan setup database MySQL secara lebih detail, lihat [MYSQL_SETUP.md](./MYSQL_SETUP.md).

## Script yang Tersedia

| Script              | Keterangan                          |
| ------------------- | ------------------------------------ |
| `npm run dev`        | Menjalankan development server        |
| `npm run build`      | Build aplikasi untuk produksi         |
| `npm run start`      | Menjalankan production server         |
| `npm run lint`       | Menjalankan linter                    |
| `npm run test`       | Menjalankan unit test (Vitest)        |
| `npm run test:e2e`   | Menjalankan end-to-end test (Playwright) |
| `npm run db:generate`| Generate Prisma Client                |
| `npm run db:push`    | Push schema Prisma ke database        |
| `npm run db:migrate` | Menjalankan migrasi database          |
| `npm run db:seed`    | Seed data awal ke database            |
| `npm run db:studio`  | Membuka Prisma Studio                 |

## Struktur Project

```
src/
├── app/              # Next.js app router
│   ├── (auth)/       # Halaman autentikasi
│   ├── (dashboard)/  # Halaman dashboard
│   └── api/          # API routes
├── components/       # React components
│   ├── ui/           # Reusable UI components
│   └── layout/       # Layout components
├── lib/              # Utilities dan konfigurasi
│   ├── validations/  # Zod schemas
│   └── dal/          # Data access layer
└── types/            # TypeScript type definitions
```

## Dokumentasi

- [API.md](./API.md) - Dokumentasi endpoint API
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Panduan deployment
- [MYSQL_SETUP.md](./MYSQL_SETUP.md) - Panduan setup database MySQL
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Panduan kontribusi
- [CHECKLIST.md](./CHECKLIST.md) - Checklist pengembangan dan status fitur

## Lisensi

Proyek ini menggunakan lisensi MIT.

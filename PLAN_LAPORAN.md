# Plan: Fitur Laporan & Rekap Bulanan

**Status:** Belum dimulai  
**Dibuat:** 2026-06-26  
**Prioritas:** Tinggi (next task)

---

## Tujuan

Membuat halaman laporan kehadiran bulanan yang menampilkan:
- Rekap per karyawan (hadir, terlambat, absen, izin, sakit, dinas) dalam satu bulan
- Statistik ringkasan (rate kehadiran, total hari kerja)
- Grafik visual (bar chart mingguan, pie chart distribusi status)
- Export ke Excel

---

## Sumber Data

| Model | Dipakai untuk |
|-------|--------------|
| `Presensi` | Status harian karyawan (PRESENT, LATE, ABSENT, PERMIT, SICK) |
| `LeaveRequest` | Fallback: jika tidak ada Presensi tapi ada izin APPROVED di tanggal itu |
| `User` | Daftar karyawan aktif |
| `LeaveBalance` | Saldo cuti (sudah ada, tidak perlu endpoint baru) |

**Logika penentuan status per hari:**
```
Untuk setiap hari kerja (Senin–Jumat) di bulan yang dipilih:
  1. Cari Presensi[userId][date] → jika ada, gunakan statusnya
  2. Jika tidak ada Presensi → cari LeaveRequest yang APPROVED dan mencakup tanggal itu:
     - SAKIT  → status = SICK
     - CUTI / IZIN / DINAS → status = PERMIT
  3. Jika tidak ada keduanya → status = ABSENT
```

---

## File yang Perlu Dibuat

### API Routes (baru)

```
src/app/api/reports/
├── summary/route.ts     ← Rekap semua karyawan (Admin/Manager)
└── monthly/route.ts     ← Detail per karyawan per hari
```

### Dashboard Page (baru)

```
src/app/(dashboard)/laporan/page.tsx
```

### Sidebar (diubah)

```
src/components/layout/sidebar.tsx  ← Tambah link /laporan untuk ADMIN/MANAGER
```

---

## Detail API

### GET /api/reports/summary

**Access:** ADMIN atau MANAGER  
**Query params:** `year` (int), `month` (int, 1–12)

**Response:**
```json
{
  "year": 2026,
  "month": 6,
  "workdays": 21,
  "employees": [
    {
      "userId": "...",
      "fullName": "Budi Santoso",
      "employeeId": "EMP001",
      "hadir": 15,
      "terlambat": 2,
      "absen": 2,
      "izin": 1,
      "sakit": 1,
      "dinas": 0,
      "rate": 90.5
    }
  ],
  "totals": {
    "hadir": 150,
    "terlambat": 20,
    "absen": 25,
    "izin": 10,
    "sakit": 8,
    "dinas": 3
  }
}
```

`rate` = (hadir + terlambat + izin + sakit + dinas) / workdays × 100  
(semua status kecuali ABSENT dihitung sebagai "hadir efektif")

---

### GET /api/reports/monthly

**Access:** ADMIN/MANAGER (semua user), EMPLOYEE (hanya diri sendiri)  
**Query params:** `year`, `month`, `userId` (opsional, default = session user)

**Response:**
```json
{
  "userId": "...",
  "fullName": "Budi Santoso",
  "year": 2026,
  "month": 6,
  "workdays": 21,
  "summary": { "hadir": 15, "terlambat": 2, "absen": 2, "izin": 1, "sakit": 1, "dinas": 0 },
  "days": [
    {
      "date": "2026-06-02",
      "dayName": "Senin",
      "status": "PRESENT",
      "checkIn": "08:05",
      "checkOut": "17:02",
      "leaveType": null
    },
    {
      "date": "2026-06-03",
      "dayName": "Selasa",
      "status": "LATE",
      "checkIn": "09:15",
      "checkOut": "17:00",
      "leaveType": null
    },
    {
      "date": "2026-06-09",
      "dayName": "Senin",
      "status": "PERMIT",
      "checkIn": null,
      "checkOut": null,
      "leaveType": "CUTI"
    }
  ]
}
```

---

## Detail Halaman `/laporan`

### Layout

```
[Laporan Kehadiran]          [Bulan: Juni ▼] [Tahun: 2026 ▼] [Export Excel]

┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ 21       │ │ 89.2%    │ │ 18       │ │ 12       │
│ Hari     │ │ Rata-rata│ │ Karyawan │ │ Total    │
│ Kerja    │ │ Kehadiran│ │ Aktif    │ │ Izin/Cuti│
└──────────┘ └──────────┘ └──────────┘ └──────────┘

┌─────────────────────────────┐ ┌──────────────────────┐
│  Bar Chart                  │ │  Pie Chart           │
│  Hadir vs Absen per Minggu  │ │  Distribusi Status   │
│  (Recharts BarChart)        │ │  (Recharts PieChart) │
└─────────────────────────────┘ └──────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│  Tabel Rekap Karyawan                         [🔍 Cari nama...]  │
├──────┬──────────┬───────┬──────────┬───────┬──────┬──────┬──────┤
│ No   │ Nama     │ Hadir │ Terlambat│ Absen │ Izin │Sakit │Rate% │
├──────┼──────────┼───────┼──────────┼───────┼──────┼──────┼──────┤
│  1   │ Budi S.  │  15   │    2     │   2   │  1   │  1   │ 90%  │
│  2   │ Sari W.  │  18   │    1     │   1   │  1   │  0   │ 95%  │
└──────┴──────────┴───────┴──────────┴───────┴──────┴──────┴──────┘

(klik baris → modal detail kalender karyawan tsb)
```

### Komponen yang Dipakai (sudah ada di project)
- `recharts` — BarChart, PieChart (sudah di package.json)
- `xlsx` — Export Excel (sudah di package.json)
- Komponen UI: Card, Button, Select, Badge, Dialog (semua sudah ada)

---

## Urutan Implementasi

### Step 1 — API `/api/reports/summary`
File: `src/app/api/reports/summary/route.ts`

```typescript
// Pseudocode
GET(req) {
  const { year, month } = searchParams  // e.g. 2026, 6
  const workdays = getWorkdaysInMonth(year, month)  // array of Date Mon–Fri
  const users = await prisma.user.findMany({ where: { status: "ACTIVE" } })
  
  for each user:
    for each workday:
      presensi = await findPresensi(user.id, date)
      if presensi → use presensi.status
      else → check approved LeaveRequest covering date → PERMIT/SICK
      else → ABSENT
    compute totals + rate
  
  return { workdays: workdays.length, employees: [...], totals: {...} }
}
```

Helper function `getWorkdaysInMonth(year, month)` → array of Date objects (Mon–Fri only).

### Step 2 — API `/api/reports/monthly`
File: `src/app/api/reports/monthly/route.ts`

Sama dengan summary tapi untuk 1 user, return per-day detail (status, checkIn, checkOut, leaveType).

### Step 3 — Halaman `/laporan`
File: `src/app/(dashboard)/laporan/page.tsx`

- State: `year`, `month`, `data` (summary response), `loading`, `search`, `selectedUser`
- `useEffect` → fetch `/api/reports/summary?year=X&month=Y` saat mount & saat year/month berubah
- Klik baris tabel → Dialog modal → fetch `/api/reports/monthly?userId=X&year=Y&month=Z`
- Export: gunakan `xlsx` untuk convert array employees ke sheet Excel

### Step 4 — Sidebar
Tambah link `/laporan` di sidebar untuk role ADMIN dan MANAGER (di bawah Monitoring).

---

## Catatan Teknis

- **Hari libur nasional** belum ada model. Untuk sekarang, hari kerja = Senin–Jumat saja.
- **Performance**: query per user per hari bisa berat jika karyawan banyak. Solusi: fetch semua Presensi bulan itu dalam 1 query, fetch semua LeaveRequest bulan itu dalam 1 query, lalu hitung di memory (tidak loop query per hari).
- **Export Excel** menggunakan library `xlsx` yang sudah ada di package.json.
- **Grafik** menggunakan `recharts` yang sudah ada di package.json.
- Tidak perlu schema Prisma baru — semua data sudah ada di model Presensi dan LeaveRequest.

---

## Checklist Implementasi

- [ ] Helper `getWorkdaysInMonth(year, month)` → array Date
- [ ] Helper `resolveStatus(presensi?, leaveRequests[])` → status string
- [ ] `GET /api/reports/summary` — rekap semua karyawan
- [ ] `GET /api/reports/monthly` — detail per karyawan per hari
- [ ] Halaman `/laporan` — summary cards, bar chart, pie chart, tabel
- [ ] Modal detail kalender per karyawan
- [ ] Export Excel di halaman laporan
- [ ] Tambah link "Laporan" di sidebar (ADMIN/MANAGER)
- [ ] Update `seed-menus.js` dan `API.md`

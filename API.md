# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication

Semua endpoint (kecuali endpoint auth) memerlukan autentikasi melalui session NextAuth.

### Headers
```
Cookie: authjs.session-token=<token>
```

---

## Authentication Endpoints

### Login / Logout (NextAuth)
```http
GET/POST /api/auth/[...nextauth]
```

Ditangani langsung oleh NextAuth (`signIn`, `signOut`, `session`, `callback`, dll). Gunakan helper `signIn()` / `signOut()` dari `next-auth/react` di sisi client.

### Register
```http
POST /api/auth/register
```

**Access:** Public

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "fullName": "User Name",
  "phoneNumber": "081234567890"
}
```

User baru dibuat dengan `role: EMPLOYEE` dan `status: PENDING` (perlu disetujui admin melalui endpoint Approvals).

**Response:** `201 Created`
```json
{
  "message": "User registered successfully",
  "userId": "user-id"
}
```

**Error:** `400` jika email sudah terdaftar atau validasi gagal.

---

## Users Endpoints

### Get All Users
```http
GET /api/users
```

**Access:**
- `ADMIN`: semua user
- `MANAGER`: semua user (read-only scope)
- `EMPLOYEE`: ditentukan oleh `getUserScope` (hanya diri sendiri)

**Response:**
```json
{
  "users": [
    {
      "id": "user-id",
      "email": "user@example.com",
      "fullName": "User Name",
      "phoneNumber": "081234567890",
      "employeeId": "EMP001",
      "role": "EMPLOYEE",
      "status": "ACTIVE"
    }
  ]
}
```

### Create User
```http
POST /api/users
```

**Access:** Admin only

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "fullName": "User Name",
  "phoneNumber": "081234567890",
  "role": "EMPLOYEE"
}
```

Jika `password` tidak diisi, default `"123456"` digunakan. Mengembalikan `409` jika email atau nomor telepon sudah dipakai.

### Get User by ID
```http
GET /api/users/:id
```

**Access:**
- `ADMIN`/`MANAGER`: dapat melihat user manapun
- `EMPLOYEE`: hanya profil sendiri

**Response:** objek user (tanpa field `password`).

### Update User
```http
PATCH /api/users/:id
```

**Access:**
- `ADMIN`: dapat mengubah user manapun termasuk `role`
- `EMPLOYEE`: hanya profil sendiri, field `role` diabaikan

**Request Body (partial):**
```json
{
  "fullName": "Updated Name",
  "phoneNumber": "081234567890",
  "password": "newpassword123"
}
```

### Delete User
```http
DELETE /api/users/:id
```

**Access:** Admin only

**Response:** `204 No Content`

---

## Profile Endpoints

### Get My Profile
```http
GET /api/profile
```

**Access:** User yang sedang login

**Response:**
```json
{
  "id": "user-id",
  "fullName": "User Name",
  "email": "user@example.com",
  "phoneNumber": "081234567890",
  "employeeId": "EMP001",
  "role": "EMPLOYEE",
  "status": "ACTIVE",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "_count": { "activities": 5 }
}
```

### Update My Profile
```http
PATCH /api/profile
```

**Access:** User yang sedang login

**Request Body:**
```json
{
  "fullName": "Updated Name",
  "phoneNumber": "081234567890"
}
```

### Change Password
```http
POST /api/profile/password
```

**Access:** User yang sedang login

**Request Body:**
```json
{
  "newPassword": "newpassword123",
  "confirmPassword": "newpassword123"
}
```

**Response:**
```json
{ "message": "Password berhasil diubah" }
```

---

## Approvals Endpoints

### Get Pending Users
```http
GET /api/approvals
```

**Access:** Admin only

Mengembalikan daftar user dengan `status: PENDING`.

### Approve / Reject User
```http
PATCH /api/approvals
```

**Access:** Admin only

**Request Body:**
```json
{
  "userId": "user-id",
  "action": "approve"
}
```

`action` bernilai `"approve"` (set `status: ACTIVE`) atau `"reject"` (hapus user).

**Response:**
```json
{ "success": true }
```

---

## Activities Endpoints

### Get Activities
```http
GET /api/activities
```

**Access:**
- `ADMIN`/`MANAGER`: melihat semua activity
- `EMPLOYEE`: hanya activity miliknya sendiri

**Response:**
```json
{
  "activities": [
    {
      "id": "activity-id",
      "title": "Training Session",
      "description": "Monthly training",
      "date": "2024-01-15T00:00:00.000Z",
      "location": "Meeting Room A",
      "flag": 0,
      "latitude": -6.2,
      "longitude": 106.8,
      "radius": 100,
      "isActive": true,
      "attendanceToken": "token",
      "user": { "fullName": "User Name", "email": "user@example.com" },
      "attendances": []
    }
  ]
}
```

### Create Activity
```http
POST /api/activities
```

**Access:** Semua user yang sudah login

**Request Body:**
```json
{
  "title": "New Activity",
  "description": "Activity description",
  "date": "2024-01-15",
  "location": "Location Name",
  "latitude": -6.2,
  "longitude": 106.8,
  "radius": 100,
  "flag": 0
}
```

### Get Activity by ID
```http
GET /api/activities/:id
```

**Access:** Public — termasuk relasi `user` dan `attendances`.

### Update Activity
```http
PATCH /api/activities/:id
```

**Access:** Admin atau pemilik activity

**Request Body (partial):** sama dengan field create, ditambah `isActive`, `latitude`, `longitude`, `radius`.

### Delete Activity
```http
DELETE /api/activities/:id
```

**Access:** Admin atau pemilik activity

**Response:** `204 No Content`

### Submit Attendance untuk Activity
```http
POST /api/activities/:id/attendance
```

**Access:** User yang sedang login

**Request Body:**
```json
{
  "latitude": -6.2,
  "longitude": 106.8
}
```

Logika:
- Activity harus `isActive`
- Jika activity punya koordinat, lokasi user diverifikasi terhadap `radius` (geofencing Haversine)
- Jika user sudah pernah absen, mengembalikan `alreadyAttended: true`
- Status attendance: `ON_TIME` atau `LATE` berdasarkan `activity.date`

**Response:**
```json
{ "message": "Terimakasih atas kedatangannya, anda Tiba pukul 08:00. Tepat waktu." }
```

---

## My Attendance Endpoint

### Get My Attendance History
```http
GET /api/my-attendance
```

**Access:**
- `EMPLOYEE`: hanya attendance miliknya sendiri
- `ADMIN`/`MANAGER`: seluruh attendance

**Response:**
```json
{
  "attendances": [
    {
      "id": "attendance-id",
      "status": "ON_TIME",
      "timestamp": "2024-01-15T08:00:00.000Z",
      "activity": {
        "title": "Training Session",
        "date": "2024-01-15T00:00:00.000Z",
        "location": "Meeting Room A"
      }
    }
  ]
}
```

---

## Izin (Leave Management) Endpoints

### Get Leave Requests
```http
GET /api/izin
```

**Access:**
- `ADMIN`/`MANAGER`: semua pengajuan izin
- `EMPLOYEE`: hanya pengajuan milik sendiri

**Query Parameters (opsional):**
- `status` — filter berdasarkan status: `PENDING`, `APPROVED`, `REJECTED`, `CANCELLED`
- `userId` — filter berdasarkan user (hanya untuk Admin/Manager)

**Response:**
```json
[
  {
    "id": "leave-id",
    "type": "CUTI",
    "startDate": "2024-02-01T00:00:00.000Z",
    "endDate": "2024-02-05T00:00:00.000Z",
    "reason": "Liburan keluarga",
    "status": "PENDING",
    "approverNote": null,
    "user": { "id": "...", "fullName": "User Name", "email": "...", "employeeId": "EMP001" },
    "approvedBy": null,
    "createdAt": "2024-01-20T10:00:00.000Z"
  }
]
```

### Create Leave Request
```http
POST /api/izin
```

**Access:** Semua user yang sudah login

**Request Body:**
```json
{
  "type": "CUTI",
  "startDate": "2024-02-01",
  "endDate": "2024-02-05",
  "reason": "Liburan keluarga"
}
```

Tipe izin yang valid: `CUTI` (Cuti Tahunan), `SAKIT`, `DINAS`, `IZIN` (Izin Pribadi).

Validasi:
- `startDate` tidak boleh lebih besar dari `endDate`
- Tidak boleh tumpang tindih dengan pengajuan lain yang masih `PENDING` atau `APPROVED`
- Jika tipe `CUTI`, saldo cuti tahun berjalan harus mencukupi

**Response:** `201 Created` — objek `LeaveRequest` yang dibuat.

**Error:** `400` validasi gagal, `409` tumpang tindih tanggal.

### Get Leave Request by ID
```http
GET /api/izin/:id
```

**Access:** Pemilik request, Admin, atau Manager

### Update Leave Request Status
```http
PATCH /api/izin/:id
```

**Access:**
- `ADMIN`/`MANAGER`: approve atau reject (hanya status `PENDING`)
- Pemilik: cancel (hanya status `PENDING`)

**Request Body:**
```json
{
  "action": "approve",
  "approverNote": "Disetujui. Selamat berlibur."
}
```

`action` bernilai `"approve"`, `"reject"`, atau `"cancel"`. `approverNote` opsional.

Ketika `CUTI` disetujui, `usedDays` pada `LeaveBalance` otomatis bertambah sesuai jumlah hari kerja.

**Response:** objek `LeaveRequest` yang diperbarui.

### Delete Leave Request
```http
DELETE /api/izin/:id
```

**Access:** Pemilik (hanya status `PENDING`) atau Admin

**Response:** `204 No Content`

### Get Leave Balance
```http
GET /api/izin/balance
```

**Access:** Semua user yang sudah login

**Query Parameters (opsional):**
- `year` — tahun yang diminta (default: tahun berjalan)
- `userId` — target user (hanya Admin/Manager)

**Response:**
```json
{
  "id": "balance-id",
  "userId": "user-id",
  "year": 2024,
  "totalDays": 12,
  "usedDays": 3,
  "remaining": 9
}
```

Jika record belum ada, otomatis dibuat dengan kuota default 12 hari.

---

## Master Data Endpoints

### Access Matrix

#### Get Menu & Access Matrix
```http
GET /api/master/access-matrix
```

**Access:** Semua user yang sudah login

Mengembalikan daftar `Menu` beserta relasi `accesses` (`RoleAccess` per role).

#### Update Role Access
```http
POST /api/master/access-matrix
```

**Access:** Admin only

**Request Body:**
```json
{
  "role": "MANAGER",
  "menuId": "menu-id",
  "canAccess": true
}
```

`role` salah satu dari `ADMIN`, `MANAGER`, `EMPLOYEE`.

### Seed Default Menus
```http
GET /api/seed-menus
```

**Access:** Tidak ada pengecekan session (utility endpoint)

Melakukan upsert daftar menu default ke tabel `Menu`.

---

## Application Config Endpoint

### Get Config
```http
GET /api/config?key=<key>
```

**Access:**
- Dengan parameter `key`: semua user yang login
- Tanpa parameter `key`: Admin only

### Upsert Config
```http
POST /api/config
```

**Access:** Admin only

**Request Body:**
```json
{
  "key": "app_name",
  "value": "AttendIQ",
  "description": "Nama aplikasi"
}
```

---

## Error Responses

| Status | Keterangan |
|--------|-----------|
| `400 Bad Request` | Validasi gagal (Zod), mengembalikan array `errors` atau pesan tunggal |
| `401 Unauthorized` | Tidak ada session aktif |
| `403 Forbidden` | Role tidak memiliki izin akses |
| `404 Not Found` | Resource tidak ditemukan |
| `409 Conflict` | Duplikasi data (email/telepon sudah dipakai, atau tanggal izin tumpang tindih) |
| `500 Internal Server Error` | Kesalahan server |

---

## Catatan

- Tidak ada rate limiting yang diimplementasikan saat ini.
- Endpoint list (`/api/activities`, `/api/izin`, `/api/users`, `/api/approvals`) belum mendukung pagination — semua data dikembalikan dalam satu response.
- Geofencing check-in menggunakan formula Haversine untuk menghitung jarak koordinat.
- Saldo cuti (`LeaveBalance`) hanya berlaku untuk tipe `CUTI`; tipe lain (`SAKIT`, `DINAS`, `IZIN`) tidak dibatasi kuota.

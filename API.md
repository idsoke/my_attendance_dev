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

User baru dibuat dengan `role: USER` dan `status: PENDING` (perlu disetujui admin melalui endpoint Approvals).

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

**Access:** Sesuai scope (Admin: semua; Editor: dalam UPA-nya; User: ditentukan oleh `getUserScope`)

**Response:**
```json
{
  "users": [
    {
      "id": "user-id",
      "email": "user@example.com",
      "fullName": "User Name",
      "phoneNumber": "081234567890",
      "role": "USER",
      "status": "ACTIVE",
      "jenjang": { "id": "jenjang-id", "name": "Junior" },
      "upa": { "id": "upa-id", "name": "UPA Jakarta" }
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
  "role": "USER",
  "upaId": "upa-id",
  "jenjangId": "jenjang-id"
}
```

Jika `password` tidak diisi, default `"123456"` digunakan. Mengembalikan `409` jika email atau nomor telepon sudah dipakai.

### Get User by ID
```http
GET /api/users/:id
```

**Access:**
- Admin: dapat melihat user manapun
- Editor: dapat melihat user dalam UPA yang sama
- User: hanya profil sendiri

**Response:** objek user (tanpa field `password`) beserta relasi `upa` dan `jenjang`.

### Update User
```http
PATCH /api/users/:id
```

**Access:**
- Admin: dapat mengubah user manapun, termasuk `role`, `upaId`, `jenjangId`
- User: hanya profil sendiri, field `role`/`upaId`/`jenjangId` akan diabaikan jika bukan admin

**Request Body (partial):**
```json
{
  "fullName": "Updated Name",
  "phoneNumber": "081234567890",
  "password": "newpassword123"
}
```

Mengembalikan `409` jika email/nomor telepon baru sudah dipakai user lain.

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
  "role": "USER",
  "status": "ACTIVE",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "upa": { "name": "UPA Jakarta", "location": "Jakarta" },
  "jenjang": { "name": "Junior", "description": "Junior Level" },
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

Mengembalikan daftar user dengan `status: PENDING` (beserta relasi `jenjang` dan `upa`).

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
- Admin: melihat semua activity
- Editor: melihat activity dalam UPA-nya
- User: hanya activity miliknya sendiri

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
      "upa": { "name": "UPA Jakarta" },
      "attendances": []
    }
  ]
}
```

### Create Activity
```http
POST /api/activities
```

**Access:** Semua user yang sudah login dan memiliki `upaId`

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

Activity dibuat dengan `userId` dan `upaId` dari session yang sedang login.

### Get Activity by ID
```http
GET /api/activities/:id
```

**Access:** Public (tidak ada pengecekan session) — termasuk relasi `user`, `upa`, dan `attendances`.

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
- Jika activity punya `latitude`/`longitude`, lokasi user diverifikasi terhadap `radius` (geofencing, dihitung dengan formula Haversine)
- Jika user sudah pernah absen, mengembalikan `alreadyAttended: true` beserta pesan status
- Jika belum, attendance dibuat dengan status `ON_TIME` atau `LATE` (dibandingkan terhadap `activity.date`)

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
- User: hanya attendance miliknya sendiri
- Admin: melihat seluruh attendance (termasuk data user)

**Response:**
```json
{
  "attendances": [
    {
      "id": "attendance-id",
      "status": "ON_TIME",
      "timestamp": "2024-01-15T08:00:00.000Z",
      "activity": { "title": "Training Session", "date": "2024-01-15T00:00:00.000Z", "location": "Meeting Room A" }
    }
  ]
}
```

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
  "role": "EDITOR",
  "menuId": "menu-id",
  "canAccess": true
}
```

`role` salah satu dari `ADMIN`, `EDITOR`, `USER`, `PENGGUNA`, `SEKRETARIS`.

### Seed Default Menus
```http
GET /api/seed-menus
```

**Access:** Tidak ada pengecekan session (utility endpoint)

Melakukan upsert daftar menu default (`Dashboard`, `Kegiatan`, `Anggota`, `Jenjang`, `DPC`, `Pertanyaan`, `Kata`, `Access Matrix`) ke tabel `Menu`.

---

## Application Config Endpoint

### Get Config
```http
GET /api/config?key=<key>
```

**Access:**
- Dengan parameter `key`: semua user yang login (mengembalikan satu config atau `null`)
- Tanpa parameter `key`: Admin only (mengembalikan semua config)

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

### 401 Unauthorized
```
Unauthorized
```
Sebagian besar route mengembalikan plain text, beberapa (`/api/profile`, `/api/auth/register`, dll) mengembalikan JSON `{ "error": "..." }`.

### 403 Forbidden
```
Forbidden
```

### 404 Not Found
```
Not Found
```

### 400 Bad Request
Validasi gagal (Zod), mengembalikan array `errors` atau pesan tunggal tergantung route.

### 409 Conflict
Digunakan oleh `/api/users` dan `/api/users/:id` saat email atau nomor telepon sudah terdaftar.

### 500 Internal Server Error
```
Internal Server Error
```

---

## Catatan

- Tidak ada rate limiting yang diimplementasikan saat ini.
- Endpoint list (`/api/activities`, `/api/my-attendance`, `/api/users`, `/api/approvals`) belum mendukung pagination — semua data dikembalikan dalam satu response.
- **Diketahui rusak:** halaman `src/app/(dashboard)/master/upa/page.tsx` dan `master/jenjang/page.tsx` memanggil `/api/master/upas` dan `/api/master/jenjangs`, tetapi route tersebut tidak ada di `src/app/api/master/`. CRUD UPA dan Jenjang lewat dashboard saat ini akan menghasilkan 404.

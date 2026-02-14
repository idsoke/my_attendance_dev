# MySQL Setup Instructions

## Perubahan yang Dilakukan:

1. ✅ Prisma schema diubah dari PostgreSQL ke MySQL
2. ✅ .env.example diupdate dengan MySQL connection string

## Langkah-langkah Setup:

### 1. Update File .env

Buat atau update file `.env` dengan konfigurasi berikut:

```env
# Database - MySQL Configuration
DATABASE_URL="mysql://root:@localhost:3306/monitoring_db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here-change-this-in-production"
NEXTAUTH_URL="http://localhost:3000"
```

**Format MySQL Connection String:**
```
mysql://USER:PASSWORD@HOST:PORT/DATABASE
```

Untuk konfigurasi Anda:
- User: `root`
- Password: (kosong)
- Host: `localhost`
- Port: `3306`
- Database: `monitoring_db`

### 2. Pastikan MySQL Server Berjalan

Pastikan MySQL server sudah running di komputer Anda.

**Cek status MySQL:**
```bash
# Windows (jika menggunakan XAMPP)
# Buka XAMPP Control Panel dan start MySQL

# Atau via command line
mysql -u root -p
# (tekan Enter saat diminta password karena kosong)
```

### 3. Buat Database

```sql
CREATE DATABASE monitoring_db;
```

Atau via command line:
```bash
mysql -u root -e "CREATE DATABASE monitoring_db;"
```

### 4. Generate Prisma Client

```bash
npm run db:generate
```

### 5. Push Schema ke Database

```bash
npm run db:push
```

Atau jika ingin menggunakan migrations:
```bash
npm run db:migrate
```

### 6. Seed Database

```bash
npm run db:seed
```

### 7. Jalankan Aplikasi

```bash
npm run dev
```

## Troubleshooting

### Error: "Can't connect to MySQL server"

**Solusi:**
1. Pastikan MySQL server running
2. Cek apakah port 3306 sudah digunakan
3. Pastikan user `root` bisa login tanpa password

### Error: "Database does not exist"

**Solusi:**
```bash
mysql -u root -e "CREATE DATABASE monitoring_db;"
```

### Error: "Access denied for user 'root'@'localhost'"

**Solusi:**
Jika root memerlukan password, update DATABASE_URL:
```env
DATABASE_URL="mysql://root:your_password@localhost:3306/monitoring_db"
```

### Reset Database

Jika ingin reset database:
```bash
# Drop database
mysql -u root -e "DROP DATABASE monitoring_db;"

# Create database
mysql -u root -e "CREATE DATABASE monitoring_db;"

# Push schema
npm run db:push

# Seed data
npm run db:seed
```

## Perbedaan MySQL vs PostgreSQL

### Yang Berubah:
- ✅ Provider di schema.prisma
- ✅ Connection string format
- ✅ Default port (3306 vs 5432)

### Yang Tetap Sama:
- ✅ Semua model dan relasi
- ✅ Semua API endpoints
- ✅ Semua fitur aplikasi
- ✅ Seed data

## Verifikasi Setup

Setelah setup, verifikasi dengan:

1. **Cek database:**
```bash
mysql -u root monitoring_db -e "SHOW TABLES;"
```

2. **Cek data:**
```bash
mysql -u root monitoring_db -e "SELECT * FROM User;"
```

3. **Atau gunakan Prisma Studio:**
```bash
npm run db:studio
```

## Next Steps

Setelah setup berhasil:
1. ✅ Login ke aplikasi dengan test credentials
2. ✅ Test semua fitur
3. ✅ Mulai development

## Test Credentials

```
Admin:  admin@example.com  / admin123
Editor: editor@example.com / editor123
User:   user@example.com   / user123
```

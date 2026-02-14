# Deployment Guide

## Prerequisites

- PostgreSQL database (dapat menggunakan Supabase, Railway, atau Neon)
- Node.js 18+
- Platform hosting (Vercel, Railway, atau lainnya)

## Environment Variables

Pastikan semua environment variables berikut sudah diset:

```env
DATABASE_URL="postgresql://user:password@host:5432/database"
NEXTAUTH_SECRET="generate-random-secret-key"
NEXTAUTH_URL="https://your-domain.com"
```

### Generate NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

## Deployment ke Vercel

1. Push code ke GitHub repository

2. Import project di Vercel:
   - Buka [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Pilih repository Anda

3. Configure environment variables di Vercel dashboard

4. Deploy!

5. Setelah deploy, jalankan migration:
```bash
npx prisma migrate deploy
```

6. Seed database (optional):
```bash
npm run db:seed
```

## Deployment ke Railway

1. Push code ke GitHub repository

2. Create new project di Railway:
   - Buka [railway.app](https://railway.app)
   - Click "New Project"
   - Pilih "Deploy from GitHub repo"

3. Add PostgreSQL database:
   - Click "New"
   - Pilih "Database"
   - Pilih "PostgreSQL"

4. Configure environment variables

5. Deploy akan otomatis berjalan

## Database Migration

### Production Migration

```bash
npx prisma migrate deploy
```

### Rollback Migration

```bash
npx prisma migrate resolve --rolled-back <migration-name>
```

## Health Checks

Pastikan endpoint berikut berfungsi:
- `/` - Homepage
- `/api/health` - Health check endpoint (buat jika diperlukan)
- `/login` - Login page

## Monitoring

- Setup error tracking (Sentry, LogRocket, dll)
- Monitor database performance
- Setup uptime monitoring

## Backup

Pastikan backup database secara regular:
- Automated daily backups
- Manual backup sebelum migration
- Test restore procedure

## Security Checklist

- [ ] NEXTAUTH_SECRET menggunakan random string yang kuat
- [ ] DATABASE_URL tidak di-commit ke repository
- [ ] HTTPS enabled
- [ ] Rate limiting configured
- [ ] CORS configured dengan benar
- [ ] SQL injection protection (Prisma handles this)
- [ ] XSS protection
- [ ] CSRF protection (NextAuth handles this)

## Performance Optimization

- Enable caching
- Optimize database queries
- Use CDN untuk static assets
- Enable compression
- Optimize images

## Troubleshooting

### Database Connection Issues
```bash
# Test database connection
npx prisma db pull
```

### Migration Issues
```bash
# Reset database (CAUTION: deletes all data)
npx prisma migrate reset

# Generate new migration
npx prisma migrate dev --name migration-name
```

### Build Issues
```bash
# Clear cache
rm -rf .next
npm run build
```

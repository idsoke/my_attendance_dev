import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const bcrypt = require('bcryptjs')
const { PrismaClient } = require('./src/lib/generated/client/index.js')

const prisma = new PrismaClient()

async function main() {
  const [adminPw, managerPw, userPw] = await Promise.all([
    bcrypt.hash('admin123', 10),
    bcrypt.hash('manager123', 10),
    bcrypt.hash('user123', 10),
  ])

  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: { email: 'admin@example.com', password: adminPw, fullName: 'Administrator', role: 'ADMIN', status: 'ACTIVE' },
  })

  await prisma.user.upsert({
    where: { email: 'manager@example.com' },
    update: {},
    create: { email: 'manager@example.com', password: managerPw, fullName: 'Manager Demo', role: 'MANAGER', status: 'ACTIVE' },
  })

  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: { email: 'user@example.com', password: userPw, fullName: 'Employee Demo', role: 'EMPLOYEE', status: 'ACTIVE' },
  })

  console.log('✅ 3 demo users created')
  await prisma.$disconnect()
}

main().catch(e => { console.error(e); process.exit(1) })

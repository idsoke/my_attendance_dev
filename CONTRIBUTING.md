# Contributing to Monitoring App

Terima kasih atas minat Anda untuk berkontribusi! 🎉

## Getting Started

1. Fork repository ini
2. Clone fork Anda:
   ```bash
   git clone https://github.com/your-username/monitoring-app.git
   cd monitoring-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Setup database dan environment variables (lihat README.md)
5. Generate Prisma Client:
   ```bash
   npm run db:generate
   ```
6. Push database schema:
   ```bash
   npm run db:push
   ```
7. Seed database:
   ```bash
   npm run db:seed
   ```

## Development Workflow

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Run tests:
   ```bash
   npm run test
   npm run test:e2e
   ```

4. Run linter:
   ```bash
   npm run lint
   ```

5. Commit your changes:
   ```bash
   git commit -m "feat: add new feature"
   ```

6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

7. Create a Pull Request

## Commit Convention

Kami menggunakan [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Contoh:
```
feat: add user profile page
fix: resolve login redirect issue
docs: update API documentation
```

## Code Style

- Gunakan TypeScript untuk semua file baru
- Follow ESLint rules
- Use Prettier untuk formatting
- Gunakan meaningful variable names
- Tambahkan comments untuk logic yang kompleks

## Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
Pastikan test coverage tetap tinggi untuk code baru.

## Pull Request Guidelines

1. **Title**: Gunakan conventional commit format
2. **Description**: 
   - Jelaskan apa yang diubah dan mengapa
   - Link ke issue terkait jika ada
   - Tambahkan screenshots untuk UI changes
3. **Tests**: Pastikan semua tests pass
4. **Documentation**: Update dokumentasi jika diperlukan

## Project Structure

```
src/
├── app/              # Next.js app router
│   ├── (auth)/      # Auth pages
│   ├── (dashboard)/ # Dashboard pages
│   └── api/         # API routes
├── components/      # React components
│   ├── ui/         # Reusable UI components
│   └── layout/     # Layout components
├── lib/            # Utilities and configurations
│   ├── validations/ # Zod schemas
│   └── dal/        # Data access layer
└── types/          # TypeScript type definitions
```

## Adding New Features

### 1. API Endpoint
```typescript
// src/app/api/your-endpoint/route.ts
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const session = await auth()
  if (!session?.user) {
    return new NextResponse("Unauthorized", { status: 401 })
  }
  
  // Your logic here
  
  return NextResponse.json({ data: "your data" })
}
```

### 2. Validation Schema
```typescript
// src/lib/validations/your-schema.ts
import { z } from "zod"

export const yourSchema = z.object({
  field: z.string().min(1, "Field is required"),
})
```

### 3. Component
```typescript
// src/components/YourComponent.tsx
"use client"

import { useState } from "react"

export function YourComponent() {
  const [state, setState] = useState("")
  
  return (
    <div>
      {/* Your component */}
    </div>
  )
}
```

### 4. Page
```typescript
// src/app/(dashboard)/your-page/page.tsx
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function YourPage() {
  const session = await auth()
  if (!session?.user) {
    redirect("/login")
  }
  
  return (
    <div>
      {/* Your page */}
    </div>
  )
}
```

## Database Changes

1. Update Prisma schema:
   ```prisma
   // prisma/schema.prisma
   model YourModel {
     id String @id @default(cuid())
     // fields
   }
   ```

2. Create migration:
   ```bash
   npm run db:migrate
   ```

3. Update seed file jika diperlukan:
   ```typescript
   // prisma/seed.ts
   ```

## Questions?

Jika ada pertanyaan, silakan:
- Open an issue
- Join our Discord (jika ada)
- Email maintainer

## Code of Conduct

- Be respectful
- Be constructive
- Help others
- Follow the guidelines

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

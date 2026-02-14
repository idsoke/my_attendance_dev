import { Role } from "@prisma/client"
import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            role: Role
            fullName: string
            upaId?: string | null
            jenjangId?: string | null
        } & DefaultSession["user"]
    }

    interface User {
        role: Role
        fullName: string
        upaId?: string | null
        jenjangId?: string | null
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string
        role: Role
        fullName: string
        upaId?: string | null
        jenjangId?: string | null
    }
}

import { prisma } from "@/lib/prisma"
import { Role } from "@prisma/client"
import { cache } from "react"

// Cached function to get current user session data
// In a real app, you might pass the session user object directly
export const getUserScope = (user: { role: Role; upaId?: string | null; id: string }) => {
    if (user.role === "ADMIN") {
        return {} // No filter
    }

    if (user.role === "EDITOR") {
        // Editor sees data within their UPA (if assigned) or Jenjang (if assigned)
        // For simplicity, let's assume Editor is bound by UPA
        if (user.upaId) {
            return { upaId: user.upaId }
        }
        // Fallback: If Editor has no UPA, treat as regular user (see self only)
        return { id: user.id }
    }

    if (user.role === "USER") {
        // User sees only their own data or their UPA's data if they are "Pembimbing"
        // But for "User Management" list, usually they don't see others unless Pembimbing
        // Let's assume standard User only sees themselves
        return { id: user.id }
    }

    return { id: user.id } // Default fallback
}

export const getUsers = async (currentUser: { role: Role; upaId?: string | null; id: string }) => {
    const where = getUserScope(currentUser)

    return await prisma.user.findMany({
        where,
        include: {
            upa: true,
            jenjang: true,
        },
        orderBy: { createdAt: "desc" },
    })
}

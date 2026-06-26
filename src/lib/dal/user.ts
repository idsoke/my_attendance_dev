import { prisma } from "@/lib/prisma"
// @ts-ignore
import { Role } from "@/lib/generated/client"

// Cached function to get current user session data
// In a real app, you might pass the session user object directly
export const getUserScope = (user: { role: Role; id: string }) => {
    if (user.role === "ADMIN" || user.role === "MANAGER") {
        return {} // No filter
    }

    // EMPLOYEE sees only their own data
    return { id: user.id }
}

export const getUsers = async (currentUser: { role: Role; id: string }) => {
    const where = getUserScope(currentUser)

    return await prisma.user.findMany({
        where,
        orderBy: { createdAt: "desc" },
    })
}

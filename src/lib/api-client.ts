import { signOut } from "next-auth/react"

export async function apiClient(url: string, options?: RequestInit) {
    const response = await fetch(url, options)

    if (response.status === 401) {
        await signOut({ callbackUrl: "/login" })
        throw new Error("Session expired")
    }

    return response
}

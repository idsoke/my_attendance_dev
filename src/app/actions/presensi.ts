'use server'

import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getTodayPresensi() {
    const session = await auth()
    if (!session?.user?.id) return null

    // Find open check-in (no checkout yet) OR most recent today
    // Don't rely on @db.Date range comparison (timezone-sensitive)
    const latest = await prisma.presensi.findFirst({
        where: { userId: session.user.id },
        orderBy: { checkIn: 'desc' },
    })

    if (!latest) return null

    // Compare date using UTC date string to avoid timezone issues
    const todayUTC = new Date().toISOString().slice(0, 10) // "YYYY-MM-DD" UTC
    const recordUTC = new Date(latest.date).toISOString().slice(0, 10)

    if (recordUTC !== todayUTC) return null
    return latest
}

export async function checkInAction(lat: string, lng: string, photo: string, notes?: string) {
    const session = await auth()
    if (!session?.user?.id) throw new Error("Unauthorized")

    // Check for any open (unchecked-out) attendance
    const openPresensi = await prisma.presensi.findFirst({
        where: { userId: session.user.id, checkIn: { not: null }, checkOut: null },
        orderBy: { checkIn: 'desc' },
    })
    if (openPresensi) {
        return { success: false, message: "Anda sudah absen masuk hari ini." }
    }

    try {
        const now = new Date()
        await prisma.presensi.create({
            data: {
                userId: session.user.id,
                date: now,
                checkIn: now,
                locationIn: lat && lng ? `${lat},${lng}` : null,
                photoIn: photo || null,
                status: "PRESENT",
                notes: notes,
            },
        })
        revalidatePath("/dashboard")
        return { success: true, message: "Berhasil absen masuk!" }
    } catch (error: any) {
        if (error?.code === 'P2002') {
            return { success: false, message: "Anda sudah absen hari ini." }
        }
        console.error("Check-in error:", error)
        return { success: false, message: "Gagal absen masuk. Silakan coba lagi." }
    }
}

export async function checkOutAction(lat: string, lng: string) {
    const session = await auth()
    if (!session?.user?.id) throw new Error("Unauthorized")

    // Find any open check-in for this user (not limited to today — handles timezone edge cases)
    const existing = await prisma.presensi.findFirst({
        where: { userId: session.user.id, checkIn: { not: null }, checkOut: null },
        orderBy: { checkIn: 'desc' },
    })

    if (!existing) {
        return { success: false, message: "Anda belum absen masuk." }
    }

    try {
        await prisma.presensi.update({
            where: { id: existing.id },
            data: {
                checkOut: new Date(),
                locationOut: lat && lng ? `${lat},${lng}` : null,
            },
        })
        revalidatePath("/dashboard")
        return { success: true, message: "Berhasil absen pulang!" }
    } catch (error) {
        console.error("Check-out error:", error)
        return { success: false, message: "Gagal absen pulang." }
    }
}

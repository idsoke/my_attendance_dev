'use server'

import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getTodayPresensi() {
    const session = await auth()
    if (!session?.user?.id) return null

    const today = new Date()
    const startOfDay = new Date(today)
    startOfDay.setHours(0, 0, 0, 0)

    const endOfDay = new Date(today)
    endOfDay.setHours(23, 59, 59, 999)

    // Using findFirst because unique constraint is on [userId, date]
    // Note: With @db.Date, exact match logic depends on Prisma provider (MySQL here).
    // Using range covers most cases safely.
    const presensi = await prisma.presensi.findFirst({
        where: {
            userId: session.user.id,
            date: {
                gte: startOfDay,
                lte: endOfDay
            }
        }
    })
    return presensi
}

export async function checkInAction(lat: string, lng: string, photo: string, notes?: string) {
    const session = await auth()
    if (!session?.user?.id) throw new Error("Unauthorized")

    const existing = await getTodayPresensi()
    if (existing) {
        throw new Error("Anda sudah absen masuk hari ini.")
    }

    try {
        await prisma.presensi.create({
            data: {
                userId: session.user.id,
                date: new Date(),
                checkIn: new Date(),
                locationIn: `${lat},${lng}`,
                photoIn: photo,
                status: "PRESENT",
                notes: notes
            }
        })
        revalidatePath("/dashboard")
        return { success: true, message: "Berhasil absen masuk!" }
    } catch (error) {
        console.error("Check-in error:", error)
        return { success: false, message: "Gagal absen masuk. Silakan coba lagi." }
    }
}

export async function checkOutAction(lat: string, lng: string, photo: string, notes?: string) {
    const session = await auth()
    if (!session?.user?.id) throw new Error("Unauthorized")

    const existing = await getTodayPresensi()
    if (!existing) {
        throw new Error("Anda belum absen masuk.")
    }

    if (existing.checkOut) {
        throw new Error("Anda sudah absen pulang hari ini.")
    }

    try {
        await prisma.presensi.update({
            where: { id: existing.id },
            data: {
                checkOut: new Date(),
                locationOut: `${lat},${lng}`,
                photoOut: photo,
                notes: notes ? (existing.notes ? `${existing.notes}\nPulang: ${notes}` : `Pulang: ${notes}`) : existing.notes
            }
        })
        revalidatePath("/dashboard")
        return { success: true, message: "Berhasil absen pulang!" }
    } catch (error) {
        console.error("Check-out error:", error)
        return { success: false, message: "Gagal absen pulang." }
    }
}

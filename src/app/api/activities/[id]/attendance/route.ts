import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        let body: any = {}
        try { body = await req.json() } catch (e) { }

        const session = await auth()
        if (!session || !session.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const activityId = id
        const userId = session.user.id

        // Check if activity exists
        const activity = await prisma.activity.findUnique({ where: { id: activityId } })
        if (!activity) {
            return NextResponse.json({ error: "Kegiatan tidak ditemukan" }, { status: 404 })
        }

        // Check if active
        if (!activity.isActive) {
            return NextResponse.json({ error: "Maaf, kegiatan ini sudah tidak aktif / absensi ditutup." }, { status: 400 })
        }

        // Geofencing Check
        if (activity.latitude && activity.longitude) {
            const userLat = body.latitude
            const userLng = body.longitude

            if (!userLat || !userLng) {
                return NextResponse.json({ error: "Lokasi tidak terdeteksi. Harap izinkan akses lokasi di browser anda." }, { status: 400 })
            }

            const R = 6371e3 // metres
            const φ1 = activity.latitude * Math.PI / 180
            const φ2 = userLat * Math.PI / 180
            const Δφ = (userLat - activity.latitude) * Math.PI / 180
            const Δλ = (userLng - activity.longitude) * Math.PI / 180

            const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            const d = R * c // in meters

            if (d > activity.radius) {
                return NextResponse.json({
                    error: `Anda berada di luar radius lokasi kegiatan (${Math.round(d)}m). Maksimum ${activity.radius}m.`
                }, { status: 400 })
            }
        }

        // Check if already attended
        const existing = await prisma.attendance.findUnique({
            where: {
                userId_activityId: {
                    userId,
                    activityId
                }
            }
        })

        if (existing) {
            const originalTime = new Date(existing.timestamp)
            const activityDate = new Date(activity.date)
            const diffMs = originalTime.getTime() - activityDate.getTime()
            const diffMins = Math.floor(diffMs / 60000)

            let msg = "Anda sudah melakukan absensi sebelumnya."
            if (diffMins > 0) {
                msg += ` Status: Telat ${diffMins} menit.`
            } else {
                msg += ` Status: Tepat Waktu.`
            }

            return NextResponse.json({ message: msg, alreadyAttended: true })
        }

        // Calculate time diff
        const now = new Date()
        const activityDate = new Date(activity.date)
        const diffMs = now.getTime() - activityDate.getTime()
        const diffMins = Math.floor(diffMs / 60000)

        let message = ""
        let status = "ON_TIME"

        const timeString = now.toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' })

        if (diffMins > 0) {
            status = "LATE"
            message = `Terimakasih atas kedatangannya, anda Tiba pukul ${timeString}. Telat ${diffMins} menit.`
        } else {
            message = `Terimakasih atas kedatangannya, anda Tiba pukul ${timeString}. Tepat waktu.`
        }

        await prisma.attendance.create({
            data: {
                userId,
                activityId,
                status,
                timestamp: now
            }
        })

        return NextResponse.json({ message })
    } catch (error) {
        console.error("Attendance error:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

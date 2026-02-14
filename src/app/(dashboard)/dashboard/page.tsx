import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building2, UserCheck, Shield } from "lucide-react"
import { redirect } from "next/navigation"
import { AttendanceCard } from "@/components/dashboard/attendance-card"
import { getTodayPresensi } from "@/app/actions/presensi"

export default async function DashboardPage() {
    const session = await auth()
    if (!session?.user) redirect("/login")

    const todayPresensi = await getTodayPresensi()

    // Serialize Dates for Client Component
    const formattedPresensi = todayPresensi ? {
        ...todayPresensi,
        checkIn: todayPresensi.checkIn?.toISOString() ?? null,
        checkOut: todayPresensi.checkOut?.toISOString() ?? null,
        status: todayPresensi.status
    } : null

    // Fetch real stats only if needed (for MVP, let's just fetch for everyone or check role)
    // Assume all roles visible for now to show "richness", but hide edit controls if any.
    // Or strictly check admin.
    const isAdmin = session.user.role === 'ADMIN'

    let stats = { upaCount: 0, totalUsers: 0, activeUsers: 0 }

    if (isAdmin) {
        const [upaCount, totalUsers, activeUsers] = await Promise.all([
            prisma.upa.count(),
            prisma.user.count({ where: { role: { not: "ADMIN" } } }),
            prisma.user.count({ where: { status: "ACTIVE", role: { not: "ADMIN" } } })
        ])
        stats = { upaCount, totalUsers, activeUsers }
    }

    return (
        <div className="space-y-8">

            {/* Employee Attendance Section */}
            <div className="w-full flex justify-center py-4 min-h-[80vh] items-center">
                <AttendanceCard
                    data={formattedPresensi}
                    user={{ name: session.user.name ?? "Karyawan", role: session.user.role }}
                />
            </div>

            {isAdmin && (
                <div className="text-center opacity-50 text-sm pb-10">
                    Admin Mode Active
                </div>
            )}
        </div>
    )
}

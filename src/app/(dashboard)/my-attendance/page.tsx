import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function MyAttendancePage() {
    const session = await auth()
    if (!session?.user) redirect("/login")

    const history = await prisma.presensi.findMany({
        where: {
            userId: session.user.id
        },
        orderBy: {
            date: 'desc'
        }
    })

    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            {/* Header */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                <Link href="/dashboard" className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">
                    <ArrowLeft size={24} />
                </Link>
                <h1 className="text-xl font-bold text-gray-900">Riwayat Presensi</h1>
                <p className="text-slate-500 text-sm mt-1">Daftar kehadiran kerja harian Anda</p>
            </div>

            {/* List Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[400px]">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Bulan Ini</h2>

                {history.length === 0 ? (
                    <div className="text-center py-12 text-gray-400 border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50">
                        Belum ada data presensi.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {history.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50/50 hover:bg-white border border-gray-100 hover:shadow-md hover:border-blue-100 rounded-xl transition-all duration-200 group gap-4">

                                {/* Date Section */}
                                <div className="flex items-center gap-4 min-w-[240px]">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Calendar size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-900 text-sm">
                                            {item.date.toLocaleDateString("id-ID", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                        </span>
                                        <span className="text-[10px] text-gray-400 font-mono mt-0.5 truncate max-w-[150px]">
                                            {item.id}
                                        </span>
                                    </div>
                                </div>

                                {/* Times Section */}
                                <div className="flex items-center gap-2 sm:gap-6 w-full sm:w-auto overflow-x-auto">
                                    {/* Masuk */}
                                    <div className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mr-2">MASUK</span>
                                        <div className="h-4 w-[1px] bg-gray-200 mr-2"></div>
                                        <span className="font-bold text-gray-800 text-sm font-mono">
                                            {item.checkIn ? new Date(item.checkIn).toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' }).replace('.', ':') : "--:--"}
                                        </span>
                                    </div>

                                    {/* Pulang */}
                                    <div className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mr-2">PLG</span>
                                        <div className="h-4 w-[1px] bg-gray-200 mr-2"></div>
                                        <span className="font-bold text-gray-800 text-sm font-mono">
                                            {item.checkOut ? new Date(item.checkOut).toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' }).replace('.', ':') : "--:--"}
                                        </span>
                                    </div>
                                </div>

                                {/* Status Section */}
                                <div className="ml-auto sm:ml-0">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wide uppercase border shadow-sm ${item.status === 'PRESENT' ? 'bg-green-50 text-green-600 border-green-200' :
                                            item.status === 'LATE' ? 'bg-yellow-50 text-yellow-600 border-yellow-200' :
                                                'bg-red-50 text-red-600 border-red-200'
                                        }`}>
                                        {item.status === 'PRESENT' ? 'HADIR' : item.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle, XCircle, Clock } from "lucide-react"

export default function AttendancePage() {
    const params = useParams()
    const { data: session } = useSession()
    const [status, setStatus] = useState<"loading" | "success" | "error" | "idle">("idle")
    const [message, setMessage] = useState("")
    const [activity, setActivity] = useState<any>(null)
    const [loadingActivity, setLoadingActivity] = useState(true)

    const id = params.id as string

    useEffect(() => {
        if (id) fetchActivity()
    }, [id])

    const fetchActivity = async () => {
        try {
            // We reuse the existing generic activity get endpoint if available
            // Or we might need to ensure GET /api/activities/[id] exists.
            // Usually /api/activities/[id] should exist if standard CRUD.
            const res = await fetch(`/api/activities/${id}`)
            if (res.ok) {
                const data = await res.json()
                setActivity(data)
            } else {
                setActivity(null)
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoadingActivity(false)
        }
    }

    const handleCheckIn = async () => {
        setStatus("loading")

        let locationData = {}

        // Check if activity requires geolocation
        if (activity?.latitude && activity?.longitude) {
            if (!navigator.geolocation) {
                setStatus("error")
                setMessage("Browser anda tidak mendukung Geolokasi.")
                return
            }

            try {
                const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 0
                    })
                })
                locationData = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            } catch (error) {
                console.error(error)
                setStatus("error")
                setMessage("Gagal mengambil lokasi. Pastikan GPS aktif dan izin diberikan.")
                return
            }
        }

        try {
            const res = await fetch(`/api/activities/${id}/attendance`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(locationData)
            })
            const data = await res.json()
            if (res.ok) {
                setStatus("success")
                setMessage(data.message)
            } else {
                setStatus("error")
                setMessage(data.error || data.message || "Gagal melakukan absensi")
            }
        } catch (error) {
            setStatus("error")
            setMessage("Terjadi kesalahan sistem")
        }
    }

    if (!session) {
        return (
            <div className="flex items-center justify-center min-h-[60vh] p-4">
                <Card className="w-full max-w-md text-center">
                    <CardContent className="pt-6">
                        <p>Silakan login terlebih dahulu untuk melakukan absensi.</p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center min-h-[60vh] p-4">
            <Card className="w-full max-w-md text-center shadow-lg border-t-4 border-orange-500">
                <CardHeader>
                    <CardTitle className="text-2xl">Absensi Kegiatan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {loadingActivity ? (
                        <div className="py-8"><Loader2 className="animate-spin mx-auto text-gray-400" /></div>
                    ) : activity ? (
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h2>
                            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                                <Clock size={16} />
                                <span>{new Date(activity.date).toLocaleString("id-ID", {
                                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                })}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-red-500">Kegiatan tidak ditemukan</div>
                    )}

                    {status === "idle" && activity && (
                        !activity.isActive ? (
                            <div className="bg-red-50 border border-red-100 p-8 rounded-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
                                <div className="bg-red-100 p-4 rounded-full mb-4">
                                    <XCircle className="text-red-600 h-12 w-12" />
                                </div>
                                <h3 className="text-xl font-bold text-red-900 mb-2">Absensi Ditutup</h3>
                                <p className="text-red-700 leading-relaxed max-w-xs">
                                    Kegiatan ini sudah tidak aktif atau sesi absensi telah berakhir. Anda tidak dapat melakukan check-in.
                                </p>
                            </div>
                        ) : (
                            <Button
                                onClick={handleCheckIn}
                                size="lg"
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white font-bold py-6 text-lg shadow-md transition-all hover:scale-[1.02]"
                            >
                                Konfirmasi Kehadiran
                            </Button>
                        )
                    )}

                    {status === "loading" && (
                        <div className="py-4">
                            <Loader2 className="animate-spin mx-auto text-orange-600 h-10 w-10" />
                            <p className="text-sm text-gray-500 mt-2">Memproses absensi...</p>
                        </div>
                    )}

                    {status === "success" && (
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100 animate-in fade-in zoom-in-95 duration-300">
                            <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                            <h3 className="font-bold text-green-800 text-xl mb-2">Berhasil!</h3>
                            <p className="text-green-700 font-medium">{message}</p>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100 animate-in fade-in zoom-in-95 duration-300">
                            <XCircle size={64} className="mx-auto text-red-500 mb-4" />
                            <h3 className="font-bold text-red-800 text-xl mb-2">Gagal</h3>
                            <p className="text-red-700 font-medium">{message}</p>
                            <Button onClick={() => setStatus("idle")} variant="ghost" className="mt-4 text-red-600 hover:text-red-800 hover:bg-red-100">
                                Coba Lagi
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

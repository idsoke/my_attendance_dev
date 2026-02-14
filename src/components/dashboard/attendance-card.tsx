'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, LogIn, LogOut, CheckCircle, AlertCircle, Camera, RotateCcw, X, History } from "lucide-react"
import { checkInAction, checkOutAction } from "@/app/actions/presensi"
import Image from "next/image"

interface Presensi {
    checkIn: Date | string | null
    checkOut: Date | string | null
    status: string
}

interface AttendanceCardProps {
    data: Presensi | null
    user: {
        name?: string | null
        role: string
    }
}

export function AttendanceCard({ data, user }: AttendanceCardProps) {
    const [currentTime, setCurrentTime] = useState<Date | null>(null)
    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Camera State
    const [showCamera, setShowCamera] = useState(false)
    const [capturedImage, setCapturedImage] = useState<string | null>(null)
    const [cameraStream, setCameraStream] = useState<MediaStream | null>(null)
    const [actionType, setActionType] = useState<'checkIn' | 'checkOut' | null>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    // Hydration safe clock
    useEffect(() => {
        setCurrentTime(new Date())
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    // Cleanup camera stream on unmount
    useEffect(() => {
        return () => {
            if (cameraStream) {
                cameraStream.getTracks().forEach(track => track.stop())
            }
        }
    }, [cameraStream])

    const startCamera = async (type: 'checkIn' | 'checkOut') => {
        setError(null)
        setActionType(type)
        setShowCamera(true)
        setCapturedImage(null)

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 640 } }
            })
            setCameraStream(stream)
            if (videoRef.current) {
                videoRef.current.srcObject = stream
            }
        } catch (err) {
            console.error(err)
            setError("Gagal mengakses kamera. Pastikan izin diberikan.")
            setShowCamera(false)
        }
    }

    const stopCamera = () => {
        if (cameraStream) {
            cameraStream.getTracks().forEach(track => track.stop())
            setCameraStream(null)
        }
        setShowCamera(false)
    }

    const capturePhoto = () => {
        if (!videoRef.current) return

        const canvas = document.createElement("canvas")
        canvas.width = videoRef.current.videoWidth
        canvas.height = videoRef.current.videoHeight
        const ctx = canvas.getContext("2d")
        if (ctx) {
            // Mirror image if using user facing camera (optional, but standard for selfies)
            ctx.translate(canvas.width, 0)
            ctx.scale(-1, 1)
            ctx.drawImage(videoRef.current, 0, 0)
            const base64 = canvas.toDataURL("image/jpeg", 0.8)
            setCapturedImage(base64)
            // Stop stream after capture to save battery/resources
            // stopCamera() // Keep pure stream logic separate if we want retake
        }
    }

    const retakePhoto = () => {
        setCapturedImage(null)
        // Stream should still be active if we didn't stop it, otherwise restart
        if (!cameraStream?.active) {
            if (actionType) startCamera(actionType)
        }
    }

    const getLocation = () => {
        return new Promise<{ lat: number; lng: number }>((resolve, reject) => {
            if (!navigator.geolocation) {
                reject("Geolocation is not supported by your browser")
                return
            }
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                },
                (error) => {
                    reject("Unable to retrieve your location. Check permissions.")
                }
            )
        })
    }

    const handleSubmitAttendance = async () => {
        if (!capturedImage || !actionType) return

        setLoading(true)
        setError(null)

        try {
            const loc = await getLocation()
            setLocation(loc)

            let res
            if (actionType === 'checkIn') {
                res = await checkInAction(String(loc.lat), String(loc.lng), capturedImage)
            } else {
                res = await checkOutAction(String(loc.lat), String(loc.lng), capturedImage)
            }

            if (!res.success) throw new Error(res.message)

            // Success cleanup
            stopCamera()
            setCapturedImage(null)
            setActionType(null)

        } catch (err: any) {
            setError(err.message || "Gagal melakukan absensi")
        } finally {
            setLoading(false)
        }
    }

    if (!currentTime) return null

    const isCheckedIn = !!data?.checkIn
    const isCheckedOut = !!data?.checkOut

    // Format times safely
    const formatTime = (date: Date | string | null) => {
        if (!date) return "--:--"
        return new Date(date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace('.', ':')
    }

    return (
        <Card className="w-full max-w-md mx-auto overflow-hidden border-none shadow-2xl bg-white rounded-3xl relative">

            {/* Camera Overlay */}
            {showCamera && (
                <div className="absolute inset-0 z-50 bg-black flex flex-col h-full rounded-3xl overflow-hidden">
                    <div className="flex justify-between items-center p-4 text-white bg-black/50 backdrop-blur absolute top-0 left-0 right-0 z-10">
                        <h3 className="font-bold text-lg">
                            {capturedImage ? "Preview Foto" : "Ambil Selfie"}
                        </h3>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={stopCamera}>
                            <X size={24} />
                        </Button>
                    </div>

                    <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden">
                        {!capturedImage ? (
                            <div className="relative w-full h-full flex items-center justify-center">
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    muted
                                    className="w-full h-full object-cover transform -scale-x-100" // Mirror view
                                    onLoadedMetadata={() => videoRef.current?.play()}
                                />
                                {/* Optional: Face guide overlay */}
                                <div className="absolute inset-0 border-[40px] border-black/30 pointer-events-none rounded-[3rem]"></div>
                            </div>
                        ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img src={capturedImage} alt="Preview" className="w-full h-full object-cover" />
                        )}
                    </div>

                    <div className="p-6 bg-black flex justify-center pb-8 gap-4 items-center min-h-[120px]">
                        {!capturedImage ? (
                            <Button
                                onClick={capturePhoto}
                                className="h-20 w-20 rounded-full border-4 border-white bg-transparent hover:bg-white/20 p-1 flex items-center justify-center transition-all active:scale-95"
                            >
                                <div className="w-16 h-16 bg-white rounded-full"></div>
                            </Button>
                        ) : (
                            <div className="flex flex-col w-full gap-3">
                                <Button
                                    onClick={handleSubmitAttendance}
                                    className={`w-full h-12 font-bold text-lg ${actionType === 'checkIn' ? 'bg-green-600 hover:bg-green-700' : 'bg-orange-600 hover:bg-orange-700'}`}
                                    disabled={loading}
                                >
                                    {loading ? "Menyimpan..." : (actionType === 'checkIn' ? "KIRIM ABSEN MASUK" : "KIRIM ABSEN PULANG")}
                                </Button>
                                <Button variant="outline" onClick={retakePhoto} className="w-full h-12 text-black bg-white hover:bg-gray-100 border-none">
                                    <RotateCcw size={18} className="mr-2" />
                                    Foto Ulang
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Header Section */}
            <div className="bg-gradient-to-b from-blue-600 to-indigo-600 p-8 pt-10 text-white text-center pb-12 rounded-b-[2rem] shadow-lg relative z-10">
                <div className="absolute top-4 right-4">
                    <Link href="/api/auth/signout">
                        <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 rounded-full h-10 w-10">
                            <LogOut size={20} />
                        </Button>
                    </Link>
                </div>

                <h2 className="text-lg font-medium opacity-90 mb-1">Selamat Datang,</h2>
                <h1 className="text-3xl font-bold tracking-tight mb-6">{user.name}</h1>

                <div className="bg-white/20 backdrop-blur-md rounded-full py-2 px-6 w-fit mx-auto mb-3 border border-white/10 shadow-inner">
                    <div className="flex items-center gap-2 text-xl font-mono font-semibold tracking-wider">
                        <Clock size={20} className="opacity-80" />
                        {currentTime.toLocaleTimeString('id-ID').replaceAll('.', ':')}
                    </div>
                </div>
                <p className="text-sm opacity-80 font-medium">
                    {currentTime.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                </p>

                {/* History Link */}
                <div className="absolute top-4 left-4">
                    <Link href="/my-attendance">
                        <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 rounded-full h-10 w-10">
                            <History size={20} />
                        </Button>
                    </Link>
                </div>
            </div>

            <CardContent className="p-6 -mt-4 relative z-20 space-y-6 bg-white rounded-t-[2rem]">
                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm flex items-center gap-2 animate-in slide-in-from-top-2">
                        <AlertCircle size={16} />
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                    {/* Check In Status */}
                    <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                            <LogIn size={20} />
                        </div>
                        <span className="text-xs text-gray-500 font-medium mb-1">Jam Masuk</span>
                        <span className="text-xl font-bold text-gray-800">
                            {formatTime(data?.checkIn ?? null)}
                        </span>
                    </div>

                    {/* Check Out Status */}
                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-2">
                            <LogOut size={20} />
                        </div>
                        <span className="text-xs text-gray-500 font-medium mb-1">Jam Pulang</span>
                        <span className="text-xl font-bold text-gray-800">
                            {formatTime(data?.checkOut ?? null)}
                        </span>
                    </div>
                </div>

                {/* Big Action Button */}
                <div className="pt-2">
                    {!isCheckedIn ? (
                        <Button
                            className="w-full h-16 text-lg font-bold bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
                            onClick={() => startCamera('checkIn')}
                            disabled={loading}
                        >
                            {loading ? <span className="animate-pulse">Locating...</span> : (
                                <>
                                    <div className="p-1 bg-white/20 rounded-full"><Camera size={20} /></div>
                                    ABSEN MASUK
                                </>
                            )}
                        </Button>
                    ) : !isCheckedOut ? (
                        <Button
                            className="w-full h-16 text-lg font-bold bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
                            onClick={() => startCamera('checkOut')}
                            disabled={loading}
                        >
                            {loading ? <span className="animate-pulse">Locating...</span> : (
                                <>
                                    <div className="p-1 bg-white/20 rounded-full"><Camera size={20} /></div>
                                    ABSEN PULANG
                                </>
                            )}
                        </Button>
                    ) : (
                        <div className="w-full h-16 bg-green-100 text-green-800 rounded-2xl flex items-center justify-center gap-2 font-bold text-lg border border-green-200">
                            <CheckCircle size={24} className="text-green-600" />
                            Anda sudah selesai hari ini
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-mono mt-4">
                    <MapPin size={12} />
                    {location ? `Lat: ${location.lat.toFixed(4)}, Lng: ${location.lng.toFixed(4)}` : "Membutuhkan akses lokasi"}
                </div>
            </CardContent>
        </Card>
    )
}

"use client"

import { useState } from "react"
import { Calendar, Clock, Users, X, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import QRCode from "react-qr-code"

interface Activity {
    id: string
    title: string
    description?: string | null
    date: Date
    isActive: boolean
    upa: {
        name: string
    }
    user: {
        fullName: string
    }
}

interface ActivityListProps {
    initialActivities: Activity[]
}

export function ActivityList({ initialActivities }: ActivityListProps) {
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)

    return (
        <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {initialActivities.length > 0 ? (
                    initialActivities.map((activity) => (
                        <div
                            key={activity.id}
                            onClick={() => setSelectedActivity(activity)}
                            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-orange-200 cursor-pointer"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-700 rounded-full">
                                        {activity.upa.name}
                                    </span>
                                    {/* Status Check if date is passed? */}
                                    {new Date(activity.date) > new Date() ? (
                                        <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-md border border-green-100">
                                            Akan Datang
                                        </span>
                                    ) : (
                                        <span className="px-2 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-md border border-gray-100">
                                            Selesai
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                                    {activity.title}
                                </h3>

                                <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                                    {activity.description || "Tidak ada deskripsi rinci."}
                                </p>

                                <div className="mt-auto space-y-3 pt-4 border-t border-slate-50">
                                    <div className="flex items-center text-sm text-slate-500">
                                        <Calendar className="mr-2 h-4 w-4 text-orange-500" />
                                        <span>
                                            {new Date(activity.date).toLocaleDateString("id-ID", {
                                                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-sm text-slate-500">
                                        <Clock className="mr-2 h-4 w-4 text-orange-500" />
                                        <span>
                                            {new Date(activity.date).toLocaleTimeString("id-ID", {
                                                hour: '2-digit', minute: '2-digit'
                                            })} WIB
                                        </span>
                                    </div>
                                    <div className="flex items-center text-sm text-slate-500">
                                        <Users className="mr-2 h-4 w-4 text-orange-500" />
                                        <span>{activity.user.fullName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
                        <p className="text-slate-500">Belum ada kegiatan aktif saat ini.</p>
                    </div>
                )}
            </div>

            {/* Detail Modal with QR Code */}
            {selectedActivity && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col">
                        <div className="relative p-6 border-b border-gray-100 flex items-start justify-between shrink-0">
                            <h3 className="text-3xl font-bold text-gray-900 pr-12 leading-tight">{selectedActivity.title}</h3>
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedActivity(null); }}
                                className="absolute top-6 right-6 p-2 bg-red-100 rounded-full text-red-600 hover:bg-red-200 transition-colors shadow-sm"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 space-y-6 overflow-y-auto">
                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                                    <Calendar size={16} className="mr-2 text-orange-500" />
                                    <span>{new Date(selectedActivity.date).toLocaleDateString("id-ID", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                                    <Clock size={16} className="mr-2 text-orange-500" />
                                    <span>{new Date(selectedActivity.date).toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' })} WIB</span>
                                </div>
                            </div>

                            {!selectedActivity.isActive ? (
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-sm animate-in slide-in-from-bottom-2">
                                    <div className="flex items-center mb-3">
                                        <XCircle size={24} className="text-yellow-600 mr-2" />
                                        <h3 className="text-lg font-bold text-yellow-800">Kegiatan Tidak Aktif</h3>
                                    </div>
                                    <p className="text-yellow-700">
                                        Mohon maaf, kegiatan ini sudah dinonaktifkan. Informasi detail dan absensi tidak tersedia.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <p className="text-gray-600 leading-relaxed bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                        {selectedActivity.description || "Tidak ada deskripsi tersedia untuk kegiatan ini."}
                                    </p>
                                </>
                            )}

                            <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
                                <span>Penyelenggara: {selectedActivity.upa.name}</span>
                                <span>PIC: {selectedActivity.user.fullName}</span>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 flex justify-end shrink-0">
                            <Button onClick={() => setSelectedActivity(null)} variant="outline">Tutup</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

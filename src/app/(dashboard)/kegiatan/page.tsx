"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useSession } from "next-auth/react"
import { Eye, Pencil, Trash2, Plus, Search, Calendar, X, ChevronLeft, ChevronRight, Download, MapPin } from "lucide-react"
import * as XLSX from "xlsx"
import { apiClient } from "@/lib/api-client"
import QRCode from "react-qr-code"

interface Activity {
    id: string
    title: string
    description?: string
    date: string
    location?: string
    flag: number
    isActive: boolean
    latitude?: number
    longitude?: number
    radius: number
    userId: string
    attendances?: {
        timestamp: string
        user: {
            fullName: string
        }
    }[]
    user: {
        fullName: string
        email: string
    }
    upa: {
        name: string
    }
}

interface User {
    id: string
    fullName: string
}

interface Upa {
    id: string
    name: string
}

export default function KegiatanPage() {
    const { data: session } = useSession()
    const [activities, setActivities] = useState<Activity[]>([])
    const [loading, setLoading] = useState(true)

    // Search & Filter
    const [searchText, setSearchText] = useState("")
    const [selectedUser, setSelectedUser] = useState("")
    const [selectedUserName, setSelectedUserName] = useState("")
    const [selectedUpa, setSelectedUpa] = useState("")
    const [selectedUpaName, setSelectedUpaName] = useState("")
    const [users, setUsers] = useState<User[]>([])
    const [upas, setUpas] = useState<Upa[]>([])
    const [showUserLookup, setShowUserLookup] = useState(false)
    const [userSearchText, setUserSearchText] = useState("")
    const [showUpaLookup, setShowUpaLookup] = useState(false)
    const [upaSearchText, setUpaSearchText] = useState("")

    // Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)

    // Modal states
    const [showForm, setShowForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
    const [isEditing, setIsEditing] = useState(false)

    // Form data (Requested fields: Nama Kegiatan, Tanggal dan Jam, Keterangan)
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        description: "",
        date: "",
        isActive: true,
        latitude: "",
        longitude: "",
        radius: 100
    })

    useEffect(() => {
        fetchActivities()
        fetchUsers()
        fetchUpas()
    }, [])

    const fetchActivities = async () => {
        try {
            const res = await apiClient("/api/activities")
            const data = await res.json()
            // Filter only flag = 0 (Normal Activity) or flag = 2 (Kegiatan)
            // For now let's assume Kegiatan uses flag 0 but simplified view.
            // Or use flag 2 if we want strict separation.
            // Let's use flag 0 to see existing normal activities too, but display them with simplified fields.
            setActivities(data.activities || [])
        } catch (error) {
            console.error("Error fetching activities:", error)
        } finally {
            setLoading(false)
        }
    }

    const fetchUsers = async () => {
        try {
            const res = await apiClient("/api/users")
            const data = await res.json()
            setUsers(data.users || [])
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }

    const fetchUpas = async () => {
        try {
            const res = await apiClient("/api/master/upas")
            const data = await res.json()
            setUpas(data || [])
        } catch (error) {
            console.error("Error fetching upas:", error)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this kegiatan?")) return
        try {
            const res = await apiClient(`/api/activities/${id}`, { method: "DELETE" })
            if (res.ok) fetchActivities()
        } catch (error) {
            console.error("Error deleting activity:", error)
        }
    }

    // Poll for activity details when modal is open
    useEffect(() => {
        let interval: NodeJS.Timeout

        if (showDetail && selectedActivity?.id) {
            const fetchDetail = async () => {
                try {
                    const res = await fetch(`/api/activities/${selectedActivity.id}`)
                    if (res.ok) {
                        const data = await res.json()
                        setSelectedActivity(data)
                    }
                } catch (e) {
                    console.error("Polling error", e)
                }
            }

            fetchDetail()
            interval = setInterval(fetchDetail, 5000)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [showDetail, selectedActivity?.id])

    const handleExportAttendance = () => {
        if (!selectedActivity || !selectedActivity.attendances) return

        const dataToExport = selectedActivity.attendances.map((att, index) => ({
            "No": index + 1,
            "Nama Peserta": att.user.fullName,
            "Waktu Kehadiran": new Date(att.timestamp).toLocaleString("id-ID", {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            }),
            "Status": "Hadir"
        }))

        const worksheet = XLSX.utils.json_to_sheet(dataToExport)

        // Auto-width columns (basic)
        const maxWidth = dataToExport.reduce((w, r) => Math.max(w, r["Nama Peserta"]?.length || 10), 10);
        const colWidths = [
            { wch: 5 }, // No
            { wch: maxWidth + 5 }, // Nama
            { wch: 35 }, // Waktu
            { wch: 15 } // Status
        ];
        worksheet["!cols"] = colWidths;

        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, "Daftar Hadir")

        const safeTitle = selectedActivity.title.replace(/[^a-z0-9]/gi, '_').slice(0, 50)
        XLSX.writeFile(workbook, `Absensi_${safeTitle}_${new Date().getTime()}.xlsx`)
    }

    const handleEdit = (activity: Activity) => {
        // Format date for datetime-local: YYYY-MM-DDTHH:mm
        const dateObj = new Date(activity.date)
        const formattedDate = dateObj.toISOString().slice(0, 16)

        setFormData({
            id: activity.id,
            title: activity.title,
            description: activity.description || "",
            date: formattedDate,
            date: formattedDate,
            isActive: activity.isActive ?? true,
            latitude: (activity.latitude as any) ?? "",
            longitude: (activity.longitude as any) ?? "",
            radius: (activity.radius as any) ?? 100
        })
        setIsEditing(true)
        setShowForm(true)
    }

    const handleView = (activity: Activity) => {
        setSelectedActivity(activity)
        setShowDetail(true)
    }

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setFormData(prev => ({
                    ...prev,
                    latitude: String(position.coords.latitude),
                    longitude: String(position.coords.longitude)
                }))
            }, (error) => {
                console.error("Error getting location:", error)
                alert("Gagal mengambil lokasi. Pastikan GPS aktif dan izin diberikan.")
            })
        } else {
            alert("Browser tidak mendukung geolokasi.")
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const url = isEditing ? `/api/activities/${formData.id}` : "/api/activities"
            const method = isEditing ? "PATCH" : "POST"
            const body: any = {
                title: formData.title,
                description: formData.description,
                date: new Date(formData.date).toISOString(),
                location: "", // Simplified
                flag: 0, // Using standard activity flag
                isActive: formData.isActive,
                latitude: formData.latitude ? parseFloat(String(formData.latitude)) : null,
                longitude: formData.longitude ? parseFloat(String(formData.longitude)) : null,
                radius: parseInt(String(formData.radius)) || 100,
            }
            const res = await apiClient(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            if (res.ok) {
                resetForm()
                fetchActivities()
            } else {
                const err = await res.text()
                alert(err)
            }
        } catch (error) {
            console.error("Error saving activity:", error)
        }
    }

    const resetForm = () => {
        setFormData({ id: "", title: "", description: "", date: "", isActive: true, latitude: "", longitude: "", radius: 100 })
        setShowForm(false)
        setIsEditing(false)
    }

    // Filter & Pagination
    const filteredActivities = activities.filter(item => {
        // Only show non-monitoring activities
        if (item.flag === 1) return false

        const matchText = searchText === "" ||
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchText.toLowerCase())

        if (session?.user?.role === "USER") {
            return matchText
        }

        const matchUser = selectedUser === "" || item.userId === selectedUser
        const matchUpa = selectedUpa === "" || item.upa.name === selectedUpa
        return matchText && matchUser && matchUpa
    })

    const totalPages = Math.ceil(filteredActivities.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedActivities = filteredActivities.slice(startIndex, startIndex + itemsPerPage)

    const handleExport = () => {
        const dataToExport = filteredActivities.map(activity => ({
            "Nama Kegiatan": activity.title,
            "Tanggal dan Jam": new Date(activity.date).toLocaleString("id-ID"),
            "Keterangan": activity.description || "-",
            "Dibuat Oleh": activity.user.fullName,
            "UPA": activity.upa.name,
        }))

        const worksheet = XLSX.utils.json_to_sheet(dataToExport)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, "Kegiatan")
        XLSX.writeFile(workbook, "Kegiatan_Export.xlsx")
    }

    return (
        <div className="space-y-6 relative">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Kegiatan</h1>
                    <p className="text-gray-500">Kelola kegiatan harian</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        onClick={handleExport}
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-50"
                    >
                        <Download size={18} className="mr-2" />
                        Ekspor
                    </Button>
                    <Button
                        onClick={() => { resetForm(); setShowForm(true); }}
                        className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-none"
                    >
                        <Plus size={18} className="mr-2" />
                        Tambah Kegiatan
                    </Button>
                </div>
            </div>

            {/* Search & Filter */}
            <Card>
                <CardContent className="pt-6">
                    <div className={`grid grid-cols-1 gap-4 ${session?.user?.role === "USER" ? "md:grid-cols-1" : "md:grid-cols-3"}`}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cari</label>
                            <Input
                                placeholder="Cari kegiatan..."
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                            />
                        </div>
                        {session?.user?.role !== "USER" && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Filter Pengguna</label>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Pilih Pengguna"
                                            value={selectedUserName}
                                            readOnly
                                            className="flex-1"
                                        />
                                        <Button type="button" variant="outline" onClick={() => setShowUserLookup(true)}>
                                            <Search size={16} />
                                        </Button>
                                        {selectedUser && (
                                            <Button type="button" variant="outline" onClick={() => { setSelectedUser(""); setSelectedUserName(""); }}>
                                                <X size={16} />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Filter UPA</label>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Pilih UPA"
                                            value={selectedUpaName}
                                            readOnly
                                            className="flex-1"
                                        />
                                        <Button type="button" variant="outline" onClick={() => setShowUpaLookup(true)}>
                                            <Search size={16} />
                                        </Button>
                                        {selectedUpa && (
                                            <Button type="button" variant="outline" onClick={() => { setSelectedUpa(""); setSelectedUpaName(""); }}>
                                                <X size={16} />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
                    <Card className="w-full max-w-2xl bg-white shadow-xl animate-in fade-in zoom-in-95 my-8">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>{isEditing ? "Edit Kegiatan" : "Tambah Kegiatan Baru"}</CardTitle>
                            <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Kegiatan</label>
                                    <Input
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                        required
                                        placeholder="Contoh: Rapat Koordinasi"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal dan Jam</label>
                                    <Input
                                        type="datetime-local"
                                        value={formData.date}
                                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Keterangan</label>
                                    <textarea
                                        className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-orange-500 focus:ring-orange-500 focus:outline-none min-h-[120px]"
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        placeholder="Masukkan keterangan kegiatan di sini..."
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="isActive"
                                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500 w-4 h-4"
                                        checked={formData.isActive}
                                        onChange={e => setFormData({ ...formData, isActive: e.target.checked })}
                                    />
                                    <label htmlFor="isActive" className="text-sm font-medium text-gray-700 select-none cursor-pointer">
                                        Status Aktif (Tampilkan di halaman depan)
                                    </label>
                                </div>
                                <div className="space-y-4 border-t pt-4">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-medium text-gray-900">Lokasi & Radius (Opsional)</h4>
                                        <Button type="button" variant="outline" size="sm" onClick={getCurrentLocation} className="text-blue-600 border-blue-200 hover:bg-blue-50">
                                            <MapPin size={14} className="mr-1" />
                                            Ambil Lokasi Saat Ini
                                        </Button>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 mb-1">Latitude</label>
                                            <Input
                                                type="number"
                                                step="any"
                                                value={formData.latitude}
                                                onChange={e => setFormData({ ...formData, latitude: e.target.value })}
                                                placeholder="-6.200000"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 mb-1">Longitude</label>
                                            <Input
                                                type="number"
                                                step="any"
                                                value={formData.longitude}
                                                onChange={e => setFormData({ ...formData, longitude: e.target.value })}
                                                placeholder="106.816666"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 mb-1">Radius (Meter)</label>
                                            <Input
                                                type="number"
                                                value={formData.radius}
                                                onChange={e => setFormData({ ...formData, radius: parseInt(e.target.value) || 100 })}
                                                placeholder="100"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Jika diisi, absensi hanya dapat dilakukan dalam radius yang ditentukan. Kosongkan untuk menonaktifkan geofencing.
                                    </p>
                                </div>

                                <div className="flex justify-end gap-2 pt-4">
                                    <Button type="button" variant="outline" onClick={resetForm}>Batal</Button>
                                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                                        {isEditing ? "Simpan Perubahan" : "Simpan Kegiatan"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* List Activities */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {paginatedActivities.length === 0 ? (
                    <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Tidak ada kegiatan ditemukan</p>
                    </div>
                ) : (
                    paginatedActivities.map(activity => (
                        <div key={activity.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{activity.title}</h3>
                                    <div className="flex gap-1 items-center">
                                        {!activity.isActive && (
                                            <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded font-medium mr-1">Non-Aktif</span>
                                        )}
                                        <button onClick={() => handleView(activity)} className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-md transition-colors">
                                            <Eye size={16} />
                                        </button>
                                        {(session?.user?.role === "ADMIN" || session?.user?.id === activity.userId) && (
                                            <>
                                                <button onClick={() => handleEdit(activity)} className="p-1.5 text-yellow-500 hover:bg-yellow-50 rounded-md transition-colors">
                                                    <Pencil size={16} />
                                                </button>
                                                <button onClick={() => handleDelete(activity.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-md transition-colors">
                                                    <Trash2 size={16} />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[60px]">{activity.description || "Tidak ada keterangan."}</p>
                                <div className="space-y-2 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-orange-500" />
                                        <span>{new Date(activity.date).toLocaleString("id-ID", { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs">
                                <span className="font-medium text-gray-700">{activity.user.fullName}</span>
                                <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full">{activity.upa.name}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Pagination omitted for brevity, but you can add it back if needed */}
            {
                totalPages > 1 && (
                    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className="text-sm text-gray-600">
                            Menampilkan {startIndex + 1} sampai {Math.min(startIndex + itemsPerPage, filteredActivities.length)} dari {filteredActivities.length} kegiatan
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft size={16} />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRight size={16} />
                            </Button>
                        </div>
                    </div>
                )
            }

            {/* Lookup Modals (User & UPA) - Reusing logic from Activities page */}
            {
                showUserLookup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <Card className="w-full max-w-2xl bg-white shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                                <CardTitle>Pilih Pengguna</CardTitle>
                                <button onClick={() => setShowUserLookup(false)} className="text-gray-400 hover:text-gray-600">
                                    <X size={20} />
                                </button>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="mb-4">
                                    <Input
                                        placeholder="Cari berdasarkan nama..."
                                        value={userSearchText}
                                        onChange={e => setUserSearchText(e.target.value)}
                                    />
                                </div>
                                <div className="max-h-96 overflow-y-auto">
                                    <table className="w-full text-sm">
                                        <thead className="bg-gray-50 sticky top-0">
                                            <tr>
                                                <th className="px-4 py-2 text-left">Nama</th>
                                                <th className="px-4 py-2 text-left">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users
                                                .filter(u => u.fullName.toLowerCase().includes(userSearchText.toLowerCase()))
                                                .map(user => (
                                                    <tr key={user.id} className="border-b">
                                                        <td className="px-4 py-2">{user.fullName}</td>
                                                        <td className="px-4 py-2">
                                                            <Button size="sm" onClick={() => { setSelectedUser(user.id); setSelectedUserName(user.fullName); setShowUserLookup(false); }}>Pilih</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )
            }

            {
                showUpaLookup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <Card className="w-full max-w-2xl bg-white shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                                <CardTitle>Pilih UPA</CardTitle>
                                <button onClick={() => setShowUpaLookup(false)} className="text-gray-400 hover:text-gray-600">
                                    <X size={20} />
                                </button>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="mb-4">
                                    <Input
                                        placeholder="Cari berdasarkan nama UPA..."
                                        value={upaSearchText}
                                        onChange={e => setUpaSearchText(e.target.value)}
                                    />
                                </div>
                                <div className="max-h-96 overflow-y-auto">
                                    <table className="w-full text-sm">
                                        <thead className="bg-gray-50 sticky top-0">
                                            <tr>
                                                <th className="px-4 py-2 text-left">Nama UPA</th>
                                                <th className="px-4 py-2 text-left">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {upas
                                                .filter(u => u.name.toLowerCase().includes(upaSearchText.toLowerCase()))
                                                .map(upa => (
                                                    <tr key={upa.id} className="border-b">
                                                        <td className="px-4 py-2">{upa.name}</td>
                                                        <td className="px-4 py-2">
                                                            <Button size="sm" onClick={() => { setSelectedUpa(upa.name); setSelectedUpaName(upa.name); setShowUpaLookup(false); }}>Pilih</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )
            }

            {/* Detail View Modal */}
            {/* Professional Clean Detail Modal */}
            {showDetail && selectedActivity && (
                <div className="fixed inset-0 z-[9999] bg-white flex flex-col md:flex-row animate-in fade-in duration-200">

                    {/* Mobile Close Button */}
                    <div className="absolute top-4 right-4 z-50 md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setShowDetail(false)}>
                            <X />
                        </Button>
                    </div>

                    {/* Left Column: Information */}
                    <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-white text-slate-900 border-r border-gray-100" style={{ scrollbarWidth: 'thin' }}>
                        <div className="max-w-3xl mx-auto space-y-8">
                            {/* Header */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Detail Kegiatan</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                    {selectedActivity.title}
                                </h1>
                            </div>

                            {/* Meta Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-y border-gray-100">
                                <div>
                                    <h3 className="text-sm font-medium text-slate-500 mb-1">Tanggal & Waktu</h3>
                                    <p className="text-lg font-semibold text-slate-900">
                                        {new Date(selectedActivity.date).toLocaleDateString("id-ID", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                    <p className="text-slate-600">
                                        {new Date(selectedActivity.date).toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' })} WIB
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-slate-500 mb-1">Lokasi</h3>
                                    {((selectedActivity as any).latitude) ? (
                                        <div>
                                            <p className="text-lg font-semibold text-slate-900">Geofencing Aktif</p>
                                            <p className="text-slate-600">Radius {(selectedActivity as any).radius} meter</p>
                                        </div>
                                    ) : (
                                        <p className="text-lg font-semibold text-slate-900">Bebas / Online</p>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Deskripsi</h3>
                                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                                    {selectedActivity.description || "Tidak ada deskripsi."}
                                </p>
                            </div>

                            {/* Attendees Section */}
                            <div className="pt-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-slate-900">Peserta yang Telah Hadir</h3>
                                    <div className="flex items-center gap-3">
                                        <Button variant="outline" size="sm" onClick={handleExportAttendance} className="h-8 text-xs font-semibold text-green-700 bg-green-50 hover:bg-green-100 border-green-200">
                                            <Download size={14} className="mr-2" />
                                            Excel
                                        </Button>
                                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold">
                                            {selectedActivity.attendances?.length || 0} Orang
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-xl border border-slate-200 p-1 max-h-[300px] overflow-y-auto">
                                    {selectedActivity.attendances && selectedActivity.attendances.length > 0 ? (
                                        <table className="w-full text-sm text-left">
                                            <thead className="text-xs text-slate-500 uppercase bg-slate-100 sticky top-0">
                                                <tr>
                                                    <th className="px-4 py-3">Nama Peserta</th>
                                                    <th className="px-4 py-3 text-right">Jam Kedatangan</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200">
                                                {selectedActivity.attendances.map((att, idx) => (
                                                    <tr key={idx} className="bg-white hover:bg-slate-50">
                                                        <td className="px-4 py-3 font-medium text-slate-700">{att.user.fullName}</td>
                                                        <td className="px-4 py-3 text-right text-slate-500 font-mono text-xs">
                                                            {new Date(att.timestamp).toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit', second: '2-digit' })} WIB
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className="p-8 text-center text-slate-500">
                                            Belum ada peserta yang absen.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: QR Code */}
                    <div className="w-full md:w-[400px] bg-slate-50 border-l border-gray-200 flex flex-col items-center justify-center p-8 relative shrink-0">
                        {/* Close Button Desktop */}
                        <div className="absolute top-6 right-6 z-10 hidden md:block">
                            <Button variant="outline" size="icon" onClick={() => setShowDetail(false)} className="bg-white hover:bg-gray-100 rounded-full h-10 w-10 shadow-sm border-gray-300">
                                <X size={20} className="text-gray-600" />
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-full max-w-[320px]">
                            <div style={{ height: "auto", margin: "0 auto", maxWidth: "100%", width: "100%" }}>
                                <QRCode
                                    value={`${typeof window !== 'undefined' ? window.location.origin : ''}/attendance/${selectedActivity.id}`}
                                    size={400}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    viewBox={`0 0 400 400`}
                                    level="H"
                                />
                            </div>
                        </div>
                        <p className="mt-8 text-slate-500 font-medium text-center">
                            Scan QR Code untuk Absensi
                        </p>
                    </div>

                </div>
            )}
        </div >
    )
}

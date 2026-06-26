"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Dialog, DialogContent, DialogHeader, DialogTitle
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { CheckCircle, XCircle, Clock, CalendarDays, User, Filter } from "lucide-react"
import { apiClient } from "@/lib/api-client"

const fmtDate = (d: Date) => d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })
const fmtDateTime = (d: Date) => d.toLocaleString("id-ID", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })

interface LeaveRequest {
    id: string
    type: "CUTI" | "SAKIT" | "DINAS" | "IZIN"
    startDate: string
    endDate: string
    reason: string
    status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED"
    approverNote?: string
    approvedBy?: { fullName: string }
    user: { id: string; fullName: string; email: string; employeeId?: string }
    createdAt: string
}

const TYPE_LABELS: Record<string, string> = {
    CUTI: "Cuti Tahunan",
    SAKIT: "Sakit",
    DINAS: "Dinas",
    IZIN: "Izin Pribadi",
}

const STATUS_CONFIG: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
    PENDING: { label: "Menunggu", color: "bg-yellow-100 text-yellow-700", icon: <Clock size={12} /> },
    APPROVED: { label: "Disetujui", color: "bg-green-100 text-green-700", icon: <CheckCircle size={12} /> },
    REJECTED: { label: "Ditolak", color: "bg-red-100 text-red-700", icon: <XCircle size={12} /> },
    CANCELLED: { label: "Dibatalkan", color: "bg-gray-100 text-gray-500", icon: null },
}

function countWorkdays(start: Date, end: Date): number {
    let count = 0
    const cur = new Date(start)
    while (cur <= end) {
        const day = cur.getDay()
        if (day !== 0 && day !== 6) count++
        cur.setDate(cur.getDate() + 1)
    }
    return count
}

export default function IzinAdminPage() {
    const { data: session } = useSession()
    const [requests, setRequests] = useState<LeaveRequest[]>([])
    const [filtered, setFiltered] = useState<LeaveRequest[]>([])
    const [loading, setLoading] = useState(true)
    const [filterStatus, setFilterStatus] = useState("PENDING")
    const [actionTarget, setActionTarget] = useState<{ id: string; action: "approve" | "reject" } | null>(null)
    const [approverNote, setApproverNote] = useState("")
    const [processing, setProcessing] = useState(false)

    const isPrivileged = session?.user?.role === "ADMIN" || session?.user?.role === "MANAGER"

    const fetchRequests = async () => {
        setLoading(true)
        const res = await apiClient("/api/izin")
        if (res.ok) {
            const data: LeaveRequest[] = await res.json()
            setRequests(data)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (isPrivileged) fetchRequests()
    }, [isPrivileged])

    useEffect(() => {
        if (filterStatus === "ALL") {
            setFiltered(requests)
        } else {
            setFiltered(requests.filter(r => r.status === filterStatus))
        }
    }, [requests, filterStatus])

    const handleAction = async () => {
        if (!actionTarget) return
        setProcessing(true)
        const res = await apiClient(`/api/izin/${actionTarget.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: actionTarget.action, approverNote }),
        })
        if (res.ok) {
            setActionTarget(null)
            setApproverNote("")
            fetchRequests()
        }
        setProcessing(false)
    }

    const pendingCount = requests.filter(r => r.status === "PENDING").length

    if (!isPrivileged) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <p className="text-gray-500">Akses ditolak. Hanya Admin atau Manager.</p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Persetujuan Izin</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Tinjau dan proses pengajuan izin karyawan
                        {pendingCount > 0 && (
                            <span className="ml-2 bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                                {pendingCount} menunggu
                            </span>
                        )}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Filter size={16} className="text-gray-400" />
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                        <SelectTrigger className="w-36">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ALL">Semua</SelectItem>
                            <SelectItem value="PENDING">Menunggu</SelectItem>
                            <SelectItem value="APPROVED">Disetujui</SelectItem>
                            <SelectItem value="REJECTED">Ditolak</SelectItem>
                            <SelectItem value="CANCELLED">Dibatalkan</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* List */}
            {loading ? (
                <div className="text-center py-12 text-gray-400">Memuat...</div>
            ) : filtered.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center text-gray-400">
                        <CalendarDays size={40} className="mx-auto mb-2 opacity-40" />
                        <p>Tidak ada pengajuan dengan status ini.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-3">
                    {filtered.map(r => {
                        const cfg = STATUS_CONFIG[r.status]
                        const start = new Date(r.startDate)
                        const end = new Date(r.endDate)
                        const days = countWorkdays(start, end)
                        return (
                            <div key={r.id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-3 flex-1 min-w-0">
                                        {/* Avatar */}
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold shrink-0">
                                            {r.user.fullName[0]}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="font-semibold text-gray-800">{r.user.fullName}</span>
                                                {r.user.employeeId && (
                                                    <span className="text-xs text-gray-400">#{r.user.employeeId}</span>
                                                )}
                                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${cfg.color}`}>
                                                    {cfg.icon} {cfg.label}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-0.5">{r.user.email}</p>

                                            <div className="mt-2 flex items-center gap-3 flex-wrap text-sm">
                                                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium">
                                                    {TYPE_LABELS[r.type]}
                                                </span>
                                                <span className="text-gray-600">
                                                    <CalendarDays size={13} className="inline mr-1" />
                                                    {fmtDate(start)}
                                                    {" — "}
                                                    {fmtDate(end)}
                                                    <span className="text-gray-400 ml-1">({days} hari kerja)</span>
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-2 bg-gray-50 rounded p-2">{r.reason}</p>

                                            {r.approverNote && (
                                                <p className="text-xs text-gray-400 mt-1">
                                                    Catatan: {r.approverNote}
                                                    {r.approvedBy && ` (oleh ${r.approvedBy.fullName})`}
                                                </p>
                                            )}
                                            <p className="text-xs text-gray-400 mt-1">
                                                Diajukan: {fmtDateTime(new Date(r.createdAt))}
                                            </p>
                                        </div>
                                    </div>

                                    {r.status === "PENDING" && (
                                        <div className="flex gap-2 shrink-0">
                                            <Button
                                                size="sm"
                                                className="bg-green-600 hover:bg-green-700 text-white"
                                                onClick={() => { setActionTarget({ id: r.id, action: "approve" }); setApproverNote("") }}
                                            >
                                                <CheckCircle size={14} className="mr-1" /> Setujui
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="text-red-600 border-red-300 hover:bg-red-50"
                                                onClick={() => { setActionTarget({ id: r.id, action: "reject" }); setApproverNote("") }}
                                            >
                                                <XCircle size={14} className="mr-1" /> Tolak
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}

            {/* Confirm Dialog */}
            <Dialog open={!!actionTarget} onOpenChange={o => !o && setActionTarget(null)}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>
                            {actionTarget?.action === "approve" ? "Setujui" : "Tolak"} Pengajuan Izin
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-2">
                        <div className="space-y-1">
                            <Label>Catatan untuk Karyawan (opsional)</Label>
                            <Textarea
                                value={approverNote}
                                onChange={e => setApproverNote(e.target.value)}
                                placeholder="Tambahkan catatan jika perlu..."
                                rows={3}
                            />
                        </div>
                        <div className="flex gap-2 justify-end">
                            <Button variant="outline" onClick={() => setActionTarget(null)}>Batal</Button>
                            <Button
                                className={actionTarget?.action === "approve"
                                    ? "bg-green-600 hover:bg-green-700"
                                    : "bg-red-600 hover:bg-red-700"
                                }
                                onClick={handleAction}
                                disabled={processing}
                            >
                                {processing ? "Memproses..." : (actionTarget?.action === "approve" ? "Ya, Setujui" : "Ya, Tolak")}
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

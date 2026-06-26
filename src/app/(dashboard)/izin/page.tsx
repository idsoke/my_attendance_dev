"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Plus, Clock, CheckCircle, XCircle, Ban } from "lucide-react"
import { apiClient } from "@/lib/api-client"

const fmtDate = (d: Date) => d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })

interface LeaveRequest {
    id: string
    type: "CUTI" | "SAKIT" | "DINAS" | "IZIN"
    startDate: string
    endDate: string
    reason: string
    status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED"
    approverNote?: string
    approvedBy?: { fullName: string }
    createdAt: string
}

interface LeaveBalance {
    totalDays: number
    usedDays: number
    remaining: number
    year: number
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
    CANCELLED: { label: "Dibatalkan", color: "bg-gray-100 text-gray-500", icon: <Ban size={12} /> },
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

export default function IzinPage() {
    const { data: session } = useSession()
    const [requests, setRequests] = useState<LeaveRequest[]>([])
    const [balance, setBalance] = useState<LeaveBalance | null>(null)
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        type: "CUTI",
        startDate: "",
        endDate: "",
        reason: "",
    })

    const fetchData = async () => {
        setLoading(true)
        const [reqRes, balRes] = await Promise.all([
            apiClient("/api/izin"),
            apiClient("/api/izin/balance"),
        ])
        if (reqRes.ok) setRequests(await reqRes.json())
        if (balRes.ok) setBalance(await balRes.json())
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setSubmitting(true)
        try {
            const res = await apiClient("/api/izin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            if (!res.ok) {
                setError(data.error ?? "Terjadi kesalahan.")
            } else {
                setIsOpen(false)
                setForm({ type: "CUTI", startDate: "", endDate: "", reason: "" })
                fetchData()
            }
        } finally {
            setSubmitting(false)
        }
    }

    const handleCancel = async (id: string) => {
        if (!confirm("Batalkan pengajuan izin ini?")) return
        const res = await apiClient(`/api/izin/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "cancel" }),
        })
        if (res.ok) fetchData()
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Hapus pengajuan ini secara permanen?")) return
        const res = await apiClient(`/api/izin/${id}`, { method: "DELETE" })
        if (res.ok) fetchData()
    }

    const workdaysPreview =
        form.startDate && form.endDate
            ? countWorkdays(new Date(form.startDate), new Date(form.endDate))
            : 0

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Pengajuan Izin</h1>
                    <p className="text-gray-500 text-sm mt-1">Kelola pengajuan izin dan cuti Anda</p>
                </div>
                <Dialog open={isOpen} onOpenChange={(o) => { setIsOpen(o); setError("") }}>
                    <DialogTrigger asChild>
                        <Button className="bg-orange-600 hover:bg-orange-700">
                            <Plus size={16} className="mr-2" /> Ajukan Izin
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Formulir Pengajuan Izin</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                            <div className="space-y-1">
                                <Label>Tipe Izin</Label>
                                <Select value={form.type} onValueChange={(v) => setForm(f => ({ ...f, type: v }))}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(TYPE_LABELS).map(([k, v]) => (
                                            <SelectItem key={k} value={k}>{v}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <Label>Tanggal Mulai</Label>
                                    <Input type="date" value={form.startDate} onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))} required />
                                </div>
                                <div className="space-y-1">
                                    <Label>Tanggal Selesai</Label>
                                    <Input type="date" value={form.endDate} min={form.startDate} onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))} required />
                                </div>
                            </div>
                            {workdaysPreview > 0 && (
                                <p className="text-sm text-gray-500">
                                    Durasi: <strong>{workdaysPreview} hari kerja</strong>
                                    {form.type === "CUTI" && balance && (
                                        <span className="ml-2 text-orange-600">
                                            (Saldo cuti: {balance.remaining} hari)
                                        </span>
                                    )}
                                </p>
                            )}
                            <div className="space-y-1">
                                <Label>Alasan / Keterangan</Label>
                                <Textarea
                                    value={form.reason}
                                    onChange={e => setForm(f => ({ ...f, reason: e.target.value }))}
                                    placeholder="Jelaskan keperluan izin Anda..."
                                    rows={3}
                                    required
                                />
                            </div>
                            {error && <p className="text-sm text-red-600">{error}</p>}
                            <div className="flex gap-2 justify-end pt-2">
                                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Batal</Button>
                                <Button type="submit" className="bg-orange-600 hover:bg-orange-700" disabled={submitting}>
                                    {submitting ? "Mengirim..." : "Ajukan"}
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Cuti Balance Card */}
            {balance && (
                <div className="grid grid-cols-3 gap-4">
                    <Card className="border-orange-100">
                        <CardContent className="pt-6">
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Kuota Cuti {balance.year}</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{balance.totalDays} <span className="text-base font-normal text-gray-500">hari</span></p>
                        </CardContent>
                    </Card>
                    <Card className="border-red-100">
                        <CardContent className="pt-6">
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Terpakai</p>
                            <p className="text-3xl font-bold text-red-600 mt-1">{balance.usedDays} <span className="text-base font-normal text-gray-500">hari</span></p>
                        </CardContent>
                    </Card>
                    <Card className="border-green-100">
                        <CardContent className="pt-6">
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Sisa Cuti</p>
                            <p className="text-3xl font-bold text-green-600 mt-1">{balance.remaining} <span className="text-base font-normal text-gray-500">hari</span></p>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Leave Request List */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Riwayat Pengajuan</CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <p className="text-center text-gray-400 py-8">Memuat...</p>
                    ) : requests.length === 0 ? (
                        <div className="text-center py-12 text-gray-400">
                            <CalendarDays size={40} className="mx-auto mb-2 opacity-40" />
                            <p>Belum ada pengajuan izin.</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {requests.map(r => {
                                const cfg = STATUS_CONFIG[r.status]
                                const start = new Date(r.startDate)
                                const end = new Date(r.endDate)
                                const days = countWorkdays(start, end)
                                return (
                                    <div key={r.id} className="flex items-start justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="font-semibold text-gray-800">{TYPE_LABELS[r.type]}</span>
                                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${cfg.color}`}>
                                                    {cfg.icon} {cfg.label}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-0.5">
                                                {fmtDate(start)}
                                                {" — "}
                                                {fmtDate(end)}
                                                <span className="ml-2 text-gray-400">({days} hari kerja)</span>
                                            </p>
                                            <p className="text-sm text-gray-600 mt-1 line-clamp-1">{r.reason}</p>
                                            {r.approverNote && (
                                                <p className="text-xs text-gray-400 mt-0.5">Catatan: {r.approverNote}</p>
                                            )}
                                            {r.approvedBy && (
                                                <p className="text-xs text-gray-400 mt-0.5">
                                                    Diproses oleh: {r.approvedBy.fullName}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex gap-2 ml-4 shrink-0">
                                            {r.status === "PENDING" && (
                                                <>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="text-yellow-600 border-yellow-300 hover:bg-yellow-50 text-xs"
                                                        onClick={() => handleCancel(r.id)}
                                                    >
                                                        Batalkan
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="text-red-500 border-red-200 hover:bg-red-50 text-xs"
                                                        onClick={() => handleDelete(r.id)}
                                                    >
                                                        Hapus
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

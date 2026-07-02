"use client"

import { useEffect, useState, useCallback } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts"
import * as XLSX from "xlsx"
import { Download, Search, Loader2, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react"
import { apiClient } from "@/lib/api-client"

// ─── Types ───────────────────────────────────────────────────────────────────

interface EmployeeSummary {
  userId: string
  fullName: string
  employeeId: string | null
  hadir: number
  terlambat: number
  absen: number
  izin: number
  sakit: number
  dinas: number
  rate: number
}

interface SummaryData {
  year: number
  month: number
  workdays: number
  employees: EmployeeSummary[]
  totals: { hadir: number; terlambat: number; absen: number; izin: number; sakit: number; dinas: number }
  weeklyData: { label: string; hadir: number; absen: number }[]
}

interface DayDetail {
  date: string
  dayName: string
  status: string
  checkIn: string | null
  checkOut: string | null
  leaveType: string | null
}

interface MonthlyData {
  fullName: string
  employeeId: string | null
  year: number
  month: number
  workdays: number
  summary: { hadir: number; terlambat: number; absen: number; izin: number; sakit: number; dinas: number }
  days: DayDetail[]
}

// ─── Constants ───────────────────────────────────────────────────────────────

const MONTHS = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
]

const STATUS_COLORS: Record<string, string> = {
  PRESENT: "#22c55e",
  LATE: "#f59e0b",
  ABSENT: "#ef4444",
  PERMIT: "#3b82f6",
  SICK: "#a855f7",
  DINAS: "#06b6d4",
}

const STATUS_LABELS: Record<string, string> = {
  PRESENT: "Hadir",
  LATE: "Terlambat",
  ABSENT: "Absen",
  PERMIT: "Izin",
  SICK: "Sakit",
  DINAS: "Dinas",
}

const PIE_COLORS = ["#22c55e", "#f59e0b", "#ef4444", "#3b82f6", "#a855f7", "#06b6d4"]

// ─── Component ───────────────────────────────────────────────────────────────

export default function LaporanPage() {
  const { data: session, status: sessionStatus } = useSession()
  const router = useRouter()

  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [data, setData] = useState<SummaryData | null>(null)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  // Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState<MonthlyData | null>(null)
  const [modalLoading, setModalLoading] = useState(false)

  useEffect(() => {
    if (sessionStatus === "unauthenticated") router.push("/login")
  }, [sessionStatus, router])

  useEffect(() => {
    if (sessionStatus === "authenticated" && session?.user?.role !== "EMPLOYEE") {
      fetchSummary()
    }
  }, [year, month, sessionStatus])

  const fetchSummary = useCallback(async () => {
    setLoading(true)
    try {
      const res = await apiClient(`/api/reports/summary?year=${year}&month=${month}`)
      if (res.ok) setData(await res.json())
    } finally {
      setLoading(false)
    }
  }, [year, month])

  const openDetail = async (userId: string) => {
    setModalOpen(true)
    setModalLoading(true)
    setModalData(null)
    try {
      const res = await apiClient(`/api/reports/monthly?year=${year}&month=${month}&userId=${userId}`)
      if (res.ok) setModalData(await res.json())
    } finally {
      setModalLoading(false)
    }
  }

  const handleExport = () => {
    if (!data) return
    const rows = data.employees.map((e, i) => ({
      "No": i + 1,
      "Nama": e.fullName,
      "NIK": e.employeeId || "-",
      "Hadir": e.hadir,
      "Terlambat": e.terlambat,
      "Absen": e.absen,
      "Izin": e.izin,
      "Sakit": e.sakit,
      "Dinas": e.dinas,
      "Rate (%)": e.rate,
    }))
    const ws = XLSX.utils.json_to_sheet(rows)
    ws["!cols"] = [{ wch: 5 }, { wch: 25 }, { wch: 15 }, { wch: 8 }, { wch: 10 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 10 }]
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, `Laporan ${MONTHS[month - 1]} ${year}`)
    XLSX.writeFile(wb, `Laporan_Kehadiran_${MONTHS[month - 1]}_${year}.xlsx`)
  }

  const filteredEmployees = data?.employees.filter(e =>
    e.fullName.toLowerCase().includes(search.toLowerCase()) ||
    (e.employeeId || "").toLowerCase().includes(search.toLowerCase())
  ) ?? []

  const pieData = data ? [
    { name: "Hadir", value: data.totals.hadir },
    { name: "Terlambat", value: data.totals.terlambat },
    { name: "Absen", value: data.totals.absen },
    { name: "Izin", value: data.totals.izin },
    { name: "Sakit", value: data.totals.sakit },
    { name: "Dinas", value: data.totals.dinas },
  ].filter(d => d.value > 0) : []

  const avgRate = data && data.employees.length > 0
    ? Math.round(data.employees.reduce((s, e) => s + e.rate, 0) / data.employees.length * 10) / 10
    : 0

  if (sessionStatus === "loading") {
    return <div className="flex justify-center items-center min-h-[50vh]"><Loader2 className="animate-spin text-orange-500 h-8 w-8" /></div>
  }

  if (session?.user?.role === "EMPLOYEE") {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-500">Halaman ini hanya untuk Admin dan Manager.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Laporan Kehadiran</h1>
            <p className="text-sm text-gray-500">Rekap bulanan seluruh karyawan</p>
          </div>
          <Button
            onClick={handleExport}
            disabled={!data}
            className="bg-green-600 hover:bg-green-700 text-white self-start sm:self-auto"
          >
            <Download size={16} className="mr-2" />
            Export Excel
          </Button>
        </div>

        {/* Month / Year Selector */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => { if (month === 1) { setMonth(12); setYear(y => y - 1) } else setMonth(m => m - 1) }}
            className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2 flex-1">
            <select
              value={month}
              onChange={e => setMonth(Number(e.target.value))}
              className="flex-1 rounded-lg border border-gray-200 text-sm px-3 py-2 bg-white focus:outline-none focus:border-orange-400"
            >
              {MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
            </select>
            <select
              value={year}
              onChange={e => setYear(Number(e.target.value))}
              className="w-24 rounded-lg border border-gray-200 text-sm px-3 py-2 bg-white focus:outline-none focus:border-orange-400"
            >
              {Array.from({ length: 5 }, (_, i) => now.getFullYear() - 2 + i).map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => { if (month === 12) { setMonth(1); setYear(y => y + 1) } else setMonth(m => m + 1) }}
            className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center py-12">
          <Loader2 className="animate-spin text-orange-500 h-8 w-8" />
        </div>
      )}

      {data && !loading && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-gray-800">{data.workdays}</p>
                <p className="text-xs text-gray-500 mt-1">Hari Kerja</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-orange-600">{avgRate}%</p>
                <p className="text-xs text-gray-500 mt-1">Rata-rata Kehadiran</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-gray-800">{data.employees.length}</p>
                <p className="text-xs text-gray-500 mt-1">Karyawan Aktif</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">{data.totals.izin + data.totals.sakit + data.totals.dinas}</p>
                <p className="text-xs text-gray-500 mt-1">Total Izin/Cuti</p>
              </CardContent>
            </Card>
          </div>

          {/* Bar Chart – Hadir vs Absen per Minggu */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <h3 className="text-sm font-bold text-gray-700 mb-4">Hadir vs Absen per Minggu</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data.weeklyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="hadir" name="Hadir" fill="#22c55e" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="absen" name="Absen" fill="#ef4444" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart – Distribusi Status */}
          {pieData.length > 0 && (
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-sm font-bold text-gray-700 mb-4">Distribusi Status Kehadiran</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`} labelLine={false}>
                      {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {/* Table */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Search size={16} className="text-gray-400" />
                <Input
                  placeholder="Cari nama atau NIK..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="h-8 text-sm"
                />
              </div>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full text-sm min-w-[520px]">
                  <thead>
                    <tr className="text-xs text-gray-500 bg-gray-50 uppercase">
                      <th className="px-3 py-2 text-left font-semibold rounded-l-lg">Nama</th>
                      <th className="px-3 py-2 text-center font-semibold">Hadir</th>
                      <th className="px-3 py-2 text-center font-semibold">Terlambat</th>
                      <th className="px-3 py-2 text-center font-semibold">Absen</th>
                      <th className="px-3 py-2 text-center font-semibold">Izin</th>
                      <th className="px-3 py-2 text-center font-semibold">Sakit</th>
                      <th className="px-3 py-2 text-center font-semibold rounded-r-lg">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredEmployees.map(e => (
                      <tr
                        key={e.userId}
                        onClick={() => openDetail(e.userId)}
                        className="hover:bg-orange-50 cursor-pointer transition-colors"
                      >
                        <td className="px-3 py-2.5 font-medium text-gray-800">
                          <span>{e.fullName}</span>
                          {e.employeeId && <span className="block text-xs text-gray-400">{e.employeeId}</span>}
                        </td>
                        <td className="px-3 py-2.5 text-center text-green-600 font-semibold">{e.hadir}</td>
                        <td className="px-3 py-2.5 text-center text-amber-500 font-semibold">{e.terlambat}</td>
                        <td className="px-3 py-2.5 text-center text-red-500 font-semibold">{e.absen}</td>
                        <td className="px-3 py-2.5 text-center text-blue-500">{e.izin}</td>
                        <td className="px-3 py-2.5 text-center text-purple-500">{e.sakit}</td>
                        <td className="px-3 py-2.5 text-center">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${e.rate >= 90 ? "bg-green-100 text-green-700" : e.rate >= 70 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>
                            {e.rate}%
                          </span>
                        </td>
                      </tr>
                    ))}
                    {filteredEmployees.length === 0 && (
                      <tr><td colSpan={7} className="px-3 py-8 text-center text-gray-400">Tidak ada data</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Detail Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[85vh] flex flex-col animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div>
                <h2 className="font-bold text-gray-800 text-sm">
                  {modalData ? modalData.fullName : "Memuat..."}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">{MONTHS[month - 1]} {year}</p>
              </div>
              <button onClick={() => setModalOpen(false)} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 p-5">
              {modalLoading && (
                <div className="flex justify-center py-8">
                  <Loader2 className="animate-spin text-orange-500 h-8 w-8" />
                </div>
              )}

              {modalData && !modalLoading && (
                <div className="space-y-4">
                  {/* Mini summary badges */}
                  <div className="flex flex-wrap gap-2">
                    {(["PRESENT", "LATE", "ABSENT", "PERMIT", "SICK", "DINAS"] as const).map(s => {
                      const key = s === "PRESENT" ? "hadir" : s === "LATE" ? "terlambat" : s === "ABSENT" ? "absen" : s === "PERMIT" ? "izin" : s === "SICK" ? "sakit" : "dinas"
                      const val = modalData.summary[key as keyof typeof modalData.summary]
                      return val > 0 ? (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: STATUS_COLORS[s] + "20", color: STATUS_COLORS[s] }}>
                          {STATUS_LABELS[s]}: {val}
                        </span>
                      ) : null
                    })}
                  </div>

                  {/* Day-by-day list */}
                  <div className="space-y-1">
                    {modalData.days.map(day => (
                      <div key={day.date} className="flex items-center justify-between py-2 border-b border-gray-50">
                        <div className="flex items-center gap-2">
                          <Calendar size={13} className="text-gray-400 shrink-0" />
                          <span className="text-gray-500 text-xs w-24">
                            {day.dayName}, {new Date(day.date + "T00:00:00").toLocaleDateString("id-ID", { day: "numeric", month: "short" })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {day.checkIn && (
                            <span className="text-xs text-gray-400">{day.checkIn}–{day.checkOut ?? "?"}</span>
                          )}
                          {day.leaveType && (
                            <span className="text-xs text-gray-400">{day.leaveType}</span>
                          )}
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ backgroundColor: STATUS_COLORS[day.status] + "20", color: STATUS_COLORS[day.status] }}
                          >
                            {STATUS_LABELS[day.status] ?? day.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

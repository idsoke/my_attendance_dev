"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useSession } from "next-auth/react"
import { Eye, Pencil, Trash2, Plus, Search, X, ChevronLeft, ChevronRight, Download, Calendar, MapPin } from "lucide-react"
import * as XLSX from "xlsx"
import { apiClient } from "@/lib/api-client"

interface Activity {
    id: string
    title: string
    description?: string
    date: string
    location?: string
    flag: number
    userId: string
    user: {
        fullName: string
        email: string
    }
    upa: {
        name: string
    }
    answers?: Record<string, any>
}

interface Pertanyaan {
    id: string
    pertanyaan: string
    tipeJawaban: "TEXTBOX" | "OPTION" | "TANGGAL" | "LISTBOX"
    opsiJawaban?: string[] | string
    isRequired: boolean
    sourceList?: string
    isActive: boolean
    type_kegiatan?: string
}

interface User {
    id: string
    fullName: string
}

interface Upa {
    id: string
    name: string
}

export default function MonitoringPage() {
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
    const [lookupContext, setLookupContext] = useState<"filter" | "form">("filter")

    // Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    // Modal states
    const [showForm, setShowForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
    const [isEditing, setIsEditing] = useState(false)

    // Form data
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        participantId: "",
        participantName: "",
    })

    // Pertanyaan for "Monitoring" type
    const [pertanyaans, setPertanyaans] = useState<Pertanyaan[]>([])
    const [answers, setAnswers] = useState<Record<string, any>>({})
    const [masterData, setMasterData] = useState<Record<string, any[]>>({})
    const [globalStartDate, setGlobalStartDate] = useState<Date>(new Date("2026-01-01"))

    useEffect(() => {
        fetchConfig()
        fetchActivities()
        fetchPertanyaans()
        fetchUsers()
        fetchUpas()
    }, [])

    const fetchConfig = async () => {
        try {
            const res = await apiClient("/api/config?key=MONITORING_START_DATE")
            if (res.ok) {
                const data = await res.json()
                if (data && data.value) {
                    setGlobalStartDate(new Date(data.value))
                }
            }
        } catch (error) {
            console.error("Error fetching config:", error)
        }
    }

    const fetchActivities = async () => {
        try {
            const res = await apiClient("/api/activities?flag=1")
            const data = await res.json()
            // Filter only flag = 1 (Monitoring)
            const monitoringActivities = (data.activities || []).filter((a: Activity) => a.flag === 1)
            setActivities(monitoringActivities)
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

    const fetchPertanyaans = async () => {
        try {
            const res = await apiClient("/api/master/pertanyaan")
            const data = await res.json()
            // Only get pertanyaans with type_kegiatan = "Monitoring"
            const monitoringPertanyaans = data.filter((p: any) => p.isActive && p.type_kegiatan === "Monitoring")
            const parsed = monitoringPertanyaans.map((p: any) => ({
                ...p,
                opsiJawaban: typeof p.opsiJawaban === "string" ? JSON.parse(p.opsiJawaban) : p.opsiJawaban,
            }))
            // Deduplicate questions based on question text
            const uniqueQuestions = new Map();
            parsed.forEach((p: any) => {
                if (!uniqueQuestions.has(p.pertanyaan)) {
                    uniqueQuestions.set(p.pertanyaan, p);
                }
            });
            const dedupedQuestions = Array.from(uniqueQuestions.values());

            setPertanyaans(dedupedQuestions)

            const sourcesToFetch = new Set<string>()
            dedupedQuestions.forEach((p: Pertanyaan) => {
                if (p.tipeJawaban === "LISTBOX" && p.sourceList) {
                    sourcesToFetch.add(p.sourceList)
                }
            })
            sourcesToFetch.forEach(source => fetchMasterSource(source))
        } catch (error) {
            console.error("Error fetching pertanyaan:", error)
        }
    }

    const fetchMasterSource = async (source: string) => {
        try {
            let endpoint = ""
            if (source === "DPC") endpoint = "/api/master/dpc"
            else if (source === "UPA") endpoint = "/api/master/upas"
            else if (source === "JENJANG") endpoint = "/api/master/jenjangs"

            if (endpoint) {
                const res = await apiClient(endpoint)
                if (res.ok) {
                    const data = await res.json()
                    setMasterData(prev => ({ ...prev, [source]: data }))
                }
            }
        } catch (error) {
            console.error(`Error fetching master source ${source}:`, error)
        }
    }

    const [periodInfo, setPeriodInfo] = useState({ week: 0, range: "" })

    useEffect(() => {
        calculatePeriodInfo()
    }, [globalStartDate])

    const getCurrentPeriodInfo = () => {
        try {
            const today = new Date();
            const start = new Date(globalStartDate);

            // Validate start date
            if (isNaN(start.getTime())) {
                return { week: 1, range: "-" }
            }

            start.setHours(0, 0, 0, 0);
            const now = new Date(today);
            now.setHours(0, 0, 0, 0);

            const diffTime = now.getTime() - start.getTime();
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            // Ensure week is at least 1
            const weekNumber = Math.max(1, Math.floor(diffDays / 7) + 1);

            const rangeStart = new Date(start);
            rangeStart.setDate(start.getDate() + (weekNumber - 1) * 7);

            const rangeEnd = new Date(rangeStart);
            rangeEnd.setDate(rangeStart.getDate() + 6);

            const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
            return {
                week: weekNumber,
                range: `${rangeStart.toLocaleDateString("id-ID", options)} - ${rangeEnd.toLocaleDateString("id-ID", options)}`
            }
        } catch (error) {
            console.error("Error calculating period info:", error);
            return { week: 1, range: "-" }
        }
    }

    const calculatePeriodInfo = () => {
        setPeriodInfo(getCurrentPeriodInfo())
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this monitoring activity?")) return
        try {
            const res = await apiClient(`/api/activities/${id}`, { method: "DELETE" })
            if (res.ok) fetchActivities()
        } catch (error) {
            console.error("Error deleting activity:", error)
        }
    }

    const handleEdit = (activity: Activity) => {
        setFormData({
            id: activity.id,
            title: activity.title,
            participantId: activity.answers?._participantId || "",
            participantName: activity.answers?._participantName || "",
        })
        setAnswers(activity.answers || {})
        setIsEditing(true)
        setShowForm(true)
    }

    const handleView = (activity: Activity) => {
        setSelectedActivity(activity)
        setShowDetail(true)
    }

    const handleAnswerChange = (questionId: string, value: any) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const url = isEditing ? `/api/activities/${formData.id}` : "/api/activities"
            const method = isEditing ? "PATCH" : "POST"
            // periodInfo from state
            const body: any = {
                title: formData.title,
                description: "",
                date: new Date().toISOString(),
                location: "",
                flag: 1, // Always set flag = 1 for Monitoring
                answers: {
                    ...answers,
                    _participantId: formData.participantId,
                    _participantName: formData.participantName,
                    _periodWeek: periodInfo.week,
                    _periodRange: periodInfo.range,
                },
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
        setFormData({ id: "", title: "", participantId: "", participantName: "" })
        setAnswers({})
        setShowForm(false)
        setIsEditing(false)
    }


    const getAnswerDisplay = (p: Pertanyaan, value: any) => {
        if (!value) return "-"
        if (p.tipeJawaban === "LISTBOX" && p.sourceList && masterData[p.sourceList]) {
            const item = masterData[p.sourceList].find((i: any) => i.id === value || i.code === value || i.name === value)
            return item ? (item.name || item.namaDpc || value) : value
        }
        return value
    }

    // Filter & Pagination
    const filteredActivities = activities.filter(item => {
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
        const dataToExport = filteredActivities.map(activity => {
            const row: any = {
                "Title": activity.title,
                "Date": new Date(activity.date).toLocaleDateString("id-ID"),
                "Location": activity.location || "-",
                "Description": activity.description || "-",
                "Created By": activity.user.fullName,
                "UPA": activity.upa.name,
            }
            pertanyaans.forEach(p => {
                const val = activity.answers?.[p.id]
                row[p.pertanyaan] = getAnswerDisplay(p, val)
            })
            return row
        })

        const worksheet = XLSX.utils.json_to_sheet(dataToExport)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, "Monitoring")
        XLSX.writeFile(workbook, "Monitoring_Export.xlsx")
    }

    return (
        <div className="space-y-6 relative">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Monitoring</h1>
                    <p className="text-gray-500">Manage monitoring activities</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        onClick={handleExport}
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-50"
                    >
                        <Download size={18} className="mr-2" />
                        Export
                    </Button>
                    <Button
                        onClick={() => { resetForm(); setShowForm(true); }}
                        className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-none"
                    >
                        <Plus size={18} className="mr-2" />
                        Add Monitoring
                    </Button>
                </div>
            </div>

            {/* Search & Filter */}
            <Card>
                <CardContent className="pt-6">
                    <div className={`grid grid-cols-1 gap-4 ${session?.user?.role === "USER" ? "md:grid-cols-1" : "md:grid-cols-3"}`}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                            <Input
                                placeholder="Search by title or description..."
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                            />
                        </div>
                        {session?.user?.role !== "USER" && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Filter by User</label>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Select User"
                                            value={selectedUserName}
                                            readOnly
                                            className="flex-1"
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setLookupContext("filter")
                                                setShowUserLookup(true)
                                            }}
                                        >
                                            <Search size={16} />
                                        </Button>
                                        {selectedUser && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => {
                                                    setSelectedUser("")
                                                    setSelectedUserName("")
                                                }}
                                            >
                                                <X size={16} />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Filter by UPA</label>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Select UPA"
                                            value={selectedUpaName}
                                            readOnly
                                            className="flex-1"
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setShowUpaLookup(true)}
                                        >
                                            <Search size={16} />
                                        </Button>
                                        {selectedUpa && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => {
                                                    setSelectedUpa("")
                                                    setSelectedUpaName("")
                                                }}
                                            >
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
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
                    <Card className="w-full max-w-2xl bg-white shadow-xl my-8">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>{isEditing ? "Edit Monitoring" : "Add New Monitoring"}</CardTitle>
                            <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Period Display Row */}
                                {/* Period Info Fields */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Periode Monitoring</label>
                                        <Input
                                            value={`Pekan ${periodInfo.week}`}
                                            readOnly
                                            className="bg-gray-100 font-semibold text-blue-800 border-blue-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Rentang Tanggal</label>
                                        <Input
                                            value={periodInfo.range}
                                            readOnly
                                            className="bg-gray-100 text-gray-700"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <Input
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Peserta UPA</label>
                                    <div className="flex gap-2">
                                        <Input
                                            value={formData.participantName}
                                            readOnly
                                            placeholder="Select User from List"
                                            className="flex-1 bg-gray-50"
                                            onClick={() => {
                                                setLookupContext("form")
                                                setShowUserLookup(true)
                                            }}
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setLookupContext("form")
                                                setShowUserLookup(true)
                                            }}
                                        >
                                            <Search size={16} />
                                        </Button>
                                        {formData.participantId && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => setFormData({ ...formData, participantId: "", participantName: "" })}
                                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <X size={16} />
                                            </Button>
                                        )}
                                    </div>
                                    <input type="hidden" value={formData.participantId} name="participantId" />
                                </div>

                                {/* Dynamic Questions for Monitoring */}
                                {pertanyaans.length > 0 && (
                                    <div className="border-t pt-4 mt-4">
                                        <h3 className="text-md font-semibold text-gray-800 mb-3">Monitoring Information</h3>
                                        <div className="space-y-4">
                                            {pertanyaans.map(p => (
                                                <div key={p.id}>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        {p.pertanyaan}{p.isRequired && <span className="text-red-500">*</span>}
                                                    </label>

                                                    {p.tipeJawaban === "TEXTBOX" && (
                                                        <Input
                                                            value={answers[p.id] || ""}
                                                            onChange={e => handleAnswerChange(p.id, e.target.value)}
                                                            required={p.isRequired}
                                                        />
                                                    )}

                                                    {p.tipeJawaban === "OPTION" && (
                                                        <select
                                                            className="w-full rounded-md border border-gray-200 p-2 text-sm focus:border-orange-500 focus:ring-orange-500 bg-white"
                                                            value={answers[p.id] || ""}
                                                            onChange={e => handleAnswerChange(p.id, e.target.value)}
                                                            required={p.isRequired}
                                                        >
                                                            <option value="">-- Pilih --</option>
                                                            {Array.isArray(p.opsiJawaban) && p.opsiJawaban.map((opt: string, idx: number) => (
                                                                <option key={idx} value={opt}>{opt}</option>
                                                            ))}
                                                        </select>
                                                    )}

                                                    {p.tipeJawaban === "TANGGAL" && (
                                                        <Input
                                                            type="date"
                                                            value={answers[p.id] || ""}
                                                            onChange={e => handleAnswerChange(p.id, e.target.value)}
                                                            required={p.isRequired}
                                                        />
                                                    )}

                                                    {p.tipeJawaban === "LISTBOX" && (
                                                        <select
                                                            className="w-full rounded-md border border-gray-200 p-2 text-sm focus:border-orange-500 focus:ring-orange-500 bg-white"
                                                            value={answers[p.id] || ""}
                                                            onChange={e => handleAnswerChange(p.id, e.target.value)}
                                                            required={p.isRequired}
                                                        >
                                                            <option value="">-- Pilih {p.sourceList} --</option>
                                                            {p.sourceList && masterData[p.sourceList] && masterData[p.sourceList].map((item: any) => (
                                                                <option key={item.id} value={item.name || item.namaDpc}>
                                                                    {item.name || item.namaDpc}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-end gap-2 pt-4">
                                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                                        {isEditing ? "Update Monitoring" : "Save Monitoring"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* User Lookup Modal */}
            {showUserLookup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-2xl bg-white shadow-xl animate-in fade-in zoom-in-95">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>Select User</CardTitle>
                            <button onClick={() => setShowUserLookup(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="mb-4">
                                <Input
                                    placeholder="Search by name..."
                                    value={userSearchText}
                                    onChange={e => setUserSearchText(e.target.value)}
                                />
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 sticky top-0">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users
                                            .filter(u => u.fullName.toLowerCase().includes(userSearchText.toLowerCase()))
                                            .map(user => (
                                                <tr key={user.id} className="border-b hover:bg-gray-50">
                                                    <td className="px-4 py-3 text-sm">{user.fullName}</td>
                                                    <td className="px-4 py-3">
                                                        <Button
                                                            size="sm"
                                                            onClick={() => {
                                                                if (lookupContext === "filter") {
                                                                    setSelectedUser(user.id)
                                                                    setSelectedUserName(user.fullName)
                                                                } else {
                                                                    setFormData(prev => ({ ...prev, participantId: user.id, participantName: user.fullName }))
                                                                }
                                                                setShowUserLookup(false)
                                                                setUserSearchText("")
                                                            }}
                                                        >
                                                            Select
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* UPA Lookup Modal */}
            {showUpaLookup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-2xl bg-white shadow-xl animate-in fade-in zoom-in-95">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>Select UPA</CardTitle>
                            <button onClick={() => setShowUpaLookup(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="mb-4">
                                <Input
                                    placeholder="Search by name..."
                                    value={upaSearchText}
                                    onChange={e => setUpaSearchText(e.target.value)}
                                />
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 sticky top-0">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {upas
                                            .filter(u => u.name.toLowerCase().includes(upaSearchText.toLowerCase()))
                                            .map(upa => (
                                                <tr key={upa.id} className="border-b hover:bg-gray-50">
                                                    <td className="px-4 py-3 text-sm">{upa.name}</td>
                                                    <td className="px-4 py-3">
                                                        <Button
                                                            size="sm"
                                                            onClick={() => {
                                                                setSelectedUpa(upa.name)
                                                                setSelectedUpaName(upa.name)
                                                                setShowUpaLookup(false)
                                                                setUpaSearchText("")
                                                            }}
                                                        >
                                                            Select
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* View Detail Modal */}
            {showDetail && selectedActivity && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-lg bg-white shadow-xl animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>Monitoring Details</CardTitle>
                            <button onClick={() => setShowDetail(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{selectedActivity.title}</h3>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{new Date(selectedActivity.date).toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        <span>{selectedActivity.location || "No location"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <p className="text-gray-700 whitespace-pre-wrap">{selectedActivity.description || "No description provided."}</p>
                            </div>

                            {selectedActivity.answers && Object.keys(selectedActivity.answers).length > 0 && (
                                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                    <h4 className="text-sm font-bold text-orange-800 mb-2 uppercase">Monitoring Info</h4>
                                    <div className="space-y-2">
                                        {pertanyaans.map(p => {
                                            const val = selectedActivity.answers?.[p.id]
                                            if (!val) return null
                                            return (
                                                <div key={p.id} className="text-sm">
                                                    <span className="block text-gray-500 text-xs">{p.pertanyaan}</span>
                                                    <span className="font-medium text-gray-900">{getAnswerDisplay(p, val)}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-4 text-sm pt-2">
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase">Created By</span>
                                    <span className="font-semibold text-gray-900">{selectedActivity.user.fullName}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase">UPA</span>
                                    <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold inline-block mt-1">{selectedActivity.upa.name}</span>
                                </div>
                                {selectedActivity.answers?._participantName && (
                                    <div className="col-span-2 border-t pt-2 mt-2">
                                        <span className="block text-gray-500 text-xs uppercase">Peserta UPA</span>
                                        <span className="font-semibold text-gray-900">{selectedActivity.answers._participantName}</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-end pt-4">
                                <Button onClick={() => setShowDetail(false)}>Close</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Data Table */}
            <Card className="border-none shadow-md">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-gray-700">Monitoring Activities</CardTitle>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Show:</span>
                            <select
                                className="rounded-md border border-gray-200 p-1 text-sm"
                                value={itemsPerPage}
                                onChange={e => {
                                    setItemsPerPage(Number(e.target.value))
                                    setCurrentPage(1)
                                }}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                            </select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 w-12 text-center">No</th>
                                    <th className="px-6 py-4 min-w-[300px]">Activity Info</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Periode</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Date</th>
                                    <th className="px-6 py-4 min-w-[200px]">Author</th>
                                    <th className="px-6 py-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-gray-500">Loading activities...</td>
                                    </tr>
                                ) : paginatedActivities.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-gray-500">No monitoring data found</td>
                                    </tr>
                                ) : (
                                    paginatedActivities.map((item, index) => (
                                        <tr key={item.id} className="bg-white border-b hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-center text-gray-500 font-medium">{startIndex + index + 1}</td>

                                            {/* Activity Info: Title, Participant, Location */}
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col gap-1.5">
                                                    <span className="font-semibold text-gray-900 text-base line-clamp-2" title={item.title}>
                                                        {item.title}
                                                    </span>
                                                    {item.answers?._participantName && (
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">Peserta:</span>
                                                            <span className="font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-200">
                                                                {item.answers._participantName}
                                                            </span>
                                                        </div>
                                                    )}
                                                    {item.location && (
                                                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                                                            <MapPin size={12} className="text-gray-400" />
                                                            <span>{item.location}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>

                                            {/* Periode */}
                                            <td className="px-6 py-4 align-top">
                                                {item.answers?._periodWeek ? (
                                                    <div className="flex flex-col gap-1">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100 w-fit">
                                                            Pekan {item.answers._periodWeek}
                                                        </span>
                                                        <span className="text-xs text-gray-500 whitespace-nowrap pl-1">
                                                            {item.answers._periodRange}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-300">-</span>
                                                )}
                                            </td>

                                            {/* Date */}
                                            <td className="px-6 py-4 align-top whitespace-nowrap">
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Calendar size={14} className="text-gray-400" />
                                                    {new Date(item.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' })}
                                                </div>
                                            </td>

                                            {/* Author: User + UPA */}
                                            <td className="px-6 py-4 align-top">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-medium text-gray-900">{item.user.fullName}</span>
                                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100 w-fit">
                                                        {item.upa.name}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Actions */}
                                            <td className="px-6 py-4 text-center align-top">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => handleView(item)}
                                                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100"
                                                        title="View Details"
                                                    >
                                                        <Eye size={16} />
                                                    </button>
                                                    {(session?.user?.role === "ADMIN" || session?.user?.id === item.userId) && (
                                                        <>
                                                            <button
                                                                onClick={() => handleEdit(item)}
                                                                className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors border border-transparent hover:border-amber-100"
                                                                title="Edit"
                                                            >
                                                                <Pencil size={16} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(item.id)}
                                                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                                                                title="Delete"
                                                            >
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-600">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredActivities.length)} of {filteredActivities.length} entries
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
                        <div className="flex gap-1">
                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                let pageNum: number
                                if (totalPages <= 5) {
                                    pageNum = i + 1
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1
                                } else if (currentPage >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i
                                } else {
                                    pageNum = currentPage - 2 + i
                                }
                                return (
                                    <Button
                                        key={pageNum}
                                        variant={currentPage === pageNum ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={currentPage === pageNum ? "bg-orange-600 hover:bg-orange-700" : ""}
                                    >
                                        {pageNum}
                                    </Button>
                                )
                            })}
                        </div>
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
            )}
        </div>
    )
}

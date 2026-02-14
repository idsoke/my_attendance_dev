"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useSession } from "next-auth/react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Eye, Pencil, Trash2, Plus, Search, MapPin, Calendar, X, ChevronLeft, ChevronRight, Download } from "lucide-react"
import * as XLSX from "xlsx"
import { apiClient } from "@/lib/api-client"

interface Activity {
    id: string
    title: string
    description?: string
    date: string
    location?: string
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
}

interface User {
    id: string
    fullName: string
}

interface Upa {
    id: string
    name: string
}

export default function ActivitiesPage() {
    const { data: session } = useSession()
    const { t } = useLanguage()
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

    // Form data (static fields)
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        description: "",
        date: "",
        location: "",
    })

    // Pertanyaan (dynamic fields)
    const [pertanyaans, setPertanyaans] = useState<Pertanyaan[]>([])
    const [answers, setAnswers] = useState<Record<string, any>>({})

    // Master Data Cache for LISTBOX
    const [masterData, setMasterData] = useState<Record<string, any[]>>({})

    useEffect(() => {
        fetchActivities()
        fetchPertanyaans()
        fetchUsers()
        fetchUpas()
    }, [])

    const fetchActivities = async () => {
        try {
            const res = await apiClient("/api/activities")
            const data = await res.json()
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

    const fetchPertanyaans = async () => {
        try {
            const res = await apiClient("/api/master/pertanyaan")
            const data = await res.json()
            const active = data.filter((p: any) => p.isActive)

            const parsed = active.map((p: any) => ({
                ...p,
                opsiJawaban: typeof p.opsiJawaban === "string" ? JSON.parse(p.opsiJawaban) : p.opsiJawaban,
            }))
            setPertanyaans(parsed)

            const sourcesToFetch = new Set<string>()
            parsed.forEach((p: Pertanyaan) => {
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

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this activity?")) return
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
            description: activity.description || "",
            date: new Date(activity.date).toISOString().split('T')[0],
            location: activity.location || "",
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
            const body: any = {
                title: formData.title,
                description: formData.description,
                date: formData.date,
                location: formData.location,
                answers: answers,
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
        setFormData({ id: "", title: "", description: "", date: "", location: "" })
        setAnswers({})
        setShowForm(false)
        setIsEditing(false)
    }

    // Filter & Pagination
    const filteredActivities = activities.filter(item => {
        const matchText = searchText === "" ||
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchText.toLowerCase())

        // For USER role, only apply text search filter
        if (session?.user?.role === "USER") {
            return matchText
        }

        // For ADMIN and EDITOR, apply all filters
        const matchUser = selectedUser === "" || item.userId === selectedUser
        const matchUpa = selectedUpa === "" || item.upa.name === selectedUpa
        return matchText && matchUser && matchUpa
    })

    const totalPages = Math.ceil(filteredActivities.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedActivities = filteredActivities.slice(startIndex, startIndex + itemsPerPage)

    const getAnswerDisplay = (p: Pertanyaan, value: any) => {
        if (!value) return "-"
        if (p.tipeJawaban === "LISTBOX" && p.sourceList && masterData[p.sourceList]) {
            const item = masterData[p.sourceList].find((i: any) => i.id === value || i.code === value || i.name === value)
            return item ? (item.name || item.namaDpc || value) : value
        }
        return value
    }

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

            // Add dynamic answers
            pertanyaans.forEach(p => {
                const val = activity.answers?.[p.id]
                row[p.pertanyaan] = getAnswerDisplay(p, val)
            })

            return row
        })

        const worksheet = XLSX.utils.json_to_sheet(dataToExport)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, "Activities")
        XLSX.writeFile(workbook, "Activities_Export.xlsx")
    }

    return (
        <div className="space-y-6 relative">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{t("activities.title")}</h1>
                    <p className="text-gray-500">{t("activities.subtitle")}</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        onClick={handleExport}
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-50"
                    >
                        <Download size={18} className="mr-2" />
                        {t("activities.export")}
                    </Button>
                    <Button
                        onClick={() => { resetForm(); setShowForm(true); }}
                        className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-none"
                    >
                        <Plus size={18} className="mr-2" />
                        {t("activities.add")}
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
                                placeholder={t("activities.search")}
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                            />
                        </div>
                        {session?.user?.role !== "USER" && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("activities.filterUser")}</label>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder={t("activities.selectUser")}
                                            value={selectedUserName}
                                            readOnly
                                            className="flex-1"
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setShowUserLookup(true)}
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("activities.filterUpa")}</label>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder={t("activities.selectUpa")}
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
                    <Card className="w-full max-w-2xl bg-white shadow-xl animate-in fade-in zoom-in-95 my-8">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>{isEditing ? "Edit Activity" : "Add New Activity"}</CardTitle>
                            <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                        <Input
                                            value={formData.title}
                                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                        <Input
                                            type="date"
                                            value={formData.date}
                                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                    <Input
                                        value={formData.location}
                                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
                                        rows={3}
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>

                                <div className="border-t pt-4 mt-4">
                                    <h3 className="text-md font-semibold text-gray-800 mb-3">Additional Information</h3>
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

                                <div className="flex justify-end gap-2 pt-4">
                                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                                        {isEditing ? "Update Activity" : "Create Activity"}
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
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Jenjang</th>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users
                                            .filter(u => u.fullName.toLowerCase().includes(userSearchText.toLowerCase()))
                                            .map(user => (
                                                <tr key={user.id} className="border-b hover:bg-gray-50">
                                                    <td className="px-4 py-3 text-sm">{user.fullName}</td>
                                                    <td className="px-4 py-3 text-sm">{(user as any).jenjang?.name || "-"}</td>
                                                    <td className="px-4 py-3">
                                                        <Button
                                                            size="sm"
                                                            onClick={() => {
                                                                setSelectedUser(user.id)
                                                                setSelectedUserName(user.fullName)
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
                            <CardTitle>Activity Details</CardTitle>
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
                                    <h4 className="text-sm font-bold text-orange-800 mb-2 uppercase">Additional Info</h4>
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
                            </div>
                            <div className="flex justify-end pt-4">
                                <Button onClick={() => setShowDetail(false)}>Close</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Activities List */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {paginatedActivities.length === 0 ? (
                    <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500">{t("activities.noActivities")}</p>
                    </div>
                ) : (
                    paginatedActivities.map(activity => (
                        <div key={activity.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{activity.title}</h3>
                                    <div className="flex gap-1">
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
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px]">{activity.description || "No description provided."}</p>
                                <div className="space-y-2 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-orange-500" />
                                        <span>{new Date(activity.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} className="text-orange-500" />
                                        <span>{activity.location || "No location"}</span>
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

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-600">
                        {t("activities.showing")} {startIndex + 1} {t("activities.to")} {Math.min(startIndex + itemsPerPage, filteredActivities.length)} {t("activities.of")} {filteredActivities.length} activities
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
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <Button
                                    key={page}
                                    variant={currentPage === page ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setCurrentPage(page)}
                                    className={currentPage === page ? "bg-orange-600 hover:bg-orange-700" : ""}
                                >
                                    {page}
                                </Button>
                            ))}
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

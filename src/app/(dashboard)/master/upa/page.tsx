"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, Pencil, Trash2, Plus, Search, X } from "lucide-react"
import { apiClient } from "@/lib/api-client"

interface Dpc {
    id: string
    namaDpc: string
}

interface Upa {
    id: string
    code: string
    name: string
    location?: string
    dpcId?: string
    dpc?: Dpc
    _count: {
        users: number
        activities: number
    }
}

export default function UpaPage() {
    const [upas, setUpas] = useState<Upa[]>([])
    const [dpcs, setDpcs] = useState<Dpc[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    // Modal States
    const [showForm, setShowForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [selectedUpa, setSelectedUpa] = useState<Upa | null>(null)
    const [isEditing, setIsEditing] = useState(false)

    const [formData, setFormData] = useState({ id: "", code: "", name: "", location: "", dpcId: "" })

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const [upaRes, dpcRes] = await Promise.all([
                apiClient("/api/master/upas"),
                apiClient("/api/master/dpc")
            ])

            if (upaRes.ok) {
                const data = await upaRes.json()
                setUpas(data)
            }
            if (dpcRes.ok) {
                const data = await dpcRes.json()
                setDpcs(data)
            }
        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this UPA?")) return

        try {
            const res = await apiClient(`/api/master/upas/${id}`, { method: "DELETE" })
            if (res.ok) {
                fetchData() // Refresh both just in case
            }
        } catch (error) {
            console.error("Error deleting UPA:", error)
        }
    }

    const handleEdit = (upa: Upa) => {
        setFormData({
            id: upa.id,
            code: upa.code,
            name: upa.name,
            location: upa.location || "",
            dpcId: upa.dpcId || ""
        })
        setIsEditing(true)
        setShowForm(true)
    }

    const handleView = (upa: Upa) => {
        setSelectedUpa(upa)
        setShowDetail(true)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const url = isEditing
                ? `/api/master/upas/${formData.id}`
                : "/api/master/upas"

            const method = isEditing ? "PATCH" : "POST"

            const body = {
                code: formData.code,
                name: formData.name,
                location: formData.location,
                dpcId: formData.dpcId || null
            }

            const res = await apiClient(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })

            if (res.ok) {
                resetForm()
                // Refresh only UPAs as DPCs don't change here
                const upaRes = await apiClient("/api/master/upas")
                if (upaRes.ok) {
                    setUpas(await upaRes.json())
                }
            }
        } catch (error) {
            console.error("Error saving UPA:", error)
        }
    }

    const resetForm = () => {
        setFormData({ id: "", code: "", name: "", location: "", dpcId: "" })
        setShowForm(false)
        setIsEditing(false)
    }

    const filteredUpas = upas.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.code.toLowerCase().includes(search.toLowerCase()) ||
        (item.dpc?.namaDpc || "").toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 relative">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Data UPA</h1>
                    <p className="text-gray-500">Manage Unit Pelaksana Aktivitas</p>
                </div>
                <Button
                    onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-none"
                >
                    <Plus size={18} className="mr-2" />
                    Add New UPA
                </Button>
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-2xl bg-white shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>{isEditing ? "Edit UPA" : "Add New UPA"}</CardTitle>
                            <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Code</label>
                                        <Input
                                            value={formData.code}
                                            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                                            required
                                            className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <Input
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                        <Input
                                            value={formData.location}
                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                            className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">DPC</label>
                                        <select
                                            className="w-full rounded-md border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            value={formData.dpcId}
                                            onChange={(e) => setFormData({ ...formData, dpcId: e.target.value })}
                                        >
                                            <option value="">Select DPC</option>
                                            {dpcs.map(dpc => (
                                                <option key={dpc.id} value={dpc.id}>{dpc.namaDpc}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 pt-4">
                                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                                        {isEditing ? "Update UPA" : "Save UPA"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* View Detail Modal */}
            {showDetail && selectedUpa && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-lg bg-white shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>UPA Details</CardTitle>
                            <button onClick={() => setShowDetail(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-2xl">
                                    {selectedUpa.name[0]}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{selectedUpa.name}</h3>
                                    <p className="text-gray-500">Code: {selectedUpa.code}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <span className="block text-gray-500 text-xs uppercase mb-1">Location</span>
                                    <p className="text-gray-700">{selectedUpa.location || "No location provided."}</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <span className="block text-gray-500 text-xs uppercase mb-1">DPC</span>
                                    <p className="text-gray-700 font-medium">{selectedUpa.dpc?.namaDpc || "-"}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex flex-col items-center">
                                    <span className="text-blue-700 font-medium text-sm">Total Users</span>
                                    <span className="text-2xl font-bold text-blue-700">{selectedUpa._count.users}</span>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg border border-green-100 flex flex-col items-center">
                                    <span className="text-green-700 font-medium text-sm">Total Activities</span>
                                    <span className="text-2xl font-bold text-green-700">{selectedUpa._count.activities}</span>
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button onClick={() => setShowDetail(false)}>Close</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            <Card className="border-none shadow-md">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-gray-700">List UPA</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <Input
                                placeholder="Search UPA..."
                                className="pl-10"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">Code</th>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Location</th>
                                    <th className="px-6 py-3">DPC</th>
                                    <th className="px-6 py-3">Stats</th>
                                    <th className="px-6 py-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-4 text-center">Loading...</td>
                                    </tr>
                                ) : filteredUpas.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-4 text-center">No data found</td>
                                    </tr>
                                ) : (
                                    filteredUpas.map((item) => (
                                        <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">{item.code}</td>
                                            <td className="px-6 py-4">{item.name}</td>
                                            <td className="px-6 py-4 text-gray-500">{item.location || "-"}</td>
                                            <td className="px-6 py-4 text-gray-500">
                                                {item.dpc ? (
                                                    <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs font-semibold">
                                                        {item.dpc.namaDpc}
                                                    </span>
                                                ) : "-"}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                                                        {item._count.users} Users
                                                    </span>
                                                    <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                                                        {item._count.activities} Actv
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => handleView(item)}
                                                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                                                        title="View"
                                                    >
                                                        <Eye size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleEdit(item)}
                                                        className="p-2 text-yellow-500 hover:bg-yellow-50 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Pencil size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(item.id)}
                                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
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
        </div>
    )
}

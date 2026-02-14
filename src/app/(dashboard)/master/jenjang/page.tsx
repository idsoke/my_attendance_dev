"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, Pencil, Trash2, Plus, Search, X } from "lucide-react"
import { apiClient } from "@/lib/api-client"

interface Jenjang {
    id: string
    code: string
    name: string
    description?: string
    _count: {
        users: number
    }
}

export default function JenjangPage() {
    const [jenjangs, setJenjangs] = useState<Jenjang[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    // Modal States
    const [showForm, setShowForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [selectedJenjang, setSelectedJenjang] = useState<Jenjang | null>(null)
    const [isEditing, setIsEditing] = useState(false)

    const [formData, setFormData] = useState({ id: "", code: "", name: "", description: "" })

    useEffect(() => {
        fetchJenjangs()
    }, [])

    const fetchJenjangs = async () => {
        try {
            const res = await apiClient("/api/master/jenjangs")
            if (res.ok) {
                const data = await res.json()
                setJenjangs(data)
            }
        } catch (error) {
            console.error("Error fetching jenjangs:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this Jenjang?")) return

        try {
            const res = await apiClient(`/api/master/jenjangs/${id}`, { method: "DELETE" })
            if (res.ok) {
                fetchJenjangs()
            }
        } catch (error) {
            console.error("Error deleting jenjang:", error)
        }
    }

    const handleEdit = (jenjang: Jenjang) => {
        setFormData({
            id: jenjang.id,
            code: jenjang.code,
            name: jenjang.name,
            description: jenjang.description || ""
        })
        setIsEditing(true)
        setShowForm(true)
    }

    const handleView = (jenjang: Jenjang) => {
        setSelectedJenjang(jenjang)
        setShowDetail(true)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const url = isEditing
                ? `/api/master/jenjangs/${formData.id}`
                : "/api/master/jenjangs"

            const method = isEditing ? "PATCH" : "POST"

            const res = await apiClient(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    code: formData.code,
                    name: formData.name,
                    description: formData.description
                }),
            })

            if (res.ok) {
                resetForm()
                fetchJenjangs()
            }
        } catch (error) {
            console.error("Error saving jenjang:", error)
        }
    }

    const resetForm = () => {
        setFormData({ id: "", code: "", name: "", description: "" })
        setShowForm(false)
        setIsEditing(false)
    }

    const filteredJenjangs = jenjangs.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.code.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 relative">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Data Jenjang</h1>
                    <p className="text-gray-500">Manage career levels and hierarchy</p>
                </div>
                <Button
                    onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-none"
                >
                    <Plus size={18} className="mr-2" />
                    Add New Jenjang
                </Button>
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-2xl bg-white shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>{isEditing ? "Edit Jenjang" : "Add New Jenjang"}</CardTitle>
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
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <Input
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                                <div className="flex justify-end gap-2 pt-4">
                                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                                        {isEditing ? "Update Jenjang" : "Save Jenjang"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* View Detail Modal */}
            {showDetail && selectedJenjang && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-lg bg-white shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>Jenjang Details</CardTitle>
                            <button onClick={() => setShowDetail(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-2xl">
                                    {selectedJenjang.name[0]}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{selectedJenjang.name}</h3>
                                    <p className="text-gray-500">Code: {selectedJenjang.code}</p>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <span className="block text-gray-500 text-xs uppercase mb-1">Description</span>
                                <p className="text-gray-700">{selectedJenjang.description || "No description provided."}</p>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-between">
                                <span className="text-blue-700 font-medium">Total Users</span>
                                <span className="text-2xl font-bold text-blue-700">{selectedJenjang._count.users}</span>
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
                        <CardTitle className="text-gray-700">List Jenjang</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <Input
                                placeholder="Search jenjang..."
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
                                    <th className="px-6 py-3">Description</th>
                                    <th className="px-6 py-3">Users Count</th>
                                    <th className="px-6 py-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-4 text-center">Loading...</td>
                                    </tr>
                                ) : filteredJenjangs.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-4 text-center">No data found</td>
                                    </tr>
                                ) : (
                                    filteredJenjangs.map((item) => (
                                        <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">{item.code}</td>
                                            <td className="px-6 py-4">{item.name}</td>
                                            <td className="px-6 py-4 text-gray-500">{item.description || "-"}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                                                    {item._count.users} Users
                                                </span>
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

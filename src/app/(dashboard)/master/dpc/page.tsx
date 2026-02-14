"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, Pencil, Trash2, Plus, Search, X } from "lucide-react"
import { apiClient } from "@/lib/api-client"

interface Dpc {
    id: string
    kodeDpc: string
    namaDpc: string
    isActive: boolean
}

export default function DpcPage() {
    const [dpcs, setDpcs] = useState<Dpc[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    // Modal States
    const [showForm, setShowForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [selectedDpc, setSelectedDpc] = useState<Dpc | null>(null)
    const [isEditing, setIsEditing] = useState(false)

    const [formData, setFormData] = useState({ id: "", kodeDpc: "", namaDpc: "" })

    useEffect(() => {
        fetchDpcs()
    }, [])

    const fetchDpcs = async () => {
        try {
            const res = await apiClient("/api/master/dpc")
            if (res.ok) {
                const data = await res.json()
                setDpcs(data)
            }
        } catch (error) {
            console.error("Error fetching DPC:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this DPC?")) return

        try {
            const res = await apiClient(`/api/master/dpc/${id}`, { method: "DELETE" })
            if (res.ok) {
                fetchDpcs()
            }
        } catch (error) {
            console.error("Error deleting DPC:", error)
        }
    }

    const handleEdit = (dpc: Dpc) => {
        setFormData({
            id: dpc.id,
            kodeDpc: dpc.kodeDpc,
            namaDpc: dpc.namaDpc,
        })
        setIsEditing(true)
        setShowForm(true)
    }

    const handleView = (dpc: Dpc) => {
        setSelectedDpc(dpc)
        setShowDetail(true)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const url = isEditing
                ? `/api/master/dpc/${formData.id}`
                : "/api/master/dpc"

            const method = isEditing ? "PATCH" : "POST"

            const res = await apiClient(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    kodeDpc: formData.kodeDpc,
                    namaDpc: formData.namaDpc,
                }),
            })

            if (res.ok) {
                resetForm()
                fetchDpcs()
            } else {
                const error = await res.text()
                alert(error)
            }
        } catch (error) {
            console.error("Error saving DPC:", error)
        }
    }

    const resetForm = () => {
        setFormData({ id: "", kodeDpc: "", namaDpc: "" })
        setShowForm(false)
        setIsEditing(false)
    }

    const filteredDpcs = dpcs.filter(item =>
        item.namaDpc.toLowerCase().includes(search.toLowerCase()) ||
        item.kodeDpc.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 relative">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Data DPC</h1>
                    <p className="text-gray-500">Manage Dewan Pimpinan Cabang</p>
                </div>
                <Button
                    onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-none"
                >
                    <Plus size={18} className="mr-2" />
                    Add New DPC
                </Button>
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-lg bg-white shadow-xl animate-in fade-in zoom-in-95">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>{isEditing ? "Edit DPC" : "Add New DPC"}</CardTitle>
                            <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Kode DPC</label>
                                    <Input
                                        value={formData.kodeDpc}
                                        onChange={(e) => setFormData({ ...formData, kodeDpc: e.target.value })}
                                        required
                                        className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama DPC</label>
                                    <Input
                                        value={formData.namaDpc}
                                        onChange={(e) => setFormData({ ...formData, namaDpc: e.target.value })}
                                        required
                                        className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                                <div className="flex justify-end gap-2 pt-4">
                                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                                        {isEditing ? "Update DPC" : "Save DPC"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* View Detail Modal */}
            {showDetail && selectedDpc && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-md bg-white shadow-xl animate-in fade-in zoom-in-95">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>DPC Details</CardTitle>
                            <button onClick={() => setShowDetail(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-2xl">
                                    {selectedDpc.namaDpc[0]}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{selectedDpc.namaDpc}</h3>
                                    <p className="text-gray-500">Kode: {selectedDpc.kodeDpc}</p>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-100 flex items-center justify-between">
                                <span className="text-green-700 font-medium">Status</span>
                                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs font-bold">
                                    {selectedDpc.isActive ? "ACTIVE" : "INACTIVE"}
                                </span>
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
                        <CardTitle className="text-gray-700">List DPC</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <Input
                                placeholder="Search DPC..."
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
                                    <th className="px-6 py-3">Kode</th>
                                    <th className="px-6 py-3">Nama DPC</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-4 text-center">Loading...</td>
                                    </tr>
                                ) : filteredDpcs.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-4 text-center">No data found</td>
                                    </tr>
                                ) : (
                                    filteredDpcs.map((item) => (
                                        <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">{item.kodeDpc}</td>
                                            <td className="px-6 py-4">{item.namaDpc}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                                    {item.isActive ? 'Active' : 'Inactive'}
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

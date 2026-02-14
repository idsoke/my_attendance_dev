"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useSession } from "next-auth/react"
import { Eye, Pencil, Trash2, Plus, X } from "lucide-react"
import { apiClient } from "@/lib/api-client"

interface Translation {
    id: string
    variableName: string
    indonesiaValue: string
    englishValue: string
    isActive: boolean
}

export default function TranslationsPage() {
    const { data: session } = useSession()
    const [translations, setTranslations] = useState<Translation[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    const [showForm, setShowForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [selectedTranslation, setSelectedTranslation] = useState<Translation | null>(null)
    const [isEditing, setIsEditing] = useState(false)

    const [formData, setFormData] = useState({
        id: "",
        variableName: "",
        indonesiaValue: "",
        englishValue: "",
        isActive: true,
    })

    useEffect(() => {
        fetchTranslations()
    }, [])

    const fetchTranslations = async () => {
        try {
            const res = await apiClient("/api/master/translations")
            const data = await res.json()
            setTranslations(data || [])
        } catch (error) {
            console.error("Error fetching translations:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this translation?")) return
        try {
            const res = await apiClient(`/api/master/translations/${id}`, { method: "DELETE" })
            if (res.ok) fetchTranslations()
        } catch (error) {
            console.error("Error deleting translation:", error)
        }
    }

    const handleEdit = (translation: Translation) => {
        setFormData(translation)
        setIsEditing(true)
        setShowForm(true)
    }

    const handleView = (translation: Translation) => {
        setSelectedTranslation(translation)
        setShowDetail(true)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const url = isEditing ? `/api/master/translations/${formData.id}` : "/api/master/translations"
            const method = isEditing ? "PATCH" : "POST"
            const res = await apiClient(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            if (res.ok) {
                resetForm()
                fetchTranslations()
            } else {
                const err = await res.text()
                alert(err)
            }
        } catch (error) {
            console.error("Error saving translation:", error)
        }
    }

    const resetForm = () => {
        setFormData({ id: "", variableName: "", indonesiaValue: "", englishValue: "", isActive: true })
        setShowForm(false)
        setIsEditing(false)
    }

    const filteredTranslations = translations.filter(item =>
        item.variableName.toLowerCase().includes(search.toLowerCase()) ||
        item.indonesiaValue.toLowerCase().includes(search.toLowerCase()) ||
        item.englishValue.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Master Kata</h1>
                    <p className="text-gray-500">Manage translations for multi-language support</p>
                </div>
                <Button
                    onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-none"
                >
                    <Plus size={18} className="mr-2" />
                    Add Translation
                </Button>
            </div>

            <Card>
                <CardContent className="pt-6">
                    <Input
                        placeholder="Search translations..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </CardContent>
            </Card>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-2xl bg-white shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>{isEditing ? "Edit Translation" : "Add New Translation"}</CardTitle>
                            <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Variable Name</label>
                                    <Input
                                        value={formData.variableName}
                                        onChange={e => setFormData({ ...formData, variableName: e.target.value })}
                                        required
                                        disabled={isEditing}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Indonesia Value</label>
                                    <Input
                                        value={formData.indonesiaValue}
                                        onChange={e => setFormData({ ...formData, indonesiaValue: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">English Value</label>
                                    <Input
                                        value={formData.englishValue}
                                        onChange={e => setFormData({ ...formData, englishValue: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.isActive}
                                        onChange={e => setFormData({ ...formData, isActive: e.target.checked })}
                                    />
                                    <label className="text-sm font-medium text-gray-700">Active</label>
                                </div>
                                <div className="flex justify-end gap-2 pt-4">
                                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                                        {isEditing ? "Update" : "Create"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* View Detail Modal */}
            {showDetail && selectedTranslation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-lg bg-white shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>Translation Details</CardTitle>
                            <button onClick={() => setShowDetail(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div>
                                <span className="block text-gray-500 text-xs uppercase">Variable Name</span>
                                <span className="font-semibold text-gray-900">{selectedTranslation.variableName}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs uppercase">Indonesia Value</span>
                                <span className="font-semibold text-gray-900">{selectedTranslation.indonesiaValue}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs uppercase">English Value</span>
                                <span className="font-semibold text-gray-900">{selectedTranslation.englishValue}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs uppercase">Status</span>
                                <span className={`px-2 py-1 rounded-full text-xs ${selectedTranslation.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                    {selectedTranslation.isActive ? "Active" : "Inactive"}
                                </span>
                            </div>
                            <div className="flex justify-end pt-4">
                                <Button onClick={() => setShowDetail(false)}>Close</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Table */}
            <Card>
                <CardContent className="pt-6">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Variable Name</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Indonesia</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">English</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTranslations.map(translation => (
                                <tr key={translation.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3 text-sm">{translation.variableName}</td>
                                    <td className="px-4 py-3 text-sm">{translation.indonesiaValue}</td>
                                    <td className="px-4 py-3 text-sm">{translation.englishValue}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 rounded-full text-xs ${translation.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                            {translation.isActive ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex gap-2">
                                            <button onClick={() => handleView(translation)} className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-md">
                                                <Eye size={16} />
                                            </button>
                                            <button onClick={() => handleEdit(translation)} className="p-1.5 text-yellow-500 hover:bg-yellow-50 rounded-md">
                                                <Pencil size={16} />
                                            </button>
                                            <button onClick={() => handleDelete(translation.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-md">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    )
}

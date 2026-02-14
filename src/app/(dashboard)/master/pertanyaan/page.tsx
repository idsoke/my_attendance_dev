"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, Pencil, Trash2, Plus, Search, X, MinusCircle, GripVertical } from "lucide-react"
import { apiClient } from "@/lib/api-client"
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Pertanyaan {
    id: string
    pertanyaan: string
    tipeJawaban: "TEXTBOX" | "OPTION" | "TANGGAL" | "LISTBOX"
    opsiJawaban?: string[] | string
    isRequired: boolean
    sourceList?: string
    type_kegiatan?: string
    isActive: boolean
    urutan?: number
}

// Sortable Row Component
function SortableRow({ item, children, ...props }: { item: Pertanyaan, children: React.ReactNode }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 2 : 1,
        backgroundColor: isDragging ? '#fcfcfc' : undefined,
        boxShadow: isDragging ? '0px 5px 15px rgba(0,0,0,0.1)' : undefined,
        position: 'relative' as 'relative',
    };

    return (
        <tr ref={setNodeRef} style={style} className={`border-b hover:bg-gray-50 ${isDragging ? 'opacity-80' : ''}`} {...props}>
            <td className="px-4 py-4 text-center cursor-grab touch-none" {...attributes} {...listeners}>
                <GripVertical className="inline text-gray-400 hover:text-gray-600" size={20} />
            </td>
            {children}
        </tr>
    );
}

const SOURCE_LIST_OPTIONS = ["DPC", "UPA", "JENJANG"]

export default function PertanyaanPage() {
    const [pertanyaans, setPertanyaans] = useState<Pertanyaan[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    // DnD Sensors
    const sensors = useSensors(
        useSensor(PointerSensor, { // Use PointerSensor instead of Mouse/Touch for better support
            activationConstraint: {
                distance: 5, // Wait 5px movement before drag starts (prevents accidental clicks)
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    // Modal States
    const [showForm, setShowForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [selectedPertanyaan, setSelectedPertanyaan] = useState<Pertanyaan | null>(null)
    const [isEditing, setIsEditing] = useState(false)

    // Form State
    const [formData, setFormData] = useState({
        id: "",
        pertanyaan: "",
        tipeJawaban: "TEXTBOX" as "TEXTBOX" | "OPTION" | "TANGGAL" | "LISTBOX",
        isRequired: true,
        sourceList: "",
        type_kegiatan: "",
        isActive: true
    })

    // Dynamic Options State for OPTION type
    const [opsiList, setOpsiList] = useState<string[]>([""])

    useEffect(() => {
        fetchPertanyaans()
    }, [])

    const fetchPertanyaans = async () => {
        try {
            const res = await apiClient("/api/master/pertanyaan")
            if (res.ok) {
                const data = await res.json()
                // Parse opsiJawaban if it's a string
                const parsedData = data.map((item: any) => ({
                    ...item,
                    opsiJawaban: typeof item.opsiJawaban === 'string' ? JSON.parse(item.opsiJawaban) : item.opsiJawaban
                }))
                setPertanyaans(parsedData)
            }
        } catch (error) {
            console.error("Error fetching Pertanyaan:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setPertanyaans((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                const newItems = arrayMove(items, oldIndex, newIndex);

                // Save new order
                saveOrder(newItems);

                return newItems;
            });
        }
    };

    const saveOrder = async (items: Pertanyaan[]) => {
        try {
            const payload = items.map((item, index) => ({
                id: item.id,
                urutan: index + 1
            }));
            await apiClient("/api/master/pertanyaan/reorder", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: payload })
            });
        } catch (error) {
            console.error("Error updating order:", error);
        }
    }


    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this Pertanyaan?")) return

        try {
            const res = await apiClient(`/api/master/pertanyaan/${id}`, { method: "DELETE" })
            if (res.ok) {
                fetchPertanyaans()
            }
        } catch (error) {
            console.error("Error deleting Pertanyaan:", error)
        }
    }

    const handleEdit = (item: Pertanyaan) => {
        setFormData({
            id: item.id,
            pertanyaan: item.pertanyaan,
            tipeJawaban: item.tipeJawaban,
            isRequired: item.isRequired,
            sourceList: item.sourceList || "",
            type_kegiatan: item.type_kegiatan || "",
            isActive: item.isActive
        })

        // Handle Opsi List
        if (item.tipeJawaban === "OPTION" && Array.isArray(item.opsiJawaban)) {
            setOpsiList(item.opsiJawaban)
        } else {
            setOpsiList([""])
        }

        setIsEditing(true)
        setShowForm(true)
    }

    const handleView = (item: Pertanyaan) => {
        setSelectedPertanyaan(item)
        setShowDetail(true)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const url = isEditing
                ? `/api/master/pertanyaan/${formData.id}`
                : "/api/master/pertanyaan"

            const method = isEditing ? "PATCH" : "POST"

            // Prepare body
            const body: any = {
                pertanyaan: formData.pertanyaan,
                tipeJawaban: formData.tipeJawaban,
                isRequired: formData.isRequired,
                type_kegiatan: formData.type_kegiatan,
                isActive: formData.isActive
            }

            if (formData.tipeJawaban === "OPTION") {
                // Filter empty options
                const validOptions = opsiList.filter(opt => opt.trim() !== "")
                if (validOptions.length === 0) {
                    alert("Please add at least one option for OPTION type")
                    return
                }
                body.opsiJawaban = validOptions
            }

            if (formData.tipeJawaban === "LISTBOX") {
                if (!formData.sourceList) {
                    alert("Please select a Source List for LISTBOX type")
                    return
                }
                body.sourceList = formData.sourceList
            }

            const res = await apiClient(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })

            if (res.ok) {
                resetForm()
                fetchPertanyaans()
            } else {
                const error = await res.text()
                alert(error)
            }
        } catch (error) {
            console.error("Error saving Pertanyaan:", error)
        }
    }

    const resetForm = () => {
        setFormData({
            id: "",
            pertanyaan: "",
            tipeJawaban: "TEXTBOX",
            isRequired: true,
            sourceList: "",
            type_kegiatan: "",
            isActive: true
        })
        setOpsiList([""])
        setShowForm(false)
        setIsEditing(false)
    }

    // Helper for Opsi List
    const handleOpsiChange = (index: number, value: string) => {
        const newList = [...opsiList]
        newList[index] = value
        setOpsiList(newList)
    }

    const addOpsi = () => {
        setOpsiList([...opsiList, ""])
    }

    const removeOpsi = (index: number) => {
        const newList = opsiList.filter((_, i) => i !== index)
        setOpsiList(newList)
    }

    const filteredData = pertanyaans.filter(item =>
        item.pertanyaan.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 relative">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Master Pertanyaan</h1>
                    <p className="text-gray-500">Manage form questions and types (Draft & Drop Order)</p>
                </div>
                <Button
                    onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-none"
                >
                    <Plus size={18} className="mr-2" />
                    Add Question
                </Button>
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
                    <Card className="w-full max-w-2xl bg-white shadow-xl animate-in fade-in zoom-in-95 my-8">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>{isEditing ? "Edit Pertanyaan" : "Add New Pertanyaan"}</CardTitle>
                            <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pertanyaan</label>
                                    <Input
                                        value={formData.pertanyaan}
                                        onChange={(e) => setFormData({ ...formData, pertanyaan: e.target.value })}
                                        required
                                        placeholder="Contoh: Berapa kali anda sholat jamaah?"
                                        className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Type Kegiatan</label>
                                    <select
                                        className="w-full rounded-md border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                                        value={formData.type_kegiatan}
                                        onChange={(e) => setFormData({ ...formData, type_kegiatan: e.target.value })}
                                    >
                                        <option value="">-- Pilih Type --</option>
                                        <option value="Monitoring">Monitoring</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Tipe Jawaban</label>
                                        <select
                                            className="w-full rounded-md border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            value={formData.tipeJawaban}
                                            onChange={(e) => setFormData({ ...formData, tipeJawaban: e.target.value as any })}
                                        >
                                            <option value="TEXTBOX">Textbox (Text/Angka)</option>
                                            <option value="OPTION">Option (Pilihan Ganda)</option>
                                            <option value="TANGGAL">Tanggal (Datepicker)</option>
                                            <option value="LISTBOX">Listbox (Master Data)</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-4 mt-6">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.isRequired}
                                                onChange={(e) => setFormData({ ...formData, isRequired: e.target.checked })}
                                                className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                                            />
                                            <span className="text-sm text-gray-700">Wajib Diisi (Required)</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.isActive}
                                                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                                                className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                                            />
                                            <span className="text-sm text-gray-700">Aktif</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Conditional Fields based on Type */}

                                {/* OPTION TYPE */}
                                {formData.tipeJawaban === "OPTION" && (
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
                                        <label className="block text-sm font-medium text-gray-700">Daftar Opsi Jawaban</label>
                                        {opsiList.map((opsi, index) => (
                                            <div key={index} className="flex gap-2">
                                                <Input
                                                    value={opsi}
                                                    onChange={(e) => handleOpsiChange(index, e.target.value)}
                                                    placeholder={`Opsi ${index + 1}`}
                                                    className="bg-white"
                                                />
                                                {opsiList.length > 1 && (
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                        onClick={() => removeOpsi(index)}
                                                    >
                                                        <MinusCircle size={20} />
                                                    </Button>
                                                )}
                                            </div>
                                        ))}
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={addOpsi}
                                            className="mt-2 text-orange-600 border-orange-200 hover:bg-orange-50"
                                        >
                                            <Plus size={16} className="mr-2" /> Tambah Opsi
                                        </Button>
                                    </div>
                                )}

                                {/* LISTBOX TYPE */}
                                {formData.tipeJawaban === "LISTBOX" && (
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Source List (Sumber Data)</label>
                                        <select
                                            className="w-full rounded-md border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                                            value={formData.sourceList}
                                            onChange={(e) => setFormData({ ...formData, sourceList: e.target.value })}
                                        >
                                            <option value="">-- Pilih Sumber Data --</option>
                                            {SOURCE_LIST_OPTIONS.map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                        <p className="text-xs text-gray-500 mt-1">Pilihan akan diambil otomatis dari master data yang dipilih.</p>
                                    </div>
                                )}

                                <div className="flex justify-end gap-2 pt-4">
                                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                                        {isEditing ? "Update Pertanyaan" : "Save Pertanyaan"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* View Detail Modal */}
            {showDetail && selectedPertanyaan && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-lg bg-white shadow-xl animate-in fade-in zoom-in-95">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>Detail Pertanyaan</CardTitle>
                            <button onClick={() => setShowDetail(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{selectedPertanyaan.pertanyaan}</h3>
                                <div className="flex gap-2 mt-2">
                                    <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-md text-xs font-bold uppercase">
                                        {selectedPertanyaan.tipeJawaban}
                                    </span>
                                    {selectedPertanyaan.isRequired && (
                                        <span className="px-2 py-1 bg-red-100 text-red-600 rounded-md text-xs font-bold uppercase">
                                            Required
                                        </span>
                                    )}
                                </div>
                                {selectedPertanyaan.type_kegiatan && (
                                    <p className="text-sm text-gray-500">
                                        Type: <span className="font-medium text-gray-700">{selectedPertanyaan.type_kegiatan}</span>
                                    </p>
                                )}
                            </div>

                            {selectedPertanyaan.tipeJawaban === "OPTION" && Array.isArray(selectedPertanyaan.opsiJawaban) && (
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <span className="block text-gray-500 text-xs uppercase mb-2">Opsi Jawaban</span>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                        {selectedPertanyaan.opsiJawaban.map((opt, i) => (
                                            <li key={i}>{opt}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {selectedPertanyaan.tipeJawaban === "LISTBOX" && (
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <span className="block text-blue-500 text-xs uppercase mb-1">Source Data</span>
                                    <p className="font-bold text-blue-700">{selectedPertanyaan.sourceList}</p>
                                </div>
                            )}

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
                        <CardTitle className="text-gray-700">List Pertanyaan</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <Input
                                placeholder="Search pertanyaan..."
                                className="pl-10"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                        >
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 w-10 text-center">#</th>
                                        <th className="px-6 py-3">Pertanyaan</th>
                                        <th className="px-6 py-3">Tipe</th>
                                        <th className="px-6 py-3">Type Keg.</th>
                                        <th className="px-6 py-3">Detail</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <SortableContext
                                    items={filteredData}
                                    strategy={verticalListSortingStrategy}
                                >
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan={7} className="px-6 py-4 text-center">Loading...</td>
                                            </tr>
                                        ) : filteredData.length === 0 ? (
                                            <tr>
                                                <td colSpan={7} className="px-6 py-4 text-center">No data found</td>
                                            </tr>
                                        ) : (
                                            filteredData.map((item) => (
                                                <SortableRow key={item.id} item={item}>
                                                    <td className="px-6 py-4 font-medium text-gray-900 max-w-xs truncate" title={item.pertanyaan}>
                                                        {item.pertanyaan}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold">
                                                            {item.tipeJawaban}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-xs text-gray-600">
                                                        {item.type_kegiatan || "-"}
                                                    </td>
                                                    <td className="px-6 py-4 text-xs text-gray-500">
                                                        {item.tipeJawaban === "OPTION" && Array.isArray(item.opsiJawaban)
                                                            ? `${item.opsiJawaban.length} Opsi`
                                                            : item.tipeJawaban === "LISTBOX"
                                                                ? `Source: ${item.sourceList}`
                                                                : "-"}
                                                    </td>
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
                                                </SortableRow>
                                            ))
                                        )}
                                    </tbody>
                                </SortableContext>
                            </table>
                        </DndContext>
                    </div>
                </CardContent >
            </Card >
        </div >
    )
}

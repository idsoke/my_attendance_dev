"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { apiClient } from "@/lib/api-client"
import { Pencil, Save, X } from "lucide-react"

interface AppConfig {
    id: string
    key: string
    value: string
    description?: string
}

export default function ConfigPage() {
    const [configs, setConfigs] = useState<AppConfig[]>([])
    const [loading, setLoading] = useState(true)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editForm, setEditForm] = useState({ key: "", value: "", description: "" })
    const [isCreating, setIsCreating] = useState(false)
    const [newForm, setNewForm] = useState({ key: "", value: "", description: "" })

    useEffect(() => {
        fetchConfigs()
    }, [])

    const fetchConfigs = async () => {
        try {
            const res = await apiClient("/api/config")
            if (res.ok) {
                const data = await res.json()
                setConfigs(data)
            }
        } catch (error) {
            console.error("Error fetching config:", error)
        } finally {
            setLoading(false)
        }
    }

    const startEdit = (config: AppConfig) => {
        setEditingId(config.id)
        setEditForm({
            key: config.key,
            value: config.value,
            description: config.description || ""
        })
        setIsCreating(false)
    }

    const handleSave = async () => {
        try {
            const body = editingId ? editForm : newForm
            const res = await apiClient("/api/config", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            if (res.ok) {
                setEditingId(null)
                setIsCreating(false)
                setNewForm({ key: "", value: "", description: "" })
                fetchConfigs()
            } else {
                alert("Failed to save configuration")
            }
        } catch (error) {
            console.error("Error saving config:", error)
        }
    }

    if (loading) return <div>Loading...</div>

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Application Configuration</h1>
                    <p className="mt-2 text-gray-600">Manage global application settings</p>
                </div>
                <Button onClick={() => { setIsCreating(true); setEditingId(null); }}>
                    Add Config
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Settings List</CardTitle>
                    <CardDescription>
                        Be careful when editing these values as they affect the application behavior.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {isCreating && (
                            <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border border-orange-100 animate-in fade-in">
                                <div className="flex-1 grid gap-2">
                                    <Input
                                        placeholder="Key (e.g. MONITORING_START_DATE)"
                                        value={newForm.key}
                                        onChange={e => setNewForm({ ...newForm, key: e.target.value })}
                                        className="font-mono text-sm"
                                    />
                                    <Input
                                        placeholder="Value"
                                        value={newForm.value}
                                        onChange={e => setNewForm({ ...newForm, value: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Description"
                                        value={newForm.description}
                                        onChange={e => setNewForm({ ...newForm, description: e.target.value })}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <Button size="icon" onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                                        <Save size={16} />
                                    </Button>
                                    <Button size="icon" variant="outline" onClick={() => setIsCreating(false)}>
                                        <X size={16} />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {configs.map(config => (
                            <div key={config.id} className="group flex items-start justify-between p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all">
                                {editingId === config.id ? (
                                    <div className="flex-1 grid gap-2 mr-4">
                                        <div className="font-mono text-sm font-bold text-gray-700">{config.key}</div>
                                        <Input
                                            value={editForm.value}
                                            onChange={e => setEditForm({ ...editForm, value: e.target.value })}
                                        />
                                        <Input
                                            value={editForm.description}
                                            onChange={e => setEditForm({ ...editForm, description: e.target.value })}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex-1">
                                        <h4 className="font-mono text-sm font-bold text-gray-800">{config.key}</h4>
                                        <p className="text-gray-900 mt-1 font-medium">{config.value}</p>
                                        {config.description && <p className="text-xs text-gray-500 mt-1">{config.description}</p>}
                                    </div>
                                )}

                                <div className="flex gap-2">
                                    {editingId === config.id ? (
                                        <>
                                            <Button size="icon" onClick={handleSave} className="bg-green-600 hover:bg-green-700 h-8 w-8">
                                                <Save size={14} />
                                            </Button>
                                            <Button size="icon" variant="outline" onClick={() => setEditingId(null)} className="h-8 w-8">
                                                <X size={14} />
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => startEdit(config)}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                                        >
                                            <Pencil size={14} />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}

                        {configs.length === 0 && !isCreating && (
                            <div className="text-center text-gray-500 py-8">
                                No configurations found.
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

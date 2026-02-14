"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { apiClient } from "@/lib/api-client"

interface Upa {
    id: string
    code: string
    name: string
    location?: string
    _count: {
        users: number
        activities: number
    }
}

interface Jenjang {
    id: string
    code: string
    name: string
    description?: string
    _count: {
        users: number
    }
}

export default function MasterPage() {
    const [upas, setUpas] = useState<Upa[]>([])
    const [jenjangs, setJenjangs] = useState<Jenjang[]>([])
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState<"upa" | "jenjang">("upa")
    const [showForm, setShowForm] = useState(false)
    const [upaForm, setUpaForm] = useState({ code: "", name: "", location: "" })
    const [jenjangForm, setJenjangForm] = useState({ code: "", name: "", description: "" })

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const [upasRes, jenjangsRes] = await Promise.all([
                apiClient("/api/master/upas"),
                apiClient("/api/master/jenjangs"),
            ])
            const upasData = await upasRes.json()
            const jenjangsData = await jenjangsRes.json()
            setUpas(upasData)
            setJenjangs(jenjangsData)
        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleUpaSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await apiClient("/api/master/upas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(upaForm),
            })
            if (res.ok) {
                setUpaForm({ code: "", name: "", location: "" })
                setShowForm(false)
                fetchData()
            }
        } catch (error) {
            console.error("Error creating UPA:", error)
        }
    }

    const handleJenjangSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await apiClient("/api/master/jenjangs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(jenjangForm),
            })
            if (res.ok) {
                setJenjangForm({ code: "", name: "", description: "" })
                setShowForm(false)
                fetchData()
            }
        } catch (error) {
            console.error("Error creating Jenjang:", error)
        }
    }

    if (loading) {
        return <div className="text-center">Loading...</div>
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Master Data</h1>
                <p className="mt-2 text-gray-600">Kelola data master UPA dan Jenjang</p>
            </div>

            <div className="flex space-x-4 border-b">
                <button
                    className={`px-4 py-2 font-medium ${activeTab === "upa"
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    onClick={() => {
                        setActiveTab("upa")
                        setShowForm(false)
                    }}
                >
                    UPA
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === "jenjang"
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    onClick={() => {
                        setActiveTab("jenjang")
                        setShowForm(false)
                    }}
                >
                    Jenjang
                </button>
            </div>

            <div className="flex justify-end">
                <Button onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Cancel" : `Add ${activeTab === "upa" ? "UPA" : "Jenjang"}`}
                </Button>
            </div>

            {showForm && activeTab === "upa" && (
                <Card>
                    <CardHeader>
                        <CardTitle>Add New UPA</CardTitle>
                        <CardDescription>Tambahkan unit kerja baru</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleUpaSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Code</label>
                                <Input
                                    value={upaForm.code}
                                    onChange={(e) => setUpaForm({ ...upaForm, code: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Name</label>
                                <Input
                                    value={upaForm.name}
                                    onChange={(e) => setUpaForm({ ...upaForm, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Location</label>
                                <Input
                                    value={upaForm.location}
                                    onChange={(e) => setUpaForm({ ...upaForm, location: e.target.value })}
                                />
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            {showForm && activeTab === "jenjang" && (
                <Card>
                    <CardHeader>
                        <CardTitle>Add New Jenjang</CardTitle>
                        <CardDescription>Tambahkan jenjang baru</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleJenjangSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Code</label>
                                <Input
                                    value={jenjangForm.code}
                                    onChange={(e) => setJenjangForm({ ...jenjangForm, code: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Name</label>
                                <Input
                                    value={jenjangForm.name}
                                    onChange={(e) => setJenjangForm({ ...jenjangForm, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Description</label>
                                <Input
                                    value={jenjangForm.description}
                                    onChange={(e) => setJenjangForm({ ...jenjangForm, description: e.target.value })}
                                />
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            {activeTab === "upa" && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {upas.map((upa) => (
                        <Card key={upa.id}>
                            <CardHeader>
                                <CardTitle>{upa.name}</CardTitle>
                                <CardDescription>Code: {upa.code}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {upa.location && <p className="text-sm text-gray-600 mb-2">{upa.location}</p>}
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>{upa._count.users} users</span>
                                    <span>{upa._count.activities} activities</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            {activeTab === "jenjang" && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {jenjangs.map((jenjang) => (
                        <Card key={jenjang.id}>
                            <CardHeader>
                                <CardTitle>{jenjang.name}</CardTitle>
                                <CardDescription>Code: {jenjang.code}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {jenjang.description && (
                                    <p className="text-sm text-gray-600 mb-2">{jenjang.description}</p>
                                )}
                                <p className="text-sm text-gray-500">{jenjang._count.users} users</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

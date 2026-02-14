"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSession } from "next-auth/react"
import { Check, X, User, Mail, Phone, Calendar } from "lucide-react"
import { apiClient } from "@/lib/api-client"

interface PendingUser {
    id: string
    email: string
    fullName: string
    phoneNumber?: string
    createdAt: string
    jenjang?: {
        name: string
    }
    upa?: {
        name: string
    }
}

export default function ApprovalsPage() {
    const { data: session } = useSession()
    const [users, setUsers] = useState<PendingUser[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPendingUsers()
    }, [])

    const fetchPendingUsers = async () => {
        try {
            const res = await apiClient("/api/approvals")
            if (res.ok) {
                const data = await res.json()
                setUsers(data)
            }
        } catch (error) {
            console.error("Error fetching pending users:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleAction = async (userId: string, action: "approve" | "reject") => {
        if (!confirm(`Are you sure you want to ${action} this user?`)) return

        try {
            const res = await apiClient("/api/approvals", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, action }),
            })

            if (res.ok) {
                fetchPendingUsers()
            }
        } catch (error) {
            console.error(`Error ${action}ing user:`, error)
        }
    }

    if (session?.user?.role !== "ADMIN") {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <p className="text-gray-500">Access denied. Admin only.</p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">User Approvals</h1>
                    <p className="text-gray-500">Review and approve pending user registrations</p>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-12">
                    <p className="text-gray-500">Loading...</p>
                </div>
            ) : users.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-gray-500">No pending approvals</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <Card key={user.id} className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                                        {user.fullName[0]}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <CardTitle className="text-lg truncate">{user.fullName}</CardTitle>
                                        <p className="text-xs text-gray-500">
                                            {new Date(user.createdAt).toLocaleDateString("id-ID")}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Mail size={14} className="text-orange-500" />
                                        <span className="truncate">{user.email}</span>
                                    </div>
                                    {user.phoneNumber && (
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Phone size={14} className="text-orange-500" />
                                            <span>{user.phoneNumber}</span>
                                        </div>
                                    )}
                                    {user.jenjang && (
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <User size={14} className="text-orange-500" />
                                            <span>{user.jenjang.name}</span>
                                        </div>
                                    )}
                                    {user.upa && (
                                        <div className="text-xs">
                                            <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full">
                                                {user.upa.name}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <Button
                                        onClick={() => handleAction(user.id, "approve")}
                                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                                        size="sm"
                                    >
                                        <Check size={16} className="mr-1" />
                                        Approve
                                    </Button>
                                    <Button
                                        onClick={() => handleAction(user.id, "reject")}
                                        variant="outline"
                                        className="flex-1 text-red-600 border-red-600 hover:bg-red-50"
                                        size="sm"
                                    >
                                        <X size={16} className="mr-1" />
                                        Reject
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

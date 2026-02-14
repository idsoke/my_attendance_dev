"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, Pencil, Trash2, Plus, Search, X, KeyRound } from "lucide-react"
import { apiClient } from "@/lib/api-client"

interface User {
    id: string
    fullName: string
    email: string
    role: string
    status: string
    upaId?: string
    jenjangId?: string
    upa?: { name: string }
    jenjang?: { name: string }
}

interface Option {
    id: string
    name: string
}

export default function AnggotaPage() {
    const [users, setUsers] = useState<User[]>([])
    const [upas, setUpas] = useState<Option[]>([])
    const [jenjangs, setJenjangs] = useState<Option[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    // Modal States
    const [showForm, setShowForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [showResetPassword, setShowResetPassword] = useState(false)
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [selectedResetUser, setSelectedResetUser] = useState<User | null>(null)
    const [newPassword, setNewPassword] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    // Form State
    const [formData, setFormData] = useState({
        id: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "USER",
        upaId: "",
        jenjangId: ""
    })

    useEffect(() => {
        fetchUsers()
        fetchMasterData()
    }, [])

    const fetchUsers = async () => {
        try {
            const res = await apiClient("/api/users")
            if (res.ok) {
                const data = await res.json()
                setUsers(data.users || [])
            }
        } catch (error) {
            console.error("Error fetching users:", error)
        } finally {
            setLoading(false)
        }
    }

    const fetchMasterData = async () => {
        try {
            const [upaRes, jenjangRes] = await Promise.all([
                apiClient("/api/master/upas"),
                apiClient("/api/master/jenjangs")
            ])
            if (upaRes.ok) setUpas(await upaRes.json())
            if (jenjangRes.ok) setJenjangs(await jenjangRes.json())
        } catch (error) {
            console.error("Error fetching master data:", error)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this user?")) return

        try {
            const res = await apiClient(`/api/users/${id}`, { method: "DELETE" })
            if (res.ok) {
                fetchUsers()
            }
        } catch (error) {
            console.error("Error deleting user:", error)
        }
    }

    const handleEdit = (user: User) => {
        setFormData({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: (user as any).phoneNumber || "",
            password: "", // Password not shown
            role: user.role,
            upaId: user.upaId || "",
            jenjangId: user.jenjangId || ""
        })
        setIsEditing(true)
        setShowForm(true)
    }

    const handleView = (user: User) => {
        // We need to fetch the full user details to show phone number if it's not in the list view
        // But for now, let's assume it's available or we just show what we have.
        // Actually, let's update the User interface to include phoneNumber if needed, 
        // but for now let's just use selectedUser. 
        // Oh wait, the list might not have phoneNumber. 
        // Let's rely on what we have.
        setSelectedUser(user)
        setShowDetail(true)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.phoneNumber.startsWith("0")) {
            alert("Nomor telepon harus diawali dengan angka 0")
            return
        }

        try {
            const url = isEditing ? `/api/users/${formData.id}` : "/api/users"
            const method = isEditing ? "PATCH" : "POST"

            const body: any = {
                fullName: formData.fullName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                role: formData.role,
                upaId: formData.upaId || null,
                jenjangId: formData.jenjangId || null
            }

            if (!isEditing && formData.password) {
                body.password = formData.password
            }

            const res = await apiClient(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })

            if (res.ok) {
                resetForm()
                fetchUsers()
            } else {
                const error = await res.text()
                alert(error)
            }
        } catch (error) {
            console.error("Error saving user:", error)
        }
    }

    const resetForm = () => {
        setFormData({
            id: "",
            fullName: "",
            email: "",
            phoneNumber: "",
            password: "",
            role: "USER",
            upaId: "",
            jenjangId: ""
        })
        setShowForm(false)
        setIsEditing(false)
    }

    const handleResetPasswordClick = (user: User) => {
        setSelectedResetUser(user)
        setNewPassword("")
        setShowResetPassword(true)
    }

    const handleResetPasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedResetUser) return

        if (newPassword.length < 6) {
            alert("Password must be at least 6 characters")
            return
        }

        try {
            const res = await apiClient(`/api/users/${selectedResetUser.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: newPassword })
            })

            if (res.ok) {
                alert("Password reset successfully")
                setShowResetPassword(false)
                setSelectedResetUser(null)
                setNewPassword("")
            } else {
                const error = await res.text()
                alert(error)
            }
        } catch (error) {
            console.error(error)
            alert("Failed to reset password")
        }
    }

    const filteredUsers = users.filter(user =>
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 relative">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Data Anggota</h1>
                    <p className="text-gray-500">Manage user access and information</p>
                </div>
                <Button
                    onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-none"
                >
                    <Plus size={18} className="mr-2" />
                    Add New User
                </Button>
            </div>

            {/* Form Modal (Overlay) */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-2xl bg-white shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>{isEditing ? "Edit User" : "Add New User"}</CardTitle>
                            <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <Input
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <Input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <Input
                                            type="tel"
                                            value={formData.phoneNumber}
                                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                            required
                                            placeholder="08..."
                                        />
                                    </div>
                                </div>

                                {!isEditing && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                        <Input
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            required={!isEditing}
                                            placeholder="Default: 123456"
                                        />
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                        <select
                                            className="w-full rounded-md border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        >
                                            <option value="USER">User</option>
                                            <option value="PENGGUNA">Pengguna</option>
                                            <option value="SEKRETARIS">Sekretaris</option>
                                            <option value="EDITOR">Editor</option>
                                            <option value="ADMIN">Admin</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">UPA</label>
                                        <select
                                            className="w-full rounded-md border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            value={formData.upaId}
                                            onChange={(e) => setFormData({ ...formData, upaId: e.target.value })}
                                        >
                                            <option value="">Select UPA</option>
                                            {upas.map(upa => (
                                                <option key={upa.id} value={upa.id}>{upa.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Jenjang</label>
                                        <select
                                            className="w-full rounded-md border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            value={formData.jenjangId}
                                            onChange={(e) => setFormData({ ...formData, jenjangId: e.target.value })}
                                        >
                                            <option value="">Select Jenjang</option>
                                            {jenjangs.map(jenjang => (
                                                <option key={jenjang.id} value={jenjang.id}>{jenjang.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2 pt-4">
                                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                                        {isEditing ? "Update User" : "Create User"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* View Detail Modal */}
            {showDetail && selectedUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-lg bg-white shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>User Details</CardTitle>
                            <button onClick={() => setShowDetail(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-2xl">
                                    {selectedUser.fullName[0]}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{selectedUser.fullName}</h3>
                                    <p className="text-gray-500">{selectedUser.email}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <span className="block text-gray-500 text-xs uppercase">Role</span>
                                    <span className="font-semibold text-gray-900">{selectedUser.role}</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <span className="block text-gray-500 text-xs uppercase">Status</span>
                                    <span className="font-semibold text-green-600">Active</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <span className="block text-gray-500 text-xs uppercase">UPA</span>
                                    <span className="font-semibold text-gray-900">{selectedUser.upa?.name || "-"}</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <span className="block text-gray-500 text-xs uppercase">Jenjang</span>
                                    <span className="font-semibold text-gray-900">{selectedUser.jenjang?.name || "-"}</span>
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
                        <CardTitle className="text-gray-700">List Anggota</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <Input
                                placeholder="Search users..."
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
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Role</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">UPA / Jenjang</th>
                                    <th className="px-6 py-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-4 text-center">Loading...</td>
                                    </tr>
                                ) : filteredUsers.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-4 text-center">No users found</td>
                                    </tr>
                                ) : (
                                    filteredUsers.map((user) => (
                                        <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">
                                                        {user.fullName[0]}
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900">{user.fullName}</div>
                                                        <div className="text-xs text-gray-500">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold
                          ${user.role === 'ADMIN' ? 'bg-red-100 text-red-600' :
                                                        user.role === 'EDITOR' ? 'bg-blue-100 text-blue-600' :
                                                            user.role === 'PENGGUNA' ? 'bg-purple-100 text-purple-600' :
                                                                user.role === 'SEKRETARIS' ? 'bg-orange-100 text-orange-600' :
                                                                    'bg-green-100 text-green-600'}`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-gray-900">{user.upa?.name || "-"}</div>
                                                <div className="text-xs text-gray-500">{user.jenjang?.name || "-"}</div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => handleView(user)}
                                                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                                                        title="View"
                                                    >
                                                        <Eye size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleEdit(user)}
                                                        className="p-2 text-yellow-500 hover:bg-yellow-50 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Pencil size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleResetPasswordClick(user)}
                                                        className="p-2 text-purple-500 hover:bg-purple-50 rounded-lg transition-colors"
                                                        title="Reset Password"
                                                    >
                                                        <KeyRound size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(user.id)}
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

            {/* Reset Password Modal */}
            {showResetPassword && selectedResetUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-sm bg-white shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                            <CardTitle>Reset Password</CardTitle>
                            <button onClick={() => setShowResetPassword(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handleResetPasswordSubmit} className="space-y-4">
                                <p className="text-sm text-gray-600">
                                    Reset password for <strong>{selectedResetUser.fullName}</strong>
                                </p>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                    <Input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                        placeholder="Enter new password"
                                    />
                                </div>
                                <div className="flex justify-end gap-2 pt-2">
                                    <Button type="button" variant="outline" onClick={() => setShowResetPassword(false)}>Cancel</Button>
                                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                                        Save Password
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}

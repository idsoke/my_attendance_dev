"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { apiClient } from "@/lib/api-client"
import { Camera, Mail, Phone, MapPin, Building, Award, Calendar, Edit2, Save, X, Lock, Key } from "lucide-react"

interface UserProfile {
    id: string
    fullName: string
    email: string
    phoneNumber?: string
    role: string
    status: string
    createdAt: string
    upa?: {
        name: string
        location?: string
    }
    jenjang?: {
        name: string
        description?: string
    }
    _count?: {
        activities: number
    }
}

export default function ProfilePage() {
    const { data: session } = useSession()
    const [profile, setProfile] = useState<UserProfile | null>(null)
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
    })

    // Password State
    const [passwordData, setPasswordData] = useState({
        newPassword: "",
        confirmPassword: ""
    })
    const [passwordStatus, setPasswordStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [passwordMsg, setPasswordMsg] = useState("")

    useEffect(() => {
        fetchProfile()
    }, [])

    const fetchProfile = async () => {
        try {
            const res = await apiClient("/api/profile")
            if (res.ok) {
                const data = await res.json()
                setProfile(data)
                setFormData({
                    fullName: data.fullName || "",
                    phoneNumber: data.phoneNumber || "",
                })
            }
        } catch (error) {
            console.error("Error fetching profile:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await apiClient("/api/profile", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            if (res.ok) {
                await fetchProfile()
                setIsEditing(false)
            } else {
                alert("Failed to update profile")
            }
        } catch (error) {
            console.error("Error updating profile:", error)
        }
    }

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault()
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setPasswordStatus("error")
            setPasswordMsg("Password baru dan konfirmasi tidak cocok")
            return
        }

        setPasswordStatus("loading")
        try {
            const res = await fetch("/api/profile/password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(passwordData)
            })

            const data = await res.json()

            if (res.ok) {
                setPasswordStatus("success")
                setPasswordMsg(data.message || "Password berhasil diubah")
                setPasswordData({ newPassword: "", confirmPassword: "" })
            } else {
                setPasswordStatus("error")
                setPasswordMsg(data.error || "Gagal mengubah password")
            }
        } catch (error) {
            setPasswordStatus("error")
            setPasswordMsg("Terjadi kesalahan sistem")
        }
    }

    const handleCancel = () => {
        setFormData({
            fullName: profile?.fullName || "",
            phoneNumber: profile?.phoneNumber || "",
        })
        setIsEditing(false)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
                    <p className="mt-4 text-gray-500">Loading profile...</p>
                </div>
            </div>
        )
    }

    if (!profile) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <p className="text-gray-500">Profile not found</p>
            </div>
        )
    }

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map(n => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
    }

    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case "ADMIN":
                return "bg-red-100 text-red-700 border-red-200"
            case "EDITOR":
                return "bg-blue-100 text-blue-700 border-blue-200"
            case "USER":
                return "bg-green-100 text-green-700 border-green-200"
            default:
                return "bg-gray-100 text-gray-700 border-gray-200"
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
                    <p className="text-gray-500">Manage your personal information</p>
                </div>
                {!isEditing && (
                    <Button
                        onClick={() => setIsEditing(true)}
                        className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-none"
                    >
                        <Edit2 size={18} className="mr-2" />
                        Edit Profile
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <Card className="lg:col-span-1">
                    <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                            {/* Avatar */}
                            <div className="relative mb-4">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                                    {getInitials(profile.fullName)}
                                </div>
                                <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-600 hover:bg-orange-50 transition-colors border-2 border-white">
                                    <Camera size={18} />
                                </button>
                            </div>

                            {/* Name & Role */}
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile.fullName}</h2>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getRoleBadgeColor(profile.role)}`}>
                                {profile.role}
                            </span>

                            {/* Stats */}
                            <div className="w-full mt-6 pt-6 border-t border-gray-100">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-orange-600">{profile._count?.activities || 0}</p>
                                        <p className="text-xs text-gray-500 uppercase">Activities</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-green-600">
                                            {profile.status === "ACTIVE" ? "Active" : "Inactive"}
                                        </p>
                                        <p className="text-xs text-gray-500 uppercase">Status</p>
                                    </div>
                                </div>
                            </div>

                            {/* Member Since */}
                            <div className="w-full mt-4 p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                                    <Calendar size={16} className="text-orange-500" />
                                    <span>Member since {new Date(profile.createdAt).toLocaleDateString("id-ID", { month: "long", year: "numeric" })}</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader className="border-b border-gray-100">
                            <CardTitle className="text-xl">Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            {isEditing ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                required
                                                className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <Input
                                                value={formData.phoneNumber}
                                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                                placeholder="+62 xxx xxxx xxxx"
                                                className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <Button
                                            type="submit"
                                            className="bg-orange-600 hover:bg-orange-700 text-white"
                                        >
                                            <Save size={18} className="mr-2" />
                                            Save Changes
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={handleCancel}
                                        >
                                            <X size={18} className="mr-2" />
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="space-y-6">
                                    {/* Contact Information */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Contact Information</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                                                    <Mail size={20} className="text-orange-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs text-gray-500 uppercase">Email Address</p>
                                                    <p className="text-sm font-medium text-gray-900">{profile.email}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                                                    <Phone size={20} className="text-orange-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs text-gray-500 uppercase">Phone Number</p>
                                                    <p className="text-sm font-medium text-gray-900">{profile.phoneNumber || "-"}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Organization Information */}
                                    {(profile.upa || profile.jenjang) && (
                                        <div className="pt-6 border-t border-gray-100">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Organization Information</h3>
                                            <div className="space-y-4">
                                                {profile.upa && (
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                            <Building size={20} className="text-blue-600" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-xs text-gray-500 uppercase">UPA (Unit Pelaksana Aktivitas)</p>
                                                            <p className="text-sm font-medium text-gray-900">{profile.upa.name}</p>
                                                            {profile.upa.location && (
                                                                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                                                    <MapPin size={12} />
                                                                    {profile.upa.location}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                                {profile.jenjang && (
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                                            <Award size={20} className="text-green-600" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-xs text-gray-500 uppercase">Jenjang (Career Level)</p>
                                                            <p className="text-sm font-medium text-gray-900">{profile.jenjang.name}</p>
                                                            {profile.jenjang.description && (
                                                                <p className="text-xs text-gray-500 mt-1">{profile.jenjang.description}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Change Password Card */}
                    <Card>
                        <CardHeader className="border-b border-gray-100">
                            <CardTitle className="text-xl flex items-center gap-2">
                                <Lock size={20} className="text-orange-600" />
                                Security Settings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handlePasswordChange} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                        <Input
                                            type="password"
                                            value={passwordData.newPassword}
                                            onChange={e => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                            placeholder="Min. 6 characters"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                        <Input
                                            type="password"
                                            value={passwordData.confirmPassword}
                                            onChange={e => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                            placeholder="Re-enter new password"
                                            required
                                        />
                                    </div>
                                </div>

                                {passwordMsg && (
                                    <div className={`p-3 rounded-lg text-sm ${passwordStatus === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                        {passwordMsg}
                                    </div>
                                )}

                                <div className="flex justify-end">
                                    <Button type="submit" disabled={passwordStatus === 'loading'} className="bg-slate-900 text-white hover:bg-slate-800">
                                        {passwordStatus === 'loading' ? 'Updating...' : 'Update Password'}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

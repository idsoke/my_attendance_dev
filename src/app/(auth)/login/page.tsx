"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Building2, Lock, Mail, ArrowRight, Loader2 } from "lucide-react"

import { Suspense } from "react"

const DEMO_USERS = [
    { role: "Admin", email: "admin@example.com", password: "admin123", color: "from-violet-500 to-purple-600", badge: "bg-purple-100 text-purple-700" },
    { role: "Manager", email: "manager@example.com", password: "manager123", color: "from-blue-500 to-blue-600", badge: "bg-blue-100 text-blue-700" },
    { role: "Employee", email: "user@example.com", password: "user123", color: "from-emerald-500 to-green-600", badge: "bg-emerald-100 text-emerald-700" },
]

function LoginForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const loginAs = (demoEmail: string, demoPassword: string) => {
        setEmail(demoEmail)
        setPassword(demoPassword)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            })

            if (result?.error) {
                setError("Email atau password salah")
            } else {
                router.push(callbackUrl)
                router.refresh()
            }
        } catch (error) {
            setError("Terjadi kesalahan. Silakan coba lagi.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f2edf3] p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header Section Matching Attendance Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-30 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 shadow-inner ring-1 ring-white/30">
                            <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">AttendIQ</h1>
                        <p className="text-blue-100 text-sm mt-1 font-medium">Employee Attendance System</p>
                    </div>
                </div>

                <div className="p-8 pt-10">
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-bold text-gray-800">Silakan Login</h2>
                        <p className="text-gray-500 text-sm">Masuk untuk melakukan absensi</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Mail size={18} />
                                </div>
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={loading}
                                    className="h-12 pl-10 border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-blue-500 rounded-xl transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Lock size={18} />
                                </div>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={loading}
                                    className="h-12 pl-10 border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-blue-500 rounded-xl transition-all"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 rounded-xl bg-red-50 text-red-600 text-sm text-center font-medium animate-in slide-in-from-top-1">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    MASUK
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </Button>
                    </form>

                    {/* Demo Users */}
                    <div className="mt-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex-1 h-px bg-gray-100"></div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Demo Accounts</span>
                            <div className="flex-1 h-px bg-gray-100"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {DEMO_USERS.map(u => (
                                <button
                                    key={u.role}
                                    type="button"
                                    onClick={() => loginAs(u.email, u.password)}
                                    className="group relative flex flex-col items-center gap-1.5 p-3 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-md transition-all duration-200 bg-white hover:scale-[1.03]"
                                >
                                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${u.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                                        {u.role[0]}
                                    </div>
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${u.badge}`}>
                                        {u.role}
                                    </span>
                                    <span className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap">
                                        Klik untuk isi otomatis
                                    </span>
                                </button>
                            ))}
                        </div>
                        <p className="text-center text-[11px] text-gray-400 mt-4">
                            Klik role di atas untuk mengisi form otomatis
                        </p>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-400">
                            © 2026 AttendIQ. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#f2edf3]"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
            <LoginForm />
        </Suspense>
    )
}

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function RegisterPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        phoneNumber: "",
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            return
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }

        setLoading(true)

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    fullName: formData.fullName,
                    phoneNumber: formData.phoneNumber,
                }),
            })

            if (res.ok) {
                router.push("/register/success")
            } else {
                const data = await res.json()
                setError(data.message || "Registration failed")
            }
        } catch (error) {
            setError("An error occurred. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f2edf3] p-4">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-10">
                    <div className="flex items-center gap-2 mb-6 sm:mb-8">
                        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                            M
                        </div>
                        <h1 className="text-xl sm:text-2xl font-bold text-orange-600">DPD PKS Bandar Lampung</h1>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Create Account</h2>
                    <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Register to get started.</p>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <Input
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                required
                                disabled={loading}
                                className="h-11 sm:h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg text-sm sm:text-base"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                disabled={loading}
                                className="h-11 sm:h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg text-sm sm:text-base"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Phone Number</label>
                            <Input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                required
                                disabled={loading}
                                className="h-11 sm:h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg text-sm sm:text-base"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <Input
                                type="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                                disabled={loading}
                                className="h-11 sm:h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg text-sm sm:text-base"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                            <Input
                                type="password"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                required
                                disabled={loading}
                                className="h-11 sm:h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg text-sm sm:text-base"
                            />
                        </div>

                        {error && (
                            <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full h-11 sm:h-12 bg-orange-600 hover:bg-orange-700 text-base sm:text-lg font-medium rounded-lg transition-all"
                            disabled={loading}
                        >
                            {loading ? "Creating Account..." : "REGISTER"}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link href="/login" className="text-orange-600 hover:text-orange-800 font-medium">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

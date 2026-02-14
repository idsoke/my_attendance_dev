"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function RegisterSuccessPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f2edf3] p-4">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-10 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Registrasi Berhasil!
                    </h1>

                    <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            Selamat anda telah terdaftar, untuk bisa login diperlukan approval admin system,
                            anda akan dikabari via email atau WA setelah akun anda aktif.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Link href="/login" className="block w-full">
                            <Button className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-lg font-medium">
                                Kembali ke Login
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

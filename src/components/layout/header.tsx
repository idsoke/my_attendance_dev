"use client"

import { Bell, Mail, Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useSession } from "next-auth/react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useSidebar } from "@/contexts/SidebarContext"

export function Header() {
    const { data: session } = useSession()
    const { language, setLanguage } = useLanguage()
    const { toggle } = useSidebar()

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 fixed top-0 right-0 left-0 md:left-64 z-40">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggle}
                    className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                >
                    <Menu size={20} />
                </button>
                <div className="hidden md:flex items-center gap-2 w-96">
                    <Search size={18} className="text-gray-400" />
                    <Input
                        placeholder="Search projects..."
                        className="border-none shadow-none focus-visible:ring-0 bg-transparent placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full relative">
                    <Mail size={20} className="text-gray-500" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border border-white"></span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full relative">
                    <Bell size={20} className="text-gray-500" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <button
                    onClick={() => setLanguage(language === "id" ? "en" : "id")}
                    className="p-2 hover:bg-gray-100 rounded-md flex items-center gap-2"
                >
                    <span className="text-2xl">{language === "id" ? "🇮🇩" : "🇬🇧"}</span>
                    <span className="text-xs text-gray-600">{language === "id" ? "ID" : "EN"}</span>
                </button>

                <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-700">{session?.user?.fullName}</p>
                        <p className="text-xs text-gray-500">{session?.user?.role}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold border border-orange-200">
                        {session?.user?.fullName?.[0] || "U"}
                    </div>
                </div>
            </div>
        </header>
    )
}

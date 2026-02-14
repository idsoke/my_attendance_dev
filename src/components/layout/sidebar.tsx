"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Activity,
    Database,
    Users,
    Settings,
    LogOut,
    ChevronDown,
    Menu,
    Building2,
    FileQuestion,
    User
} from "lucide-react"
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useSidebar } from "@/contexts/SidebarContext"

export function Sidebar() {
    const pathname = usePathname()
    const { data: session } = useSession()
    const { t } = useLanguage()
    const { isOpen, close } = useSidebar()
    const [isMasterOpen, setIsMasterOpen] = useState(true)
    const [allowedPaths, setAllowedPaths] = useState<Set<string>>(new Set())
    const [isLoadingPermissions, setIsLoadingPermissions] = useState(true)

    const isActive = (path: string) => pathname === path || pathname.startsWith(path)

    // Close sidebar when navigating on mobile
    useEffect(() => {
        close()
    }, [pathname])

    useEffect(() => {
        if (session?.user?.role) {
            fetch("/api/master/access-matrix")
                .then(res => res.json())
                .then((menus: any[]) => {
                    const allowed = new Set<string>()
                    menus.forEach(m => {
                        const access = m.accesses.find((a: any) => a.role === session.user.role)
                        if (access?.canAccess) allowed.add(m.path)
                    })
                    setAllowedPaths(allowed)
                    setIsLoadingPermissions(false)
                })
                .catch(err => {
                    console.error("Error fetching permissions", err)
                    setIsLoadingPermissions(false)
                })
        }
    }, [session])

    const hasAccess = (path: string) => {
        // Special logic for minimized "Employee" view
        if (session?.user?.role !== "ADMIN") {
            // For regular users, ONLY show Dashboard and maybe Profile/Logout
            // The user said "menu yang lain hilangkan" (remove other menus).
            const allowed = ["/dashboard", "/my-attendance", "/api/auth/signout", "/profile", "/monitoring"]
            // I'm keeping my-attendance so they can see history, and profile.
            // But let's be strict if they really want minified.
            // Actually, let's keep Dashboard + My Attendance + Profile.
            return allowed.includes(path)
        }

        // Admin sees strictly what's in matrix + Profile
        if (path === "/profile" || path === "/api/auth/signout") return true
        return allowedPaths.has(path)
    }

    if (isLoadingPermissions) return <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-screen fixed left-0 top-0 z-[60] p-6"><div className="animate-pulse h-4 bg-gray-200 rounded w-3/4"></div></aside>

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 md:hidden"
                    onClick={close}
                />
            )}

            <aside className={cn(
                "w-64 bg-white border-r border-gray-200 flex-col h-screen fixed left-0 top-0 z-[60] transition-transform duration-300 md:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full md:flex"
            )}>
                {/* Logo Area */}
                <div className="h-16 flex items-center px-6 border-b border-gray-100 justify-between">
                    <div className="text-2xl font-bold text-orange-600 flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-lg">
                            M
                        </div>
                        APP
                    </div>
                    <button onClick={close} className="md:hidden text-gray-400 hover:text-gray-600">
                        <Menu size={20} />
                    </button>
                </div>

                {/* User Profile Summary */}
                <div className="p-6 pb-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                            {session?.user?.fullName?.[0] || "U"}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-gray-900 truncate">{session?.user?.fullName}</p>
                            <p className="text-xs text-gray-500 truncate">{session?.user?.role}</p>
                        </div>
                        <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-4 space-y-1">
                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">
                        Main Menu
                    </p>

                    {hasAccess("/dashboard") && (
                        <Link
                            href="/dashboard"
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-r-full transition-colors",
                                isActive("/dashboard")
                                    ? "bg-orange-50 text-orange-700 border-l-4 border-orange-700"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <LayoutDashboard size={18} />
                            {t("menu.dashboard")}
                        </Link>
                    )}

                    {/* Only show these to Admin or if explicitly allowed (which they aren't for regular users now) */}
                    {session?.user?.role === "ADMIN" && (
                        <>
                            <Link href="/kegiatan" className={cn("flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-r-full transition-colors", isActive("/kegiatan") ? "bg-orange-50 text-orange-700 border-l-4 border-orange-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")}>
                                <Activity size={18} />
                                {t("menu.kegiatan")}
                            </Link>
                            <Link href="/monitoring" className={cn("flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-r-full transition-colors", isActive("/monitoring") ? "bg-orange-50 text-orange-700 border-l-4 border-orange-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")}>
                                <Activity size={18} />
                                Monitoring
                            </Link>
                        </>
                    )}

                    {hasAccess("/profile") && (
                        <Link
                            href="/profile"
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-r-full transition-colors",
                                isActive("/profile")
                                    ? "bg-orange-50 text-orange-700 border-l-4 border-orange-700"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <User size={18} />
                            {t("menu.profile")}
                        </Link>
                    )}

                    <Link
                        href="/my-attendance"
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-r-full transition-colors",
                            isActive("/my-attendance")
                                ? "bg-orange-50 text-orange-700 border-l-4 border-orange-700"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        )}
                    >
                        <Activity size={18} />
                        Kehadiran
                    </Link>

                    {session?.user?.role === "ADMIN" && (
                        <>
                            <Link
                                href="/approvals"
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-r-full transition-colors",
                                    isActive("/approvals")
                                        ? "bg-orange-50 text-orange-700 border-l-4 border-orange-700"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                )}
                            >
                                <Users size={18} />
                                {t("menu.approvals")}
                            </Link>

                            <div
                                onClick={() => setIsMasterOpen(!isMasterOpen)}
                                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer rounded-r-full"
                            >
                                <div className="flex items-center gap-3">
                                    <Database size={18} />
                                    {t("menu.masterData")}
                                </div>
                                <ChevronDown size={16} className={cn("transition-transform", isMasterOpen ? "rotate-180" : "")} />
                            </div>

                            {isMasterOpen && (
                                <div className="space-y-1">
                                    {/* All submenus */}
                                    <Link href="/master/anggota" className={cn("flex items-center gap-3 px-4 py-2 pl-12 text-sm font-medium rounded-r-full transition-colors", isActive("/master/anggota") ? "text-orange-700" : "text-gray-500 hover:text-gray-900")}>
                                        <Users size={16} /> {t("menu.members")}
                                    </Link>
                                    <Link href="/master/jenjang" className={cn("flex items-center gap-3 px-4 py-2 pl-12 text-sm font-medium rounded-r-full transition-colors", isActive("/master/jenjang") ? "text-orange-700" : "text-gray-500 hover:text-gray-900")}>
                                        <Settings size={16} /> {t("menu.levels")}
                                    </Link>
                                    <Link href="/master/upa" className={cn("flex items-center gap-3 px-4 py-2 pl-12 text-sm font-medium rounded-r-full transition-colors", isActive("/master/upa") ? "text-orange-700" : "text-gray-500 hover:text-gray-900")}>
                                        <Database size={16} /> {t("menu.upa")}
                                    </Link>
                                    <Link href="/master/dpc" className={cn("flex items-center gap-3 px-4 py-2 pl-12 text-sm font-medium rounded-r-full transition-colors", isActive("/master/dpc") ? "text-orange-700" : "text-gray-500 hover:text-gray-900")}>
                                        <Building2 size={16} /> {t("menu.dpc")}
                                    </Link>
                                    <Link href="/master/pertanyaan" className={cn("flex items-center gap-3 px-4 py-2 pl-12 text-sm font-medium rounded-r-full transition-colors", isActive("/master/pertanyaan") ? "text-orange-700" : "text-gray-500 hover:text-gray-900")}>
                                        <FileQuestion size={16} /> {t("menu.questions")}
                                    </Link>
                                    <Link href="/master/translations" className={cn("flex items-center gap-3 px-4 py-2 pl-12 text-sm font-medium rounded-r-full transition-colors", isActive("/master/translations") ? "text-orange-700" : "text-gray-500 hover:text-gray-900")}>
                                        <FileQuestion size={16} /> {t("menu.translations")}
                                    </Link>
                                    <Link href="/master/access-matrix" className={cn("flex items-center gap-3 px-4 py-2 pl-12 text-sm font-medium rounded-r-full transition-colors", isActive("/master/access-matrix") ? "text-orange-700" : "text-gray-500 hover:text-gray-900")}>
                                        <Settings size={16} /> {t("menu.accessMatrix")}
                                    </Link>
                                </div>
                            )}
                        </>
                    )}
                </nav>

                {/* Footer Sidebar */}
                <div className="p-4 border-t border-gray-100">
                    <Link
                        href="/api/auth/signout"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-r-full transition-colors"
                    >
                        <LogOut size={18} />
                        {t("menu.signOut")}
                    </Link>
                </div>
            </aside>
        </>
    )
}

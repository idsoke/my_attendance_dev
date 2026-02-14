"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
    const pathname = usePathname()
    const { data: session } = useSession()

    const navigation = [
        { name: "Dashboard", href: "/dashboard", roles: ["ADMIN", "EDITOR", "USER"] },
        { name: "Activities", href: "/activities", roles: ["ADMIN", "EDITOR", "USER"] },
        { name: "Master Data", href: "/master", roles: ["ADMIN"] },
    ]

    const filteredNavigation = navigation.filter((item) =>
        item.roles.includes(session?.user?.role || "")
    )

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/dashboard" className="text-xl font-bold text-blue-600">
                                Monitoring App
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {filteredNavigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        pathname === item.href
                                            ? "border-blue-500 text-gray-900"
                                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-sm">
                            <p className="font-medium text-gray-900">{session?.user?.fullName}</p>
                            <p className="text-gray-500">{session?.user?.role}</p>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => signOut({ callbackUrl: "/login" })}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

"use client"

import { useEffect, useState, Fragment } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useSession } from "next-auth/react"
import { Loader2 } from "lucide-react"
import { apiClient } from "@/lib/api-client"

interface RoleAccess {
    id: string
    role: "ADMIN" | "EDITOR" | "PENGGUNA" | "SEKRETARIS"
    menuId: string
    canAccess: boolean
}

interface Menu {
    id: string
    label: string
    path: string
    group: string
    accesses: RoleAccess[]
}

const ROLES = ["ADMIN", "EDITOR", "PENGGUNA", "SEKRETARIS"] as const

export default function AccessMatrixPage() {
    const { data: session } = useSession()
    const [menus, setMenus] = useState<Menu[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchMatrix()
    }, [])

    const fetchMatrix = async () => {
        try {
            const res = await apiClient("/api/master/access-matrix")
            if (res.ok) {
                const data = await res.json()
                setMenus(data)
            } else {
                console.error("Failed to fetch matrix:", res.status, res.statusText)
                // alert(`Failed to fetch data: ${res.status} ${res.statusText}`) 
            }
        } catch (error) {
            console.error("Error fetching access matrix:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleToggle = async (menuId: string, role: typeof ROLES[number], currentAccess: boolean) => {
        // Optimistic update
        setMenus(prev => prev.map(menu => {
            if (menu.id === menuId) {
                const existingAccess = menu.accesses.find(a => a.role === role)
                let newAccesses = [...menu.accesses]
                if (existingAccess) {
                    newAccesses = newAccesses.map(a => a.role === role ? { ...a, canAccess: !currentAccess } : a)
                } else {
                    newAccesses.push({ id: "temp", role, menuId, canAccess: !currentAccess })
                }
                return { ...menu, accesses: newAccesses }
            }
            return menu
        }))

        try {
            const res = await apiClient("/api/master/access-matrix", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    role,
                    menuId,
                    canAccess: !currentAccess
                })
            })

            if (!res.ok) {
                // Revert on failure (simplified, ideally re-fetch)
                fetchMatrix()
                alert("Failed to update permission")
            }
        } catch (error) {
            console.error("Error updating permission:", error)
            fetchMatrix()
        }
    }

    const groupedMenus = menus.reduce((acc, menu) => {
        const group = menu.group || "Other"
        if (!acc[group]) acc[group] = []
        acc[group].push(menu)
        return acc
    }, {} as Record<string, Menu[]>)

    if (loading) {
        return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Access Matrix</h1>
                    <p className="text-gray-500">Manage menu authorization by user groups</p>
                </div>
            </div>

            <Card>
                <CardContent className="pt-6">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Menu</th>
                                    {ROLES.map(role => (
                                        <th key={role} className="px-6 py-3 text-center text-sm font-medium text-gray-700">
                                            {role}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {Object.entries(groupedMenus).map(([group, groupMenus]) => (
                                    <Fragment key={group}>
                                        <tr className="bg-gray-100">
                                            <td colSpan={ROLES.length + 1} className="px-6 py-2 text-xs font-bold text-gray-500 uppercase">
                                                {group}
                                            </td>
                                        </tr>
                                        {groupMenus.map(menu => (
                                            <tr key={menu.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                    {menu.label}
                                                    <div className="text-xs text-gray-400 font-normal">{menu.path}</div>
                                                </td>
                                                {ROLES.map(role => {
                                                    const access = menu.accesses.find(a => a.role === role)
                                                    const isChecked = access?.canAccess || false
                                                    return (
                                                        <td key={role} className="px-6 py-4 text-center">
                                                            <Checkbox
                                                                checked={isChecked}
                                                                onCheckedChange={() => handleToggle(menu.id, role, isChecked)}
                                                                className="data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
                                                            />
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

import { SessionProvider } from "next-auth/react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { SidebarProvider } from "@/contexts/SidebarContext"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SessionProvider>
            <LanguageProvider>
                <SidebarProvider>
                    <div className="min-h-screen bg-[#f2edf3] flex flex-col relative">
                        {/* Minimal Header just for Profile/Logout if needed, or keeping it clean as requested */}
                        {/* <div className="absolute top-4 right-4 z-50">
                            <ProfileDropdown /> 
                        </div> */}

                        <main className="flex-1 flex flex-col h-full w-full max-w-md mx-auto p-4 md:p-6 justify-center">
                            {children}
                        </main>
                    </div>
                </SidebarProvider>
            </LanguageProvider>
        </SessionProvider>
    )
}

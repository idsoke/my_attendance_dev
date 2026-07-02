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
                    <div className="min-h-screen bg-[#f2edf3] relative">
                        <Sidebar />
                        <Header />

                        <main className="flex flex-col min-h-screen w-full pt-16 md:pl-64 p-4 md:p-6">
                            {children}
                        </main>
                    </div>
                </SidebarProvider>
            </LanguageProvider>
        </SessionProvider>
    )
}

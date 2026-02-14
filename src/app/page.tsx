import { auth } from "@/lib/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"
import { Building2, ArrowRight } from "lucide-react"

export default async function Home() {
  const session = await auth()

  if (session?.user) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center gap-2 group" href="#">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">PT Optima<span className="text-blue-600">ITT</span></span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm shadow-blue-200">
                Masuk
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-70"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                Sistem Presensi & <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Manajemen Karyawan</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
                Platform terintegrasi untuk pengelolaan absensi, aktivitas harian, dan administrasi karyawan PT Optima ITT.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/login" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20">
                    Login Karyawan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-slate-100">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-slate-400" />
            <span className="font-semibold text-slate-700">PT Optima ITT</span>
          </div>
          <p className="text-sm text-slate-400">© 2026 Internal System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const { nextUrl } = req
    const role = req.auth?.user?.role

    const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth")
    const isAuthRoute = nextUrl.pathname.startsWith("/login")
    const isPublicRoute = nextUrl.pathname === "/"
    const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard") || nextUrl.pathname.startsWith("/activities") || nextUrl.pathname.startsWith("/master")

    if (isApiAuthRoute) {
        return
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/dashboard", nextUrl))
        }
        return
    }

    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname
        if (nextUrl.search) {
            callbackUrl += nextUrl.search
        }
        return NextResponse.redirect(
            new URL(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`, nextUrl)
        )
    }

    // RBAC Logic
    if (isLoggedIn && nextUrl.pathname.startsWith("/master") && role !== "ADMIN") {
        return NextResponse.redirect(new URL("/dashboard", nextUrl))
    }

    return
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}

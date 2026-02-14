"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "id" | "en"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
    translations: Record<string, { id: string; en: string }>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("id")
    const [translations, setTranslations] = useState<Record<string, { id: string; en: string }>>({})

    useEffect(() => {
        const saved = localStorage.getItem("language")
        if (saved === "id" || saved === "en") {
            setLanguage(saved)
        }
    }, [])

    useEffect(() => {
        fetchTranslations()
    }, [])

    const fetchTranslations = async () => {
        try {
            const res = await fetch("/api/master/translations")
            const data = await res.json()
            const mapped: Record<string, { id: string; en: string }> = {}
            data.forEach((t: any) => {
                mapped[t.variableName] = {
                    id: t.indonesiaValue,
                    en: t.englishValue,
                }
            })
            setTranslations(mapped)
        } catch (error) {
            console.error("Error fetching translations:", error)
        }
    }

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem("language", lang)
    }

    const t = (key: string): string => {
        return translations[key]?.[language] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, translations }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider")
    }
    return context
}

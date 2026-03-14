"use client"

import { useTheme } from "@/components/ThemeProvider"
import { BackButton } from "@/components/ui/back-button"

export function SettingsClient() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="bg-white dark:bg-neutral-950 min-h-screen transition-colors duration-300">
      <section className="border-b border-[#E5E5E5] dark:border-neutral-800 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-neutral-400 block mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Konfiguration
          </span>
          <h1
            className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-black dark:text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Einstellungen
          </h1>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-0">
          <div className="flex items-center justify-between py-8 border-b border-[#E5E5E5] dark:border-neutral-800">
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold text-black dark:text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Dark Mode
              </h3>
              <p className="text-sm text-neutral-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Dunkles Farbschema fur die gesamte Seite aktivieren.
              </p>
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${
                theme === "dark" ? "bg-black" : "bg-neutral-200"
              }`}
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 ${
                theme === "dark" ? "translate-x-7" : "translate-x-1"
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between py-8 border-b border-[#E5E5E5] dark:border-neutral-800">
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold text-black dark:text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Aktuelles Design
              </h3>
              <p className="text-sm text-neutral-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Das aktive Farbschema der Website.
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3385FF]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 border-t border-[#E5E5E5] dark:border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <BackButton />
        </div>
      </section>
    </main>
  )
}

import { BackButton } from "@/components/ui/back-button"

const tools = [
  {
    name: "Next.js",
    desc: "Das Framework, auf dem die gesamte Website aufbaut. Next.js ermoglicht schnelle, skalierbare Webseiten auf Basis von React.",
  },
  {
    name: "Vercel",
    desc: "Hosting und Deployment. Jede Anderung am Code wird automatisch veroffentlicht - ohne manuelle Schritte.",
  },
  {
    name: "Supabase",
    desc: "Eine Open-Source-Datenbanklösung, uber die wir Inhalte speichern und dynamisch abrufen.",
  },
  {
    name: "Clerk",
    desc: "Zustandig fur Anmeldung und Authentifizierung. Clerk stellt sicher, dass nur berechtigte Personen auf bestimmte Bereiche zugreifen können.",
  },
  {
    name: "GitHub & Git",
    desc: "Der gesamte Code liegt in einem gemeinsamen Repository. Git erlaubt es uns, Anderungen nachzuverfolgen, gemeinsam zu arbeiten und bei Bedarf auf fruehere Versionen zuruckzugreifen.",
  },
  {
    name: "Claude & Claude Code",
    desc: "KI-Assistent und Entwicklungsumgebung von Anthropic. Wir nutzen Claude fur Texte, Konzepte und Problemlösungen - Claude Code direkt beim Schreiben von Code.",
  },
  {
    name: "21st.dev",
    desc: "Eine Plattform fur hochwertige UI-Komponenten, die wir als Inspirationsquelle und fur fertige Bausteine nutzen.",
  },
  {
    name: "Colour Hunt",
    desc: "Ein schlichtes Tool zur Farbpaletten-Auswahl, das uns hilft, ein konsistentes visuelles Erscheinungsbild zu entwickeln.",
  },
  {
    name: "Abacus AI",
    desc: "Eine KI-Plattform, die wir fur komplexere Experimente und Automatisierungen einsetzen.",
  },
  {
    name: "Perplexity",
    desc: "KI-gestuetzte Suche fur schnelle, quellenbasierte Recherchen wahrend der Entwicklung.",
  },
  {
    name: "ChatGPT",
    desc: "Gelegentlich als erganzende Perspektive, etwa wenn wir verschiedene Losungsansatze miteinander vergleichen.",
  },
  {
    name: "Squarespace",
    desc: "Uber Squarespace wird unsere Domain oberstufe.site registriert und verwaltet.",
  },
]

export default function TechstackPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="border-b border-[#E5E5E5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-neutral-400 block mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Technik
          </span>
          <h1
            className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-black"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Tech Stack
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-20 pb-4 px-6">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-lg text-neutral-700 leading-relaxed max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            oberstufe.site wurde nicht aus einem fertigen Template zusammengeklickt, sondern von
            Grund auf selbst entwickelt. Dabei setzen wir auf ein Set aus modernen Tools und
            Diensten, die gut zusammenspielen.
          </p>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className="flex gap-6 items-start py-8 border-b border-[#E5E5E5] md:odd:pr-12 md:even:pl-12 md:even:border-l"
              >
                <span
                  className="text-[10px] font-semibold text-[#3385FF] mt-1 flex-shrink-0 w-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-base font-bold text-black"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tool.name}
                  </h3>
                  <p
                    className="text-sm text-neutral-500 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back button */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto pt-8 border-t border-[#E5E5E5]">
          <BackButton />
        </div>
      </section>
    </main>
  )
}

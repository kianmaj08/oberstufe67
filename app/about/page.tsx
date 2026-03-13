import { BackButton } from "@/components/ui/back-button"

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="border-b border-[#E5E5E5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-neutral-400 block mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Uber uns
          </span>
          <h1
            className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-black"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            About
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* Main text */}
          <div className="flex flex-col gap-8">
            <p
              className="text-lg text-neutral-700 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              oberstufe.site ist im Rahmen unserer schulischen Arbeit entstanden. Was als einfaches
              Experiment begann, hat sich zu einer wachsenden Sammlung von Projekten entwickelt -
              Websites, Prasentationen und KI-Experimente, die wir hier gemeinsam veroffentlichen.
            </p>
            <p
              className="text-lg text-neutral-700 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Jedes Projekt spiegelt ein Thema wider, das uns beschaftigt hat: Philosophie,
              Geschichte, Kunst, Technologie. Statt die Ergebnisse in einer Schublade verschwinden
              zu lassen, geben wir ihnen hier einen Platz - offen zuganglich, jederzeit und fur
              jeden.
            </p>
            <p
              className="text-lg text-neutral-700 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Die Website wachst mit jedem neuen Projekt. Inhalte und Gestaltung entwickeln sich
              dabei stetig weiter.
            </p>
          </div>

          {/* Planned improvements sidebar */}
          <div className="flex flex-col gap-6">
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Geplante Verbesserungen
            </span>
            <div className="flex flex-col gap-4">
              {[
                "Uberarbeitetes Design der Homepage mit klarerer Struktur und verbesserter Navigation",
                "Erweiterung der Projektsammlung um neue Themen und Schuljahre",
                "Bessere Vernetzung der einzelnen Projekte untereinander",
                "Optimierung fur mobile Endgerate",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span
                    className="text-[10px] font-semibold text-[#3385FF] mt-1 flex-shrink-0"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    0{i + 1}
                  </span>
                  <p
                    className="text-sm text-neutral-600 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
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

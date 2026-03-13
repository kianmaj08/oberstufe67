import { BackButton } from "@/components/ui/back-button"

const faqs = [
  {
    q: "Was ist oberstufe.site?",
    a: "Unsere zentrale Anlaufstelle fur alle Schulerprojekte. Von hier aus erreichst du jedes einzelne Projekt direkt - gesammelt an einem Ort, ubersichtlich strukturiert.",
  },
  {
    q: "Warum gibt es mehrere Websites?",
    a: "Jedes Projekt hat sein eigenes Thema und seine eigene Gestaltung. Eine gemeinsame Startseite mit vielen separaten Projekten funktioniert besser als alles auf einen Haufen zu werfen.",
  },
  {
    q: "Sind die Inhalte schon fertig?",
    a: "Noch nicht vollstandig. Alle Projekte befinden sich in unterschiedlichen Stadien - manche sind weit fortgeschritten, andere noch im Aufbau. Das gehort zu einem lebendigen Schulprojekt dazu.",
  },
  {
    q: "Wie werden die Seiten betrieben?",
    a: "Unsere Websites laufen uber Vercel, die Domain wird uber Squarespace verwaltet. Der gesamte Code liegt auf GitHub.",
  },
  {
    q: "Wer steckt dahinter?",
    a: "oberstufe.site wird von Schulern der Oberstufe betrieben. Es handelt sich um ein eigenstandiges Projekt - nicht um eine offizielle Veroffentlichung der Schule.",
  },
  {
    q: "Darf ich die Inhalte verwenden?",
    a: "Die Inhalte sind Schularbeiten und entsprechend urheberrechtlich geschutzt. Meld dich kurz bei uns, bevor du etwas ubernimmst - wir finden sicher eine Losung.",
  },
]

export default function FAQPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="border-b border-[#E5E5E5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-neutral-400 block mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Haufige Fragen
          </span>
          <h1
            className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-black"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            FAQ
          </h1>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="py-10 border-b border-[#E5E5E5] grid grid-cols-1 lg:grid-cols-[40px_1fr] gap-4 items-start">
              <span
                className="text-[10px] font-semibold text-[#3385FF] mt-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-3">
                <h3
                  className="text-lg font-bold text-black leading-snug"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-sm text-neutral-500 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
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

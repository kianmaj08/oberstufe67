import { BackButton } from "@/components/ui/back-button"

const ways = [
  {
    label: "In der Schule ansprechen",
    desc: "Der direkteste Weg. Sprich uns einfach an, und wir schauen gemeinsam, wie dein Projekt am besten eingebunden werden kann.",
  },
  {
    label: "Per E-Mail",
    desc: "Schick uns eine kurze Beschreibung deines Projekts an oberstufesite@gmail.com. Wir melden uns so schnell wie moglich zuruck.",
    link: { href: "mailto:oberstufesite@gmail.com", text: "oberstufesite@gmail.com" },
  },
  {
    label: "Uber das Formular",
    desc: 'Wenn du lieber strukturiert anfragen mochtest, nutze unser Feedback-Formular. Wahle "Sonstiges" aus, gib deinen Namen an und beschreibe kurz dein Vorhaben.',
  },
]

const reasons = [
  "Deine Arbeit bekommt einen dauerhaften Platz - sichtbar fur Mitschuler, Lehrer und alle anderen.",
  "Du sammelst echte Erfahrungen in Webentwicklung und digitaler Prasentation.",
  "Dein Projekt bleibt uber die Schulzeit hinaus zuganglich und auffindbar.",
]

export default function ParticipatePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="border-b border-[#E5E5E5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-neutral-400 block mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Mitmachen
          </span>
          <h1
            className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-black"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Participate
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
            Du hast im Unterricht etwas erarbeitet und fragst dich, was danach damit passiert?
            Bring es hierher. Wir helfen dir dabei, dein Projekt als eigene Seite auf
            oberstufe.site zu veroffentlichen - offen zuganglich, dauerhaft online.
          </p>
        </div>
      </section>

      {/* Ways to participate */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
          <div className="flex flex-col gap-0">
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 block mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              So geht es
            </span>
            {ways.map((way, i) => (
              <div key={i} className="flex gap-6 items-start py-8 border-b border-[#E5E5E5]">
                <span
                  className="text-[10px] font-semibold text-[#3385FF] mt-1 flex-shrink-0"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-base font-bold text-black"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {way.label}
                  </h3>
                  <p
                    className="text-sm text-neutral-500 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {way.desc}
                  </p>
                  {way.link && (
                    <a
                      href={way.link.href}
                      className="text-xs font-medium text-[#3385FF] underline underline-offset-4 hover:text-black transition-colors duration-200 mt-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {way.link.text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Why participate */}
          <div className="flex flex-col gap-6 lg:pt-14">
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Warum mitmachen?
            </span>
            <p
              className="text-sm text-neutral-600 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Deine Arbeit verdient mehr als eine Note.
            </p>
            <div className="flex flex-col gap-4">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3385FF] flex-shrink-0 mt-2" />
                  <p
                    className="text-sm text-neutral-500 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {r}
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

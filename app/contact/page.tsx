import { BackButton } from "@/components/ui/back-button"

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="border-b border-[#E5E5E5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-neutral-400 block mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Kontakt
          </span>
          <h1
            className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-black"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Contact
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <p
              className="text-lg text-neutral-700 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Fragen, Ideen, Feedback oder ein Projekt, das du einreichen mochtest - wir freuen
              uns uber jede Nachricht. Wir versuchen, uns zeitnah zu melden.
            </p>

            <div className="flex flex-col gap-0">
              {/* E-Mail */}
              <div className="flex gap-6 items-start py-8 border-b border-[#E5E5E5]">
                <span
                  className="text-[10px] font-semibold text-[#3385FF] mt-1 flex-shrink-0"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  01
                </span>
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-base font-bold text-black"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    E-Mail
                  </h3>
                  <a
                    href="mailto:oberstufesite@gmail.com"
                    className="text-sm text-[#3385FF] underline underline-offset-4 hover:text-black transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    oberstufesite@gmail.com
                  </a>
                </div>
              </div>

              {/* Formular */}
              <div className="flex gap-6 items-start py-8 border-b border-[#E5E5E5]">
                <span
                  className="text-[10px] font-semibold text-[#3385FF] mt-1 flex-shrink-0"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  02
                </span>
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-base font-bold text-black"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Formular
                  </h3>
                  <p
                    className="text-sm text-neutral-500 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Fur detailliertere Anfragen steht unser Feedback-Formular zur Verfugung. Ideal,
                    wenn du ein Projekt einreichen oder konkrete Vorschlage machen mochtest.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - quick note */}
          <div className="flex flex-col gap-4 lg:pt-2">
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Hinweis
            </span>
            <p
              className="text-sm text-neutral-500 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              oberstufe.site ist ein eigenstandiges Schulerprojekt. Fur offizielle schulische
              Anliegen wende dich bitte direkt an deine Schule.
            </p>
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

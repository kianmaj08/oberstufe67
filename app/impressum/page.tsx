import Image from "next/image"
import { BackButton } from "@/components/ui/back-button"

export default function ImpressumPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="border-b border-[#E5E5E5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-neutral-400 block mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Rechtliches
          </span>
          <h1
            className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-black"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
          <div className="flex flex-col gap-0">
            <div className="flex flex-col gap-2 py-8 border-b border-[#E5E5E5]">
              <span
                className="text-[10px] font-semibold tracking-[0.3em] uppercase text-neutral-400"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Betreiber
              </span>
              <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Schuler der Oberstufe
              </p>
            </div>

            <div className="flex flex-col gap-2 py-8 border-b border-[#E5E5E5]">
              <span
                className="text-[10px] font-semibold tracking-[0.3em] uppercase text-neutral-400"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Kontakt
              </span>
              <a
                href="mailto:oberstufesite@gmail.com"
                className="text-sm text-[#3385FF] underline underline-offset-4 hover:text-black transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                oberstufesite@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-2 py-8 border-b border-[#E5E5E5]">
              <span
                className="text-[10px] font-semibold tracking-[0.3em] uppercase text-neutral-400"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Haftungshinweis
              </span>
              <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Trotz sorgfaltiger inhaltlicher Kontrolle ubernehmen wir keine Haftung fur
                die Inhalte externer Links. Fur den Inhalt der verlinkten Seiten sind
                ausschliesslich deren Betreiber verantwortlich.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-square overflow-hidden rounded-sm">
              <Image
                src="/opossum.jpeg"
                alt="Das Maskottchen von oberstufe.site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
            <p
              className="text-xs text-neutral-400 text-center"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Das offizielle Maskottchen von oberstufe.site
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 border-t border-[#E5E5E5]">
        <div className="max-w-5xl mx-auto">
          <BackButton />
        </div>
      </section>
    </main>
  )
}

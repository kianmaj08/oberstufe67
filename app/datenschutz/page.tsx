import { BackButton } from "@/components/ui/back-button"

export default function DatenschutzPage() {
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
            Datenschutz
          </h1>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-lg text-neutral-700 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Hier steht kein Datenschutz.
          </p>
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

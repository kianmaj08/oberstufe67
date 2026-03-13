"use client"

import { BlurFade } from "@/components/ui/blur-fade"

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white" style={{ minHeight: "55vh" }}>
      {/* Animated dot grid background */}
      <div className="absolute inset-0 hero-grid-bg" aria-hidden="true" />

      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(255,255,255,0.7) 100%)",
        }}
      />

      <div className="relative z-10 w-full px-6 text-center">
        <BlurFade delay={0} inView>
          <span
            className="inline-block text-xs font-semibold tracking-[0.4em] uppercase mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#bde0fe" }}
          >
            OBERSTUFE.SITE
          </span>
        </BlurFade>

        <BlurFade delay={0.14} inView>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] tracking-tight text-black mb-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Willkommen auf
            <br />
            <span className="italic text-neutral-400">Oberstufe.site</span>
          </h1>
        </BlurFade>
      </div>

      <style jsx>{`
        .hero-grid-bg {
          background-image: radial-gradient(circle, #d4d4d4 1px, transparent 1px);
          background-size: 32px 32px;
          animation: gridMove 20s linear infinite;
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 32px 32px; }
        }
      `}</style>
    </section>
  )
}

"use client"

import { BlurFade } from "@/components/ui/blur-fade"

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="10" height="10" rx="1" />
        <rect x="18" y="4" width="10" height="10" rx="1" />
        <rect x="4" y="18" width="10" height="10" rx="1" />
        <rect x="18" y="18" width="10" height="10" rx="1" />
      </svg>
    ),
    title: "Projekte entdecken",
    description: "Durchsuche abgeschlossene Schulprojekte aus allen Fachbereichen der Oberstufe.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v24M4 16h24" />
        <circle cx="16" cy="16" r="12" />
      </svg>
    ),
    title: "Ideen teilen",
    description: "Lade deine eigenen Arbeiten hoch und mach sie fur andere Schuler zuganglich.",
  },
]

export function FeatureGrid() {
  return (
    <section className="border-t border-b border-[#E5E5E5] bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
        {features.map((feature, i) => (
          <BlurFade key={feature.title} delay={i * 0.1} inView>
            <div className="flex flex-col items-start gap-4">
              <div className="text-black">{feature.icon}</div>
              <h3
                className="text-lg font-bold text-black tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm text-neutral-500 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {feature.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}

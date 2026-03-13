"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Project } from "@/lib/supabase"

interface FeaturedIPadClientProps {
  project: Project
}

export function FeaturedIPadClient({ project }: FeaturedIPadClientProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-28 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text block */}
        <div className="flex flex-col gap-6">
          <span
            className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Das vorgestellte Projekt
          </span>

          {project.subject && (
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0066FF]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.subject}
            </span>
          )}

          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {project.title}
          </h2>

          {project.description && (
            <p
              className="text-neutral-400 text-sm leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.description}
            </p>
          )}

          {(project.author_name || project.author_class) && (
            <p
              className="text-xs text-neutral-600"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {[project.author_name, project.author_class].filter(Boolean).join(" · ")}
            </p>
          )}

          <a
            href={project.project_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 rounded-sm w-fit mt-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Jetzt ansehen
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* iPad Mockup */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative"
            style={{
              width: "320px",
              height: "430px",
            }}
          >
            {/* iPad frame */}
            <div
              className="absolute inset-0 rounded-[36px] border-[10px] border-neutral-700 bg-neutral-800 shadow-2xl overflow-hidden"
              style={{
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              {/* Camera dot */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-600 z-10" />

              {/* Screen area with scrolling image */}
              <div className="absolute inset-0 rounded-[26px] overflow-hidden bg-neutral-900">
                {project.thumbnail_url ? (
                  <motion.div
                    style={{ y: imageY, height: "140%" }}
                    className="absolute inset-0 w-full"
                  >
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image
                        src={project.thumbnail_url}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        sizes="320px"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-neutral-600 uppercase tracking-widest">Vorschau</span>
                  </div>
                )}
              </div>
            </div>

            {/* Side button accents */}
            <div className="absolute right-[-12px] top-[80px] w-[3px] h-[40px] bg-neutral-600 rounded-full" />
            <div className="absolute left-[-12px] top-[100px] w-[3px] h-[30px] bg-neutral-600 rounded-full" />
            <div className="absolute left-[-12px] top-[140px] w-[3px] h-[30px] bg-neutral-600 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

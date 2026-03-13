"use client"

import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { Project } from "@/lib/supabase"
import Image from "next/image"

interface FeaturedScrollClientProps {
  project: Project
}

export function FeaturedScrollClient({ project }: FeaturedScrollClientProps) {
  return (
    <section className="bg-white overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-6 pb-10">
            <span
              className="inline-block text-[10px] font-semibold tracking-[0.4em] uppercase text-neutral-400 mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              featured
            </span>
            <h2
              className="text-4xl md:text-6xl font-serif font-bold text-black leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {project.title}
            </h2>
          </div>
        }
      >
        {project.thumbnail_url ? (
          <a
            href={project.project_url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full h-full block group"
          >
            <Image
              src={project.thumbnail_url}
              alt={project.title}
              fill
              className="object-cover object-top rounded-xl transition-opacity duration-300 group-hover:opacity-90"
              sizes="(max-width: 768px) 100vw, 80vw"
              draggable={false}
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span
                className="bg-black/70 text-white text-xs px-4 py-2 rounded-sm backdrop-blur-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Projekt offnen
              </span>
            </div>
          </a>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-100 rounded-xl">
            <span
              className="text-xs text-neutral-400 uppercase tracking-widest"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.subject || "Vorschau"}
            </span>
          </div>
        )}
      </ContainerScroll>

      {/* Projekte-Button zentriert unterhalb */}
      <div className="flex justify-center pb-16 -mt-8">
        <a
          href="#projekte"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("projekte")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-medium rounded-sm hover:bg-[#3385FF] transition-colors duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Alle Projekte entdecken
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

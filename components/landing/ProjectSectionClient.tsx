"use client"

import { useState } from "react"
import { Project } from "@/lib/supabase"
import { ProjectCardItem } from "./ProjectCardItem"

interface ProjectSectionClientProps {
  projects: Project[]
}

export function ProjectSectionClient({ projects }: ProjectSectionClientProps) {
  const [query, setQuery] = useState("")

  const filtered = projects.filter((p) => {
    const q = query.toLowerCase()
    return (
      p.title.toLowerCase().includes(q) ||
      (p.subject?.toLowerCase().includes(q) ?? false) ||
      (p.author_name?.toLowerCase().includes(q) ?? false) ||
      (p.description?.toLowerCase().includes(q) ?? false)
    )
  })

  return (
    <section id="projekte" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400 block mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Archiv
            </span>
            <h2
              className="text-4xl md:text-5xl font-serif font-bold text-black tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Aktuelle Projekte
            </h2>
          </div>

          {/* Searchbar */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            >
              <circle cx="6" cy="6" r="4.5" />
              <path d="M9.5 9.5l3 3" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Projekte durchsuchen..."
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-[#E5E5E5] rounded-sm focus:outline-none focus:border-black transition-colors duration-200 text-black placeholder-neutral-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 2l8 8M10 2l-8 8" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Project list */}
        {projects.length === 0 ? (
          <div className="border border-[#E5E5E5] rounded-sm p-16 text-center">
            <p className="text-neutral-400 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Noch keine Projekte vorhanden.
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-neutral-400 text-sm py-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Keine Projekte fur &ldquo;{query}&rdquo; gefunden.
          </p>
        ) : (
          <div className="flex flex-col gap-10">
            {filtered.map((project, i) => (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
                {/* Card */}
                <ProjectCardItem project={project} index={i} />

                {/* Description - always visible, aligned to card */}
                <div className="hidden lg:flex flex-col gap-3 pt-2">
                  {project.subject && (
                    <span
                      className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#3385FF]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {project.subject}
                    </span>
                  )}
                  {project.description && (
                    <p
                      className="text-sm text-neutral-500 leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {project.description}
                    </p>
                  )}
                  {(project.author_name || project.author_class) && (
                    <p
                      className="text-xs text-neutral-400"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {[project.author_name, project.author_class].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

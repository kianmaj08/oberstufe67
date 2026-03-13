"use client"

import { useState } from "react"
import Image from "next/image"
import { Project } from "@/lib/supabase"
import { setFeaturedProject } from "@/lib/actions"

interface FeaturedPickerProps {
  projects: Project[]
  currentFeaturedId?: string | null
}

export function FeaturedPicker({ projects, currentFeaturedId }: FeaturedPickerProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState<string | null>(null)

  const handleSelect = async (id: string) => {
    setLoading(id)
    try {
      await setFeaturedProject(id)
      setOpen(false)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(null)
    }
  }

  const featured = projects.find((p) => p.is_featured)

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Current featured */}
      <div className="mb-6">
        <h2
          className="text-2xl font-bold text-black mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Vorgestelltes Projekt
        </h2>

        {featured ? (
          <div className="border border-[#E5E5E5] rounded-sm p-5 flex gap-4 items-center">
            <div className="relative w-24 h-16 rounded-sm overflow-hidden bg-neutral-100 flex-shrink-0">
              {featured.thumbnail_url ? (
                <Image src={featured.thumbnail_url} alt={featured.title} fill className="object-cover" sizes="96px" />
              ) : (
                <div className="w-full h-full bg-neutral-100" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#0066FF]">Featured</span>
                {featured.subject && (
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{featured.subject}</span>
                )}
              </div>
              <p className="font-semibold text-black truncate">{featured.title}</p>
              <p className="text-xs text-neutral-400 mt-0.5">
                {[featured.author_name, featured.author_class].filter(Boolean).join(" · ")}
              </p>
            </div>
          </div>
        ) : (
          <div className="border border-dashed border-[#E5E5E5] rounded-sm p-10 text-center">
            <p className="text-neutral-400 text-sm">Kein vorgestelltes Projekt gesetzt.</p>
          </div>
        )}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-black text-white px-4 py-2.5 text-sm font-medium rounded-sm hover:bg-neutral-800 transition-colors mb-8"
      >
        Vorgestelltes Projekt wechseln
      </button>

      {/* Picker grid */}
      {open && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-black uppercase tracking-widest">Projekt auswahlen</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-neutral-400 hover:text-black transition-colors"
            >
              Schliessen
            </button>
          </div>

          {projects.length === 0 ? (
            <p className="text-neutral-400 text-sm">Keine Projekte vorhanden.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {projects.map((project) => {
                const isCurrent = project.id === currentFeaturedId
                const isLoading = loading === project.id

                return (
                  <button
                    key={project.id}
                    onClick={() => handleSelect(project.id)}
                    disabled={isLoading}
                    className={`text-left border rounded-sm overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-black disabled:opacity-50 ${
                      isCurrent ? "border-[#0066FF] ring-1 ring-[#0066FF]" : "border-[#E5E5E5]"
                    }`}
                  >
                    <div className="relative w-full aspect-video bg-neutral-100">
                      {project.thumbnail_url ? (
                        <Image
                          src={project.thumbnail_url}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="200px"
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-100" />
                      )}
                      {isLoading && (
                        <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}
                    </div>
                    <div className="p-2.5">
                      <p className="text-xs font-semibold text-black truncate">{project.title}</p>
                      {project.subject && (
                        <p className="text-[10px] text-neutral-400 mt-0.5">{project.subject}</p>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

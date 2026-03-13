"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Project } from "@/lib/supabase"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

interface ProjectCardItemProps {
  project: Project
  index: number
  isSelected?: boolean
  onSelect?: () => void
}

export function ProjectCardItem({ project, index, isSelected, onSelect }: ProjectCardItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onClick={onSelect}
      className={`group border rounded-sm overflow-hidden flex flex-col transition-all duration-300 ${onSelect ? "cursor-pointer" : ""} ${isSelected ? "border-black" : "border-[#E5E5E5] hover:border-black hover:-translate-y-0.5"}`}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-neutral-100 overflow-hidden flex-shrink-0">
        {project.thumbnail_url ? (
          <Image
            src={project.thumbnail_url}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-xs text-neutral-400 uppercase tracking-widest font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.subject || "Projekt"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        {project.subject && (
          <span
            className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0066FF]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.subject}
          </span>
        )}

        <h3
          className="text-xl font-bold text-black leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "22px" }}
        >
          {project.title}
        </h3>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E5E5E5]">
          <span
            className="text-xs text-neutral-400"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {[project.author_name, project.author_class].filter(Boolean).join(" · ")}
          </span>

          <a
            href={project.project_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <InteractiveHoverButton
              text="Offnen"
              className="text-xs w-28 h-9"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

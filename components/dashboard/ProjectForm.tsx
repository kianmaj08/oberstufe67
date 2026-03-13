"use client"

import { useState, useRef } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ImageUpload } from "./ImageUpload"
import { createProject, updateProject } from "@/lib/actions"
import { Project } from "@/lib/supabase"

interface ProjectFormProps {
  open: boolean
  onClose: () => void
  project?: Project | null
}

export function ProjectForm({ open, onClose, project }: ProjectFormProps) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>(project?.thumbnail_url || "")
  const [description, setDescription] = useState(project?.description || "")
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const isEdit = !!project

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    formData.set("thumbnail_url", thumbnailUrl)

    try {
      if (isEdit) {
        await updateProject(project.id, formData)
      } else {
        await createProject(formData)
      }
      onClose()
      formRef.current?.reset()
      setThumbnailUrl("")
      setDescription("")
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    "w-full border border-[#E5E5E5] rounded-sm px-3 py-2.5 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
  const labelClass = "block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-1.5"

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        className="w-full sm:max-w-lg overflow-y-auto"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <SheetHeader className="mb-6">
          <SheetTitle
            className="text-lg font-bold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {isEdit ? "Projekt bearbeiten" : "Neues Projekt"}
          </SheetTitle>
        </SheetHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Titel */}
          <div>
            <label className={labelClass}>Titel *</label>
            <input
              name="title"
              required
              defaultValue={project?.title || ""}
              placeholder="z.B. Klimawandel und Gesellschaft"
              className={inputClass}
            />
          </div>

          {/* Fachbereich */}
          <div>
            <label className={labelClass}>Fachbereich</label>
            <input
              name="subject"
              defaultValue={project?.subject || ""}
              placeholder="z.B. Geographie"
              className={inputClass}
            />
          </div>

          {/* Beschreibung */}
          <div>
            <label className={labelClass}>
              Kurzbeschreibung
              <span className="ml-2 normal-case tracking-normal text-neutral-400">
                {description.length}/300
              </span>
            </label>
            <textarea
              name="description"
              maxLength={300}
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Kurze Beschreibung des Projekts..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Autor + Klasse */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>Autor</label>
              <input
                name="author_name"
                defaultValue={project?.author_name || ""}
                placeholder="Max Mustermann"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Klasse</label>
              <input
                name="author_class"
                defaultValue={project?.author_class || ""}
                placeholder="Q1"
                className={inputClass}
              />
            </div>
          </div>

          {/* Projekt-URL */}
          <div>
            <label className={labelClass}>Projekt-URL *</label>
            <input
              name="project_url"
              type="url"
              required
              defaultValue={project?.project_url || ""}
              placeholder="https://..."
              className={inputClass}
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label className={labelClass}>Thumbnail-Bild</label>
            <ImageUpload
              currentUrl={project?.thumbnail_url}
              onUpload={setThumbnailUrl}
            />
          </div>

          {/* Sichtbar */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="visible"
              id="visible"
              value="true"
              defaultChecked={project?.visible ?? true}
              className="w-4 h-4 accent-black"
            />
            <label
              htmlFor="visible"
              className="text-sm text-black cursor-pointer"
            >
              Sichtbar auf der Startseite
            </label>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-black text-white py-2.5 text-sm font-medium rounded-sm hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {loading ? "Wird gespeichert..." : isEdit ? "Speichern" : "Projekt erstellen"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-sm border border-[#E5E5E5] rounded-sm hover:bg-neutral-50 transition-colors"
            >
              Abbrechen
            </button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}

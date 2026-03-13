"use client"

import { useState } from "react"
import Image from "next/image"
import { Project } from "@/lib/supabase"
import { deleteProject, toggleVisibility, setFeaturedProject } from "@/lib/actions"
import { ProjectForm } from "./ProjectForm"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ProjectTableProps {
  projects: Project[]
}

export function ProjectTable({ projects }: ProjectTableProps) {
  const [editProject, setEditProject] = useState<Project | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [togglingId, setTogglingId] = useState<string | null>(null)
  const [featuringId, setFeaturingId] = useState<string | null>(null)

  const handleSetFeatured = async (id: string) => {
    setFeaturingId(id)
    try {
      await setFeaturedProject(id)
    } catch (err) {
      console.error(err)
    } finally {
      setFeaturingId(null)
    }
  }

  const handleToggle = async (id: string, current: boolean) => {
    setTogglingId(id)
    try {
      await toggleVisibility(id, !current)
    } catch (err) {
      console.error(err)
    } finally {
      setTogglingId(null)
    }
  }

  const handleDelete = async () => {
    if (!deleteId) return
    try {
      await deleteProject(deleteId)
    } catch (err) {
      console.error(err)
    } finally {
      setDeleteId(null)
    }
  }

  const handleEdit = (project: Project) => {
    setEditProject(project)
    setFormOpen(true)
  }

  const handleNew = () => {
    setEditProject(null)
    setFormOpen(true)
  }

  const handleFormClose = () => {
    setFormOpen(false)
    setEditProject(null)
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1
            className="text-2xl font-bold text-black"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Projekte
          </h1>
          <p className="text-xs text-neutral-400 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {projects.length} {projects.length === 1 ? "Eintrag" : "Einträge"}
          </p>
        </div>
        <button
          onClick={handleNew}
          className="flex items-center gap-2 bg-black text-white px-4 py-2.5 text-sm font-medium rounded-sm hover:bg-neutral-800 transition-colors"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M7 1v12M1 7h12" />
          </svg>
          Neues Projekt
        </button>
      </div>

      {/* Table */}
      {projects.length === 0 ? (
        <div className="border border-dashed border-[#E5E5E5] rounded-sm p-16 text-center">
          <p className="text-neutral-400 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Noch keine Projekte vorhanden. Erstelle dein erstes Projekt.
          </p>
        </div>
      ) : (
        <div className="border border-[#E5E5E5] rounded-sm overflow-hidden">
          <table className="w-full text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <thead>
              <tr className="border-b border-[#E5E5E5] bg-neutral-50">
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 w-12">Bild</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Titel</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 hidden md:table-cell">Fach</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 hidden lg:table-cell">Autor</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Sichtbar</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 hidden md:table-cell">Featured</th>
                <th className="text-right px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Aktionen</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <tr
                  key={project.id}
                  className={`border-b border-[#E5E5E5] last:border-0 hover:bg-neutral-50 transition-colors ${
                    i % 2 === 0 ? "bg-white" : "bg-white"
                  }`}
                >
                  {/* Thumbnail */}
                  <td className="px-4 py-3">
                    <div className="w-10 h-10 rounded-sm overflow-hidden bg-neutral-100 relative flex-shrink-0">
                      {project.thumbnail_url ? (
                        <Image
                          src={project.thumbnail_url}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-neutral-200 rounded-sm" />
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Title */}
                  <td className="px-4 py-3">
                    <div className="font-medium text-black truncate max-w-[180px]">{project.title}</div>
                  </td>

                  {/* Subject */}
                  <td className="px-4 py-3 hidden md:table-cell">
                    {project.subject ? (
                      <span className="inline-block bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded-sm">
                        {project.subject}
                      </span>
                    ) : (
                      <span className="text-neutral-300">-</span>
                    )}
                  </td>

                  {/* Author */}
                  <td className="px-4 py-3 text-neutral-500 hidden lg:table-cell">
                    {[project.author_name, project.author_class].filter(Boolean).join(" · ") || "-"}
                  </td>

                  {/* Visible toggle */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleToggle(project.id, project.visible)}
                      disabled={togglingId === project.id}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 focus:outline-none disabled:opacity-50 ${
                        project.visible ? "bg-black" : "bg-neutral-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${
                          project.visible ? "translate-x-4" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </td>

                  {/* Featured badge */}
                  <td className="px-4 py-3 hidden md:table-cell">
                    {project.is_featured ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#0066FF]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                          <path d="M5 1l1.1 2.3L9 3.8l-2 1.9.5 2.7L5 7.2 2.5 8.4 3 5.7 1 3.8l2.9-.5z" />
                        </svg>
                        Featured
                      </span>
                    ) : (
                      <span className="text-neutral-300 text-xs">-</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2 flex-wrap">
                      {!project.is_featured && (
                        <button
                          onClick={() => handleSetFeatured(project.id)}
                          disabled={featuringId === project.id}
                          className="text-xs px-3 py-1.5 border border-[#E5E5E5] rounded-sm text-[#3385FF] hover:border-[#3385FF] hover:bg-blue-50 transition-colors disabled:opacity-50"
                          title="Als Featured markieren"
                        >
                          {featuringId === project.id ? "..." : "Featured"}
                        </button>
                      )}
                      {project.is_featured && (
                        <span className="text-xs px-3 py-1.5 bg-blue-50 text-[#3385FF] border border-[#3385FF]/30 rounded-sm">
                          Aktiv Featured
                        </span>
                      )}
                      <button
                        onClick={() => handleEdit(project)}
                        className="text-xs px-3 py-1.5 border border-[#E5E5E5] rounded-sm hover:border-black hover:bg-neutral-50 transition-colors"
                      >
                        Bearbeiten
                      </button>
                      <button
                        onClick={() => setDeleteId(project.id)}
                        className="text-xs px-3 py-1.5 border border-[#E5E5E5] rounded-sm text-red-500 hover:border-red-300 hover:bg-red-50 transition-colors"
                      >
                        Loschen
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Project Form Sheet */}
      <ProjectForm
        open={formOpen}
        onClose={handleFormClose}
        project={editProject}
      />

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={(v) => !v && setDeleteId(null)}>
        <AlertDialogContent style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <AlertDialogHeader>
            <AlertDialogTitle style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Projekt wirklich loschen?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Diese Aktion kann nicht ruckgangig gemacht werden. Das Projekt wird dauerhaft entfernt.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Abbrechen</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Endgultig loschen
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

"use client"

import { useRef, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import Image from "next/image"

interface ImageUploadProps {
  currentUrl?: string | null
  onUpload: (url: string) => void
}

export function ImageUpload({ currentUrl, onUpload }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentUrl || null)
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const uploadFile = async (file: File) => {
    if (!file.type.startsWith("image/")) return
    setError(null)
    setUploading(true)

    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )

      const filename = `${crypto.randomUUID()}-${file.name.replace(/\s+/g, "-")}`

      const { error: uploadError } = await supabase.storage
        .from("project-thumbnails")
        .upload(filename, file, { upsert: true })

      if (uploadError) {
        if (uploadError.message.includes("row-level security") || uploadError.message.includes("policy")) {
          setError("Speicher-Berechtigung fehlt. Bitte RLS Policy in Supabase einrichten (siehe unten).")
        } else if (uploadError.message.includes("Bucket not found")) {
          setError('Bucket "project-thumbnails" nicht gefunden. Bitte in Supabase erstellen.')
        } else {
          setError(`Upload fehlgeschlagen: ${uploadError.message}`)
        }
        return
      }

      const { data: urlData } = supabase.storage
        .from("project-thumbnails")
        .getPublicUrl(filename)

      setPreview(urlData.publicUrl)
      onUpload(urlData.publicUrl)
    } catch (err: any) {
      setError(`Fehler: ${err?.message || "Unbekannter Fehler"}`)
    } finally {
      setUploading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) uploadFile(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) uploadFile(file)
  }

  return (
    <div className="flex flex-col gap-3">
      {preview ? (
        <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-[#E5E5E5]">
          <Image
            src={preview}
            alt="Vorschau"
            fill
            className="object-cover"
            unoptimized
          />
          <button
            type="button"
            onClick={() => { setPreview(null); setError(null); inputRef.current?.click() }}
            className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-3 py-1.5 rounded-sm hover:bg-black transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ersetzen
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-sm p-8 text-center cursor-pointer transition-colors duration-200 ${
            dragOver ? "border-black bg-neutral-50" : "border-[#E5E5E5] hover:border-neutral-400"
          }`}
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              <p className="text-xs text-neutral-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Wird hochgeladen...
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p className="text-xs text-neutral-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Bild hierher ziehen oder klicken
              </p>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-3">
          <p className="text-xs text-red-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {error}
          </p>
          {error.includes("RLS") && (
            <p className="text-xs text-red-400 mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              In Supabase: Storage &gt; project-thumbnails &gt; Policies &gt; "New Policy" &gt; "Allow all operations for all users" aktivieren.
            </p>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  )
}

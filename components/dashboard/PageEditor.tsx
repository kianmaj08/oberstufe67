"use client"

import { useState } from "react"
import { savePageContent } from "@/lib/actions"

interface Field {
  key: string
  label: string
  type: "text" | "textarea" | "list"
}

interface PageEditorProps {
  pageId: string
  pageLabel: string
  fields: Field[]
  initialContent: Record<string, unknown>
}

export function PageEditor({ pageId, pageLabel, fields, initialContent }: PageEditorProps) {
  const [values, setValues] = useState<Record<string, unknown>>(initialContent)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    try {
      await savePageContent(pageId, values)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (e) {
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  const updateField = (key: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    setSaved(false)
  }

  const updateListItem = (key: string, index: number, value: string) => {
    const arr = [...((values[key] as string[]) || [])]
    arr[index] = value
    updateField(key, arr)
  }

  const addListItem = (key: string) => {
    const arr = [...((values[key] as string[]) || []), ""]
    updateField(key, arr)
  }

  const removeListItem = (key: string, index: number) => {
    const arr = [...((values[key] as string[]) || [])]
    arr.splice(index, 1)
    updateField(key, arr)
  }

  return (
    <div
      className="bg-white border border-[#E5E5E5] rounded-sm"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
        <div>
          <h2 className="text-sm font-bold text-black">{pageLabel}</h2>
          <p className="text-xs text-neutral-400 mt-0.5">/{pageId}</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className={`text-xs font-medium px-4 py-2 rounded-sm transition-colors duration-200 ${
            saved
              ? "bg-green-600 text-white"
              : "bg-black text-white hover:bg-neutral-800"
          } disabled:opacity-50`}
        >
          {saved ? "Gespeichert" : saving ? "Speichern..." : "Speichern"}
        </button>
      </div>

      {/* Fields */}
      <div className="divide-y divide-[#E5E5E5]">
        {fields.map((field) => (
          <div key={field.key} className="px-6 py-5 flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">
              {field.label}
            </label>

            {field.type === "text" && (
              <input
                type="text"
                value={(values[field.key] as string) || ""}
                onChange={(e) => updateField(field.key, e.target.value)}
                className="w-full text-sm border border-[#E5E5E5] rounded-sm px-3 py-2 focus:outline-none focus:border-black transition-colors"
              />
            )}

            {field.type === "textarea" && (
              <textarea
                value={(values[field.key] as string) || ""}
                onChange={(e) => updateField(field.key, e.target.value)}
                rows={4}
                className="w-full text-sm border border-[#E5E5E5] rounded-sm px-3 py-2 focus:outline-none focus:border-black transition-colors resize-y"
              />
            )}

            {field.type === "list" && (
              <div className="flex flex-col gap-2">
                {((values[field.key] as string[]) || []).map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateListItem(field.key, i, e.target.value)}
                      className="flex-1 text-sm border border-[#E5E5E5] rounded-sm px-3 py-2 focus:outline-none focus:border-black transition-colors"
                    />
                    <button
                      onClick={() => removeListItem(field.key, i)}
                      className="text-neutral-400 hover:text-red-500 transition-colors px-2"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M2 2l8 8M10 2l-8 8" />
                      </svg>
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addListItem(field.key)}
                  className="text-xs text-[#3385FF] hover:text-black transition-colors text-left"
                >
                  + Eintrag hinzufugen
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

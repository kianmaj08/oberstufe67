import { Sidebar } from "@/components/dashboard/Sidebar"
import { PageEditor } from "@/components/dashboard/PageEditor"
import { getPageContent } from "@/lib/actions"

export const dynamic = "force-dynamic"

const pageConfigs = [
  {
    pageId: "about",
    pageLabel: "About",
    fields: [
      { key: "intro1", label: "Absatz 1", type: "textarea" as const },
      { key: "intro2", label: "Absatz 2", type: "textarea" as const },
      { key: "intro3", label: "Absatz 3", type: "textarea" as const },
      { key: "improvements", label: "Geplante Verbesserungen (Liste)", type: "list" as const },
    ],
  },
  {
    pageId: "techstack",
    pageLabel: "Tech Stack",
    fields: [
      { key: "intro", label: "Einleitungstext", type: "textarea" as const },
    ],
  },
  {
    pageId: "participate",
    pageLabel: "Participate",
    fields: [
      { key: "intro", label: "Einleitungstext", type: "textarea" as const },
      { key: "why1", label: "Grund 1 (Warum mitmachen)", type: "text" as const },
      { key: "why2", label: "Grund 2", type: "text" as const },
      { key: "why3", label: "Grund 3", type: "text" as const },
    ],
  },
  {
    pageId: "faq",
    pageLabel: "FAQ",
    fields: [
      { key: "q1", label: "Frage 1", type: "text" as const },
      { key: "a1", label: "Antwort 1", type: "textarea" as const },
      { key: "q2", label: "Frage 2", type: "text" as const },
      { key: "a2", label: "Antwort 2", type: "textarea" as const },
      { key: "q3", label: "Frage 3", type: "text" as const },
      { key: "a3", label: "Antwort 3", type: "textarea" as const },
      { key: "q4", label: "Frage 4", type: "text" as const },
      { key: "a4", label: "Antwort 4", type: "textarea" as const },
      { key: "q5", label: "Frage 5", type: "text" as const },
      { key: "a5", label: "Antwort 5", type: "textarea" as const },
      { key: "q6", label: "Frage 6", type: "text" as const },
      { key: "a6", label: "Antwort 6", type: "textarea" as const },
    ],
  },
  {
    pageId: "contact",
    pageLabel: "Contact",
    fields: [
      { key: "intro", label: "Einleitungstext", type: "textarea" as const },
      { key: "email", label: "E-Mail Adresse", type: "text" as const },
      { key: "form_desc", label: "Formular Beschreibung", type: "textarea" as const },
      { key: "note", label: "Hinweis (rechte Spalte)", type: "textarea" as const },
    ],
  },
]

export default async function PagesEditorPage() {
  const contents = await Promise.all(
    pageConfigs.map((p) => getPageContent(p.pageId))
  )

  return (
    <div className="min-h-screen bg-neutral-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Sidebar />
      <main className="ml-[220px] min-h-screen">
        <div className="bg-[#FFE040] border-b border-yellow-300 px-6 py-3 text-sm font-medium text-yellow-900">
          Authentifizierung noch nicht aktiv - wird spater eingerichtet.
        </div>
        <div className="p-8 flex flex-col gap-6">
          <div className="mb-2">
            <h1 className="text-xl font-bold text-black">Seiteninhalte</h1>
            <p className="text-sm text-neutral-400 mt-1">
              Texte der einzelnen Seiten bearbeiten und speichern.
            </p>
          </div>
          {pageConfigs.map((config, i) => (
            <PageEditor
              key={config.pageId}
              pageId={config.pageId}
              pageLabel={config.pageLabel}
              fields={config.fields}
              initialContent={contents[i]}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

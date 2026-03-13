import { createClient } from "@supabase/supabase-js"
import { Sidebar } from "@/components/dashboard/Sidebar"
import { FeaturedPicker } from "@/components/dashboard/FeaturedPicker"
import { Project } from "@/lib/supabase"

export const dynamic = "force-dynamic"

async function getProjects(): Promise<Project[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return []

  const supabase = createClient(url, key)
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) return []
  return data || []
}

export default async function FeaturedPage() {
  const projects = await getProjects()
  const featured = projects.find((p) => p.is_featured)

  return (
    <div className="min-h-screen bg-neutral-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Sidebar />

      <main className="ml-[220px] min-h-screen">
        {/* Auth banner */}
        <div className="bg-[#FFE040] border-b border-yellow-300 px-6 py-3 text-sm font-medium text-yellow-900">
          Authentifizierung noch nicht aktiv - wird spater eingerichtet.
        </div>

        <div className="p-8">
          <FeaturedPicker
            projects={projects}
            currentFeaturedId={featured?.id || null}
          />
        </div>
      </main>
    </div>
  )
}

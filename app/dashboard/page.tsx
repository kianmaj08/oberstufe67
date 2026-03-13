import { createClient } from "@supabase/supabase-js"
import { Sidebar } from "@/components/dashboard/Sidebar"
import { ProjectTable } from "@/components/dashboard/ProjectTable"
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

export default async function DashboardPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen bg-neutral-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Sidebar />
      <main className="ml-[220px] min-h-screen">
        <div className="p-8">
          <ProjectTable projects={projects} />
        </div>
      </main>
    </div>
  )
}

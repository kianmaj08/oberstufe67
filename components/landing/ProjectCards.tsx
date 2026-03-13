import { createClient } from '@supabase/supabase-js'
import { Project } from '@/lib/supabase'
import { ProjectSectionClient } from './ProjectSectionClient'

async function getProjects(): Promise<Project[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return []

  const supabase = createClient(url, key)
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('visible', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  return data || []
}

export async function ProjectCards() {
  const projects = await getProjects()
  return <ProjectSectionClient projects={projects} />
}

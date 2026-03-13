import { createClient } from '@supabase/supabase-js'
import { Project } from '@/lib/supabase'
import { FeaturedScrollClient } from './FeaturedScrollClient'

async function getFeaturedProject(): Promise<Project | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null

  const supabase = createClient(url, key)
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('is_featured', true)
    .single()

  if (error || !data) return null
  return data
}

export async function FeaturedScroll() {
  const project = await getFeaturedProject()
  if (!project) return null
  return <FeaturedScrollClient project={project} />
}

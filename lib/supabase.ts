import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Project = {
  id: string
  title: string
  description: string | null
  subject: string | null
  author_name: string | null
  author_class: string | null
  thumbnail_url: string | null
  project_url: string
  is_featured: boolean
  visible: boolean
  created_at: string
}

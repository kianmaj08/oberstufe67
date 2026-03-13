'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export async function createProject(formData: FormData) {
  const supabase = getSupabase()

  const data = {
    title: formData.get('title') as string,
    description: formData.get('description') as string || null,
    subject: formData.get('subject') as string || null,
    author_name: formData.get('author_name') as string || null,
    author_class: formData.get('author_class') as string || null,
    project_url: formData.get('project_url') as string,
    thumbnail_url: formData.get('thumbnail_url') as string || null,
    visible: formData.get('visible') === 'true',
  }

  const { error } = await supabase.from('projects').insert(data)
  if (error) throw new Error(error.message)

  revalidatePath('/')
  revalidatePath('/dashboard')
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = getSupabase()

  const data = {
    title: formData.get('title') as string,
    description: formData.get('description') as string || null,
    subject: formData.get('subject') as string || null,
    author_name: formData.get('author_name') as string || null,
    author_class: formData.get('author_class') as string || null,
    project_url: formData.get('project_url') as string,
    thumbnail_url: formData.get('thumbnail_url') as string || null,
    visible: formData.get('visible') === 'true',
  }

  const { error } = await supabase.from('projects').update(data).eq('id', id)
  if (error) throw new Error(error.message)

  revalidatePath('/')
  revalidatePath('/dashboard')
}

export async function deleteProject(id: string) {
  const supabase = getSupabase()
  const { error } = await supabase.from('projects').delete().eq('id', id)
  if (error) throw new Error(error.message)

  revalidatePath('/')
  revalidatePath('/dashboard')
}

export async function toggleVisibility(id: string, visible: boolean) {
  const supabase = getSupabase()
  const { error } = await supabase
    .from('projects')
    .update({ visible })
    .eq('id', id)
  if (error) throw new Error(error.message)

  revalidatePath('/')
  revalidatePath('/dashboard')
}

export async function setFeaturedProject(id: string) {
  const supabase = getSupabase()

  const { error: resetError } = await supabase
    .from('projects')
    .update({ is_featured: false })
    .neq('id', id)
  if (resetError) throw new Error(resetError.message)

  const { error } = await supabase
    .from('projects')
    .update({ is_featured: true })
    .eq('id', id)
  if (error) throw new Error(error.message)

  revalidatePath('/')
  revalidatePath('/dashboard')
}

export async function getPageContent(pageId: string): Promise<Record<string, unknown>> {
  const supabase = getSupabase()
  const { data } = await supabase
    .from('page_content')
    .select('content')
    .eq('id', pageId)
    .single()
  return (data?.content as Record<string, unknown>) || {}
}

export async function savePageContent(pageId: string, content: Record<string, unknown>) {
  const supabase = getSupabase()
  const { error } = await supabase
    .from('page_content')
    .upsert({ id: pageId, content, updated_at: new Date().toISOString() })
  if (error) throw new Error(error.message)
  revalidatePath('/' + pageId)
  revalidatePath('/dashboard/pages')
}

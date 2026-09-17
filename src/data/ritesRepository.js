import { assertSupabase } from '../lib/supabase.js'

export async function getRitesHealth() {
  const client = assertSupabase()
  const { data, error } = await client.rpc('rites_public_health')
  if (error) throw error
  return data
}

export async function listOwnedSubjects() {
  const client = assertSupabase()
  const { data, error } = await client
    .from('rites_subjects')
    .select('id, omnii_object_id, subject_type, display_name, status, sensitivity, created_at, updated_at')
    .order('updated_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function createSubject(input) {
  const client = assertSupabase()
  const { data: userData, error: userError } = await client.auth.getUser()
  if (userError) throw userError
  if (!userData.user) throw new Error('Authentication is required to create a RITES subject.')

  const payload = {
    ...input,
    created_by: userData.user.id,
  }

  const { data, error } = await client
    .from('rites_subjects')
    .insert(payload)
    .select('*')
    .single()
  if (error) throw error
  return data
}

export async function recordTransition(input) {
  const client = assertSupabase()
  const { data: userData, error: userError } = await client.auth.getUser()
  if (userError) throw userError
  if (!userData.user) throw new Error('Authentication is required to record a transition.')

  const { data, error } = await client
    .from('rites_transitions')
    .insert({ ...input, created_by: userData.user.id })
    .select('*')
    .single()
  if (error) throw error
  return data
}

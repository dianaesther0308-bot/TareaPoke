'use server'
 
import { createClient } from '../lib/supServer'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
export async function iniciarSesion(formData) {
  const supabase = await createClient()
 
  const data = {
    email: formData.email,
    password: formData.password,
  }
 
  const { error } = await supabase.auth.signInWithPassword(data)
 
  if (error) {
    console.error('Error al iniciar sesión:', error.message)
    return { error: error.message }
  }
 
  revalidatePath('/', 'layout')
  redirect('/productos')

  

  }

  export async function cerrarSesion() {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Error al cerrar sesión:', error.message)
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}
import { supabase } from '../../supabase.ts'

export const handleLogin = async (email: string) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
      })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }
import { supabase } from '../../supabase.ts'

export const handleLogin = async (email: string, password: string) => {
    try {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })

      if (error) console.log(error)
      console.log(data);

    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }
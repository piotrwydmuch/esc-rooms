import { supabase } from '../../supabase'


export const getUserDetails = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    return user;
} 

import { globals } from "../main.ts"
export const singUp = async () => {

    let { data } = await globals.supabase.auth.signUp({
        email: 'someone@email.com',
        password: 'MHABFRiKHWjoIGeNcTmI'
    })

    console.log(data);
}
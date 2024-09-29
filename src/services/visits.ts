import { supabase } from "@/../../supabase"

export const addVisit = async (visit: any) => {
    // WIP

    const { data, error } = await supabase
    .from('visits')
    .insert([
      { escape_room_id: visit.room_id, profile_id: visit.profile_id },
    ])
    .select()

    console.log(data, error);

    // WIP
}
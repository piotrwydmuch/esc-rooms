import { supabase } from "../../supabase"

export const getEscapeRooms = async () => {
    const { data } = await supabase
        .from('escape_rooms')
        .select();

    return data;
}
    
    
// import { QueryData } from '@supabase/supabase-js'
// import { Tables } from "../../database.types.ts";
// type EscRoom = Tables<'escape_rooms'>;

// globals.supabase
// .from('escape_rooms')
// .select()
// .then((response: QueryData<EscRoom[]>) => {
//   escapeRooms.value = response.data
//   const error = response.error

//   if (error) {
//     // error handler
//     console.error('Error:', error)
//   }
// })
// .catch((error: unknown) => {
//   console.error('Unexpected error:', error)
//   // Obsługa nieprzewidzianych błędów
// }).finnaly
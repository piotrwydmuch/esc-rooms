/* 
How to generate Types: 
https://supabase.com/docs/reference/javascript/typescript-support#generating-typescript-types 
*/

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      escape_rooms: {
        Row: {
          average_rating: number | null
          company_name: string | null
          contact_phone: string | null
          created_at: string | null
          description: string | null
          difficulty_level: number | null
          duration_minutes: number | null
          id: number
          image_url: string | null
          is_active: boolean | null
          latitude: number | null
          location: string | null
          longitude: number | null
          max_players: number | null
          min_players: number | null
          name: string
          price: number | null
          tags: string[] | null
          total_reviews: number | null
          website_url: string | null
        }
        Insert: {
          average_rating?: number | null
          company_name?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          difficulty_level?: number | null
          duration_minutes?: number | null
          id: number
          image_url?: string | null
          is_active?: boolean | null
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          max_players?: number | null
          min_players?: number | null
          name: string
          price?: number | null
          tags?: string[] | null
          total_reviews?: number | null
          website_url?: string | null
        }
        Update: {
          average_rating?: number | null
          company_name?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          difficulty_level?: number | null
          duration_minutes?: number | null
          id?: number
          image_url?: string | null
          is_active?: boolean | null
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          max_players?: number | null
          min_players?: number | null
          name?: string
          price?: number | null
          tags?: string[] | null
          total_reviews?: number | null
          website_url?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          bio: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: number
          is_active: boolean | null
          is_admin: boolean | null
          last_login: string | null
          password_hash: string
          phone_number: string | null
          profile_picture_url: string | null
          updated_at: string | null
          username: string
          visited_rooms: number[] | null
          website_url: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: number
          is_active?: boolean | null
          is_admin?: boolean | null
          last_login?: string | null
          password_hash: string
          phone_number?: string | null
          profile_picture_url?: string | null
          updated_at?: string | null
          username: string
          visited_rooms?: number[] | null
          website_url?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: number
          is_active?: boolean | null
          is_admin?: boolean | null
          last_login?: string | null
          password_hash?: string
          phone_number?: string | null
          profile_picture_url?: string | null
          updated_at?: string | null
          username?: string
          visited_rooms?: number[] | null
          website_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

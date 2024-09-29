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
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
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
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          visited_rooms: number[] | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          visited_rooms?: number[] | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          visited_rooms?: number[] | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      visits: {
        Row: {
          created_at: string
          escape_room_id: number | null
          id: number
          profile_id: string | null
          rating: number | null
          review: string | null
          visited_at: string | null
        }
        Insert: {
          created_at?: string
          escape_room_id?: number | null
          id?: number
          profile_id?: string | null
          rating?: number | null
          review?: string | null
          visited_at?: string | null
        }
        Update: {
          created_at?: string
          escape_room_id?: number | null
          id?: number
          profile_id?: string | null
          rating?: number | null
          review?: string | null
          visited_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "visits_escape_room_id_fkey"
            columns: ["escape_room_id"]
            isOneToOne: false
            referencedRelation: "escape_rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visits_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
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

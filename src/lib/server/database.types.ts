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
      countries: {
        Row: {
          active: boolean | null
          created_at: string
          deleted: boolean | null
          draft: boolean | null
          id: string
          modified_at: string | null
          name: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          deleted?: boolean | null
          draft?: boolean | null
          id?: string
          modified_at?: string | null
          name: string
        }
        Update: {
          active?: boolean | null
          created_at?: string
          deleted?: boolean | null
          draft?: boolean | null
          id?: string
          modified_at?: string | null
          name?: string
        }
        Relationships: []
      }
      languages: {
        Row: {
          code: string
          created_at: string
          id: string
          modified_at: string | null
          name: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          modified_at?: string | null
          name: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          modified_at?: string | null
          name?: string
        }
        Relationships: []
      }
      miracles: {
        Row: {
          base_translation: boolean | null
          blurb: string | null
          country_id: string
          created_at: string
          deleted: boolean | null
          draft: boolean | null
          id: string
          language_code: string | null
          modified_at: string | null
          name: string
          occurrence_year: number | null
          quotes: string[] | null
          slug: string | null
          story: Json | null
        }
        Insert: {
          base_translation?: boolean | null
          blurb?: string | null
          country_id?: string
          created_at?: string
          deleted?: boolean | null
          draft?: boolean | null
          id?: string
          language_code?: string | null
          modified_at?: string | null
          name: string
          occurrence_year?: number | null
          quotes?: string[] | null
          slug?: string | null
          story?: Json | null
        }
        Update: {
          base_translation?: boolean | null
          blurb?: string | null
          country_id?: string
          created_at?: string
          deleted?: boolean | null
          draft?: boolean | null
          id?: string
          language_code?: string | null
          modified_at?: string | null
          name?: string
          occurrence_year?: number | null
          quotes?: string[] | null
          slug?: string | null
          story?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "miracles_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "miracles_language_code_fkey"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
        ]
      }
      our_lady: {
        Row: {
          base_translation: boolean | null
          blurb: string | null
          country_id: string
          created_at: string
          deleted: boolean | null
          draft: boolean | null
          feast_day: string | null
          id: string
          language_code: string | null
          modified_at: string | null
          name: string
          occurrence_year: number | null
          quotes: string[] | null
          slug: string | null
          story: Json | null
        }
        Insert: {
          base_translation?: boolean | null
          blurb?: string | null
          country_id?: string
          created_at?: string
          deleted?: boolean | null
          draft?: boolean | null
          feast_day?: string | null
          id?: string
          language_code?: string | null
          modified_at?: string | null
          name: string
          occurrence_year?: number | null
          quotes?: string[] | null
          slug?: string | null
          story?: Json | null
        }
        Update: {
          base_translation?: boolean | null
          blurb?: string | null
          country_id?: string
          created_at?: string
          deleted?: boolean | null
          draft?: boolean | null
          feast_day?: string | null
          id?: string
          language_code?: string | null
          modified_at?: string | null
          name?: string
          occurrence_year?: number | null
          quotes?: string[] | null
          slug?: string | null
          story?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "our_lady_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "our_lady_language_code_fkey"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
        ]
      }
      saints: {
        Row: {
          base_translation: boolean | null
          beatified: boolean | null
          blurb: string | null
          canonized: boolean | null
          country_id: string
          created_at: string
          deleted: boolean | null
          draft: boolean | null
          feast_day: string | null
          id: string
          language_code: string | null
          miraculous_communion: boolean | null
          modified_at: string | null
          name: string
          quotes: string[] | null
          slug: string | null
          story: Json | null
        }
        Insert: {
          base_translation?: boolean | null
          beatified?: boolean | null
          blurb?: string | null
          canonized?: boolean | null
          country_id?: string
          created_at?: string
          deleted?: boolean | null
          draft?: boolean | null
          feast_day?: string | null
          id?: string
          language_code?: string | null
          miraculous_communion?: boolean | null
          modified_at?: string | null
          name: string
          quotes?: string[] | null
          slug?: string | null
          story?: Json | null
        }
        Update: {
          base_translation?: boolean | null
          beatified?: boolean | null
          blurb?: string | null
          canonized?: boolean | null
          country_id?: string
          created_at?: string
          deleted?: boolean | null
          draft?: boolean | null
          feast_day?: string | null
          id?: string
          language_code?: string | null
          miraculous_communion?: boolean | null
          modified_at?: string | null
          name?: string
          quotes?: string[] | null
          slug?: string | null
          story?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "saints_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saints_language_code_fkey"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      slugify: {
        Args: {
          value: string
        }
        Returns: string
      }
      slugify_our_lady: {
        Args: {
          value: string
        }
        Returns: string
      }
      slugify_saints: {
        Args: {
          value: string
        }
        Returns: string
      }
      unaccent: {
        Args: {
          "": string
        }
        Returns: string
      }
      unaccent_init: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
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

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

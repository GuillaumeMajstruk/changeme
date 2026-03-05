export interface Place {
  id: string;
  name: string;
  address: string | null;
  floor_info: string | null;
  location: { type: 'Point'; coordinates: [number, number] };
  opening_hours: OpeningHours | null;
  contact: Contact | null;
  amenities: Amenities;
  place_type: 'public' | 'commercial' | 'transport' | 'park';
  is_verified: boolean;
  is_active: boolean;
  avg_rating: number;
  review_count: number;
  photo_count: number;
  first_photo_path: string | null;
  distance_m?: number;
  created_at: string;
}

export interface Amenities {
  changing_table: boolean;
  private_space: boolean;
  pmr_accessible: boolean;
  water_available: boolean;
  bin_available: boolean;
  electric_table: boolean;
}

export interface OpeningHours {
  monday?:    [string, string] | null;
  tuesday?:   [string, string] | null;
  wednesday?: [string, string] | null;
  thursday?:  [string, string] | null;
  friday?:    [string, string] | null;
  saturday?:  [string, string] | null;
  sunday?:    [string, string] | null;
  is_24h?: boolean;
}

export interface Contact {
  phone?:   string;
  website?: string;
  email?:   string;
}

export interface Review {
  id: string;
  place_id: string;
  user_id: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string | null;
  created_at: string;
  profiles?: { display_name: string | null; avatar_url: string | null };
}

export interface PlacePhoto {
  id: string;
  place_id: string;
  storage_path: string;
  created_at: string;
}

// Action en attente pendant le flow auth progressif
export type PendingAction =
  | { type: 'submit_review';  payload: { place_id: string; rating: number; comment: string } }
  | { type: 'upload_photo';   payload: { place_id: string; uri: string } }
  | { type: 'add_favorite';   payload: { place_id: string } }
  | { type: 'report_issue';   payload: { place_id: string; reason: string } }
  | null;

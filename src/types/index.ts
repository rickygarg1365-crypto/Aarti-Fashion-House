// Product Types
export interface Fabric {
  id: string;
  name: string;
  description: string;
  category: 'cotton' | 'silk' | 'wool' | 'linen' | 'synthetic';
  season: 'spring' | 'summer' | 'autumn' | 'winter' | 'all-season';
  priceRange: 'budget' | 'mid-range' | 'premium' | 'luxury';
  price?: number;
  image: string;
  colors: string[];
  inStock: boolean;
}

export interface Suit {
  id: string;
  name: string;
  description: string;
  category: 'formal' | 'casual' | 'wedding' | 'party';
  size: string[];
  price?: number;
  image: string;
  colors: string[];
  inStock: boolean;
  material: string;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  logo: string;
  website?: string;
  established?: number;
  specialties: string[];
  origin: string;
  featured: boolean;
  rating: number;
}

// UI Component Types
export interface Hero {
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string;
  date: string;
}

export interface ContactInfo {
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  googleMapsUrl: string;
  socialMedia: {
    platform: string;
    url: string;
  }[];
}

// Filter Types
export interface FabricFilters {
  category: string[];
  season: string[];
  priceRange: string[];
}

export interface SuitFilters {
  category: string[];
  size: string[];
  material: string[];
}

// Form Types
export interface AppointmentForm {
  name: string;
  phone: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Gallery Types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'fabric' | 'suit' | 'showroom' | 'event';
  title?: string;
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

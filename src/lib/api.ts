// API utility functions for dynamic data fetching

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-domain.com' 
  : 'http://localhost:3000';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  total?: number;
  statistics?: any;
  filters?: any;
}

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function apiRequest<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}/api${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new ApiError(response.status, `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Fabrics API
export async function getFabrics(filters?: {
  category?: string[];
  season?: string[];
  priceRange?: string[];
  search?: string;
  limit?: number;
}) {
  const params = new URLSearchParams();
  
  if (filters?.category?.length) params.set('category', filters.category.join(','));
  if (filters?.season?.length) params.set('season', filters.season.join(','));
  if (filters?.priceRange?.length) params.set('priceRange', filters.priceRange.join(','));
  if (filters?.search) params.set('search', filters.search);
  if (filters?.limit) params.set('limit', filters.limit.toString());
  
  const query = params.toString();
  return apiRequest(`/fabrics${query ? `?${query}` : ''}`);
}

export async function submitFabricInquiry(data: {
  fabricName: string;
  customerName: string;
  phone: string;
  email?: string;
  message: string;
}) {
  return apiRequest('/fabrics', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Suits API
export async function getSuits(filters?: {
  category?: string[];
  size?: string[];
  priceRange?: string[];
  search?: string;
  featured?: boolean;
  limit?: number;
}) {
  const params = new URLSearchParams();
  
  if (filters?.category?.length) params.set('category', filters.category.join(','));
  if (filters?.size?.length) params.set('size', filters.size.join(','));
  if (filters?.priceRange?.length) params.set('priceRange', filters.priceRange.join(','));
  if (filters?.search) params.set('search', filters.search);
  if (filters?.featured) params.set('featured', 'true');
  if (filters?.limit) params.set('limit', filters.limit.toString());
  
  const query = params.toString();
  return apiRequest(`/suits${query ? `?${query}` : ''}`);
}

export async function submitSuitInquiry(data: {
  suitName: string;
  customerName: string;
  phone: string;
  email?: string;
  preferredSize?: string;
  message: string;
}) {
  return apiRequest('/suits', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Brands API
export async function getBrands(filters?: {
  featured?: boolean;
  origin?: string[];
  search?: string;
  sortBy?: 'name' | 'rating';
  limit?: number;
}) {
  const params = new URLSearchParams();
  
  if (filters?.featured) params.set('featured', 'true');
  if (filters?.origin?.length) params.set('origin', filters.origin.join(','));
  if (filters?.search) params.set('search', filters.search);
  if (filters?.sortBy) params.set('sortBy', filters.sortBy);
  if (filters?.limit) params.set('limit', filters.limit.toString());
  
  const query = params.toString();
  return apiRequest(`/brands${query ? `?${query}` : ''}`);
}

// Testimonials API
export async function getTestimonials(filters?: {
  category?: string;
  rating?: number;
  featured?: boolean;
  limit?: number;
}) {
  const params = new URLSearchParams();
  
  if (filters?.category) params.set('category', filters.category);
  if (filters?.rating) params.set('rating', filters.rating.toString());
  if (filters?.featured) params.set('featured', 'true');
  if (filters?.limit) params.set('limit', filters.limit.toString());
  
  const query = params.toString();
  return apiRequest(`/testimonials${query ? `?${query}` : ''}`);
}

export async function submitTestimonial(data: {
  name: string;
  comment: string;
  rating: number;
  email?: string;
  location?: string;
}) {
  return apiRequest('/testimonials', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Contact API
export async function getContactInfo() {
  return apiRequest('/contact');
}

export async function submitContactForm(data: {
  name: string;
  email?: string;
  phone: string;
  preferredDate?: string;
  preferredTime?: string;
  serviceType: string;
  message: string;
}) {
  return apiRequest('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Generic search API
export async function searchAll(query: string, limit: number = 10) {
  const [fabricsRes, suitsRes, brandsRes] = await Promise.allSettled([
    getFabrics({ search: query, limit }),
    getSuits({ search: query, limit }),
    getBrands({ search: query, limit })
  ]);
  
  return {
    fabrics: fabricsRes.status === 'fulfilled' ? fabricsRes.value.data : [],
    suits: suitsRes.status === 'fulfilled' ? suitsRes.value.data : [],
    brands: brandsRes.status === 'fulfilled' ? brandsRes.value.data : [],
  };
}

export { ApiError };

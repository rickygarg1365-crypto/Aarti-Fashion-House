import { NextRequest, NextResponse } from 'next/server';
import brandsData from '@/data/brands.json';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters for filtering
    const featured = searchParams.get('featured');
    const origin = searchParams.get('origin');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');
    const sortBy = searchParams.get('sortBy') || 'name';
    
    let filteredBrands = [...brandsData];
    
    // Apply filters
    if (featured === 'true') {
      filteredBrands = filteredBrands.filter(brand => brand.featured);
    }
    
    if (origin) {
      const origins = origin.split(',');
      filteredBrands = filteredBrands.filter(brand => 
        origins.includes(brand.origin)
      );
    }
    
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredBrands = filteredBrands.filter(brand => 
        brand.name.toLowerCase().includes(searchTerm) ||
        brand.description.toLowerCase().includes(searchTerm) ||
        brand.specialties.some(s => s.toLowerCase().includes(searchTerm))
      );
    }
    
    // Apply sorting
    filteredBrands.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
    
    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit, 10);
      filteredBrands = filteredBrands.slice(0, limitNum);
    }
    
    return NextResponse.json({
      success: true,
      data: filteredBrands,
      total: filteredBrands.length,
      filters: {
        origins: [...new Set(brandsData.map(b => b.origin))],
        specialties: [...new Set(brandsData.flatMap(b => b.specialties))],
      }
    });
  } catch (error) {
    console.error('Error fetching brands:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch brands' },
      { status: 500 }
    );
  }
}

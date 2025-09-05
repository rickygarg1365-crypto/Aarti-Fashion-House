import { NextRequest, NextResponse } from 'next/server';
import fabricsData from '@/data/fabrics.json';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters for filtering
    const category = searchParams.get('category');
    const season = searchParams.get('season');
    const priceRange = searchParams.get('priceRange');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');
    
    let filteredFabrics = [...fabricsData];
    
    // Apply filters
    if (category) {
      const categories = category.split(',');
      filteredFabrics = filteredFabrics.filter(fabric => 
        categories.includes(fabric.category)
      );
    }
    
    if (season) {
      const seasons = season.split(',');
      filteredFabrics = filteredFabrics.filter(fabric => 
        seasons.includes(fabric.season)
      );
    }
    
    if (priceRange) {
      const priceRanges = priceRange.split(',');
      filteredFabrics = filteredFabrics.filter(fabric => 
        priceRanges.includes(fabric.priceRange)
      );
    }
    
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredFabrics = filteredFabrics.filter(fabric => 
        fabric.name.toLowerCase().includes(searchTerm) ||
        fabric.description.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit, 10);
      filteredFabrics = filteredFabrics.slice(0, limitNum);
    }
    
    return NextResponse.json({
      success: true,
      data: filteredFabrics,
      total: filteredFabrics.length,
      filters: {
        categories: [...new Set(fabricsData.map(f => f.category))],
        seasons: [...new Set(fabricsData.map(f => f.season))],
        priceRanges: [...new Set(fabricsData.map(f => f.priceRange))],
      }
    });
  } catch (error) {
    console.error('Error fetching fabrics:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch fabrics' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // This would typically save to a database
    // For now, we'll just return success
    const body = await request.json();
    
    return NextResponse.json({
      success: true,
      message: 'Fabric inquiry submitted successfully',
      data: body
    });
  } catch (error) {
    console.error('Error submitting fabric inquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}

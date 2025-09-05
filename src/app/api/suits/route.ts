import { NextRequest, NextResponse } from 'next/server';
import suitsData from '@/data/suits.json';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters for filtering
    const category = searchParams.get('category');
    const size = searchParams.get('size');
    const priceRange = searchParams.get('priceRange');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');
    const featured = searchParams.get('featured');
    
    let filteredSuits = [...suitsData];
    
    // Apply filters
    if (category) {
      const categories = category.split(',');
      filteredSuits = filteredSuits.filter(suit => 
        categories.includes(suit.category)
      );
    }
    
    if (size) {
      const sizes = size.split(',');
      filteredSuits = filteredSuits.filter(suit => 
        suit.sizes.some(s => sizes.includes(s))
      );
    }
    
    if (priceRange) {
      const priceRanges = priceRange.split(',');
      filteredSuits = filteredSuits.filter(suit => 
        priceRanges.includes(suit.priceRange)
      );
    }
    
    if (featured === 'true') {
      filteredSuits = filteredSuits.filter(suit => suit.featured);
    }
    
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredSuits = filteredSuits.filter(suit => 
        suit.name.toLowerCase().includes(searchTerm) ||
        suit.description.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit, 10);
      filteredSuits = filteredSuits.slice(0, limitNum);
    }
    
    return NextResponse.json({
      success: true,
      data: filteredSuits,
      total: filteredSuits.length,
      filters: {
        categories: [...new Set(suitsData.map(s => s.category))],
        sizes: [...new Set(suitsData.flatMap(s => s.sizes))],
        priceRanges: [...new Set(suitsData.map(s => s.priceRange))],
      }
    });
  } catch (error) {
    console.error('Error fetching suits:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch suits' },
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
      message: 'Suit inquiry submitted successfully',
      data: body
    });
  } catch (error) {
    console.error('Error submitting suit inquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}

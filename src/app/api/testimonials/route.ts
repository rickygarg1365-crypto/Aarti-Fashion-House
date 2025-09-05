import { NextRequest, NextResponse } from 'next/server';
import testimonialsData from '@/data/testimonials.json';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters for filtering
    const category = searchParams.get('category');
    const rating = searchParams.get('rating');
    const limit = searchParams.get('limit');
    const featured = searchParams.get('featured');
    
    let filteredTestimonials = [...testimonialsData];
    
    // Apply filters
    if (category && category !== 'all') {
      filteredTestimonials = filteredTestimonials.filter(testimonial => {
        const comment = testimonial.comment.toLowerCase();
        switch (category) {
          case 'fabrics':
            return comment.includes('fabric');
          case 'service':
            return comment.includes('service');
          case 'suits':
            return comment.includes('suit');
          default:
            return true;
        }
      });
    }
    
    if (rating) {
      const minRating = parseInt(rating, 10);
      filteredTestimonials = filteredTestimonials.filter(testimonial => 
        testimonial.rating >= minRating
      );
    }
    
    if (featured === 'true') {
      filteredTestimonials = filteredTestimonials.filter(testimonial => 
        testimonial.rating === 5
      );
    }
    
    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit, 10);
      filteredTestimonials = filteredTestimonials.slice(0, limitNum);
    }
    
    // Calculate statistics
    const averageRating = testimonialsData.reduce((sum, t) => sum + t.rating, 0) / testimonialsData.length;
    const ratingDistribution = [5, 4, 3, 2, 1].map(star => 
      testimonialsData.filter(t => t.rating === star).length
    );
    
    return NextResponse.json({
      success: true,
      data: filteredTestimonials,
      total: filteredTestimonials.length,
      statistics: {
        averageRating: parseFloat(averageRating.toFixed(1)),
        totalReviews: testimonialsData.length,
        ratingDistribution: {
          5: ratingDistribution[0],
          4: ratingDistribution[1], 
          3: ratingDistribution[2],
          2: ratingDistribution[3],
          1: ratingDistribution[4],
        }
      }
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // This would typically save to a database
    // For now, we'll just return success
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.comment || !body.rating) {
      return NextResponse.json(
        { success: false, error: 'Name, comment, and rating are required' },
        { status: 400 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Testimonial submitted successfully',
      data: {
        ...body,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0]
      }
    });
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit testimonial' },
      { status: 500 }
    );
  }
}

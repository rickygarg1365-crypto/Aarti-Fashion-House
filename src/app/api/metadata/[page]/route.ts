import { NextRequest, NextResponse } from 'next/server';
import { Metadata } from 'next';

// Dynamic metadata for different pages
const pageMetadata: Record<string, Metadata> = {
  home: {
    title: 'Aarti Fashion House | Premium Fabrics & Ready-to-Wear Suits in Punjab',
    description: 'Discover exquisite fabrics and ready-to-wear suits at Aarti Fashion House. Premium retail showroom in Punjab offering world-class textiles and personalized fashion consultations.',
    keywords: 'premium fabrics, ready-to-wear suits, fashion house Punjab, luxury textiles, designer fabrics, bespoke fashion',
  },
  fabrics: {
    title: 'Premium Fabrics Collection | Aarti Fashion House',
    description: 'Explore our curated collection of premium fabrics from around the world. From silk to cotton, wool to linen - find the perfect fabric for your style.',
    keywords: 'premium fabrics, silk fabrics, cotton textiles, wool fabrics, luxury materials, fabric collection Punjab',
  },
  suits: {
    title: 'Ready-to-Wear Suits | Aarti Fashion House - Designer Suits Punjab',
    description: 'Shop our exclusive collection of ready-to-wear suits. Perfectly tailored, premium quality suits for the modern gentleman and elegant lady.',
    keywords: 'ready-to-wear suits, designer suits, premium suits Punjab, formal wear, business suits, wedding suits',
  },
  brands: {
    title: 'Partner Brands | Aarti Fashion House - Premium International & Local Brands',
    description: 'Discover our curated collection of premium brands from around the world. From Italian silk masters to Indian heritage weavers.',
    keywords: 'premium brands, fashion brands, textile manufacturers, luxury fashion, designer brands, international brands',
  },
  testimonials: {
    title: 'Customer Reviews | Aarti Fashion House - What Our Clients Say',
    description: 'Read authentic reviews from our valued customers. Discover why Aarti Fashion House is Punjab\'s preferred destination for premium fashion.',
    keywords: 'customer reviews, testimonials, fashion house reviews, premium fashion feedback, Punjab fashion',
  },
  contact: {
    title: 'Contact Us | Aarti Fashion House - Visit Our Punjab Showroom',
    description: 'Visit our premium showroom in Punjab or schedule a consultation. Get in touch for personalized fashion advice and exclusive collections.',
    keywords: 'contact fashion house, Punjab showroom, fashion consultation, visit store, premium fashion contact',
  },
  gallery: {
    title: 'Fashion Gallery | Aarti Fashion House - Premium Collection Showcase',
    description: 'Browse our stunning gallery of premium fabrics, designer suits, and fashion collections. Visual inspiration for your style journey.',
    keywords: 'fashion gallery, fabric showcase, design inspiration, luxury fashion photos, premium collection gallery',
  },
  about: {
    title: 'About Us | Aarti Fashion House - Premium Fashion Heritage',
    description: 'Learn about our journey in premium fashion. Our story, values, and commitment to excellence in fabrics and fashion.',
    keywords: 'about fashion house, premium fashion story, fashion heritage Punjab, luxury textile history',
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: { page: string } }
) {
  try {
    const page = params.page;
    const metadata = pageMetadata[page];
    
    if (!metadata) {
      return NextResponse.json(
        { success: false, error: 'Page metadata not found' },
        { status: 404 }
      );
    }

    // Add dynamic elements based on current data
    const currentDate = new Date().toISOString();
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://your-domain.com' 
      : 'http://localhost:3000';

    const enhancedMetadata = {
      ...metadata,
      openGraph: {
        title: metadata.title,
        description: metadata.description,
        type: 'website',
        url: `${baseUrl}/${page === 'home' ? '' : page}`,
        siteName: 'Aarti Fashion House',
        images: [
          {
            url: `${baseUrl}/images/og-${page}.jpg`,
            width: 1200,
            height: 630,
            alt: metadata.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: metadata.title,
        description: metadata.description,
        images: [`${baseUrl}/images/og-${page}.jpg`],
      },
      alternates: {
        canonical: `${baseUrl}/${page === 'home' ? '' : page}`,
      },
      other: {
        'last-modified': currentDate,
      },
    };

    return NextResponse.json({
      success: true,
      data: enhancedMetadata
    });
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch metadata' },
      { status: 500 }
    );
  }
}

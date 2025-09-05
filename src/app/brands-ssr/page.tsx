import { Metadata } from 'next';
import { Suspense } from 'react';
import { ArrowUpRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import brandsData from '@/data/brands.json';
import { Brand } from '@/types';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: 'Partner Brands | Aarti Fashion House - Premium International & Local Brands',
  description: 'Discover our curated collection of premium brands from around the world. From Italian silk masters to Indian heritage weavers, explore the finest in fashion and textiles.',
  keywords: 'premium brands, fashion brands, textile manufacturers, Italian silk, Indian textiles, luxury fashion, designer brands',
  openGraph: {
    title: 'Partner Brands | Aarti Fashion House',
    description: 'Discover our curated collection of premium brands from around the world.',
    type: 'website',
  },
};

// This is now a Server Component - no 'use client' directive
export default async function BrandsSSRPage() {
  // Server-side data fetching
  const brands: Brand[] = brandsData;
  const featuredBrands = brands.filter(brand => brand.featured);
  const internationalBrands = brands.filter(brand => brand.origin !== 'India');
  const domesticBrands = brands.filter(brand => brand.origin === 'India');

  return (
    <div className="min-h-screen bg-pearl text-charcoal">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-pearl to-cream overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-charcoal rounded-full blur-2xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gold-primary/10 rounded-full">
                <SparklesIcon className="w-12 h-12 text-gold-primary" />
              </div>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl text-charcoal mb-8 leading-tight">
              Curated <span className="italic text-gold-primary">Partnerships</span>
            </h1>
            
            <p className="font-sans text-xl text-slate leading-relaxed max-w-3xl mx-auto">
              We collaborate with the world's finest artisans and heritage brands to bring you 
              an unparalleled collection of textiles and fashion. Each partnership represents 
              our commitment to excellence, authenticity, and timeless craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-24 bg-charcoal text-pearl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl mb-8">
              <span className="italic text-gold-primary">Signature</span> Collaborations
            </h2>
            <p className="font-sans text-xl text-slate-light max-w-3xl mx-auto">
              Our most cherished partnerships represent decades of shared excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {featuredBrands.map((brand, index) => (
              <div 
                key={brand.id} 
                className="group bg-slate/5 backdrop-blur-sm border border-gold-primary/20 p-8 transition-all duration-500 hover:bg-gold-primary/5 hover:border-gold-primary/40"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gold-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HeartIcon className="w-10 h-10 text-gold-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-pearl mb-2">{brand.name}</h3>
                  <p className="font-sans text-sm text-slate-light">{brand.origin}</p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(brand.rating || 0) ? 'text-gold-primary fill-current' : 'text-slate'
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-sans text-sm text-slate-light">
                      {brand.rating?.toFixed(1) || '0.0'}
                    </span>
                  </div>
                  <p className="font-serif text-slate-light text-center leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-sans font-semibold text-gold-primary text-sm uppercase tracking-wider">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(brand.specialties || []).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gold-primary/10 text-gold-primary font-sans text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Brands */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="font-display text-5xl text-charcoal mb-8 text-center">
              Global <span className="italic text-gold-primary">Excellence</span>
            </h2>
            <p className="font-sans text-xl text-slate text-center max-w-3xl mx-auto">
              Sourced from the world's textile capitals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Brands */}
      <section className="py-24 bg-pearl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="font-display text-5xl text-charcoal mb-8 text-center">
              Indian <span className="italic text-gold-primary">Heritage</span>
            </h2>
            <p className="font-sans text-xl text-slate text-center max-w-3xl mx-auto">
              Celebrating our rich textile traditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-pearl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-display text-5xl mb-8">
            Partner With <span className="italic text-gold-primary">Excellence</span>
          </h2>
          <p className="font-sans text-xl text-slate-light mb-12 leading-relaxed">
            Interested in featuring your brand in our collection? We're always looking 
            to partner with artisans and manufacturers who share our commitment to quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-primary text-white font-sans font-medium transition-all duration-300 hover:bg-gold-dark group"
            >
              Partner With Us
              <ArrowUpRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/fabrics"
              className="inline-flex items-center justify-center px-8 py-4 border border-gold-primary text-gold-primary font-sans font-medium transition-all duration-300 hover:bg-gold-primary hover:text-white group"
            >
              Explore Collection
              <ArrowUpRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Brand Card Component
function BrandCard({ brand }: { brand: Brand }) {

  return (
    <div className="group bg-white/50 backdrop-blur-sm border border-gold-primary/20 p-6 transition-all duration-500 hover:bg-gold-primary/5 hover:border-gold-primary/40 hover:shadow-xl">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gold-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <SparklesIcon className="w-8 h-8 text-gold-primary" />
        </div>
        <h3 className="font-display text-xl text-charcoal mb-1">{brand.name}</h3>
        <p className="font-sans text-sm text-slate">{brand.origin}</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-center mb-3">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(brand.rating || 0) ? 'text-gold-primary fill-current' : 'text-slate'
              }`}
            />
          ))}
          <span className="ml-2 font-sans text-sm text-slate">
            {brand.rating?.toFixed(1) || '0.0'}
          </span>
        </div>
        <p className="font-serif text-slate text-sm text-center leading-relaxed line-clamp-3">
          {brand.description}
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-1 justify-center">
          {(brand.specialties || []).slice(0, 3).map((specialty, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gold-primary/10 text-gold-primary font-sans text-xs rounded-full"
            >
              {specialty}
            </span>
          ))}
          {(brand.specialties || []).length > 3 && (
            <span className="px-2 py-1 bg-slate/10 text-slate font-sans text-xs rounded-full">
              +{(brand.specialties || []).length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

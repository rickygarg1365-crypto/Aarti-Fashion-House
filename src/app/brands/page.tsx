'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import brandsData from '@/data/brands.json';
import { Brand } from '@/types';

const brands: Brand[] = brandsData;

export default function BrandsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = (brand?: Brand) => {
    const message = brand 
      ? `Hello! I'm interested in learning more about ${brand.name} products available at Aarti Fashion House.`
      : "Hello! I'd like to know more about the premium brands you carry at Aarti Fashion House.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const featuredBrands = brands.filter(brand => brand.featured);
  const regularBrands = brands.filter(brand => !brand.featured);

  return (
    <div className="min-h-screen bg-pearl text-charcoal">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream to-pearl">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gold-light/20 to-gold-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-sage/15 to-copper/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-8">
              <span className="text-sm font-sans font-medium text-slate tracking-[0.3em] uppercase">
                Curated Partners
              </span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-8 text-charcoal">
              Prestigious
              <br />
              <span className="italic text-gold-primary">Partnerships</span>
            </h1>

            <p className="font-sans text-lg text-slate-light leading-relaxed mb-12 max-w-3xl mx-auto">
              We collaborate exclusively with the world&apos;s most distinguished fashion houses and artisans, 
              bringing you an unparalleled selection of luxury fabrics and designs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="font-display text-3xl text-gold-primary mb-2">{brands.length}+</div>
                <div className="font-sans text-sm text-slate">Luxury Brands</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold-primary mb-2">{featuredBrands.length}</div>
                <div className="font-sans text-sm text-slate">Featured Partners</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold-primary mb-2">25+</div>
                <div className="font-sans text-sm text-slate">Years Partnership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
              Featured <span className="italic text-gold-primary">Partners</span>
            </h2>
            <p className="font-sans text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              Our most treasured partnerships with legendary fashion houses and master artisans 
              who share our commitment to exceptional craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBrands.map((brand, index) => (
              <div 
                key={brand.id} 
                className={`group cursor-pointer transform transition-all duration-700 hover:-translate-y-2 ${index % 2 === 1 ? 'lg:mt-8' : ''}`}
                onClick={() => setSelectedBrand(brand)}
              >
                <div className="bg-cream relative overflow-hidden aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 to-gold-light/10" />
                  <div className="flex items-center justify-center h-full p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gold-primary/10 border-2 border-gold-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-gold-primary group-hover:border-gold-primary transition-all duration-500">
                        <span className="font-display text-2xl text-gold-primary group-hover:text-white transition-colors duration-500">
                          {brand.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl text-charcoal group-hover:text-gold-primary transition-colors duration-300">
                        {brand.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/80 px-2 py-1 rounded">
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(brand.rating) ? 'text-gold-primary' : 'text-slate/30'}`}
                        />
                      ))}
                      <span className="text-xs font-sans text-slate ml-1">{brand.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-2">
                  <div className="mb-4">
                    <span className="text-xs font-sans font-medium text-slate bg-cream px-3 py-1 uppercase tracking-wider">
                      {brand.origin}
                    </span>
                  </div>
                  
                  <p className="font-sans text-slate leading-relaxed text-sm mb-6 line-clamp-3">
                    {brand.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-xs font-sans text-slate uppercase tracking-wider mb-2">Specialties</div>
                    <div className="flex flex-wrap gap-1">
                      {brand.specialties.slice(0, 2).map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="text-xs font-sans text-charcoal bg-pearl px-2 py-1"
                        >
                          {specialty}
                        </span>
                      ))}
                      {brand.specialties.length > 2 && (
                        <span className="text-xs font-sans text-slate">+{brand.specialties.length - 2} more</span>
                      )}
                    </div>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp(brand);
                    }}
                    className="w-full py-3 border border-gold-primary text-gold-primary font-sans font-medium hover:bg-gold-primary hover:text-white transition-all duration-300 group-hover:bg-gold-primary group-hover:text-white"
                  >
                    Explore Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Brands Grid */}
      <section className="py-24 bg-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
              Our Complete <span className="italic text-gold-primary">Portfolio</span>
            </h2>
            <p className="font-sans text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              Every brand in our collection represents a commitment to excellence, tradition, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {regularBrands.map((brand, index) => (
              <div 
                key={brand.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedBrand(brand)}
              >
                <div className="aspect-square bg-white border border-gold-primary/10 hover:border-gold-primary/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center justify-center h-full p-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gold-primary/10 border border-gold-primary/30 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-gold-primary group-hover:border-gold-primary transition-all duration-500">
                        <span className="font-display text-lg text-gold-primary group-hover:text-white transition-colors duration-500">
                          {brand.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-sans text-sm text-charcoal group-hover:text-gold-primary transition-colors duration-300 font-medium">
                        {brand.name}
                      </h3>
                      <p className="font-sans text-xs text-slate mt-1">{brand.origin}</p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-2 right-2">
                    <div className="flex items-center space-x-1">
                      <StarIconSolid className="w-3 h-3 text-gold-primary" />
                      <span className="text-xs font-sans text-slate">{brand.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Story */}
      <section className="py-24 bg-charcoal text-pearl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
                Building <span className="italic text-gold-primary">Legacy</span> Together
              </h2>
              <div className="space-y-6 text-slate-light leading-relaxed font-sans text-lg">
                <p>
                  Our partnerships extend far beyond simple vendor relationships. We work closely with each brand 
                  to understand their heritage, craftsmanship traditions, and unique design philosophy.
                </p>
                <p>
                  Through decades of collaboration, we&apos;ve built relationships based on mutual respect, 
                  shared values, and an unwavering commitment to excellence.
                </p>
                <p>
                  This deep partnership approach ensures that when you choose from our collection, 
                  you&apos;re not just buying a product—you&apos;re investing in a legacy of craftsmanship.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="font-display text-3xl text-gold-primary mb-2">25+</div>
                  <div className="font-sans text-sm text-slate-light">Years Average Partnership</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl text-gold-primary mb-2">100%</div>
                  <div className="font-sans text-sm text-slate-light">Authentic Guarantee</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gold-primary/20 to-transparent relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=750&fit=crop"
                  alt="Brand Partnership"
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-pearl text-charcoal p-6">
                <div className="font-serif text-sm text-slate mb-1">Since</div>
                <div className="font-display text-xl">1999</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Brands Showcase */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
              Heritage <span className="italic text-gold-primary">Artisans</span>
            </h2>
            <p className="font-sans text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              Celebrating the master craftspeople and time-honored techniques that create truly exceptional pieces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Traditional Weavers",
                description: "Master artisans from Banaras, Kanchipuram, and other heritage centers who preserve ancient weaving techniques passed down through generations.",
                heritage: "1000+ Years"
              },
              {
                title: "Contemporary Designers", 
                description: "Innovative creators who blend traditional craftsmanship with modern aesthetics, creating pieces that honor the past while embracing the future.",
                heritage: "New Generation"
              },
              {
                title: "Luxury Houses",
                description: "Established fashion houses with decades of expertise in creating exceptional fabrics and garments for discerning clientele worldwide.",
                heritage: "50+ Years"
              }
            ].map((category, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gold-primary/10 border border-gold-primary/30 mx-auto mb-6 flex items-center justify-center group-hover:bg-gold-primary transition-all duration-500">
                  <StarIcon className="w-10 h-10 text-gold-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-4">{category.title}</h3>
                <p className="font-sans text-slate leading-relaxed mb-4">{category.description}</p>
                <div className="text-xs font-sans text-gold-primary uppercase tracking-wider font-medium">
                  {category.heritage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gold-primary to-gold-dark text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
            Discover Your <span className="italic">Perfect</span> Brand
          </h2>
          <p className="font-sans text-xl text-gold-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Let our brand specialists guide you to the perfect designer or artisan for your unique style and requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => handleWhatsApp()}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-primary font-sans font-medium hover:bg-pearl transition-colors duration-300"
            >
              Explore Our Brands
              <ArrowUpRightIcon className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
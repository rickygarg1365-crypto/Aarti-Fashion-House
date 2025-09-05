'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  ArrowUpRightIcon,
  StarIcon,
  SparklesIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

// Dynamic API imports
import { getFabrics, getSuits, getBrands, getTestimonials } from '@/lib/api';
import { Fabric, Suit, Brand, Testimonial } from '@/types';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [featuredItems, setFeaturedItems] = useState<Array<(Fabric | Suit) & { type: string }>>([]);
  const [featuredBrands, setFeaturedBrands] = useState<Brand[]>([]);
  const [featuredTestimonials, setFeaturedTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fetch dynamic data
  useEffect(() => {
    const fetchFeaturedData = async () => {
      try {
        setLoading(true);
        
        const [fabricsResponse, suitsResponse, brandsResponse, testimonialsResponse] = await Promise.all([
          getFabrics({ limit: 2 }),
          getSuits({ featured: true, limit: 2 }),
          getBrands({ featured: true, limit: 6 }),
          getTestimonials({ featured: true, limit: 3 })
        ]);

        // Combine fabrics and suits for featured items
        const items = [
          ...(fabricsResponse.data || []).map((item: Fabric) => ({ ...item, type: 'fabric' })),
          ...(suitsResponse.data || []).map((item: Suit) => ({ ...item, type: 'suit' }))
        ];

        setFeaturedItems(items);
        setFeaturedBrands(brandsResponse.data || []);
        setFeaturedTestimonials(testimonialsResponse.data || []);
      } catch (error) {
        console.error('Error fetching featured data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedData();
  }, []);

  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-pearl text-charcoal overflow-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-6 h-6 border border-gold-primary rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-pearl/80 backdrop-blur-xl border-b border-gold-primary/20">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="font-display text-2xl text-charcoal tracking-tight">
              Aarti<span className="text-gold-primary">.</span>
            </div>
            <div className="hidden md:flex space-x-12 text-sm font-sans font-medium tracking-wide">
              {['Collections', 'Atelier', 'Heritage', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-slate hover:text-gold-primary transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
            <button 
              onClick={() => handleWhatsApp('I would like to schedule a private consultation.')}
              className="text-sm font-sans font-medium bg-gold-primary text-white px-6 py-3 hover:bg-gold-dark transition-all duration-300"
            >
              Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gold-light/30 to-gold-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-sage/20 to-copper/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="mb-8">
                <span className="text-sm font-sans font-medium text-slate tracking-[0.3em] uppercase">
                  Couture Atelier
                </span>
              </div>
              
              <h1 className="font-display text-6xl lg:text-8xl leading-[0.9] mb-8 text-charcoal">
                Where
                <br />
                <span className="italic text-gold-primary">Elegance</span>
                <br />
                Meets
                <br />
                <span className="font-serif font-light">Tradition</span>
              </h1>

              <p className="font-sans text-lg text-slate-light leading-relaxed mb-12 max-w-lg">
                Discover our curated collection of premium fabrics and bespoke ready-to-wear pieces, 
                where each thread tells a story of craftsmanship and refined taste.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/fabrics"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-charcoal text-pearl font-sans font-medium hover:bg-gold-primary transition-all duration-500"
                >
                  Explore Collections
                  <ArrowUpRightIcon className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
                <button 
                  onClick={() => handleWhatsApp('I would like to learn more about your premium collections.')}
                  className="inline-flex items-center justify-center px-8 py-4 border border-charcoal text-charcoal font-sans font-medium hover:bg-charcoal hover:text-pearl transition-all duration-500"
                >
                  Private Viewing
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`relative transform transition-all duration-2000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-[4/5] bg-gradient-to-br from-cream to-pearl relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=750&fit=crop&crop=center"
                    alt="Premium Fabric Collection"
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-primary/10 backdrop-blur-sm border border-gold-primary/30 flex items-center justify-center">
                  <span className="font-display text-gold-primary text-sm">25+</span>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-pearl/90 backdrop-blur-sm border border-gold-primary/20 p-6">
                  <div className="font-sans text-xs text-slate uppercase tracking-wider mb-1">Heritage</div>
                  <div className="font-serif text-charcoal">Since 1999</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl lg:text-6xl text-charcoal mb-8 leading-tight">
              Our <span className="italic text-gold-primary">Philosophy</span>
            </h2>
            <p className="font-sans text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              We believe that true luxury lies not in ostentation, but in the quiet confidence 
              of perfect craftsmanship and timeless design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Curated Excellence",
                description: "Every piece in our collection is personally selected for its exceptional quality and artistic merit."
              },
              {
                title: "Timeless Craft",
                description: "We honor traditional techniques while embracing contemporary sensibilities in every creation."
              },
              {
                title: "Personal Journey",
                description: "Your style story is unique. We're here to help you express it with sophistication and grace."
              }
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gold-primary/10 border border-gold-primary/30 mx-auto mb-8 flex items-center justify-center group-hover:bg-gold-primary group-hover:border-gold-primary transition-all duration-500">
                  <SparklesIcon className="w-8 h-8 text-gold-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-4">{item.title}</h3>
                <p className="font-sans text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-pearl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display text-5xl text-charcoal mb-4">
                Curated <span className="italic text-gold-primary">Collections</span>
              </h2>
              <p className="font-sans text-slate text-lg">
                Handpicked pieces that embody our commitment to excellence
              </p>
            </div>
            <Link 
              href="/fabrics" 
              className="hidden md:flex items-center font-sans font-medium text-charcoal hover:text-gold-primary transition-colors duration-300"
            >
              View All
              <ArrowUpRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {loading ? (
            <div className="grid lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-[3/4] bg-cream mb-6" />
                  <div className="h-6 bg-cream mb-2 rounded" />
                  <div className="h-4 bg-cream mb-3 rounded w-3/4" />
                  <div className="flex justify-between">
                    <div className="h-4 bg-cream rounded w-1/3" />
                    <div className="h-4 bg-cream rounded w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 gap-8">
              {featuredItems.map((item, index) => (
              <div key={item.id} className={`group cursor-pointer transform transition-all duration-700 hover:-translate-y-2 ${index % 2 === 1 ? 'lg:mt-12' : ''}`}>
                <div className="aspect-[3/4] bg-cream relative overflow-hidden mb-6">
                  <img 
                    src={item.type === 'fabric' 
                      ? "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=500&fit=crop"
                      : "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop"
                    }
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300" />
                  <button 
                    onClick={() => handleWhatsApp(`I'm interested in ${item.name}. Please provide more details.`)}
                    className="absolute bottom-4 left-4 right-4 bg-pearl/90 backdrop-blur-sm text-charcoal py-3 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-sans font-medium"
                  >
                    Inquire
                  </button>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-2">{item.name}</h3>
                  <p className="font-sans text-sm text-slate mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-gold-primary font-medium">
                      {item.price ? `₹${item.price.toLocaleString()}` : 'Price on request'}
                    </span>
                    <span className="font-sans text-xs text-slate uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal text-pearl">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl mb-8">
              <span className="italic text-gold-primary">Voices</span> of Distinction
            </h2>
            <p className="font-sans text-xl text-slate-light">
              Stories from our distinguished clientele
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="mb-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-gold-primary fill-current' : 'text-slate'}`} 
                      />
                    ))}
                  </div>
                  <blockquote className="font-serif text-lg text-pearl leading-relaxed italic">
                    "{testimonial.comment}"
                  </blockquote>
                </div>
                <div className="border-t border-gold-primary/20 pt-6">
                  <div className="font-sans font-medium text-pearl">{testimonial.name}</div>
                  <div className="font-sans text-sm text-slate-light">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-5xl text-charcoal mb-8">
                Begin Your <span className="italic text-gold-primary">Journey</span>
              </h2>
              <p className="font-sans text-lg text-slate leading-relaxed mb-12">
                Experience our collection in the intimate setting of our atelier. 
                Schedule a private consultation to discover pieces that resonate with your personal style.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center mr-4">
                    <PhoneIcon className="w-6 h-6 text-gold-primary" />
                  </div>
                  <div>
                    <div className="font-sans font-medium text-charcoal">+91 9876543210</div>
                    <div className="font-sans text-sm text-slate">Available Mon-Sat, 10AM-8PM</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center mr-4">
                    <EnvelopeIcon className="w-6 h-6 text-gold-primary" />
                  </div>
                  <div>
                    <div className="font-sans font-medium text-charcoal">atelier@aartifashion.com</div>
                    <div className="font-sans text-sm text-slate">We respond within 2 hours</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold-primary text-white font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
                >
                  Schedule Consultation
                </Link>
                <button 
                  onClick={() => handleWhatsApp('I would like to visit your showroom. Could you provide directions and available times?')}
                  className="inline-flex items-center justify-center px-8 py-4 border border-gold-primary text-gold-primary font-sans font-medium hover:bg-gold-primary hover:text-white transition-all duration-300"
                >
                  WhatsApp Us
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-pearl to-cream relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=750&fit=crop"
                  alt="Aarti Fashion House Atelier"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-charcoal text-pearl p-8">
                <div className="font-display text-2xl text-gold-primary mb-2">Atelier</div>
                <div className="font-sans text-sm">Ludhiana, Punjab</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
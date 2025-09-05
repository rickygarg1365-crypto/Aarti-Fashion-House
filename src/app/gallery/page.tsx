'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon, ArrowUpRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop',
    alt: 'Premium Silk Collection',
    category: 'fabrics',
    title: 'Artisan Silk Collection',
    description: 'Hand-woven silk fabrics from master craftspeople of Banaras'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop',
    alt: 'Wedding Suit Collection',
    category: 'suits',
    title: 'Royal Wedding Ensemble',
    description: 'Traditional craftsmanship meets contemporary elegance'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=900&fit=crop',
    alt: 'Cotton Fabric Showcase',
    category: 'fabrics',
    title: 'Heritage Cotton Weaves',
    description: 'Premium cotton collection featuring traditional block prints'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=900&fit=crop',
    alt: 'Formal Suit Collection',
    category: 'suits',
    title: 'Executive Formal Range',
    description: 'Tailored perfection for the modern professional'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&h=800&fit=crop',
    alt: 'Linen Collection',
    category: 'fabrics',
    title: 'Summer Linen Selection',
    description: 'Breathable luxury for the warmer seasons'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&h=900&fit=crop',
    alt: 'Party Wear Collection',
    category: 'suits',
    title: 'Celebration Ready',
    description: 'Festive attire that makes every occasion memorable'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
    alt: 'Wool Fabric Range',
    category: 'fabrics',
    title: 'Winter Wool Collection',
    description: 'Luxurious warmth from premium wool varieties'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=600&h=800&fit=crop',
    alt: 'Casual Suit Range',
    category: 'suits',
    title: 'Smart Casual Elegance',
    description: 'Relaxed sophistication for everyday luxury'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=900&fit=crop',
    alt: 'Designer Fabrics',
    category: 'fabrics',
    title: 'Designer Collaborative',
    description: 'Exclusive patterns from renowned fashion houses'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&h=800&fit=crop',
    alt: 'Showroom Interior',
    category: 'showroom',
    title: 'Atelier Experience',
    description: 'Where luxury meets personal service'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop',
    alt: 'Vintage Collection',
    category: 'fabrics',
    title: 'Vintage Inspired',
    description: 'Timeless patterns with contemporary appeal'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=900&fit=crop',
    alt: 'Bespoke Suits',
    category: 'suits',
    title: 'Bespoke Excellence',
    description: 'Made-to-measure perfection for the discerning gentleman'
  }
];

const categories = [
  { value: 'all', label: 'All Collections' },
  { value: 'fabrics', label: 'Premium Fabrics' },
  { value: 'suits', label: 'Ready-to-Wear' },
  { value: 'showroom', label: 'Atelier Experience' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in visiting your showroom to see your collections in person.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="min-h-screen bg-pearl text-charcoal">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-cream to-pearl">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gold-light/20 to-gold-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-sage/15 to-copper/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-8">
              <span className="text-sm font-sans font-medium text-slate tracking-[0.3em] uppercase">
                Visual Showcase
              </span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-8 text-charcoal">
              Gallery of
              <br />
              <span className="italic text-gold-primary">Excellence</span>
            </h1>

            <p className="font-sans text-lg text-slate-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Explore our curated visual journey through exquisite fabrics, elegant ready-to-wear pieces, 
              and the sophisticated atmosphere of our atelier.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="font-display text-3xl text-gold-primary mb-2">{galleryImages.length}+</div>
                <div className="font-sans text-sm text-slate">Curated Images</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold-primary mb-2">{categories.length - 1}</div>
                <div className="font-sans text-sm text-slate">Collections</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold-primary mb-2">25+</div>
                <div className="font-sans text-sm text-slate">Years Captured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-gold-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-3 font-sans font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-gold-primary text-white'
                    : 'text-charcoal hover:text-gold-primary border border-gold-primary/20 hover:border-gold-primary/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <span className="font-sans text-sm text-slate">
              Showing {filteredImages.length} of {galleryImages.length} images
            </span>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className={`break-inside-avoid group cursor-pointer transform transition-all duration-700 hover:-translate-y-1 ${
                  index % 4 === 1 ? 'lg:mt-8' : index % 4 === 2 ? 'lg:mt-16' : index % 4 === 3 ? 'lg:mt-4' : ''
                }`}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden bg-cream">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-sans font-medium px-3 py-1 bg-gold-primary/90 text-white uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-center text-white p-6">
                      <MagnifyingGlassIcon className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="font-display text-lg mb-2">{image.title}</h3>
                      <p className="font-sans text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={closeLightbox} />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all duration-300 z-10"
          >
            <ArrowUpRightIcon className="w-6 h-6 rotate-[-135deg]" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all duration-300 z-10"
          >
            <ArrowUpRightIcon className="w-6 h-6 rotate-45" />
          </button>

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all duration-300 z-10"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-6xl max-h-[90vh] mx-auto p-6">
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-8 text-white">
              <div className="max-w-2xl">
                <span className="text-xs font-sans font-medium text-gold-light uppercase tracking-wider mb-2 block">
                  {selectedImage.category}
                </span>
                <h3 className="font-display text-2xl lg:text-3xl mb-3">{selectedImage.title}</h3>
                <p className="font-sans text-slate-light leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Visit Invitation */}
      <section className="py-24 bg-charcoal text-pearl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
            Experience in <span className="italic text-gold-primary">Person</span>
          </h2>
          <p className="font-sans text-xl text-slate-light mb-12 max-w-3xl mx-auto leading-relaxed">
            While our gallery captures the essence of our collection, nothing compares to experiencing 
            the texture, drape, and craftsmanship in person at our atelier.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-primary text-white font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
            >
              Visit Our Atelier
              <ArrowUpRightIcon className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';

import { useState, useMemo, useEffect } from 'react';
import { ArrowUpRightIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import suitsData from '@/data/suits.json';
import { Suit } from '@/types';

const suits: Suit[] = suitsData;

const filterOptions = {
  category: [
    { value: 'formal', label: 'Formal', count: suits.filter(s => s.category === 'formal').length },
    { value: 'casual', label: 'Casual', count: suits.filter(s => s.category === 'casual').length },
    { value: 'wedding', label: 'Wedding', count: suits.filter(s => s.category === 'wedding').length },
    { value: 'party', label: 'Party', count: suits.filter(s => s.category === 'party').length },
  ],
  size: [
    { value: 'S', label: 'Small (S)' },
    { value: 'M', label: 'Medium (M)' },
    { value: 'L', label: 'Large (L)' },
    { value: 'XL', label: 'Extra Large (XL)' },
    { value: 'XXL', label: 'Double XL (XXL)' },
  ],
  material: [
    { value: 'Silk', label: 'Silk' },
    { value: 'Wool', label: 'Wool' },
    { value: 'Cotton', label: 'Cotton' },
    { value: 'Linen', label: 'Linen' },
  ],
};

export default function SuitsPage() {
  const [activeFilters, setActiveFilters] = useState<{
    [key: string]: string[];
  }>({
    category: [],
    size: [],
    material: [],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState<Suit | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  const handleClearAll = () => {
    setActiveFilters({
      category: [],
      size: [],
      material: [],
    });
  };

  const filteredSuits = useMemo(() => {
    return suits.filter(suit => {
      const categoryMatch = activeFilters.category.length === 0 || 
        activeFilters.category.includes(suit.category);
      const sizeMatch = activeFilters.size.length === 0 || 
        activeFilters.size.some(size => suit.size.includes(size));
      const materialMatch = activeFilters.material.length === 0 || 
        activeFilters.material.some(material => 
          suit.material.toLowerCase().includes(material.toLowerCase())
        );

      return categoryMatch && sizeMatch && materialMatch;
    });
  }, [activeFilters]);

  const handleWhatsApp = (suit: Suit) => {
    const message = `Hello! I'm interested in the ${suit.name}. Can you provide more details about availability, sizing, and fittings?`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const hasActiveFilters = Object.values(activeFilters).some(filters => filters.length > 0);

  return (
    <div className="min-h-screen bg-pearl text-charcoal">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-cream to-pearl">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-gold-light/20 to-gold-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-sage/15 to-copper/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-8">
              <span className="text-sm font-sans font-medium text-slate tracking-[0.3em] uppercase">
                Ready-to-Wear Excellence
              </span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-8 text-charcoal">
              Tailored
              <br />
              <span className="italic text-gold-primary">Sophistication</span>
            </h1>

            <p className="font-sans text-lg text-slate-light leading-relaxed mb-8 max-w-3xl mx-auto">
              Our ready-to-wear collection represents the perfect marriage of traditional tailoring techniques 
              and contemporary design, creating pieces that embody timeless elegance.
            </p>

            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="font-display text-2xl text-gold-primary">{suits.length}</div>
                <div className="font-sans text-sm text-slate">Curated Pieces</div>
              </div>
              <div>
                <div className="font-display text-2xl text-gold-primary">{new Set(suits.map(s => s.category)).size}</div>
                <div className="font-sans text-sm text-slate">Occasions</div>
              </div>
              <div>
                <div className="font-display text-2xl text-gold-primary">{filteredSuits.filter(s => s.inStock).length}</div>
                <div className="font-sans text-sm text-slate">Available Now</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-gold-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Desktop Filters */}
            <div className="hidden lg:flex space-x-8">
              {Object.entries(filterOptions).map(([filterType, options]) => (
                <div key={filterType} className="relative group">
                  <button className="flex items-center space-x-2 font-sans font-medium text-charcoal hover:text-gold-primary transition-colors duration-300">
                    <span className="capitalize">{filterType === 'size' ? 'Size' : filterType.replace(/([A-Z])/g, ' $1').trim()}</span>
                    {activeFilters[filterType]?.length > 0 && (
                      <span className="bg-gold-primary text-white text-xs px-2 py-1 rounded-full">
                        {activeFilters[filterType].length}
                      </span>
                    )}
                  </button>
                  
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gold-primary/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    <div className="p-4 space-y-3">
                      {options.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center space-x-3 cursor-pointer hover:bg-cream p-2 rounded transition-colors duration-200"
                        >
                          <input
                            type="checkbox"
                            checked={activeFilters[filterType]?.includes(option.value) || false}
                            onChange={() => handleFilterChange(filterType, option.value)}
                            className="w-4 h-4 text-gold-primary border-gold-primary/30 rounded focus:ring-gold-primary"
                          />
                          <span className="font-sans text-sm text-charcoal">{option.label}</span>
                          {option.count && (
                            <span className="font-sans text-xs text-slate">({option.count})</span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
      </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center space-x-2 font-sans font-medium text-charcoal hover:text-gold-primary transition-colors duration-300"
            >
              <FunnelIcon className="w-5 h-5" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="bg-gold-primary text-white text-xs px-2 py-1 rounded-full">
                  {Object.values(activeFilters).flat().length}
                </span>
              )}
            </button>

            {/* Results and Clear */}
            <div className="flex items-center space-x-6">
              <div className="font-sans text-sm text-slate">
                {filteredSuits.length} of {suits.length} pieces
              </div>
              {hasActiveFilters && (
                <button
                  onClick={handleClearAll}
                  className="font-sans text-sm text-gold-primary hover:text-gold-dark transition-colors duration-300"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {filteredSuits.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredSuits.map((suit, index) => (
                <div 
                key={suit.id}
                  className={`group cursor-pointer transform transition-all duration-700 hover:-translate-y-2 ${index % 2 === 1 ? 'lg:mt-12' : ''}`}
                  onClick={() => setSelectedSuit(suit)}
                >
                  <div className="aspect-[3/4] bg-cream relative overflow-hidden mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop"
                      alt={suit.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-sans font-medium px-3 py-1 ${
                        suit.inStock 
                          ? 'bg-sage/20 text-sage border border-sage/30' 
                          : 'bg-slate/20 text-slate border border-slate/30'
                      }`}>
                        {suit.inStock ? 'Available' : 'Made to Order'}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-sans font-medium px-3 py-1 bg-gold-primary/20 text-gold-primary border border-gold-primary/30 capitalize">
                        {suit.category}
                      </span>
                    </div>

                    {/* Sizes */}
                    <div className="absolute bottom-16 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-xs font-sans text-white mb-2">Available Sizes:</div>
                      <div className="flex flex-wrap gap-1">
                        {suit.size.slice(0, 4).map((size, sizeIndex) => (
                          <span
                            key={sizeIndex}
                            className="text-xs font-sans bg-white/80 text-charcoal px-2 py-1"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Action */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsApp(suit);
                        }}
                        className="w-full py-3 bg-pearl/90 text-charcoal font-sans font-medium hover:bg-gold-primary hover:text-white transition-all duration-300"
                      >
                        {suit.inStock ? 'Try & Buy' : 'Order Custom'}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-2">{suit.name}</h3>
                    <p className="font-sans text-sm text-slate mb-3 line-clamp-2">{suit.description}</p>
                    
                    {/* Material */}
                    <div className="mb-3">
                      <span className="text-xs font-sans text-slate bg-cream px-2 py-1">
                        {suit.material}
                      </span>
                    </div>

                    {/* Colors */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {suit.colors.slice(0, 3).map((color, colorIndex) => (
                          <span
                            key={colorIndex}
                            className="text-xs font-sans text-slate bg-cream px-2 py-1"
                          >
                            {color}
                          </span>
                        ))}
                        {suit.colors.length > 3 && (
                          <span className="text-xs font-sans text-slate">+{suit.colors.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-sans text-gold-primary font-medium">
                        {suit.price ? `₹${suit.price.toLocaleString()}` : 'Price on consultation'}
                      </span>
                      <span className="font-sans text-xs text-slate uppercase tracking-wider">
                        {suit.size.length} sizes
                      </span>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gold-primary/10 border border-gold-primary/30 mx-auto mb-6 flex items-center justify-center">
                <FunnelIcon className="w-8 h-8 text-gold-primary" />
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-4">No Suits Found</h3>
              <p className="font-sans text-slate mb-8">
                Try adjusting your filters to discover more options from our collection.
              </p>
              <button
                onClick={handleClearAll}
                className="inline-flex items-center px-6 py-3 bg-gold-primary text-white font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm" onClick={() => setShowFilters(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-pearl shadow-2xl overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-display text-xl text-charcoal">Refine Selection</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-charcoal hover:text-gold-primary transition-colors duration-300"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8">
                {Object.entries(filterOptions).map(([filterType, options]) => (
                  <div key={filterType}>
                    <h4 className="font-display text-lg text-charcoal mb-4 capitalize">
                      {filterType === 'size' ? 'Size' : filterType.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <div className="space-y-3">
                      {options.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={activeFilters[filterType]?.includes(option.value) || false}
                            onChange={() => handleFilterChange(filterType, option.value)}
                            className="w-4 h-4 text-gold-primary border-gold-primary/30 rounded focus:ring-gold-primary"
                          />
                          <span className="font-sans text-sm text-charcoal">{option.label}</span>
                          {option.count && (
                            <span className="font-sans text-xs text-slate">({option.count})</span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gold-primary/20">
                <div className="flex space-x-4">
                  <button
                    onClick={handleClearAll}
                    className="flex-1 py-3 border border-gold-primary text-gold-primary font-sans font-medium hover:bg-gold-primary hover:text-white transition-all duration-300"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="flex-1 py-3 bg-gold-primary text-white font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
                  >
                    Show {filteredSuits.length} Results
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        )}

      {/* Sizing & Fitting Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
                Perfect <span className="italic text-gold-primary">Fit</span> Guarantee
              </h2>
              <div className="space-y-6 text-slate leading-relaxed font-sans">
                <p>
                  Our ready-to-wear collection is designed with precision tailoring to ensure an exceptional fit. 
                  Each piece can be further customized with minor alterations for the perfect silhouette.
                </p>
                <p>
                  We offer complimentary fitting consultations and same-day alterations to ensure your complete 
                  satisfaction with every purchase.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-display text-2xl text-gold-primary mb-2">Free</div>
                  <div className="font-sans text-sm text-slate">Fitting Consultation</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl text-gold-primary mb-2">Same Day</div>
                  <div className="font-sans text-sm text-slate">Minor Alterations</div>
                </div>
              </div>
      </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-cream to-pearl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                  alt="Perfect Fit Tailoring"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gold-primary text-white p-6">
                <div className="font-serif text-sm mb-1">Tailoring</div>
                <div className="font-display text-lg">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-pearl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
            Ready for Your <span className="italic text-gold-primary">Perfect</span> Suit?
          </h2>
          <p className="font-sans text-xl text-slate-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Schedule a private fitting consultation to discover the perfect piece from our ready-to-wear collection. 
            Our expert stylists will ensure the ideal fit and finish.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => {
                const message = "Hello! I'd like to schedule a fitting consultation for your ready-to-wear suits.";
                window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-primary text-white font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
            >
              Book Fitting Session
              <ArrowUpRightIcon className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
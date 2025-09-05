'use client';

import { useState, useMemo, useEffect } from 'react';
import { ArrowUpRightIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { getFabrics } from '@/lib/api';
import { Fabric } from '@/types';

const baseFilterOptions = {
  category: [
    { value: 'cotton', label: 'Cotton' },
    { value: 'silk', label: 'Silk' },
    { value: 'wool', label: 'Wool' },
    { value: 'linen', label: 'Linen' },
    { value: 'synthetic', label: 'Synthetic' },
  ],
  season: [
    { value: 'spring', label: 'Spring' },
    { value: 'summer', label: 'Summer' },
    { value: 'autumn', label: 'Autumn' },
    { value: 'winter', label: 'Winter' },
    { value: 'all-season', label: 'All Season' },
  ],
  priceRange: [
    { value: 'budget', label: 'Accessible (Under ₹500)' },
    { value: 'mid-range', label: 'Premium (₹500-₹1000)' },
    { value: 'premium', label: 'Luxury (₹1000-₹2000)' },
    { value: 'luxury', label: 'Couture (Above ₹2000)' },
  ],
};

export default function FabricsPage() {
  const [activeFilters, setActiveFilters] = useState<{
    [key: string]: string[];
  }>({
    category: [],
    season: [],
    priceRange: [],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [fabrics, setFabrics] = useState<Fabric[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState(baseFilterOptions);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fetch fabrics data dynamically
  useEffect(() => {
    const fetchFabrics = async () => {
      try {
        setLoading(true);
        const response = await getFabrics({
          category: activeFilters.category.length > 0 ? activeFilters.category : undefined,
          season: activeFilters.season.length > 0 ? activeFilters.season : undefined,
          priceRange: activeFilters.priceRange.length > 0 ? activeFilters.priceRange : undefined,
        });
        
        if (response.success && response.data) {
          setFabrics(response.data);
          
          // Update filter options with counts if available
          if (response.filters) {
            const updatedFilterOptions = { ...baseFilterOptions };
            // Add counts to categories based on actual data
            updatedFilterOptions.category = baseFilterOptions.category.map(cat => ({
              ...cat,
              count: response.data?.filter((f: Fabric) => f.category === cat.value).length || 0
            }));
            setFilterOptions(updatedFilterOptions);
          }
        }
      } catch (error) {
        console.error('Error fetching fabrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFabrics();
  }, [activeFilters]);

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
      season: [],
      priceRange: [],
    });
  };

  // fabrics are now already filtered from the API
  const filteredFabrics = fabrics;

  const handleWhatsApp = (fabric: Fabric) => {
    const message = `Hello! I'm interested in the ${fabric.name} fabric. Can you provide more details about availability and pricing?`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const hasActiveFilters = Object.values(activeFilters).some(filters => filters.length > 0);

  return (
    <div className="min-h-screen bg-pearl text-charcoal">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-cream to-pearl">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gold-light/20 to-gold-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-8">
              <span className="text-sm font-sans font-medium text-slate tracking-[0.3em] uppercase">
                Curated Collection
              </span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-8 text-charcoal">
              Premium
              <br />
              <span className="italic text-gold-primary">Fabrics</span>
            </h1>

            <p className="font-sans text-lg text-slate-light leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover our meticulously curated collection of premium fabrics, where traditional craftsmanship 
              meets contemporary elegance. Each piece tells a story of artistry and refinement.
            </p>

            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="font-display text-2xl text-gold-primary">{fabrics.length}</div>
                <div className="font-sans text-sm text-slate">Premium Fabrics</div>
              </div>
              <div>
                <div className="font-display text-2xl text-gold-primary">{new Set(fabrics.map(f => f.category)).size}</div>
                <div className="font-sans text-sm text-slate">Categories</div>
              </div>
              <div>
                <div className="font-display text-2xl text-gold-primary">{filteredFabrics.length}</div>
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
                    <span className="capitalize">{filterType.replace(/([A-Z])/g, ' $1').trim()}</span>
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
                {filteredFabrics.length} of {fabrics.length} fabrics
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
        {filteredFabrics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredFabrics.map((fabric, index) => (
                <div 
                key={fabric.id}
                  className={`group cursor-pointer transform transition-all duration-700 hover:-translate-y-2 ${index % 3 === 1 ? 'lg:mt-8' : ''}`}
                  onClick={() => setSelectedFabric(fabric)}
                >
                  <div className="aspect-[3/4] bg-cream relative overflow-hidden mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=500&fit=crop"
                      alt={fabric.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-sans font-medium px-3 py-1 ${
                        fabric.inStock 
                          ? 'bg-sage/20 text-sage border border-sage/30' 
                          : 'bg-slate/20 text-slate border border-slate/30'
                      }`}>
                        {fabric.inStock ? 'Available' : 'Sold Out'}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-sans font-medium px-3 py-1 bg-gold-primary/20 text-gold-primary border border-gold-primary/30 capitalize">
                        {fabric.category}
                      </span>
                    </div>

                    {/* Hover Action */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsApp(fabric);
                        }}
                        disabled={!fabric.inStock}
                        className={`w-full py-3 font-sans font-medium transition-all duration-300 ${
                          fabric.inStock
                            ? 'bg-pearl/90 text-charcoal hover:bg-gold-primary hover:text-white'
                            : 'bg-slate/90 text-slate-light cursor-not-allowed'
                        }`}
                      >
                        {fabric.inStock ? 'Inquire' : 'Notify When Available'}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-2">{fabric.name}</h3>
                    <p className="font-sans text-sm text-slate mb-3 line-clamp-2">{fabric.description}</p>
                    
                    {/* Colors */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {fabric.colors.slice(0, 3).map((color, colorIndex) => (
                          <span
                            key={colorIndex}
                            className="text-xs font-sans text-slate bg-cream px-2 py-1"
                          >
                            {color}
                          </span>
                        ))}
                        {fabric.colors.length > 3 && (
                          <span className="text-xs font-sans text-slate">+{fabric.colors.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-sans text-gold-primary font-medium">
                        {fabric.price ? `₹${fabric.price.toLocaleString()} /meter` : 'Price on request'}
                      </span>
                      <span className="font-sans text-xs text-slate uppercase tracking-wider">
                        {fabric.season}
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
              <h3 className="font-display text-2xl text-charcoal mb-4">No Fabrics Found</h3>
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
                      {filterType.replace(/([A-Z])/g, ' $1').trim()}
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
                    Show {filteredFabrics.length} Results
              </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        )}

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-pearl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
            Need <span className="italic text-gold-primary">Personal</span> Guidance?
          </h2>
          <p className="font-sans text-xl text-slate-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Our fabric specialists are here to help you choose the perfect material for your vision. 
            Schedule a consultation for personalized recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => {
                const message = "Hello! I'd like to schedule a fabric consultation to discuss my requirements.";
                window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-primary text-white font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
            >
              Schedule Consultation
              <ArrowUpRightIcon className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
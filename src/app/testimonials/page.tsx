'use client';

import { useState, useEffect } from 'react';
import { StarIcon, ArrowUpRightIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import testimonialsData from '@/data/testimonials.json';
import { Testimonial } from '@/types';

const testimonials: Testimonial[] = testimonialsData;

const testimonialCategories = [
  { value: 'all', label: 'All Reviews' },
  { value: 'fabrics', label: 'Fabric Quality' },
  { value: 'service', label: 'Customer Service' },
  { value: 'suits', label: 'Ready-to-Wear' },
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => 
        testimonial.comment.toLowerCase().includes(activeCategory === 'fabrics' ? 'fabric' : 
        activeCategory === 'service' ? 'service' : 'suit')
      );

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(star => 
    testimonials.filter(t => t.rating === star).length
  );

  const handleWhatsApp = () => {
    const message = "Hello! I'd like to share my feedback about Aarti Fashion House and also learn more about your services.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const featuredTestimonials = testimonials.filter(t => t.rating === 5).slice(0, 3);

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
                Client Experiences
              </span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-8 text-charcoal">
              Stories of
              <br />
              <span className="italic text-gold-primary">Satisfaction</span>
            </h1>

            <p className="font-sans text-lg text-slate-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Discover what our discerning clients say about their experience with Aarti Fashion House. 
              Each testimonial reflects our commitment to excellence and personal service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="font-display text-3xl text-gold-primary mb-2">{testimonials.length}+</div>
                <div className="font-sans text-sm text-slate">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold-primary mb-2">{averageRating.toFixed(1)}</div>
                <div className="font-sans text-sm text-slate">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold-primary mb-2">{Math.round((ratingDistribution[0] / testimonials.length) * 100)}%</div>
                <div className="font-sans text-sm text-slate">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold-primary mb-2">25+</div>
                <div className="font-sans text-sm text-slate">Years Trusted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
                Excellence <span className="italic text-gold-primary">Recognized</span>
              </h2>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid
                      key={i}
                      className={`w-8 h-8 ${i < Math.floor(averageRating) ? 'text-gold-primary' : 'text-slate/30'}`}
                    />
                  ))}
                </div>
                <span className="font-display text-3xl text-charcoal">{averageRating.toFixed(1)}</span>
                <span className="font-sans text-slate">out of 5.0</span>
              </div>

              <p className="font-sans text-slate leading-relaxed text-lg mb-8">
                Based on {testimonials.length} verified reviews from clients who have experienced 
                our premium fabrics, ready-to-wear collections, and personalized service.
              </p>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center px-8 py-4 bg-gold-primary text-white font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
              >
                Share Your Experience
                <ArrowUpRightIcon className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="font-display text-2xl text-charcoal mb-6">Rating Distribution</h3>
              <div className="space-y-4">
                {[5, 4, 3, 2, 1].map((star, index) => (
                  <div key={star} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 w-20">
                      <span className="font-sans text-sm text-charcoal">{star}</span>
                      <StarIconSolid className="w-4 h-4 text-gold-primary" />
                    </div>
                    <div className="flex-1 bg-cream h-3 relative overflow-hidden">
                      <div 
                        className="bg-gold-primary h-full transition-all duration-1000"
                        style={{ 
                          width: `${(ratingDistribution[index] / testimonials.length) * 100}%` 
                        }}
                      />
                    </div>
                    <span className="font-sans text-sm text-slate w-12">
                      {ratingDistribution[index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
              Featured <span className="italic text-gold-primary">Reviews</span>
            </h2>
            <p className="font-sans text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              Exceptional experiences from our most valued clients.
            </p>
      </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
                className={`group transform transition-all duration-700 hover:-translate-y-2 ${index === 1 ? 'lg:mt-8' : ''}`}
              >
                <div className="bg-white p-8 relative">
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-gold-primary text-white flex items-center justify-center">
                                             <ChatBubbleLeftIcon className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                      <StarIconSolid
                    key={i}
                        className="w-5 h-5 text-gold-primary"
                      />
                    ))}
                  </div>

                  <blockquote className="font-serif text-lg text-charcoal leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.comment}&rdquo;
                  </blockquote>

                  <div className="border-t border-gold-primary/20 pt-6">
                    <div className="font-display text-lg text-charcoal">{testimonial.name}</div>
                    <div className="font-sans text-sm text-slate mt-1">{testimonial.location}</div>
                    <div className="font-sans text-xs text-slate mt-2">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="bg-white border-b border-gold-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {testimonialCategories.map((category) => (
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
              Showing {filteredTestimonials.length} of {testimonials.length} reviews
            </span>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`group cursor-pointer transform transition-all duration-500 hover:-translate-y-1 ${
                  index % 3 === 1 ? 'lg:mt-6' : index % 3 === 2 ? 'lg:mt-12' : ''
                }`}
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <div className="bg-white p-6 h-full border border-gold-primary/10 hover:border-gold-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold-primary' : 'text-slate/30'}`}
                        />
                      ))}
                    </div>
                    <span className="font-sans text-xs text-slate">
                      {new Date(testimonial.date).toLocaleDateString()}
                    </span>
              </div>

                  <blockquote className="font-sans text-charcoal leading-relaxed mb-4 line-clamp-4">
                    &ldquo;{testimonial.comment}&rdquo;
                  </blockquote>

                  <div className="border-t border-gold-primary/20 pt-4 mt-auto">
                    <div className="font-sans font-medium text-charcoal">{testimonial.name}</div>
                    <div className="font-sans text-sm text-slate">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Integration Placeholder */}
      <section className="py-24 bg-charcoal text-pearl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
              Find Us on <span className="italic text-gold-primary">Google</span>
            </h2>
            <p className="font-sans text-xl text-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
              See more authentic reviews from our clients on Google My Business.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded text-center">
            <div className="w-16 h-16 bg-white/10 border border-white/20 mx-auto mb-6 flex items-center justify-center">
              <StarIcon className="w-8 h-8 text-gold-primary" />
            </div>
            <h3 className="font-display text-2xl text-white mb-4">Google Reviews Widget</h3>
            <p className="font-sans text-slate-light mb-6">
              This section will display live Google My Business reviews once integrated.
            </p>
            <button
              onClick={() => window.open('https://www.google.com/search?q=aarti+fashion+house+punjab', '_blank')}
              className="inline-flex items-center px-6 py-3 bg-white text-charcoal font-sans font-medium hover:bg-pearl transition-colors duration-300"
            >
              View on Google
              <ArrowUpRightIcon className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Review Invitation */}
      <section className="py-24 bg-gold-primary text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
            Share Your <span className="italic">Experience</span>
          </h2>
          <p className="font-sans text-xl text-gold-light mb-12 max-w-3xl mx-auto leading-relaxed">
            We value your feedback and would love to hear about your experience with Aarti Fashion House. 
            Your review helps us serve you and future clients better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-primary font-sans font-medium hover:bg-pearl transition-colors duration-300"
            >
              Leave a Review
              <ArrowUpRightIcon className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => window.open('https://www.google.com/search?q=aarti+fashion+house+punjab', '_blank')}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-sans font-medium hover:bg-white hover:text-gold-primary transition-all duration-300"
            >
              Review on Google
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
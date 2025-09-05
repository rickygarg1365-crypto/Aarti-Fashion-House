'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { 
  SparklesIcon, 
  HeartIcon, 
  TrophyIcon,
  UserGroupIcon,
  ArrowUpRightIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

const values = [
  {
      name: 'Heritage Craftsmanship',
      description: 'Every piece reflects decades of traditional expertise combined with contemporary sophistication.',
    icon: TrophyIcon,
  },
  {
      name: 'Personal Excellence',
      description: 'We believe in creating intimate relationships with our clients, understanding their unique style journey.',
    icon: HeartIcon,
  },
  {
      name: 'Curated Distinction',
      description: 'Our collection represents the finest selection of fabrics and designs from master artisans.',
    icon: SparklesIcon,
  },
  {
      name: 'Legacy of Trust',
      description: 'Built on decades of integrity, we maintain the highest standards in everything we create.',
    icon: UserGroupIcon,
  },
];

  const timeline = [
    {
      year: '1999',
      title: 'The Foundation',
      description: 'Aarti Fashion House began as a vision to bring exceptional craftsmanship to Punjab.'
    },
    {
      year: '2005',
      title: 'Expanding Horizons',
      description: 'Established partnerships with renowned designers and premium fabric houses across India.'
    },
    {
      year: '2012',
      title: 'Atelier Excellence',
      description: 'Transformed into a full-service atelier offering bespoke consultation and ready-to-wear collections.'
    },
    {
      year: '2020',
      title: 'Digital Sophistication',
      description: 'Embraced modern technology while preserving traditional values, reaching clients nationwide.'
    },
  ];

  const achievements = [
    { metric: '25+', label: 'Years of Excellence' },
    { metric: '10,000+', label: 'Satisfied Clients' },
    { metric: '500+', label: 'Fabric Varieties' },
    { metric: '50+', label: 'Brand Partners' },
  ];

  const handleWhatsApp = () => {
    const message = "Hello! I'd like to learn more about Aarti Fashion House's heritage and services.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-pearl text-charcoal">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream to-pearl">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gold-light/20 to-gold-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-sage/15 to-copper/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="mb-8">
                <span className="text-sm font-sans font-medium text-slate tracking-[0.3em] uppercase">
                  Our Heritage
                </span>
              </div>
              
              <h1 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-8 text-charcoal">
                Crafting
                <br />
                <span className="italic text-gold-primary">Excellence</span>
                <br />
                Since 1999
            </h1>

              <p className="font-sans text-lg text-slate-light leading-relaxed mb-8 max-w-lg">
                From a humble beginning to Punjab&apos;s most distinguished fashion atelier, 
                our journey has been defined by an unwavering commitment to craftsmanship and elegance.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {achievements.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="font-display text-3xl text-gold-primary mb-2">{item.metric}</div>
                    <div className="font-sans text-sm text-slate">{item.label}</div>
          </div>
                ))}
        </div>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center px-8 py-4 bg-charcoal text-pearl font-sans font-medium hover:bg-gold-primary transition-all duration-500"
              >
                Connect With Us
                <ArrowUpRightIcon className="ml-3 w-5 h-5" />
              </button>
      </div>

            <div className={`relative transform transition-all duration-2000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="aspect-[4/5] bg-gradient-to-br from-cream to-pearl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=750&fit=crop"
                  alt="Aarti Fashion House Heritage"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-gold-primary text-white p-8">
                <div className="font-serif text-xl mb-2">Est.</div>
                <div className="font-display text-2xl">1999</div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
                Our <span className="italic text-gold-primary">Journey</span>
            </h2>
              <div className="space-y-6 text-slate leading-relaxed font-sans">
                <p>
                  Founded in 1999 in the vibrant heart of Punjab, Aarti Fashion House began as a passionate 
                  endeavor to bridge the gap between traditional Indian craftsmanship and contemporary elegance.
                </p>
                <p>
                  What started as a boutique fabric store has evolved into Punjab&apos;s most distinguished fashion 
                  atelier, where discerning clients discover pieces that reflect their unique style and celebrate 
                  the artistry of exceptional design.
                </p>
                <p>
                  Today, we continue this legacy by curating an unparalleled collection of premium fabrics and 
                  ready-to-wear pieces, each selected for its ability to tell a story of refinement and grace.
            </p>
          </div>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center">
                      <span className="font-display text-gold-primary text-sm">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-display text-xl text-charcoal mb-2">{item.title}</h3>
                    <p className="text-slate font-sans text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
              Our <span className="italic text-gold-primary">Values</span>
            </h2>
            <p className="font-sans text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              The principles that guide every decision, every creation, and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-8 bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-500">
                <div className="w-16 h-16 bg-gold-primary/10 border border-gold-primary/30 mx-auto mb-6 flex items-center justify-center group-hover:bg-gold-primary group-hover:border-gold-primary transition-all duration-500">
                  <value.icon className="w-8 h-8 text-gold-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl text-charcoal mb-4">{value.name}</h3>
                <p className="font-sans text-slate text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
        </div>
      </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-charcoal text-pearl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
                Our <span className="italic text-gold-primary">Philosophy</span>
            </h2>
              <div className="space-y-6 text-slate-light leading-relaxed font-sans text-lg">
                <p>
                  We believe that true luxury is not found in ostentation, but in the quiet confidence 
                  that comes from wearing something perfectly crafted for you.
                </p>
                <p>
                  Every fabric we select, every piece we curate, reflects our commitment to helping 
                  you express your unique story through the art of exceptional design.
                </p>
                <p>
                  At Aarti Fashion House, fashion is not just about clothing—it&apos;s about creating 
                  moments of beauty that celebrate the elegance within each individual.
              </p>
            </div>
              </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold-primary/20 to-transparent relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=600&fit=crop"
                  alt="Fashion Philosophy"
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                />
            </div>
              <div className="absolute -bottom-6 -left-6 bg-pearl text-charcoal p-6">
                <div className="font-serif text-sm text-slate mb-1">Philosophy</div>
                <div className="font-display text-lg">Quiet Confidence</div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-24 bg-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
              Expert <span className="italic text-gold-primary">Guidance</span>
            </h2>
            <p className="font-sans text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              Our experienced team brings decades of expertise in fabric selection, 
              style consultation, and personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Master Curators",
                description: "Our fabric experts travel across India to source the finest materials from traditional weavers and contemporary designers."
              },
              {
                title: "Style Consultants",
                description: "Personal styling specialists who understand how to translate your vision into the perfect ensemble for any occasion."
              },
              {
                title: "Heritage Keepers",
                description: "Craftspeople who preserve traditional techniques while embracing modern innovation in every piece we offer."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gold-primary/10 border border-gold-primary/30 mx-auto mb-6 flex items-center justify-center group-hover:bg-gold-primary transition-all duration-500">
                  <SparklesIcon className="w-10 h-10 text-gold-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-4">{item.title}</h3>
                <p className="font-sans text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gold-primary to-gold-dark text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
            Experience Our <span className="italic">Legacy</span>
          </h2>
          <p className="font-sans text-xl text-gold-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Visit our atelier to experience the artistry and dedication that has defined 
            Aarti Fashion House for over two decades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-primary font-sans font-medium hover:bg-pearl transition-colors duration-300"
            >
              Visit Our Atelier
            </Link>
            <button 
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-sans font-medium hover:bg-white hover:text-gold-primary transition-all duration-300"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
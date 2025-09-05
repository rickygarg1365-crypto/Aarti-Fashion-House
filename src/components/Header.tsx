'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Collections', href: '/fabrics' },
  { name: 'Ready-to-Wear', href: '/suits' },
  { name: 'Atelier', href: '/brands' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Heritage', href: '/about' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = "Hello! I would like to schedule a private consultation.";
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-pearl/80 backdrop-blur-xl border-b border-gold-primary/20">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-6" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Aarti Fashion House</span>
              <div className="font-display text-2xl text-charcoal tracking-tight">
                Aarti<span className="text-gold-primary">.</span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-none p-2.5 text-charcoal hover:text-gold-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-sans font-medium text-slate hover:text-gold-primary transition-colors duration-300 tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={handleWhatsApp}
              className="text-sm font-sans font-medium bg-gold-primary text-white px-6 py-3 hover:bg-gold-dark transition-all duration-300 tracking-wide"
            >
              Consultation
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-pearl shadow-2xl overflow-y-auto">
              <div className="px-6 py-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                    <span className="sr-only">Aarti Fashion House</span>
                    <div className="font-display text-xl text-charcoal tracking-tight">
                      Aarti<span className="text-gold-primary">.</span>
                    </div>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-none p-2.5 text-charcoal hover:text-gold-primary transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                
                <div className="mt-12 flow-root">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-4 text-lg font-sans font-medium text-charcoal hover:text-gold-primary border-b border-gold-primary/10 transition-colors duration-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gold-primary/20">
                    <button
                      onClick={() => {
                        handleWhatsApp();
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-center bg-gold-primary text-white px-6 py-4 font-sans font-medium hover:bg-gold-dark transition-colors duration-300 tracking-wide"
                    >
                      Schedule Consultation
                    </button>
                    
                    <div className="mt-6 text-center">
                      <div className="text-sm font-sans text-slate mb-2">Available</div>
                      <div className="text-xs font-sans text-slate-light">Mon-Sat, 10AM-8PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
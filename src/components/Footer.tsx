'use client';

import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const footerNavigation = {
  collections: [
    { name: 'Premium Fabrics', href: '/fabrics' },
    { name: 'Ready-to-Wear', href: '/suits' },
    { name: 'Brand Partners', href: '/brands' },
    { name: 'Gallery', href: '/gallery' },
  ],
  company: [
    { name: 'Our Heritage', href: '/about' },
    { name: 'Client Stories', href: '/testimonials' },
    { name: 'Visit Atelier', href: '/contact' },
    { name: 'Private Consultation', href: '/contact' },
  ],
  experience: [
    { name: 'Bespoke Service', href: '/contact' },
    { name: 'Styling Consultation', href: '/contact' },
    { name: 'Fabric Selection', href: '/fabrics' },
    { name: 'Fit Guarantee', href: '/about' },
  ],
};

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/aartifashionhouse',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297C4.246 14.814 3.756 13.663 3.756 12.366s.49-2.448 1.367-3.326c.878-.878 2.029-1.367 3.326-1.367s2.448.49 3.326 1.367c.878.878 1.367 2.029 1.367 3.326s-.49 2.448-1.367 3.326c-.878.878-2.029 1.367-3.326 1.367zm7.718 0c-1.297 0-2.448-.49-3.326-1.297-.878-.878-1.367-2.029-1.367-3.326s.49-2.448 1.367-3.326c.878-.878 2.029-1.367 3.326-1.367s2.448.49 3.326 1.367c.878.878 1.367 2.029 1.367 3.326s-.49 2.448-1.367 3.326c-.878.878-2.029 1.367-3.326 1.367z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/aartifashionhouse',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.687"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const message = "Hello! I would like to learn more about your services.";
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-charcoal text-pearl" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="font-display text-2xl text-pearl tracking-tight">
              Aarti<span className="text-gold-primary">.</span>
            </div>
            <p className="text-base leading-7 text-slate-light font-sans max-w-md">
              Where elegance meets tradition. Experience our curated collection of premium fabrics 
              and bespoke ready-to-wear pieces at Punjab&apos;s most distinguished fashion atelier.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-gold-primary mt-1 flex-shrink-0" />
                <div className="text-sm font-sans">
                  <div className="text-pearl font-medium">Atelier Location</div>
                  <div className="text-slate-light">Shop No. 15-16, Grand Trunk Road</div>
                  <div className="text-slate-light">Civil Lines, Ludhiana, Punjab</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-gold-primary flex-shrink-0" />
                <div className="text-sm font-sans">
                  <div className="text-pearl font-medium">+91 9876543210</div>
                  <div className="text-slate-light">Available for consultations</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-gold-primary flex-shrink-0" />
                <div className="text-sm font-sans">
                  <div className="text-pearl font-medium">atelier@aartifashion.com</div>
                  <div className="text-slate-light">We respond within 2 hours</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 text-gold-primary mt-1 flex-shrink-0" />
                <div className="text-sm font-sans">
                  <div className="text-pearl font-medium">Atelier Hours</div>
                  <div className="text-slate-light">Mon-Sat: 10:00 AM - 8:00 PM</div>
                  <div className="text-slate-light">Sunday: 11:00 AM - 7:00 PM</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-gold-primary transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-display font-medium leading-6 text-pearl mb-6">Collections</h3>
                <ul role="list" className="space-y-4">
                  {footerNavigation.collections.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm font-sans leading-6 text-slate-light hover:text-gold-primary transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-display font-medium leading-6 text-pearl mb-6">Company</h3>
                <ul role="list" className="space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm font-sans leading-6 text-slate-light hover:text-gold-primary transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-base font-display font-medium leading-6 text-pearl mb-6">Experience</h3>
                <ul role="list" className="space-y-4 mb-8">
                  {footerNavigation.experience.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm font-sans leading-6 text-slate-light hover:text-gold-primary transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                {/* CTA in Footer */}
                <div className="mt-8 p-6 border border-gold-primary/20 bg-gold-primary/5">
                  <h4 className="text-base font-display font-medium text-pearl mb-3">
                    Schedule a Private Consultation
                  </h4>
                  <p className="text-sm font-sans text-slate-light mb-4">
                    Experience our collection in the intimate setting of our atelier.
                  </p>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-gold-primary text-white px-4 py-3 text-sm font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gold-primary/20 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs font-sans leading-5 text-slate-light">
              &copy; {currentYear} Aarti Fashion House. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-xs font-sans text-slate-light">
              <Link href="/privacy" className="hover:text-gold-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/returns" className="hover:text-gold-primary transition-colors duration-300">
                Return Policy
              </Link>
            </div>
          </div>
          
          <div className="mt-6 text-center space-y-3">
            <p className="text-xs font-serif italic text-slate-light">
              Crafted with passion in Punjab • Where tradition meets contemporary elegance
            </p>
            <p className="text-xs font-sans text-slate-light">
              Designed by{' '}
              <a 
                href="https://ricky-code.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-primary hover:text-gold-light transition-colors duration-300 font-medium"
              >
                Ricky & Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
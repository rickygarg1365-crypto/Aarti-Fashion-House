'use client';

import Link from 'next/link';
import { PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface CTAProps {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryButton?: {
    text: string;
    href: string;
    external?: boolean;
  };
  showWhatsApp?: boolean;
  showPhone?: boolean;
  background?: 'white' | 'gray' | 'red';
}

export default function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  showWhatsApp = true,
  showPhone = false,
  background = 'red',
}: CTAProps) {
  const backgroundClasses = {
    white: 'bg-white text-gray-900',
    gray: 'bg-gray-50 text-gray-900',
    red: 'bg-red-primary text-white',
  };

  const buttonClasses = {
    primary: background === 'red' 
      ? 'bg-white text-red-primary hover:bg-gray-100' 
      : 'bg-red-primary text-white hover:bg-red-hover',
    secondary: background === 'red'
      ? 'border-white text-white hover:bg-white hover:text-red-primary'
      : 'border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in your products and would like to know more.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+919876543210', '_self');
  };

  return (
    <div className={`${backgroundClasses[background]} py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-display">
            {title}
          </h2>
          <p className={`mt-6 text-lg leading-8 ${
            background === 'red' ? 'text-red-100' : 'text-gray-600'
          }`}>
            {description}
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
            {/* Primary button */}
            {primaryButton && (
              primaryButton.external ? (
                <a
                  href={primaryButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-md px-6 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 ${buttonClasses.primary}`}
                >
                  {primaryButton.text}
                </a>
              ) : (
                <Link
                  href={primaryButton.href}
                  className={`rounded-md px-6 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 ${buttonClasses.primary}`}
                >
                  {primaryButton.text}
                </Link>
              )
            )}

            {/* Secondary button */}
            {secondaryButton && (
              secondaryButton.external ? (
                <a
                  href={secondaryButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-md border px-6 py-3 text-sm font-semibold transition-colors duration-200 ${buttonClasses.secondary}`}
                >
                  {secondaryButton.text}
                </a>
              ) : (
                <Link
                  href={secondaryButton.href}
                  className={`rounded-md border px-6 py-3 text-sm font-semibold transition-colors duration-200 ${buttonClasses.secondary}`}
                >
                  {secondaryButton.text}
                </Link>
              )
            )}

            {/* WhatsApp button */}
            {showWhatsApp && (
              <button
                onClick={handleWhatsAppClick}
                className={`inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200 ${
                  background === 'red'
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                WhatsApp Us
              </button>
            )}

            {/* Phone button */}
            {showPhone && (
              <button
                onClick={handlePhoneClick}
                className={`inline-flex items-center rounded-md border px-6 py-3 text-sm font-semibold transition-colors duration-200 ${buttonClasses.secondary}`}
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Now
              </button>
            )}
          </div>

          {/* Additional contact info */}
          {(showWhatsApp || showPhone) && (
            <div className="mt-8 text-sm">
              <p className={background === 'red' ? 'text-red-100' : 'text-gray-500'}>
                Available: Mon-Fri 10AM-8PM, Sat 10AM-9PM, Sun 11AM-7PM
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

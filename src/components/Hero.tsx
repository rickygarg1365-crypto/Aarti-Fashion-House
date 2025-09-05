import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  image,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroProps) {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt=""
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={ctaLink}
              className="rounded-md bg-red-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-primary transition-colors duration-200"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="inline-flex items-center text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors duration-200"
              >
                {secondaryCtaText}
                <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-red-primary to-red-hover opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}

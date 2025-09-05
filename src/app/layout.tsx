import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aarti Fashion House - Premium Fabrics & Ready-to-Wear Suits in Punjab",
    template: "%s | Aarti Fashion House"
  },
  description: "Discover premium fabrics and ready-to-wear suits at Aarti Fashion House in Punjab. We offer exquisite collections from top brands with no in-house tailoring. Visit our showroom for luxury fashion and traditional craftsmanship.",
  keywords: [
    "fashion house Punjab",
    "premium fabrics",
    "ready-to-wear suits",
    "luxury clothing",
    "traditional wear",
    "designer fabrics",
    "Ludhiana fashion",
    "wedding suits",
    "formal wear",
    "Indian textiles"
  ],
  authors: [{ name: "Aarti Fashion House" }],
  creator: "Aarti Fashion House",
  publisher: "Aarti Fashion House",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aartifashionhouse.com",
    title: "Aarti Fashion House - Premium Fabrics & Ready-to-Wear Suits",
    description: "Discover premium fabrics and ready-to-wear suits at Aarti Fashion House in Punjab. Visit our showroom for luxury fashion and traditional craftsmanship.",
    siteName: "Aarti Fashion House",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aarti Fashion House - Premium Fashion Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarti Fashion House - Premium Fabrics & Ready-to-Wear Suits",
    description: "Discover premium fabrics and ready-to-wear suits at Aarti Fashion House in Punjab.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://aartifashionhouse.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Modern Premium Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" 
          rel="stylesheet" 
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "Aarti Fashion House",
              "description": "Premium retail showroom offering exquisite fabrics and ready-to-wear suits in Punjab.",
              "url": "https://aartifashionhouse.com",
              "telephone": "+91-9876543210",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No. 15-16, Grand Trunk Road, Civil Lines",
                "addressLocality": "Ludhiana",
                "addressRegion": "Punjab",
                "postalCode": "141001",
                "addressCountry": "IN"
              },
              "openingHours": [
                "Mo-Fr 10:00-20:00",
                "Sa 10:00-21:00",
                "Su 11:00-19:00"
              ],
              "priceRange": "$$-$$$",
              "image": "https://aartifashionhouse.com/images/showroom.jpg"
            })
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
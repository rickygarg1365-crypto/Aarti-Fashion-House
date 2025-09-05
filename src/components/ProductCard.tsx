'use client';

import Link from 'next/link';
import { ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price?: number;
  image: string;
  colors: string[];
  inStock: boolean;
  category: string;
  type: 'fabric' | 'suit';
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  colors,
  inStock,
  category,
  type,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in the ${name} (ID: ${id}). Can you provide more details?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const placeholderImage = type === 'fabric' 
    ? 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=300&fit=crop'
    : 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop';

  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        <img
          src={imageError ? placeholderImage : image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
        />
        
        {/* Stock badge */}
        <div className="absolute top-2 left-2">
          <span
            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
              inStock
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Favorite button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
        >
          {isFavorite ? (
            <HeartSolidIcon className="h-4 w-4 text-red-primary" />
          ) : (
            <HeartIcon className="h-4 w-4 text-gray-600" />
          )}
        </button>

        {/* Category badge */}
        <div className="absolute bottom-2 left-2">
          <span className="inline-flex items-center rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mt-1">
            {description}
          </p>
        </div>

        {/* Colors */}
        {colors.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-gray-500 mb-1">Available colors:</p>
            <div className="flex flex-wrap gap-1">
              {colors.slice(0, 4).map((color, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                >
                  {color}
                </span>
              ))}
              {colors.length > 4 && (
                <span className="text-xs text-gray-500">+{colors.length - 4} more</span>
              )}
            </div>
          </div>
        )}

        {/* Price */}
        {price && (
          <div className="mb-3">
            <span className="text-lg font-bold text-gray-900">
              ₹{price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              {type === 'fabric' ? 'per meter' : 'per piece'}
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-2">
          <button
            onClick={handleWhatsAppClick}
            disabled={!inStock}
            className={`flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
              inStock
                ? 'bg-green-600 text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ChatBubbleLeftRightIcon className="h-4 w-4 mr-1" />
            {inStock ? 'WhatsApp' : 'Out of Stock'}
          </button>
          <Link
            href={`/${type}s/${id}`}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-primary transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

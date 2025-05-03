"use client";

import { useState } from 'react';
import Image from 'next/image';

// Define image data with categories
const galleryImages = [
  {
    id: 1,
    src: '/bmw2.jpg',
    alt: 'BMW 3 Series',
    category: 'sedan',
    title: 'BMW 3 Series',
    description: 'The iconic sports sedan that combines dynamic performance with everyday usability.'
  },
  {
    id: 2,
    src: '/bmw3.jpg',
    alt: 'BMW X5',
    category: 'suv',
    title: 'BMW X5',
    description: 'The versatile Sports Activity Vehicle that combines luxury, capability, and innovation.'
  },
  {
    id: 3,
    src: '/bmw4.webp',
    alt: 'BMW 8 Series',
    category: 'coupe',
    title: 'BMW 8 Series',
    description: 'The luxurious grand tourer that delivers exhilarating performance and sophisticated style.'
  },
  {
    id: 4,
    src: '/bmw5.webp',
    alt: 'BMW i4',
    category: 'electric',
    title: 'BMW i4',
    description: 'The all-electric Gran Coupé that delivers exhilarating performance with zero emissions.'
  },
  // Duplicate images to create a larger gallery
  {
    id: 5,
    src: '/bmw2.jpg',
    alt: 'BMW M3',
    category: 'performance',
    title: 'BMW M3',
    description: 'The high-performance version of the 3 Series, offering track-ready capabilities.'
  },
  {
    id: 6,
    src: '/bmw3.jpg',
    alt: 'BMW X5 M',
    category: 'performance',
    title: 'BMW X5 M',
    description: 'The high-performance version of the X5, combining SUV practicality with M power.'
  },
  {
    id: 7,
    src: '/bmw4.webp',
    alt: 'BMW M8',
    category: 'performance',
    title: 'BMW M8',
    description: 'The pinnacle of BMW performance, combining luxury and track-focused engineering.'
  },
  {
    id: 8,
    src: '/bmw5.webp',
    alt: 'BMW i4 M50',
    category: 'electric',
    title: 'BMW i4 M50',
    description: 'The performance-oriented electric vehicle that delivers instant torque and thrilling dynamics.'
  }
];

// Define category options
const categories = [
  { value: 'all', label: 'All Models' },
  { value: 'sedan', label: 'Sedans' },
  { value: 'suv', label: 'SUVs' },
  { value: 'coupe', label: 'Coupes' },
  { value: 'electric', label: 'Electric' },
  { value: 'performance', label: 'M Performance' }
];

export default function Gallery() {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('all');
  // State for selected image (for modal view)
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Handle image click for modal view
  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-16 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-3xl md:text-4xl font-bold mb-12 text-center">
          BMW Gallery
        </h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.value
                  ? 'bg-primary text-white'
                  : 'bg-bmw-light-gray text-bmw-dark-gray hover:bg-bmw-gray hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item card cursor-pointer"
              onClick={() => handleImageClick(image.id)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                <p className="text-sm text-bmw-gray">{image.category.charAt(0).toUpperCase() + image.category.slice(1)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-bmw-gray">No images found for this category.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="bmw-btn mt-4"
            >
              View All Images
            </button>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl w-full bg-white" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Modal Content */}
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative h-64 md:h-auto md:w-2/3">
                  <Image
                    src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                    alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                </div>
                
                {/* Details */}
                <div className="p-6 md:w-1/3">
                  <h3 className="text-2xl font-bold mb-2">
                    {galleryImages.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <p className="text-bmw-blue font-semibold mb-4">
                    {galleryImages.find(img => img.id === selectedImage)?.category.charAt(0).toUpperCase() + 
                     galleryImages.find(img => img.id === selectedImage)?.category.slice(1)}
                  </p>
                  <p className="text-bmw-gray">
                    {galleryImages.find(img => img.id === selectedImage)?.description}
                  </p>
                  <a 
                    href="https://www.bmw.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bmw-btn mt-6 inline-block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';

interface ImageDetails {
  title?: string;
  category?: string;
  description?: string;
}

interface ImageDisplayProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  className?: string;
  onClick?: () => void;
  enableModal?: boolean;
  details?: ImageDetails;
  actionText?: string;
  actionHref?: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio = '4/3',
  className = '',
  onClick,
  enableModal = false,
  details,
  actionText,
  actionHref,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    if (onClick) {
      onClick();
    } else if (enableModal) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        className={`relative overflow-hidden ${className}`}
        style={{ 
          aspectRatio: aspectRatio,
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onClick={handleImageClick}
        />
        
        {details?.title && !enableModal && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="font-bold">{details.title}</h3>
            {details.category && (
              <p className="text-sm opacity-80">{details.category}</p>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {enableModal && isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full bg-white"
            onClick={(e) => e.stopPropagation()}
          >
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
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              
              {/* Details */}
              {details && (
                <div className="p-6 md:w-1/3">
                  <h3 className="text-2xl font-bold mb-2">
                    {details.title}
                  </h3>
                  {details.category && (
                    <p className="text-bmw-blue font-semibold mb-4">
                      {details.category}
                    </p>
                  )}
                  {details.description && (
                    <p className="text-bmw-gray mb-6">
                      {details.description}
                    </p>
                  )}
                  {actionText && actionHref && (
                    <Button 
                      href={actionHref}
                      variant="primary"
                    >
                      {actionText}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageDisplay;

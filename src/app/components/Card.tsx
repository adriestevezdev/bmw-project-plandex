import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  price?: string;
  actionText?: string;
  actionHref?: string;
  actionOnClick?: () => void;
  secondaryActionText?: string;
  secondaryActionHref?: string;
  secondaryActionOnClick?: () => void;
  className?: string;
  imageHeight?: number;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = 'Card image',
  price,
  actionText,
  actionHref,
  actionOnClick,
  secondaryActionText,
  secondaryActionHref,
  secondaryActionOnClick,
  className = '',
  imageHeight = 240,
  children,
}) => {
  return (
    <div className={`card overflow-hidden bg-white shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      {/* Card Image */}
      {imageSrc && (
        <div className={`relative w-full`} style={{ height: `${imageHeight}px` }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        {description && (
          <p className="text-bmw-gray mb-4">{description}</p>
        )}
        
        {price && (
          <p className="text-bmw-blue font-semibold mb-4">{price}</p>
        )}
        
        {/* Custom content */}
        {children}
        
        {/* Card Actions */}
        {(actionText || secondaryActionText) && (
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            {actionText && (
              actionHref ? (
                <Button 
                  href={actionHref} 
                  variant="primary"
                >
                  {actionText}
                </Button>
              ) : (
                <Button 
                  onClick={actionOnClick} 
                  variant="primary"
                >
                  {actionText}
                </Button>
              )
            )}
            
            {secondaryActionText && (
              secondaryActionHref ? (
                <Button 
                  href={secondaryActionHref} 
                  variant="secondary"
                >
                  {secondaryActionText}
                </Button>
              ) : (
                <Button 
                  onClick={secondaryActionOnClick} 
                  variant="secondary"
                >
                  {secondaryActionText}
                </Button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

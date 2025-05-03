import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'white' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  external = false,
  fullWidth = false,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ariaLabel,
}) => {
  // Base classes that apply to all button variants
  const baseClasses = 'inline-block font-semibold transition-all duration-300 text-center focus:outline-none';
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2',
    large: 'px-6 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-bmw-blue text-white hover:bg-bmw-light-blue active:bg-bmw-dark-blue',
    secondary: 'bg-transparent border-2 border-bmw-blue text-bmw-blue hover:bg-bmw-blue hover:text-white',
    white: 'bg-white text-bmw-blue hover:bg-bmw-light-gray',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-bmw-blue',
  };
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${disabledClasses} ${className}`;
  
  // If href is provided, render as a link
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }
  
  // Otherwise, render as a button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;

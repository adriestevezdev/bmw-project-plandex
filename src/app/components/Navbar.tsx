"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bmw-dark-gray shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* BMW Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 mr-2">
              {/* BMW logo - using a simple SVG representation */}
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle cx="50" cy="50" r="48" fill="white" stroke="#0066B1" strokeWidth="4" />
                <path d="M50 2 L50 98" stroke="#0066B1" strokeWidth="2" />
                <path d="M2 50 L98 50" stroke="#0066B1" strokeWidth="2" />
                <path d="M50 50 L2 2" stroke="#0066B1" strokeWidth="0.5" />
                <path d="M50 50 L98 2" stroke="#0066B1" strokeWidth="0.5" />
                <path d="M50 50 L2 98" stroke="#0066B1" strokeWidth="0.5" />
                <path d="M50 50 L98 98" stroke="#0066B1" strokeWidth="0.5" />
                <path d="M25 25 A25 25 0 0 1 25 75 A25 25 0 0 1 75 75 A25 25 0 0 1 75 25 A25 25 0 0 1 25 25" fill="#0066B1" />
              </svg>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-white' : 'text-bmw-dark-gray'}`}>BMW Fan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`nav-link ${isScrolled ? 'text-white' : 'text-bmw-dark-gray'} hover:text-bmw-blue transition-colors`}>
              Home
            </Link>
            <Link href="/models" className={`nav-link ${isScrolled ? 'text-white' : 'text-bmw-dark-gray'} hover:text-bmw-blue transition-colors`}>
              Models
            </Link>
            <Link href="/gallery" className={`nav-link ${isScrolled ? 'text-white' : 'text-bmw-dark-gray'} hover:text-bmw-blue transition-colors`}>
              Gallery
            </Link>
            <Link href="/about" className={`nav-link ${isScrolled ? 'text-white' : 'text-bmw-dark-gray'} hover:text-bmw-blue transition-colors`}>
              History
            </Link>
            <a 
              href="https://www.bmw.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bmw-btn"
            >
              Official Site
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden menu-button flex items-center" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-bmw-dark-gray'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="block py-2 text-bmw-dark-gray hover:text-bmw-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/models" 
              className="block py-2 text-bmw-dark-gray hover:text-bmw-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Models
            </Link>
            <Link 
              href="/gallery" 
              className="block py-2 text-bmw-dark-gray hover:text-bmw-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-bmw-dark-gray hover:text-bmw-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              History
            </Link>
            <a 
              href="https://www.bmw.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bmw-btn inline-block w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Official Site
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add active opacity to the navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Lock body scroll when mobile menu is active
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    document.body.style.overflow = '';
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-brand-black/90 backdrop-blur-md border-b border-brand-gold/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex flex-col items-start focus:outline-none group text-left cursor-pointer"
          >
            <span className="font-logo text-2xl md:text-3xl text-brand-gold font-medium tracking-wide transition-colors duration-300 group-hover:text-brand-gold-light">
              Resin-home Serena
            </span>
            <span className="text-[10px] font-sans-lato uppercase tracking-[0.25em] text-[#faf8f4]/60 -mt-1 group-hover:text-[#faf8f4]/90 transition-colors duration-300">
              Creazioni Artigianali
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleLinkClick('chi-sono')}
              className="font-sans-lato text-sm font-medium tracking-wider text-[#faf8f4]/80 hover:text-brand-gold transition-colors duration-350 cursor-pointer"
            >
              Chi Sono
            </button>
            <button
              onClick={() => handleLinkClick('galleria')}
              className="font-sans-lato text-sm font-medium tracking-wider text-[#faf8f4]/80 hover:text-brand-gold transition-colors duration-350 cursor-pointer"
            >
              Galleria
            </button>
            <button
              onClick={() => handleLinkClick('personalizza')}
              className="font-sans-lato text-sm font-medium tracking-wider text-[#faf8f4]/80 hover:text-brand-gold transition-colors duration-350 cursor-pointer"
            >
              Personalizza
            </button>
            <button
              onClick={() => handleLinkClick('mercatini')}
              className="font-sans-lato text-sm font-medium tracking-wider text-[#faf8f4]/80 hover:text-brand-gold transition-colors duration-350 cursor-pointer"
            >
              Dove Trovarmi
            </button>
            <button
              onClick={() => handleLinkClick('contatti')}
              className="font-sans-lato text-sm font-medium tracking-wider text-[#faf8f4]/80 hover:text-brand-gold transition-colors duration-350 cursor-pointer"
            >
              Contatti
            </button>
          </div>

          {/* Desktop Social/Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://instagram.com/resin_home_serena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 text-brand-gold hover:text-brand-gold-light hover:scale-110 transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/393202348856"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-brand-gold hover:text-brand-gold-light hover:scale-110 transition-all duration-300"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          {/* Mobile Hamburguer Action */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              aria-label="Menu"
              className="p-2 text-brand-gold hover:text-brand-gold-light focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-black transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center text-2xl font-serif-display">
          <button
            onClick={() => handleLinkClick('chi-sono')}
            className="text-brand-cream hover:text-brand-gold transition-colors duration-300 font-heading tracking-wide"
          >
            Chi Sono
          </button>
          <button
            onClick={() => handleLinkClick('galleria')}
            className="text-brand-cream hover:text-brand-gold transition-colors duration-300 font-heading tracking-wide"
          >
            Galleria
          </button>
          <button
            onClick={() => handleLinkClick('personalizza')}
            className="text-brand-cream hover:text-brand-gold transition-colors duration-300 font-heading tracking-wide"
          >
            Personalizza
          </button>
          <button
            onClick={() => handleLinkClick('mercatini')}
            className="text-brand-cream hover:text-brand-gold transition-colors duration-300 font-heading tracking-wide"
          >
            Dove Trovarmi
          </button>
          <button
            onClick={() => handleLinkClick('contatti')}
            className="text-brand-cream hover:text-brand-gold transition-colors duration-300 font-heading tracking-wide"
          >
            Contatti
          </button>
        </div>

        {/* Mobile Socials */}
        <div className="flex space-x-8 mt-16">
          <a
            href="https://instagram.com/resin_home_serena"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-brand-gold hover:text-brand-gold-light text-sm tracking-wider font-sans-lato"
          >
            <Instagram size={24} />
            <span>Instagram</span>
          </a>
          <a
            href="https://wa.me/393202348856"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-brand-gold hover:text-brand-gold-light text-sm tracking-wider font-sans-lato"
          >
            <MessageCircle size={24} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}

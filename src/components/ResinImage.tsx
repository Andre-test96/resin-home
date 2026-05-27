/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Category } from '../types';

interface ResinImageProps {
  src: string;
  alt: string;
  category: Category;
  className?: string;
  isLarge?: boolean;
}

export default function ResinImage({ src, alt, category, className = '', isLarge = false }: ResinImageProps) {
  const [hasError, setHasError] = useState(false);

  // Custom visual SVG fallbacks based on product category reflecting the luxury "Grosso Canavese" branding
  const renderFallback = () => {
    switch (category) {
      case 'Gioielli':
        return (
          <svg className="w-full h-full text-[#c8a951]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f3d22" />
                <stop offset="60%" stopColor="#1a6b3a" />
                <stop offset="100%" stopColor="#2d9e58" />
              </linearGradient>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c8a951" />
                <stop offset="50%" stopColor="#faf8f4" />
                <stop offset="100%" stopColor="#e8c97a" />
              </linearGradient>
            </defs>
            {/* Background texture */}
            <rect width="100%" height="100%" fill="url(#emeraldGrad)" />
            {/* Marbling effect */}
            <path d="M-10 150 C 40 120, 80 180, 130 140 C 180 100, 150 40, 210 20" stroke="#c8a951" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M-10 80 C 60 110, 110 50, 210 90" stroke="#e8c97a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            
            {/* Jewelry pendant shape */}
            <g transform="translate(100, 100)" className="gold-glow">
              {/* Chain */}
              <line x1="0" y1="-100" x2="0" y2="-40" stroke="url(#goldGrad)" strokeWidth="3" />
              <circle cx="0" cy="-40" r="6" fill="none" stroke="url(#goldGrad)" strokeWidth="2" />
              {/* Ciondolo resin finish */}
              <path d="M 0 -30 L 25 10 L 0 50 L -25 10 Z" fill="url(#emeraldGrad)" stroke="url(#goldGrad)" strokeWidth="3" />
              {/* Gold inclusions */}
              <circle cx="-5" cy="15" r="4" fill="url(#goldGrad)" />
              <circle cx="8" cy="-5" r="3" fill="#faf8f4" opacity="0.8" />
              <path d="M -10 5 L 8 25" stroke="url(#goldGrad)" strokeWidth="1.5" />
            </g>
          </svg>
        );

      case 'Home Decor':
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="seaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a2c18" />
                <stop offset="35%" stopColor="#12502b" />
                <stop offset="70%" stopColor="#22854b" />
                <stop offset="100%" stopColor="#4ad485" />
              </linearGradient>
              <linearGradient id="sandGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c8a951" />
                <stop offset="100%" stopColor="#e8c97a" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#seaGrad)" />
            {/* Marble veins */}
            <path d="M0 60 C50 30, 80 120, 200 20" stroke="#e8c97a" strokeWidth="2" opacity="0.75" />
            <path d="M0 120 C70 160, 120 70, 200 130" stroke="#faf8f4" strokeWidth="1.5" opacity="0.5" />
            {/* Floating golden leaves */}
            <circle cx="150" cy="50" r="5" fill="#e8c97a" />
            <circle cx="40" cy="140" r="3" fill="#e8c97a" />
            <polygon points="120,150 125,145 128,152" fill="url(#sandGrad)" />
            <polygon points="70,40 78,38 72,46" fill="url(#sandGrad)" />
            {/* Glass glint */}
            <rect x="0" y="0" width="200" height="200" fill="white" opacity="0.05" transform="rotate(-30 100 100)" />
          </svg>
        );

      case 'Accessori':
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="accGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d0d0d" />
                <stop offset="50%" stopColor="#12502b" />
                <stop offset="100%" stopColor="#1a6b3a" />
              </linearGradient>
              <linearGradient id="luxuryGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c8a951" />
                <stop offset="50%" stopColor="#faf8f4" />
                <stop offset="100%" stopColor="#e8c97a" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#accGrad)" />
            
            {/* Resin Keyring / Bookmark shape in the center */}
            <g transform="translate(100, 100)" className="gold-glow">
              {/* Bookmark shape */}
              <rect x="-25" y="-60" width="50" height="120" rx="8" fill="#1a6b3a" stroke="url(#luxuryGold)" strokeWidth="2" opacity="0.9" />
              {/* Decorative tassel */}
              <circle cx="0" cy="-68" r="4" fill="url(#luxuryGold)" />
              <path d="M 0 -64 L 0 -85 C -15 -90, -10 -105, 0 -100" stroke="url(#luxuryGold)" strokeWidth="1.5" />
              {/* Preserved gold botany inside resin */}
              <path d="M -10 30 Q 0 0 -5 -30" stroke="url(#luxuryGold)" strokeWidth="2.5" fill="none" />
              <path d="M -5 -15 Q 10 -25 5 -30" stroke="url(#luxuryGold)" strokeWidth="1.5" fill="none" />
              <path d="M -5 -5 Q -20 -10 -15 -20" stroke="url(#luxuryGold)" strokeWidth="1.5" fill="none" />
              <path d="M -2 15 Q 12 5 10 -5" stroke="url(#luxuryGold)" strokeWidth="1.5" fill="none" />
              {/* Gold specks */}
              <circle cx="10" cy="40" r="3" fill="#e8c97a" />
              <circle cx="-12" cy="-40" r="2.5" fill="#faf8f4" />
            </g>
          </svg>
        );

      case 'Orologi':
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="clockBg" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#1a6b3a" />
                <stop offset="60%" stopColor="#0f3d22" />
                <stop offset="100%" stopColor="#0d0d0d" />
              </radialGradient>
              <linearGradient id="goldH" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e8c97a" />
                <stop offset="100%" stopColor="#c8a951" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#0d0d0d" />
            
            {/* Outer golden rim */}
            <circle cx="100" cy="100" r="85" stroke="url(#goldH)" strokeWidth="2" />
            {/* Clock body */}
            <circle cx="100" cy="100" r="82" fill="url(#clockBg)" />
            
            {/* Marbling lines */}
            <path d="M30 60 Q 90 40, 130 140 Q 150 180, 180 160" stroke="#c8a951" strokeWidth="2" opacity="0.5" />
            <path d="M30 130 Q 110 100, 160 50" stroke="#faf8f4" strokeWidth="1" opacity="0.3" />
            
            {/* Golden flakes */}
            <circle cx="70" cy="70" r="4" fill="#e8c97a" />
            <circle cx="140" cy="120" r="3.5" fill="#e8c97a" />
            
            {/* Minimalist Clock ticks */}
            <line x1="100" y1="24" x2="100" y2="30" stroke="url(#goldH)" strokeWidth="2.5" />
            <line x1="100" y1="170" x2="100" y2="176" stroke="url(#goldH)" strokeWidth="2.5" />
            <line x1="24" y1="100" x2="30" y2="100" stroke="url(#goldH)" strokeWidth="2.5" />
            <line x1="170" y1="100" x2="176" y2="100" stroke="url(#goldH)" strokeWidth="2.5" />
            
            {/* clock hands */}
            <circle cx="100" cy="100" r="3" fill="url(#goldH)" />
            {/* Hour hand */}
            <line x1="100" y1="100" x2="100" y2="70" stroke="url(#goldH)" strokeWidth="2" strokeLinecap="round" />
            {/* Minute hand */}
            <line x1="100" y1="100" x2="135" y2="100" stroke="url(#goldH)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );

      default:
        return (
          <div className="w-full h-full bg-[#0f3d22] flex items-center justify-center">
            <span className="text-brand-gold font-serif text-lg">Resin-home Serena</span>
          </div>
        );
    }
  };

  if (hasError) {
    return (
      <div className={`relative overflow-hidden w-full h-full ${className}`}>
        {renderFallback()}
        {/* Shiny overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>
    );
  }

  // If we have a local picture or online mockup URL, we try to load it
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
      />
      {/* Glossy overlay effect to make everything look like it has polished resin coating */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-60" />
    </div>
  );
}

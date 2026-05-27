/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ARTISAN_PRES, VALUE_CARDS } from '../data';

export default function ChiSono() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="chi-sono"
      className="relative py-24 bg-brand-cream text-brand-dark-green overflow-hidden scroll-mt-10"
    >
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-emerald/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-body font-semibold">
            L'Artigiana Dietro il Marchio
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-brand-dark-green font-medium">
            La Mia Storia
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Content Grid: Photo + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Profile Picture Frame (4 cols) */}
          <div className="lg:col-span-5 flex justify-center reveal">
            <div className="relative group">
              {/* Double luxury gold offset borders */}
              <div className="absolute inset-0 border border-brand-gold translate-x-3 translate-y-3 transition-transform duration-550 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
              <div className="absolute inset-0 border border-brand-dark-green/20 -translate-x-2 -translate-y-2 pointer-events-none" />
              
              <div className="relative w-[280px] h-[370px] sm:w-[320px] sm:h-[420px] bg-[#faf8f4] overflow-hidden shadow-lg border border-brand-gold/20">
                {imgError ? (
                  /* Custom artistic SVG fallback representing canavesian botanical epoxy artisan */
                  <svg className="w-full h-full text-brand-gold" viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#0f3d22" />
                    {/* Concentric resin rings */}
                    <circle cx="160" cy="180" r="110" stroke="#c8a951" strokeWidth="2" opacity="0.3" />
                    <circle cx="160" cy="180" r="80" stroke="#c8a951" strokeWidth="1.5" opacity="0.25" />
                    
                    {/* Abstract silhouette representing Serena with dried wild flora outline */}
                    <path d="M160 110 C185 110, 205 130, 205 155 C205 180, 185 200, 160 200 C135 200, 115 180, 115 155 C115 130, 135 110, 160 110 Z" fill="#c8a951" opacity="0.4" />
                    <path d="M160 215 C110 215, 75 250, 75 300 L245 300 C245 250, 210 215, 160 215 Z" fill="#c8a951" opacity="0.4" />
                    <path d="M110 320 Q 160 280, 210 330" stroke="#e8c97a" strokeWidth="2.5" />
                    
                    {/* Text block within picture */}
                    <text x="50%" y="360" dominantBaseline="middle" textAnchor="middle" fill="#f5f0e8" fontFamily="Playfair Display" fontStyle="italic" fontSize="18">Serena</text>
                    <text x="50%" y="385" dominantBaseline="middle" textAnchor="middle" fill="#c8a951" fontFamily="Lato" letterSpacing="3" fontSize="10" fontWeight="bold">RESIN ARTIST</text>
                  </svg>
                ) : (
                  <img
                    src="./foto/profilo.jpg"
                    alt="Serena - Resin-home Serena"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                )}
                {/* Elegant overlay shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </div>

          {/* Biography Text & Presentation (7 cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-brand-dark-green reveal">
            <h3 className="font-heading text-2xl md:text-3xl font-medium italic text-brand-emerald text-left">
              "{ARTISAN_PRES.intro}"
            </h3>

            <div className="space-y-4 font-body text-base md:text-lg text-brand-dark-green/90 leading-relaxed text-left">
              <p>{ARTISAN_PRES.story}</p>
              <p>{ARTISAN_PRES.character}</p>
              <p>{ARTISAN_PRES.craft}</p>
            </div>

            {/* Framed Quote with Left Gold Border */}
            <div className="border-l-4 border-brand-gold pl-6 py-2 my-8 text-left bg-brand-gold/5 rounded-r-lg pr-4">
              <p className="font-heading text-lg md:text-xl font-medium italic text-brand-emerald">
                "{ARTISAN_PRES.quote}"
              </p>
            </div>
          </div>

        </div>

        {/* 3 Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {VALUE_CARDS.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#faf8f4] border border-brand-gold/15 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-brand-gold/40 flex flex-col items-start text-left reveal group"
            >
              <div className="text-4xl mb-4 p-3 bg-brand-cream rounded-full transition-transform duration-300 group-hover:scale-110">
                {val.icon}
              </div>
              <h4 className="font-heading text-xl font-semibold text-brand-dark-green mb-3">
                {val.title}
              </h4>
              <p className="font-body text-[#5a5040] leading-relaxed text-sm">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';

interface Particle {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate gold specs floating upwards
  useEffect(() => {
    const generated: Particle[] = [];
    for (let i = 0; i < 28; i++) {
      generated.push({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 2}px`,
        delay: `${Math.random() * -10}s`,
        duration: `${Math.random() * 8 + 6}s`,
      });
    }
    setParticles(generated);
  }, []);

  const handleScrollToGalleria = () => {
    const element = document.getElementById('galleria');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-brand-black bg-malachite-pattern flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden pt-20"
    >
      {/* Floating Gold Sparkle Canvas */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-tr from-brand-gold to-brand-gold-light opacity-0"
            style={{
              left: p.left,
              bottom: '-10px',
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
              animationName: 'floatUp',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              boxShadow: '0 0 6px rgba(232, 201, 122, 0.8)',
            }}
          />
        ))}
        {/* Subtle radial shine in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-emerald/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero content card */}
      <div className="relative z-20 max-w-4xl text-center space-y-6 md:space-y-8 select-none">
        {/* Top visual divider line */}
        <div className="flex items-center justify-center space-x-4 opacity-85">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-brand-gold" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-brand-gold-light/90 font-medium font-body select-none">
            Grosso Canavese • Torino
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-brand-gold" />
        </div>

        {/* Big Brand Logo with Cormorant Garamond */}
        <div className="space-y-3">
          <h1 className="font-logo text-6xl sm:text-7xl md:text-9xl text-brand-gold italic font-light drop-shadow-md tracking-normal select-none relative animate-fade-in">
            Resin-home Serena
          </h1>
          
          <div className="flex items-center justify-center mt-3">
            <div className="h-[1px] w-24 bg-brand-gold/30" />
            <p className="font-heading text-xl sm:text-2xl md:text-3xl text-brand-gold-light italic font-normal tracking-wide px-4 select-none">
              Creazioni in resina personalizzate
            </p>
            <div className="h-[1px] w-24 bg-brand-gold/30" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto font-body text-base md:text-lg text-brand-offwhite/85 leading-relaxed tracking-wide select-none">
          Ogni pezzo è unico, creato interamente a mano a pochi passi da Torino. 
          Sogni un colore specifico, un nastro fiorito o un ricordo da cristalizzare? 
          Lo realizziamo insieme.
        </p>

        {/* Action Call-to-actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-6">
          <button
            onClick={handleScrollToGalleria}
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-black font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] gold-glow-hover active:scale-[0.98] cursor-pointer"
          >
            Scopri la Galleria
          </button>
          
          <a
            href="https://wa.me/393202348856"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-brand-gold/50 hover:border-brand-gold-light text-brand-gold-light hover:text-[#faf8f4] hover:bg-brand-gold/10 font-medium text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageCircle size={18} />
            <span>Scrivimi su WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Decorative vertical gold thread with Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-3">
        <span className="text-[9px] uppercase tracking-[0.4em] text-brand-gold/60">Scorri</span>
        <button 
          onClick={handleScrollToGalleria}
          className="p-2 border border-brand-gold/20 rounded-full text-brand-gold/50 hover:text-brand-gold hover:border-brand-gold/70 transition-colors duration-300 animate-bounce cursor-pointer-all"
        >
          <ArrowDown size={14} />
        </button>
      </div>
    </section>
  );
}

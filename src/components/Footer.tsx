/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MessageCircle, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#0d0d0d] text-brand-offwhite pt-16 pb-8 border-t border-brand-gold/15 select-none overflow-hidden">
      
      {/* Glow highlight */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-brand-gold/5 rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-b border-brand-gold/10 pb-12 mb-8">
          
          {/* Logo description block (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <h3 className="font-logo text-3xl text-brand-gold italic">
              Resin-home Serena
            </h3>
            <p className="text-[11px] font-sans-lato uppercase tracking-[0.2em] -mt-2 text-brand-gold-light/75">
              Creazioni Artigianali
            </p>
            <p className="font-body text-xs text-[#faf8f4]/60 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Disegno e creo a mano oggetti unici in resina epossidica arricchiti da venature d'oro e dettagli floreali, trasformando memorie e idee in piccole perle eterne.
            </p>
          </div>

          {/* Social connections block (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-heading text-sm text-brand-gold font-bold tracking-wider uppercase">
              Rimani in Contatto
            </h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/resin_home_serena"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-gold/5 border border-brand-gold/15 text-brand-gold hover:text-brand-gold-light hover:bg-brand-gold/15 transition-all duration-300 rounded-full"
                aria-label="Instagram Link"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/393202348856"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-gold/5 border border-brand-gold/15 text-brand-gold hover:text-brand-gold-light hover:bg-brand-gold/15 transition-all duration-300 rounded-full"
                aria-label="WhatsApp Link"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <p className="font-body text-[10px] text-[#faf8f4]/50">
              Disponibile su Grosso Canavese (TO) per incontri e ordini diretti.
            </p>
          </div>

          {/* Scoll-to-top layout (3 cols) */}
          <div className="md:col-span-3 flex justify-center md:justify-end">
            <button
              onClick={handleScrollToTop}
              className="px-5 py-3 border border-brand-gold/30 hover:border-brand-gold text-brand-gold-light hover:text-[#faf8f4] text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>Torna Su</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom copyright alignment block */}
        <div className="flex flex-col md:flex-row items-center justify-between font-body text-[11px] text-[#faf8f4]/45 space-y-4 md:space-y-0 text-center">
          <div>
            <p>© {currentYear} Resin-home Serena. Tutti i diritti riservati.</p>
            <p className="mt-1 text-brand-gold-light/60 font-semibold italic text-xs tracking-wider">
              Creazioni artigianali in resina — Grosso Canavese, Torino
            </p>
          </div>
          <div className="flex items-center space-x-1.5">
            <span>Fatto a mano con</span>
            <Heart size={10} className="text-red-600 fill-red-600 inline hover:scale-125 transition-transform duration-300" />
            <span>a pochi passi da Torino</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function Mercatini() {
  return (
    <section
      id="mercatini"
      className="relative py-24 bg-brand-cream text-brand-dark-green scroll-mt-10 overflow-hidden"
    >
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[250px] h-[250px] bg-brand-gold/5 rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center space-y-3 mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-body font-semibold">
            Incontriamoci di persona
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-brand-dark-green font-medium">
            Dove Trovarmi
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Content Layout Grid */}
        <div className="max-w-4xl mx-auto bg-[#faf8f4] border border-brand-gold/15 p-8 md:p-12 shadow-md hover:border-brand-gold/30 transition-all duration-300 reveal">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            
            {/* Left Column Description (7 cols) */}
            <div className="md:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-emerald/10 text-brand-emerald px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase">
                <MapPin size={14} />
                <span>Torino • Grosso Canavese</span>
              </div>

              <h3 className="font-heading text-2xl md:text-3.5xl font-normal text-brand-dark-green italic">
                Mercatini ed Eventi Locali
              </h3>

              <p className="font-body text-[#5a5040] text-sm md:text-base leading-relaxed">
                Partecipo regolarmente a mercatini ed eventi locali dedicati all'artigianato artistico e all'handmade nella zona di Torino e in tutto il Canavese. Poter toccare con mano le mie creazioni e vederne le sfumature e i dettagli in controluce è un'esperienza speciale!
              </p>

              <div className="bg-brand-cream border border-brand-gold/20 p-4 rounded-none flex items-start space-x-3">
                <Calendar className="text-brand-gold shrink-0 mt-0.5" size={18} />
                <p className="font-body text-xs text-brand-dark-green/90 leading-tight">
                  <strong className="block text-brand-dark-green font-bold mb-0.5">Vuoi sapere quando e dove sarà il prossimo mercatino?</strong>
                  Seguimi su Instagram! Lì pubblico in tempo reale tutte le date aggiornate, le novità del laboratorio e i pezzi caldi appena sformati.
                </p>
              </div>
            </div>

            {/* Right Column Interactive Action Buttons (4 cols) */}
            <div className="md:col-span-4 flex flex-col space-y-4">
              <a
                href="https://instagram.com/resin_home_serena"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-brand-black hover:bg-brand-gold text-brand-gold hover:text-brand-black font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2.5 text-center cursor-pointer"
              >
                <Instagram size={16} />
                <span>Seguimi su Instagram</span>
              </a>

              <a
                href="https://wa.me/393202348856?text=Ciao+Serena%21+Ho+visto+il+sito+e+volevo+sapere+in+quali+prossimi+mercatini+locali+sarai+presente%21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 border border-brand-gold hover:bg-brand-gold/10 text-brand-dark-green font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2.5 text-center cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Chiedi info su WhatsApp</span>
              </a>

              <span className="text-[10px] text-center text-[#5a5040] block italic mt-2">
                Effettuo spedizioni assicurate in tutta Italia.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

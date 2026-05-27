/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { MessageCircle, Instagram, AlertCircle, Sparkles, Clock } from 'lucide-react';

export default function Contatti() {
  const [nome, setNome] = useState('');
  const [messaggio, setMessaggio] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setError('');

    // Strict validation check as requested
    if (!nome.trim() || !messaggio.trim()) {
      setError('Entrambi i campi (Nome e Messaggio) sono obbligatori per inviare.');
      return;
    }

    // Build WhatsApp URL using exactly the required format
    // wa.me/393202348856?text=Ciao+Serena%2C+sono+[NOME].+[MESSAGGIO]
    const formattedNome = encodeURIComponent(nome.trim());
    const formattedMessaggio = encodeURIComponent(messaggio.trim());
    const whatsappUrl = `https://wa.me/393202348856?text=Ciao+Serena%2C+sono+${formattedNome}.+${formattedMessaggio}`;

    // Open WhatsApp URL in a new window/tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contatti"
      className="relative py-24 bg-brand-offwhite text-brand-dark-green scroll-mt-10 overflow-hidden"
    >
      {/* Visual glowing aura inside section container */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-emerald/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title Heading */}
        <div className="text-center space-y-3 mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-body font-semibold">
            Inizia il tuo progetto unico
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-brand-dark-green font-medium">
            Parliamo del Tuo Pezzo in Resina
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Form and Contact Detail Column Division */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Detailed Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 reveal">
            
            {/* Direct Message Presentation */}
            <div className="bg-brand-cream border border-brand-gold/15 p-8 flex flex-col justify-center text-left h-full">
              <h3 className="font-heading text-xl font-bold text-brand-dark-green mb-4">
                Siamo Qui per Te
              </h3>
              <p className="font-body text-xs md:text-sm text-[#5a5040] leading-relaxed mb-6">
                Che tu abbia già chiaro in mente quale ciondolo far risplendere o che tu voglia semplicemente chiedere consigli per un regalo su misura, scrivimi liberamente! Ne parleremo insieme con cura.
              </p>
              
              <div className="flex items-center space-x-3 text-brand-emerald bg-brand-emerald/10 px-4 py-3 border border-brand-emerald/20 self-start">
                <Clock size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Rispondo entro 24 ore
                </span>
              </div>
            </div>

            {/* Direct Phone/WhatsApp Card */}
            <a
              href="https://wa.me/393202348856"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#faf8f4] border border-brand-gold/15 p-6 flex items-center space-x-4 hover:border-brand-emerald hover:shadow-sm transition-all duration-300 text-left cursor-pointer group"
            >
              <div className="p-3 bg-[#e8f7ee] text-brand-emerald rounded-full group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <MessageCircle size={24} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#5a5040]">WhatsApp</span>
                <p className="font-heading text-lg font-bold text-brand-dark-green mt-0.5 group-hover:text-brand-emerald transition-colors duration-300">
                  +39 320 234 8856
                </p>
              </div>
            </a>

            {/* Direct Instagram Card */}
            <a
              href="https://instagram.com/resin_home_serena"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#faf8f4] border border-brand-gold/15 p-6 flex items-center space-x-4 hover:border-brand-gold hover:shadow-sm transition-all duration-300 text-left cursor-pointer group"
            >
              <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <Instagram size={24} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#5a5040]">Instagram</span>
                <p className="font-heading text-lg font-bold text-brand-dark-green mt-0.5 group-hover:text-brand-gold transition-colors duration-300">
                  @resin_home_serena
                </p>
              </div>
            </a>

          </div>

          {/* Contact Interactive Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-[#faf8f4] border border-brand-gold/15 p-8 md:p-10 shadow-md reveal text-left">
            <h3 className="font-heading text-2xl font-normal text-brand-dark-green italic mb-6">
              Scrivimi Subito una richiesta
            </h3>

            {/* Validation warning block */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs flex items-center space-x-2">
                <AlertCircle size={16} className="shrink-0" />
                <span className="font-medium">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name input */}
              <div className="space-y-1.5">
                <label htmlFor="nome" className="text-[10px] uppercase tracking-wider font-bold text-brand-dark-green/80">
                  Il tuo Nome (o Nome e Cognome) *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Es. Marco Rossi"
                  className="w-full bg-brand-cream border border-brand-gold/25 focus:border-brand-emerald rounded-none p-3.5 text-sm text-brand-dark-green focus:outline-none transition-colors duration-300 font-sans-lato input-autofill"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label htmlFor="messaggio" className="text-[10px] uppercase tracking-wider font-bold text-brand-dark-green/80">
                  Cosa desideri creare? *
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  value={messaggio}
                  onChange={(e) => setMessaggio(e.target.value)}
                  rows={5}
                  placeholder="Descrivi la tua idea, i colori desiderati o le personalizzazioni..."
                  className="w-full bg-brand-cream border border-brand-gold/25 focus:border-brand-emerald rounded-none p-3.5 text-sm text-brand-dark-green focus:outline-none transition-colors duration-300 font-sans-lato resize-y"
                  required
                />
              </div>

              {/* Redirection indicator */}
              <div className="flex items-center space-x-2 bg-brand-gold/5 p-3.5 border border-brand-gold/10">
                <Sparkles size={16} className="text-brand-gold shrink-0" />
                <p className="text-[11px] font-body text-[#5a5040] leading-normal font-medium">
                  Cliccando, verrai reindirizzato al tuo WhatsApp per inviare direttamente il messaggio precompilato a Serena. Comodo, veloce e sicuro!
                </p>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full py-4 bg-brand-emerald hover:bg-brand-emerald2 text-brand-offwhite font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Invia su WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

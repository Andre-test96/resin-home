/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle, FileHeart, Award, ShieldCheck } from 'lucide-react';
import { CUSTOMIZATION_STEPS } from '../data';

export default function Personalizza() {
  return (
    <section
      id="personalizza"
      className="relative py-24 bg-gradient-to-b from-[#0f3d22] to-[#0a2c18] text-brand-offwhite scroll-mt-10 overflow-hidden"
    >
      {/* Background organic vectors */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-emerald2/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        
        {/* Title Block */}
        <div className="max-w-3xl mx-auto space-y-4 mb-20 reveal">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold-light font-body font-bold">
            Pezzi unici fatti per te
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-[#faf8f4] font-medium leading-tight">
            Ogni pezzo nasce dalla tua idea
          </h2>
          <p className="font-body text-base text-brand-offwhite/80 leading-relaxed max-w-xl mx-auto">
            La bellezza del fatto a mano sta nello scegliere ogni dettaglio. Trasformiamo le tue idee e desideri in un'opera di resina preziosa da vivere ogni giorno.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-6" />
        </div>

        {/* 3 Step Interactive Workflow Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative mb-20">
          
          {/* Subtle connecting dotted lines on desktop */}
          <div className="hidden lg:block absolute top-[100px] left-[15%] right-[15%] h-[1.5px] bg-dashed border-t-2 border-dashed border-brand-gold/25 -z-1" />

          {CUSTOMIZATION_STEPS.map((stepItem) => {
            // Pick corresponding icon for each step to increase decoration quality
            const getIcon = (st: number) => {
              if (st === 1) return <FileHeart className="w-6 h-6 text-brand-gold" />;
              if (st === 2) return <Award className="w-6 h-6 text-brand-gold" />;
              return <ShieldCheck className="w-6 h-6 text-brand-gold" />;
            };

            return (
              <div
                key={stepItem.step}
                className="bg-brand-black/30 backdrop-blur-sm border border-brand-gold/15 p-8 flex flex-col items-center hover:border-brand-gold/45 hover:-translate-y-1.5 transition-all duration-350 select-none reveal relative group"
              >
                {/* Step indicator circle */}
                <div className="absolute -top-6 bg-brand-black border-2 border-brand-gold w-12 h-12 flex items-center justify-center rounded-full text-brand-gold font-bold font-heading text-lg gold-glow group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  {stepItem.step}
                </div>

                {/* Sub icon container */}
                <div className="mt-4 mb-5 p-3.5 bg-[#0f3d22] border border-brand-gold/10 rounded-full group-hover:scale-105 transition-transform duration-300">
                  {getIcon(stepItem.step)}
                </div>

                <h3 className="font-heading text-xl font-semibold text-brand-gold-light mb-4">
                  {stepItem.title}
                </h3>
                
                <p className="font-body text-sm text-[#faf8f4]/85 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Big CTA layout for customized requests */}
        <div className="bg-brand-black/45 border border-brand-gold/25 p-8 md:p-12 max-w-4xl mx-auto rounded-none text-center select-none reveal">
          <h3 className="font-heading text-2xl md:text-3xl text-brand-gold italic font-normal mb-3">
            Hai in mente un regalo o una scritta speciale?
          </h3>
          <p className="font-body text-sm md:text-base text-brand-offwhite/85 max-w-2xl mx-auto leading-relaxed mb-8">
            Dal portachiavi con il nome dei tuoi cari, agli orecchini nei toni del tuo abito preferito, fino all'orologio nei colori perfetti per il tuo salotto di casa. Raccontami cosa desideri, io lo realizzo per te.
          </p>
          
          <a
            href="https://wa.me/393202348856?text=Ciao+Serena%21+Vorrei+personalizzare+una+tua+creazione+in+resina%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-black font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] gold-glow-hover items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageCircle size={18} />
            <span>Inizia su WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

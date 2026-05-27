/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChiSono from './components/ChiSono';
import Galleria from './components/Galleria';
import Personalizza from './components/Personalizza';
import Mercatini from './components/Mercatini';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

export default function App() {
  
  // Set up the custom fade-in on scroll triggers using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px -10% -5px 0px', // Trigger a bit before view entry for optimal flow
      threshold: 0.05,
    };

    const handleReveal = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleReveal, observerOptions);
    
    // Select all components with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-dark-green relative selection:bg-brand-gold/25 selection:text-brand-dark-green">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Header Block */}
      <Hero />

      {/* 3. Chi Sono section */}
      <ChiSono />

      {/* 4. Products gallery category filtered with lightbox modal */}
      <Galleria />

      {/* 5. Customization guide steps */}
      <Personalizza />

      {/* 6. Local markets locator */}
      <Mercatini />

      {/* 7. Request form and direct contact */}
      <Contatti />

      {/* 8. Full branding footer */}
      <Footer />

      {/* 9. Sticky floating WhatsApp shortcut button */}
      <a
        href="https://wa.me/393202348856?text=Ciao+Serena%21+Ho+visto+il+sito+e+vorrei+chiederti+delle+tue+bellissime+creazioni+in+resina%21"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contatta Serena su WhatsApp"
        className="whatsapp-pulse fixed bottom-6 right-6 z-45 bg-[#25d366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      >
        <MessageSquare size={24} className="fill-white text-[#25d366] group-hover:rotate-12 transition-transform duration-300" />
        {/* Tooltip on hover */}
        <span className="absolute right-14 bg-brand-black/90 text-brand-gold text-[10px] uppercase tracking-widest px-3 py-1.5 border border-brand-gold/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-right whitespace-nowrap font-sans-lato font-bold">
          Parla con me!
        </span>
      </a>

    </div>
  );
}

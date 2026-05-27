/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, X, MessageCircle, ZoomIn } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product, Category } from '../types';
import ResinImage from './ResinImage';

const CATEGORIES: (Category | 'Tutti')[] = ['Tutti', 'Gioielli', 'Home Decor', 'Accessori', 'Orologi'];

export default function Galleria() {
  const [activeCategory, setActiveCategory] = useState<Category | 'Tutti'>('Tutti');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products depending on selection
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Tutti') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Manage Lightbox keyboard shortcuts (ESC, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProduct) return;
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProduct, filteredProducts]);

  // Lock scroll when lightbox is opened
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProduct]);

  // Next and Prev handlers restricted to the active filtered products or same category
  const activeProductsPool = useMemo(() => {
    if (!selectedProduct) return [];
    // The prompt says: "Navigazione ← → tra prodotti della stessa categoria"
    // To satisfy this exactly, let's filter out products that have the same category as the active item
    return PRODUCTS.filter((p) => p.category === selectedProduct.category);
  }, [selectedProduct]);

  const handlePrev = () => {
    if (!selectedProduct || activeProductsPool.length <= 1) return;
    const currentIndex = activeProductsPool.findIndex((p) => p.id === selectedProduct.id);
    const prevIndex = (currentIndex - 1 + activeProductsPool.length) % activeProductsPool.length;
    setSelectedProduct(activeProductsPool[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedProduct || activeProductsPool.length <= 1) return;
    const currentIndex = activeProductsPool.findIndex((p) => p.id === selectedProduct.id);
    const nextIndex = (currentIndex + 1) % activeProductsPool.length;
    setSelectedProduct(activeProductsPool[nextIndex]);
  };

  return (
    <section
      id="galleria"
      className="relative py-24 bg-brand-offwhite text-brand-dark-green scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Gallery Title */}
        <div className="text-center space-y-3 mb-12 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-body font-semibold">
            Opere Artigianali
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-brand-dark-green font-medium">
            La Galleria delle Creazioni
          </h2>
          <p className="max-w-lg mx-auto font-body text-sm text-[#5a5040] mt-2">
            Ogni oggetto racconta una storia di colori fluidi e dettagli racchiusi nel tempo. Filtra per categoria o sfoglia i dettagli completi.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Filter Navigation Category Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs md:text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-gold text-brand-black shadow-md border-b-2 border-brand-gold-light'
                  : 'bg-brand-cream text-brand-dark-green hover:bg-brand-gold/10 border border-brand-gold/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid with 8 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((p, index) => (
            <div
              key={p.id}
              className="group bg-brand-cream border border-brand-gold/10 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-400 opacity-100 scale-100 relative"
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              {/* Product Visual Container (Resin Image + Glass Overlay) */}
              <div className="relative aspect-square overflow-hidden bg-brand-dark-green cursor-pointer" onClick={() => setSelectedProduct(p)}>
                <ResinImage src={p.image} alt={p.name} category={p.category} className="w-full h-full" />
                
                {/* Visual category tag overlay */}
                <span className="absolute top-3 left-3 bg-brand-black/80 backdrop-blur-sm text-brand-gold-light text-[10px] uppercase tracking-widest px-2.5 py-1 font-sans-lato font-medium border border-brand-gold/20 z-10">
                  {p.category}
                </span>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-brand-dark-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="flex flex-col items-center space-y-2 text-brand-gold-light">
                    <ZoomIn size={28} className="animate-pulse" />
                    <span className="text-xs uppercase tracking-widest font-sans-lato">Dettagli Creazione</span>
                  </div>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="font-heading text-lg font-bold text-brand-dark-green mb-1.5 group-hover:text-brand-emerald transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="font-body text-xs text-[#5a5040] leading-relaxed mb-6 flex-grow">
                  {p.description}
                </p>
                
                {/* Action button */}
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="w-full py-2.5 text-center text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-brand-gold bg-brand-black hover:bg-brand-emerald hover:text-[#faf8f4] border border-brand-gold/30 hover:border-brand-gold pointer cursor-pointer"
                >
                  Dettagli
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Immersive Detail Overlay Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/95 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={() => setSelectedProduct(null)}
        >
          {/* Main Container Card inside modal */}
          <div
            className="relative w-full max-w-5xl bg-brand-cream text-brand-dark-green border border-brand-gold/30 rounded-none shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-auto overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Cross icon */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-30 p-2 bg-brand-black/80 hover:bg-brand-gold text-brand-gold hover:text-brand-black rounded-full transition-all duration-300 cursor-pointer"
              aria-label="Chiudi"
            >
              <X size={20} />
            </button>

            {/* Left Prev navigation Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-brand-black/50 hover:bg-brand-gold text-brand-gold hover:text-brand-black rounded-full transition-all duration-350 transform active:scale-95 cursor-pointer md:block hidden"
              aria-label="Precedente"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Next navigation Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-brand-black/50 hover:bg-brand-gold text-brand-gold hover:text-brand-black rounded-full transition-all duration-350 transform active:scale-95 cursor-pointer md:block hidden"
              aria-label="Successivo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image display viewport (md: 6 cols) */}
            <div className="md:col-span-6 relative bg-brand-black aspect-square md:aspect-auto md:min-h-[500px]">
              <ResinImage
                src={selectedProduct.image}
                alt={selectedProduct.name}
                category={selectedProduct.category}
                className="w-full h-full object-cover"
                isLarge={true}
              />
              {/* Overlay shadow for category badge inside large view */}
              <span className="absolute bottom-4 left-4 bg-brand-black/90 text-brand-gold border border-brand-gold-light/30 px-3 py-1.5 text-xs font-semibold tracking-widest uppercase">
                {selectedProduct.category}
              </span>
            </div>

            {/* Content info block viewport (md: 6 cols) */}
            <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between text-left h-full">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-body font-bold">
                    Resin-home Serena • Pezzo Unico
                  </span>
                  <h3 className="font-heading text-2xl md:text-3.5xl font-bold text-brand-dark-green mt-1">
                    {selectedProduct.name}
                  </h3>
                  <div className="w-12 h-[2.5px] bg-brand-gold mt-3" />
                </div>

                <div className="space-y-4">
                  <p className="font-body text-sm md:text-base text-brand-dark-green/90 leading-relaxed font-normal">
                    {selectedProduct.longDescription}
                  </p>

                  {/* Dimensions if available */}
                  {selectedProduct.dimensions && (
                    <div className="bg-[#faf8f4] border border-brand-gold/15 p-3 flex flex-col">
                      <span className="text-[10px] uppercase justify-start tracking-wider text-[#5a5040] font-bold">
                        Dimensioni o Specifiche
                      </span>
                      <span className="text-xs font-medium text-brand-emerald mt-0.5">
                        {selectedProduct.dimensions}
                      </span>
                    </div>
                  )}

                  {/* Crafting Bullet Details */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#5a5040] font-bold block mb-1">
                      Dettagli di pregio:
                    </span>
                    <ul className="space-y-1.5">
                      {selectedProduct.details.map((det, index) => (
                        <li key={index} className="flex items-start text-xs text-[#5a5040] font-medium font-body leading-tight">
                          <span className="text-brand-gold mr-2">✦</span>
                          {det}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Purchase CTA to prefilled WhatsApp redirect */}
              <div className="pt-8 border-t border-brand-gold/10 mt-8 flex flex-col space-y-3">
                <a
                  href={`https://wa.me/393202348856?text=Ciao+Serena%21+Ho+visto+il+tuo+bellissimo+prodotto+%22${encodeURIComponent(
                    selectedProduct.name
                  )}%22+sul+sito+e+vorrei+maggiori+informazioni+su+come+ordinarne+uno+personalizzato%21`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-brand-emerald hover:bg-brand-emerald2 text-brand-offwhite font-bold text-sm tracking-widest uppercase transition-all duration-350 flex items-center justify-center space-x-2 text-center shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>Voglio questo!</span>
                </a>
                
                <span className="text-[10px] italic text-[#5a5040] text-center block">
                  Crea il tuo pezzo su misura: definisci colori e inclusioni al momento del contatto.
                </span>
                
                {/* Mobile Prev/Next quick buttons */}
                <div className="flex md:hidden justify-between items-center pt-2">
                  <button onClick={handlePrev} className="flex items-center text-xs text-brand-emerald uppercase tracking-widest font-semibold py-1 px-3 bg-brand-gold/15">
                    ← Indietro
                  </button>
                  <button onClick={handleNext} className="flex items-center text-xs text-brand-emerald uppercase tracking-widest font-semibold py-1 px-3 bg-brand-gold/15">
                    Avanti →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

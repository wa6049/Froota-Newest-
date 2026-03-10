
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const MenuSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="offer" className="py-16 lg:py-24 bg-white dark:bg-froota-dark transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="mb-12 lg:mb-24 text-center lg:text-left">
          <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.5em] text-froota-pink mb-4 flex items-center justify-center lg:justify-start gap-4">
            <span className="w-6 lg:w-10 h-[1px] bg-froota-pink hidden lg:block"></span>
            {t('showcase.badge')}
          </p>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter leading-[0.85] lg:leading-[0.8] mb-6">
            {t('showcase.title')}
          </h2>
          <p className="text-base lg:text-2xl text-froota-dark/50 dark:text-white/30 italic font-display leading-tight max-w-2xl mx-auto lg:mx-0">
            {t('showcase.subtitle')}
          </p>
        </div>

        {/* Catalog Grid - Multi-column clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24">
          {PRODUCTS.slice(0, 2).map((product, idx) => {
            return (
              <div 
                key={product.id} 
                className="group flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Visual Stage */}
                <div className="relative aspect-[4/5] bg-froota-wood dark:bg-white/5 rounded-[32px] lg:rounded-[48px] overflow-hidden flex items-center justify-center p-6 lg:p-10 transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] group-hover:-translate-y-2">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] lg:drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-1000 group-hover:scale-110" 
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                    <span className="text-[6px] lg:text-[7px] font-black uppercase tracking-widest bg-white/80 dark:bg-froota-dark/80 px-2.5 py-1 lg:px-3 lg:py-1 rounded-full backdrop-blur-md text-froota-dark/40 dark:text-white/40">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="mt-6 lg:mt-8 space-y-3 lg:space-y-4">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                    <div className="space-y-1 lg:space-y-2">
                      <h3 className="text-2xl md:text-4xl lg:text-5xl font-impact text-froota-dark dark:text-white uppercase leading-none tracking-tight">
                        {product.name}
                      </h3>
                      <p className="text-sm lg:text-lg text-froota-dark/40 dark:text-white/30 font-medium leading-relaxed max-w-sm">
                        {product.description}
                      </p>
                    </div>
                    <div className="text-left sm:text-right w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-start">
                      <p className="text-xl lg:text-2xl font-impact text-froota-dark dark:text-white">{product.price}</p>
                      <a href="#/products" className="inline-flex items-center gap-1 text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-pink hover:text-froota-dark transition-colors">
                        MARKET <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

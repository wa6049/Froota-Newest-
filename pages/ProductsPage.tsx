import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../constants';
import { ArrowUpRight, Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';

// Generate more products for demonstration if needed
const ALL_PRODUCTS = [
  ...PRODUCTS,
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_a', name: p.name + ' Premium' })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_b', name: p.name + ' Select' })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_c', name: p.name + ' Deluxe' })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_d', name: p.name + ' Exotic' })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_e', name: p.name + ' Fresh' })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_f', name: p.name + ' Organic' })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_g', name: p.name + ' Handpicked' })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_h', name: p.name + ' Rare' })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_i', name: p.name + ' Special' })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_j', name: p.name + ' Top' })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + '_k', name: p.name + ' Choice' })),
].slice(0, 50); // Limit to 50 for now

const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-froota-dark pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-8 lg:mb-12 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.5em] text-froota-pink mb-4">
              {t('showcase.badge')}
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter leading-[0.85] lg:leading-[0.8] mb-6">
              {t('products.title')}
            </h1>
            <p className="text-base lg:text-xl text-froota-dark/50 dark:text-white/30 italic font-display leading-tight max-w-2xl mx-auto lg:mx-0">
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 mb-8 bg-froota-wood dark:bg-white/5 p-4 lg:p-6 rounded-[24px] lg:rounded-[32px] border border-black/5 dark:border-white/5">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-3">
            <button 
              onClick={() => setFilter('all')}
              className={`px-5 lg:px-6 py-2 lg:py-2.5 rounded-full text-[8px] lg:text-[9px] font-black uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-froota-pink text-white shadow-lg shadow-froota-pink/20' : 'bg-white dark:bg-froota-dark text-froota-dark/40 dark:text-white/40 hover:bg-froota-pink/10'}`}
            >
              {t('products.filter_all')}
            </button>
            <button 
              onClick={() => setFilter('exotic')}
              className={`px-5 lg:px-6 py-2 lg:py-2.5 rounded-full text-[8px] lg:text-[9px] font-black uppercase tracking-widest transition-all ${filter === 'exotic' ? 'bg-froota-pink text-white shadow-lg shadow-froota-pink/20' : 'bg-white dark:bg-froota-dark text-froota-dark/40 dark:text-white/40 hover:bg-froota-pink/10'}`}
            >
              {t('products.filter_exotic')}
            </button>
            <button 
              onClick={() => setFilter('platters')}
              className={`px-5 lg:px-6 py-2 lg:py-2.5 rounded-full text-[8px] lg:text-[9px] font-black uppercase tracking-widest transition-all ${filter === 'platters' ? 'bg-froota-pink text-white shadow-lg shadow-froota-pink/20' : 'bg-white dark:bg-froota-dark text-froota-dark/40 dark:text-white/40 hover:bg-froota-pink/10'}`}
            >
              {t('products.filter_platters')}
            </button>
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-froota-dark/20 dark:text-white/20" size={16} />
            <input 
              type="text" 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-froota-dark border border-black/5 dark:border-white/5 rounded-full py-3 pl-12 pr-6 text-xs focus:outline-none focus:ring-2 focus:ring-froota-pink/20 transition-all"
            />
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between px-4">
          <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40">
            {t('products.grid_info').replace('{count}', filteredProducts.length.toString())}
          </p>
        </div>

        {/* Products Grid - 5 columns as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {filteredProducts.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-square bg-froota-wood dark:bg-white/5 rounded-[24px] lg:rounded-[32px] overflow-hidden flex items-center justify-center p-4 lg:p-6 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] group-hover:-translate-y-2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                  <span className="text-[6px] lg:text-[7px] font-black uppercase tracking-widest bg-white/80 dark:bg-froota-dark/80 px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-full backdrop-blur-md text-froota-dark/40 dark:text-white/40">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="mt-3 lg:mt-4 space-y-1.5 px-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base lg:text-lg font-impact text-froota-dark dark:text-white uppercase leading-none tracking-tight group-hover:text-froota-pink transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[10px] lg:text-xs font-impact text-froota-dark dark:text-white whitespace-nowrap">{product.price}</p>
                </div>
                <p className="text-[9px] lg:text-[10px] text-froota-dark/40 dark:text-white/30 font-medium leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <div className="pt-1">
                  <a href="#/contact" className="inline-flex items-center gap-1 text-[7px] lg:text-[8px] font-black uppercase tracking-widest text-froota-pink hover:text-froota-dark dark:hover:text-white transition-colors">
                    MARKET <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-2xl font-display italic text-froota-dark/20 dark:text-white/20">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

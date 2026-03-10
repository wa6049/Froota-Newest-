import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../constants';
import { Search, Filter, ArrowUpRight } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'exotic' | 'platters' | 'wellness'>('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const categories = [
    { id: 'all', label: t('showcase.all') },
    { id: 'exotic', label: t('showcase.exotic') },
    { id: 'platters', label: t('showcase.platters') },
    { id: 'wellness', label: t('showcase.wellness') },
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 bg-white dark:bg-froota-dark transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 space-y-8">
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-froota-pink mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-froota-pink"></span>
              {t('showcase.badge')}
            </p>
            <h1 className="text-7xl md:text-9xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter leading-[0.8]">
              {t('showcase.title')}
            </h1>
          </div>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-12 border-t border-black/5 dark:border-white/5">
            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-froota-dark/40 dark:text-white/40" size={18} />
              <input 
                type="text" 
                placeholder="Search our catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-froota-wood dark:bg-white/5 border-none rounded-full pl-16 pr-8 py-5 text-froota-dark dark:text-white focus:ring-2 focus:ring-froota-pink transition-all outline-none"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-3">
              <Filter size={16} className="text-froota-dark/40 dark:text-white/40 mr-2 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat.id 
                      ? 'bg-froota-pink text-white shadow-lg shadow-froota-pink/20' 
                      : 'bg-froota-wood dark:bg-white/5 text-froota-dark/40 dark:text-white/40 hover:bg-froota-dark hover:text-white dark:hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {filteredProducts.map((product, idx) => (
            <div 
              key={product.id} 
              className="group flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Visual Stage */}
              <div className="relative aspect-[4/5] bg-froota-wood dark:bg-white/5 rounded-[40px] overflow-hidden flex items-center justify-center p-8 transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] group-hover:-translate-y-2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />

                {/* Top Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="text-[8px] font-black uppercase tracking-widest bg-white/80 dark:bg-froota-dark/80 px-4 py-1.5 rounded-full backdrop-blur-md text-froota-dark/40 dark:text-white/40">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Info Area */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-impact text-froota-dark dark:text-white uppercase leading-none tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-froota-dark/40 dark:text-white/30 font-medium leading-relaxed max-w-[200px] line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-impact text-froota-dark dark:text-white">{product.price}</p>
                    <a href="#location" className="inline-flex items-center gap-1 text-[8px] font-black uppercase tracking-widest text-froota-pink hover:text-froota-dark transition-colors">
                      MARKET <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-40 text-center space-y-8">
            <div className="text-froota-dark/20 dark:text-white/10 flex justify-center">
              <Search size={80} />
            </div>
            <h3 className="text-4xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter">
              No products found
            </h3>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-froota-pink font-black uppercase tracking-widest text-[10px] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductsPage;

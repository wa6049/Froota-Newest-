
import React, { useState, useEffect } from 'react';
import { MapPin, Moon, Sun, Languages, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView?: 'home' | 'products' | 'special-delivery' | 'contact' | 'privacy';
}

const Navbar: React.FC<NavbarProps> = ({ currentView = 'home' }) => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t('nav.home'), href: '#/', view: 'home' },
    { name: t('nav.offer'), href: '#/products', view: 'products' },
    { name: t('nav.specialDelivery'), href: '#/special-delivery', view: 'special-delivery' },
    { name: t('nav.location'), href: '#/contact', view: 'contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'hr' ? 'en' : 'hr');
  };

  return (
    <div className={`fixed top-0 w-full z-50 px-4 pt-6 transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-6'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between bg-white/90 dark:bg-froota-dark/90 backdrop-blur-xl px-8 py-4 rounded-[32px] border border-white/20 dark:border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all ${scrolled ? 'py-3' : 'py-5'}`}>

        {/* Logo Area */}
        <a href="#/" onClick={() => setIsMenuOpen(false)} className="-my-6 relative z-10 block pointer-events-auto">
          <Logo size="2x" />
        </a>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] font-black uppercase tracking-[0.5em] transition-all relative group ${currentView === link.view
                  ? 'text-froota-pink'
                  : 'text-froota-dark/80 dark:text-white/80 hover:text-froota-pink dark:hover:text-froota-pink'
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-froota-pink transition-all ${currentView === link.view ? 'w-full' : 'w-0 group-hover:w-1/2'
                }`}></span>
            </a>
          ))}
        </nav>

        {/* Action Right */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-gray-100 dark:border-white/5 text-froota-dark/60 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2.5 rounded-full border border-gray-100 dark:border-white/5 text-froota-dark/60 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2"
              aria-label="Toggle Language"
            >
              <Languages size={16} />
              <span className="text-[10px] font-black uppercase">{language}</span>
            </button>
          </div>

          <a
            href="#/contact"
            className="bg-froota-pink text-white px-5 sm:px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-froota-dark dark:hover:bg-froota-green dark:hover:text-froota-dark transition-all flex items-center gap-3 shadow-xl shadow-froota-pink/20"
          >
            <span className="hidden sm:inline">{t('nav.location')}</span> <MapPin size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-froota-wood dark:bg-white/5 text-froota-dark dark:text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 bg-white dark:bg-froota-dark rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl p-8 lg:hidden z-40"
          >
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-impact uppercase tracking-tight transition-colors ${currentView === link.view ? 'text-froota-pink' : 'text-froota-dark dark:text-white'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
              <div className="flex gap-4">
                <button
                  onClick={toggleTheme}
                  className="w-12 h-12 rounded-full bg-froota-wood dark:bg-white/5 flex items-center justify-center text-froota-dark dark:text-white"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="px-6 h-12 rounded-full bg-froota-wood dark:bg-white/5 flex items-center gap-3 text-froota-dark dark:text-white"
                >
                  <Languages size={20} />
                  <span className="text-xs font-black uppercase">{language}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;


import React from 'react';
import { Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-froota-dark border-t border-gray-100 dark:border-white/5 pt-24 pb-32 md:pb-20 relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          
          <div className="text-center md:text-left space-y-4">
            <Logo />
            <p className="text-gray-400 dark:text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
              Premium Exotic Fruit Experience
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
               <a 
                 href={BUSINESS_INFO.instagramUrl} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="w-14 h-14 bg-froota-wood dark:bg-white/5 rounded-2xl flex items-center justify-center hover:bg-froota-pink hover:text-white transition-all group shadow-sm"
               >
                 <Instagram size={22} className="group-hover:scale-110 transition-transform" />
               </a>
            </div>
            <p className="text-gray-400 dark:text-white/30 text-[10px] font-black uppercase tracking-widest">
              Follow our journey
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 dark:border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] text-gray-400 dark:text-white/20 font-black uppercase tracking-widest">
             <a href="#/privacy" className="hover:text-froota-pink transition-colors">{t('footer.privacy')}</a>
             <a href="#/contact" className="hover:text-froota-pink transition-colors">{t('nav.location')}</a>
             <p className="cursor-default">© {new Date().getFullYear()} {t('footer.rights')}</p>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-froota-green animate-pulse"></div>
              <p className="text-[10px] text-gray-400 dark:text-white/20 font-black uppercase tracking-widest">
                {t('footer.made_by')}
              </p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

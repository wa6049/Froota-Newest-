import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle2 } from 'lucide-react';

const SpecialDelivery: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send the data to a server here
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20 bg-white dark:bg-froota-dark transition-colors duration-500">
        <div className="max-w-md w-full px-6 text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="w-24 h-24 bg-froota-green/20 rounded-full flex items-center justify-center mx-auto text-froota-green">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter">
            {t('specialDelivery.success')}
          </h2>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-froota-pink font-black uppercase tracking-widest text-[10px] hover:underline"
          >
            {t('nav.home')}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-24 bg-white dark:bg-froota-dark transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-froota-pink/5 dark:bg-froota-pink/10 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-froota-pink mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-froota-pink"></span>
                {t('specialDelivery.badge')}
              </p>
              <h1 className="text-7xl md:text-9xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter leading-[0.8]">
                {t('specialDelivery.title')}
              </h1>
              <p className="text-xl lg:text-3xl text-froota-dark/50 dark:text-white/30 italic font-display leading-tight max-w-xl">
                {t('specialDelivery.subtitle')}
              </p>
            </div>

            <div className="aspect-video rounded-[40px] overflow-hidden bg-froota-wood dark:bg-white/5 border border-black/5 dark:border-white/5">
              <img 
                src="https://picsum.photos/seed/delivery/1200/800" 
                alt="Boutique Delivery" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-froota-wood dark:bg-white/5 p-8 lg:p-12 rounded-[60px] border border-black/5 dark:border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40 ml-4">
                  {t('specialDelivery.form_name')}
                </label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white dark:bg-froota-dark border-none rounded-full px-8 py-5 text-froota-dark dark:text-white focus:ring-2 focus:ring-froota-pink transition-all outline-none"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40 ml-4">
                  {t('specialDelivery.form_email')}
                </label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-white dark:bg-froota-dark border-none rounded-full px-8 py-5 text-froota-dark dark:text-white focus:ring-2 focus:ring-froota-pink transition-all outline-none"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40 ml-4">
                  {t('specialDelivery.form_type')}
                </label>
                <select className="w-full bg-white dark:bg-froota-dark border-none rounded-full px-8 py-5 text-froota-dark dark:text-white focus:ring-2 focus:ring-froota-pink transition-all outline-none appearance-none">
                  <option value="fruit">{t('specialDelivery.form_type_fruit')}</option>
                  <option value="juice">{t('specialDelivery.form_type_juice')}</option>
                  <option value="other">{t('specialDelivery.form_type_other')}</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40 ml-4">
                  {t('specialDelivery.form_message')}
                </label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white dark:bg-froota-dark border-none rounded-[32px] px-8 py-5 text-froota-dark dark:text-white focus:ring-2 focus:ring-froota-pink transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-froota-pink text-white py-6 rounded-full font-black uppercase tracking-[0.2em] text-[12px] hover:bg-froota-dark dark:hover:bg-froota-green dark:hover:text-froota-dark transition-all flex items-center justify-center gap-4 shadow-xl shadow-froota-pink/20"
              >
                {t('specialDelivery.form_submit')} <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialDelivery;

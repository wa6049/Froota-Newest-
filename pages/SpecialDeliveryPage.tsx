import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle2, ShoppingBag, Droplets, Gift, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SpecialDeliveryPage: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    type: 'fruit',
    details: '',
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const types = [
    { id: 'fruit', label: t('specialDelivery.type_fruit'), icon: <ShoppingBag size={20} /> },
    { id: 'juice', label: t('specialDelivery.type_juice'), icon: <Droplets size={20} /> },
    { id: 'box', label: t('specialDelivery.type_box'), icon: <Gift size={20} /> },
    { id: 'other', label: t('specialDelivery.type_other'), icon: <Plus size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-froota-dark pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-10"
          >
            <div className="space-y-4 lg:space-y-6">
              <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.5em] text-froota-pink mb-2">
                {t('specialDelivery.badge')}
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter leading-[0.85] lg:leading-[0.8] mb-6">
                {t('specialDelivery.title')}
              </h1>
              <p className="text-base lg:text-2xl text-froota-dark/50 dark:text-white/30 italic font-display leading-tight max-w-xl">
                {t('specialDelivery.subtitle')}
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6 p-5 lg:p-6 bg-froota-wood dark:bg-white/5 rounded-[24px] lg:rounded-[32px] border border-black/5 dark:border-white/5 text-center sm:text-left">
                <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-froota-pink rounded-full flex items-center justify-center text-white shadow-xl shadow-froota-pink/20">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-impact text-froota-dark dark:text-white uppercase tracking-tight leading-none mb-1">Exotic Selection</h3>
                  <p className="text-[10px] lg:text-xs text-froota-dark/40 dark:text-white/30 font-medium">Pick from our rarest fruits available in store.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6 p-5 lg:p-6 bg-froota-wood dark:bg-white/5 rounded-[24px] lg:rounded-[32px] border border-black/5 dark:border-white/5 text-center sm:text-left">
                <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-froota-green rounded-full flex items-center justify-center text-froota-dark shadow-xl shadow-froota-green/20">
                  <Droplets size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-impact text-froota-dark dark:text-white uppercase tracking-tight leading-none mb-1">Freshly Pressed</h3>
                  <p className="text-[10px] lg:text-xs text-froota-dark/40 dark:text-white/30 font-medium">Custom juice blends made to order for your event.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white dark:bg-froota-dark border border-black/5 dark:border-white/5 rounded-[32px] lg:rounded-[48px] p-6 lg:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.05)] relative z-10">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5 lg:space-y-6"
                  >
                    <div className="space-y-3">
                      <label className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40">{t('specialDelivery.form_type')}</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                        {types.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormState({ ...formState, type: type.id })}
                            className={`flex items-center gap-3 p-3 lg:p-4 rounded-[16px] lg:rounded-[20px] border transition-all ${formState.type === type.id ? 'bg-froota-pink border-froota-pink text-white shadow-lg shadow-froota-pink/20' : 'bg-froota-wood dark:bg-white/5 border-transparent text-froota-dark/60 dark:text-white/60 hover:border-froota-pink/30'}`}
                          >
                            {React.cloneElement(type.icon as React.ReactElement, { size: 18 })}
                            <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40">{t('specialDelivery.label_details')}</label>
                      <textarea 
                        required
                        value={formState.details}
                        onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                        placeholder={t('specialDelivery.placeholder_details')}
                        className="w-full bg-froota-wood dark:bg-white/5 border border-transparent rounded-[20px] lg:rounded-[24px] p-5 lg:p-6 text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-froota-pink/20 transition-all min-h-[100px] lg:min-h-[140px] resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div className="space-y-3">
                        <label className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40">{t('location.label_name')}</label>
                        <input 
                          required
                          type="text" 
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full bg-froota-wood dark:bg-white/5 border border-transparent rounded-full py-3 lg:py-4 px-5 lg:px-6 text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-froota-pink/20 transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40">{t('location.label_email')}</label>
                        <input 
                          required
                          type="email" 
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-froota-wood dark:bg-white/5 border border-transparent rounded-full py-3 lg:py-4 px-5 lg:px-6 text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-froota-pink/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40">{t('location.label_phone')}</label>
                      <input 
                        required
                        type="tel" 
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-froota-wood dark:bg-white/5 border border-transparent rounded-full py-3 lg:py-4 px-5 lg:px-6 text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-froota-pink/20 transition-all"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-froota-pink text-white py-4 lg:py-5 rounded-full font-impact text-base lg:text-lg uppercase tracking-widest hover:bg-froota-dark dark:hover:bg-froota-green dark:hover:text-froota-dark transition-all flex items-center justify-center gap-3 shadow-xl shadow-froota-pink/20"
                    >
                      {t('specialDelivery.btn_submit')} <Send size={18} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-8"
                  >
                    <div className="w-24 h-24 bg-froota-green rounded-full flex items-center justify-center text-froota-dark mx-auto shadow-2xl shadow-froota-green/20">
                      <CheckCircle2 size={48} />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-5xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter">{t('specialDelivery.success_title')}</h2>
                      <p className="text-lg text-froota-dark/40 dark:text-white/30 font-medium max-w-xs mx-auto">{t('specialDelivery.success_desc')}</p>
                    </div>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] font-black uppercase tracking-[0.3em] text-froota-pink hover:text-froota-dark transition-colors"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-froota-pink/10 blur-[60px] rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-froota-green/10 blur-[80px] rounded-full -z-10"></div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default SpecialDeliveryPage;

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-froota-dark pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-8 lg:mb-12 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.4em] text-froota-pink mb-4">Kontakt & Lokacija</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter leading-[0.85] lg:leading-[0.8] mb-6">
              {t('location.title')}
            </h1>
            <p className="text-base lg:text-xl text-froota-dark/50 dark:text-white/40 italic font-display leading-tight max-w-2xl mx-auto lg:mx-0">
              {t('location.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-10"
          >
            <div className="space-y-4 lg:space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center group p-5 lg:p-6 bg-froota-wood dark:bg-white/5 rounded-[24px] lg:rounded-[32px] border border-black/5 dark:border-white/5 transition-all hover:shadow-xl text-center sm:text-left">
                <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-white dark:bg-froota-dark flex items-center justify-center text-froota-pink shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/30 mb-1">{t('location.address')}</p>
                  <p className="text-base lg:text-lg font-bold text-froota-dark dark:text-white">{BUSINESS_INFO.address}, {BUSINESS_INFO.city}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center group p-5 lg:p-6 bg-froota-wood dark:bg-white/5 rounded-[24px] lg:rounded-[32px] border border-black/5 dark:border-white/5 transition-all hover:shadow-xl text-center sm:text-left">
                <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-white dark:bg-froota-dark flex items-center justify-center text-froota-green shadow-lg group-hover:scale-110 transition-transform">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/30 mb-1">{t('location.hours')}</p>
                  <p className="text-base lg:text-lg font-bold text-froota-dark dark:text-white">{BUSINESS_INFO.workingHours}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center group p-5 lg:p-6 bg-froota-wood dark:bg-white/5 rounded-[24px] lg:rounded-[32px] border border-black/5 dark:border-white/5 transition-all hover:shadow-xl text-center sm:text-left">
                <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-white dark:bg-froota-dark flex items-center justify-center text-froota-pink shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/30 mb-1">WhatsApp / Mob</p>
                  <p className="text-base lg:text-lg font-bold text-froota-dark dark:text-white">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="bg-white dark:bg-white/5 rounded-[32px] lg:rounded-[48px] p-6 lg:p-12 border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-froota-pink/10 blur-[120px] -z-10 group-hover:bg-froota-pink/20 transition-all duration-1000"></div>
              
              <div className="mb-6 lg:mb-10">
                <h3 className="text-2xl lg:text-3xl font-impact text-froota-dark dark:text-white uppercase tracking-tight mb-2">{t('location.contact_title')}</h3>
                <p className="text-sm lg:text-base text-froota-dark/50 dark:text-white/40">{t('location.contact_desc')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  <div className="space-y-2">
                    <label className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] text-froota-dark/40 dark:text-white/30 ml-2">{t('location.label_name')}</label>
                    <input 
                      required
                      type="text" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-froota-wood dark:bg-froota-dark border-none rounded-full px-6 lg:px-8 py-3 lg:py-4 text-froota-dark dark:text-white font-bold focus:ring-2 ring-froota-pink transition-all placeholder:text-froota-dark/20 text-xs lg:text-sm" 
                      placeholder="Petar Perić"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] text-froota-dark/40 dark:text-white/30 ml-2">{t('location.label_email')}</label>
                    <input 
                      required
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-froota-wood dark:bg-froota-dark border-none rounded-full px-6 lg:px-8 py-3 lg:py-4 text-froota-dark dark:text-white font-bold focus:ring-2 ring-froota-pink transition-all placeholder:text-froota-dark/20 text-xs lg:text-sm" 
                      placeholder="petar@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] text-froota-dark/40 dark:text-white/30 ml-2">{t('location.label_message')}</label>
                  <textarea 
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-froota-wood dark:bg-froota-dark border-none rounded-[20px] lg:rounded-3xl px-6 lg:px-8 py-4 lg:py-5 text-froota-dark dark:text-white font-bold focus:ring-2 ring-froota-pink transition-all placeholder:text-froota-dark/20 resize-none text-xs lg:text-sm" 
                    placeholder="Pitanje..."
                  ></textarea>
                </div>

                <button 
                  disabled={submitted}
                  type="submit" 
                  className={`w-full py-4 lg:py-5 rounded-full font-impact text-base lg:text-lg uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${submitted ? 'bg-froota-green text-froota-dark' : 'bg-froota-pink text-white hover:bg-froota-dark'}`}
                >
                  {submitted ? (
                    <><CheckCircle size={20} /> {t('location.success')}</>
                  ) : (
                    <><Send size={18} /> {t('location.btn_send')}</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map Column - BIGGER MAP */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[400px] sm:h-[600px] lg:h-full lg:min-h-[800px] lg:sticky lg:top-32"
          >
            <iframe 
              src={BUSINESS_INFO.mapUrl}
              className="w-full h-full rounded-[60px] shadow-2xl grayscale dark:invert dark:opacity-60 hover:grayscale-0 hover:invert-0 transition-all duration-700 border border-black/5 dark:border-white/5"
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              title="Froota Zagreb Map"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;

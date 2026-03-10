import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const { t, language } = useLanguage();

  const content = {
    hr: {
      title: 'Pravila Privatnosti',
      subtitle: 'Vaša privatnost nam je prioritet. Saznajte kako štitimo vaše podatke.',
      back: 'Povratak na početnu',
      lastUpdated: 'Zadnje ažuriranje: 2. ožujka 2026.',
      sections: [
        {
          icon: <ShieldCheck className="text-froota-pink" size={24} />,
          title: 'Opće informacije',
          text: 'Froota Market poštuje vašu privatnost i obvezuje se na zaštitu vaših osobnih podataka. Ova pravila objašnjavaju kako prikupljamo, koristimo i štitimo informacije koje nam dajete putem naše web stranice.'
        },
        {
          icon: <Eye className="text-froota-green" size={24} />,
          title: 'Podaci koje prikupljamo',
          text: 'Prikupljamo samo podatke koje nam dobrovoljno date putem naših kontakt obrazaca (ime, email, broj telefona) kako bismo mogli odgovoriti na vaše upite ili obraditi vaše zahtjeve za dostavu.'
        },
        {
          icon: <Lock className="text-froota-pink" size={24} />,
          title: 'Sigurnost podataka',
          text: 'Primjenjujemo tehničke i organizacijske mjere sigurnosti kako bismo zaštitili vaše podatke od neovlaštenog pristupa, gubitka ili zlouporabe. Vaši podaci se ne dijele s trećim stranama bez vašeg izričitog prisanka.'
        },
        {
          icon: <FileText className="text-froota-green" size={24} />,
          title: 'Vaša prava (GDPR)',
          text: 'Sukladno Općoj uredbi o zaštiti podataka (GDPR), imate pravo na pristup svojim podacima, ispravak, brisanje ("pravo na zaborav") te prigovor na obradu vaših podataka.'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      subtitle: 'Your privacy is our priority. Learn how we protect your data.',
      back: 'Back to Home',
      lastUpdated: 'Last updated: March 2, 2026.',
      sections: [
        {
          icon: <ShieldCheck className="text-froota-pink" size={24} />,
          title: 'General Information',
          text: 'Froota Market respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and protect the information you provide through our website.'
        },
        {
          icon: <Eye className="text-froota-green" size={24} />,
          title: 'Data We Collect',
          text: 'We only collect data that you voluntarily provide through our contact forms (name, email, phone number) so that we can respond to your inquiries or process your delivery requests.'
        },
        {
          icon: <Lock className="text-froota-pink" size={24} />,
          title: 'Data Security',
          text: 'We implement technical and organizational security measures to protect your data from unauthorized access, loss, or misuse. Your data is not shared with third parties without your explicit consent.'
        },
        {
          icon: <FileText className="text-froota-green" size={24} />,
          title: 'Your Rights (GDPR)',
          text: 'In accordance with the General Data Protection Regulation (GDPR), you have the right to access your data, correction, deletion ("right to be forgotten"), and objection to the processing of your data.'
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-white dark:bg-froota-dark pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <a 
            href="#/" 
            className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/40 hover:text-froota-pink transition-colors group"
          >
            <div className="w-8 h-8 rounded-full border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:border-froota-pink transition-colors">
              <ArrowLeft size={14} />
            </div>
            {currentContent.back}
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-impact text-froota-dark dark:text-white uppercase tracking-tighter leading-none mb-4">
            {currentContent.title}
          </h1>
          <p className="text-base lg:text-xl text-froota-dark/50 dark:text-white/30 italic font-display max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
          <p className="mt-3 text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-froota-pink">
            {currentContent.lastUpdated}
          </p>
        </motion.div>

        <div className="space-y-8 lg:space-y-10">
          {currentContent.sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row gap-6 lg:gap-8 p-6 lg:p-8 bg-froota-wood dark:bg-white/5 rounded-[32px] lg:rounded-[40px] border border-black/5 dark:border-white/5"
            >
              <div className="shrink-0 w-12 h-12 bg-white dark:bg-froota-dark rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg shadow-black/5">
                {section.icon}
              </div>
              <div className="space-y-2 lg:space-y-3">
                <h3 className="text-xl lg:text-2xl font-impact text-froota-dark dark:text-white uppercase tracking-tight">
                  {section.title}
                </h3>
                <p className="text-xs lg:text-sm text-froota-dark/60 dark:text-white/40 leading-relaxed font-medium">
                  {section.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-12 border-t border-black/5 dark:border-white/5 text-center"
        >
          <p className="text-sm text-froota-dark/40 dark:text-white/30">
            {language === 'hr' 
              ? 'Za sva pitanja vezana uz zaštitu podataka, kontaktirajte nas na info@froota.hr' 
              : 'For any questions regarding data protection, contact us at info@froota.hr'}
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default PrivacyPage;

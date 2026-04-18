
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import FreshBar from './components/FreshBar';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import PremiumBackground from './components/GraffitiBackground';
import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

// New Pages
import ProductsPage from './pages/ProductsPage';
import SpecialDeliveryPage from './pages/SpecialDeliveryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

type View = 'home' | 'products' | 'special-delivery' | 'contact' | 'privacy';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState<View>('home');

  // Hash-based Router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash === 'products') setCurrentView('products');
      else if (hash === 'special-delivery') setCurrentView('special-delivery');
      else if (hash === 'contact') setCurrentView('contact');
      else if (hash === 'privacy') setCurrentView('privacy');
      else setCurrentView('home');

      // Scroll to top on view change
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen font-sans text-slate-900 dark:text-white transition-colors duration-500 selection:bg-froota-pink selection:text-white relative">
          {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

          <CustomCursor />
          <PremiumBackground />

          <Navbar currentView={currentView} />

          <main className="relative z-10">
            {currentView === 'home' && (
              <div className="animate-in fade-in duration-1000">
                <Hero />
                <HowItWorks />
                <MenuSection />
                <FreshBar />
              </div>
            )}

            {/* {currentView === 'products' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <ProductsPage />
              </div>
            )} */}

            {currentView === 'special-delivery' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <SpecialDeliveryPage />
              </div>
            )}

            {currentView === 'contact' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <ContactPage />
              </div>
            )}

            {currentView === 'privacy' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <PrivacyPage />
              </div>
            )}
          </main>

          <Footer />
          <CookieConsent />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

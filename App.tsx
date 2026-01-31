
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import ModelDetails from './pages/ModelDetails';
import Biochemistry from './pages/Biochemistry';
import { LanguageProvider, useLanguage } from './LanguageContext';


const Navbar: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  if (location.pathname === '/') return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <Link to="/" className="flex items-center space-x-4 bg-white/70 backdrop-blur-2xl border border-white/20 px-8 py-3 rounded-full shadow-2xl group transition-all duration-500 hover:scale-105 active:scale-95">
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <img src="/images/logo.png" alt="Flowform" className="w-8 h-8 object-contain group-hover:rotate-[360deg] transition-transform duration-1000" />
          </div>
          <span className="font-black text-xs uppercase tracking-[0.3em] text-neutral-900 border-l border-neutral-200 pl-4">Flowform</span>
        </Link>

        <div className="hidden md:flex space-x-4 items-center bg-white/70 backdrop-blur-2xl border border-white/20 p-2 rounded-full shadow-2xl">
          <div className="flex space-x-1 px-4">
            <Link
              to="/category/vitalization"
              className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${location.pathname.includes('/vitalization') ? 'bg-neutral-950 text-white shadow-xl' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              {t('nav_vitalization')}
            </Link>
            <Link
              to="/category/industrial"
              className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${location.pathname.includes('/industrial') ? 'bg-neutral-950 text-white shadow-xl' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              {t('nav_industrial')}
            </Link>
            <Link
              to="/category/municipal"
              className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${location.pathname.includes('/municipal') ? 'bg-neutral-950 text-white shadow-xl' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              {t('nav_municipal')}
            </Link>
          </div>

          <div className="w-px h-6 bg-neutral-200/50"></div>

          {/* Language Toggle */}
          <div className="flex items-center bg-neutral-100/50 rounded-full p-1 border border-neutral-200/50">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest transition-all duration-300 ${language === 'en' ? 'bg-white text-neutral-900 shadow-lg' : 'text-neutral-400 hover:text-neutral-600'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest transition-all duration-300 ${language === 'es' ? 'bg-white text-neutral-900 shadow-lg' : 'text-neutral-400 hover:text-neutral-600'}`}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;

  return (
    <footer className="bg-neutral-950 text-white py-24 relative overflow-hidden bg-grid-technical border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl mx-auto flex items-center justify-center mb-8">
          <img src="/images/logo.png" alt="Logo" className="w-6 h-6 object-contain opacity-50" />
        </div>
        <p className="text-neutral-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Flowform Eco-Technology Research</p>
        <div className="w-12 h-px bg-white/10 mx-auto mb-6"></div>
        <p className="text-neutral-500 text-[10px] max-w-xl mx-auto leading-loose uppercase tracking-widest font-medium opacity-60">
          Advanced biomimetic solutions for structural and biochemical water stabilization. <br />
          Supporting global ecological restoration since 1970.
        </p>
        <div className="mt-12 text-[9px] font-black text-neutral-600 uppercase tracking-widest leading-none">
          © {new Date().getFullYear()} Flowform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/model/:category/:id" element={<ModelDetails />} />
          <Route path="/biochemistry/:category" element={<Biochemistry />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;


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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">Flowform <span className="text-teal-600">Eco-Tech</span></span>
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link 
              to="/category/vitalization" 
              className={`text-xs font-black uppercase tracking-widest transition-colors ${location.pathname.includes('/vitalization') ? 'text-teal-600' : 'text-slate-500 hover:text-teal-600'}`}
            >
              {t('nav_vitalization')}
            </Link>
            <Link 
              to="/category/industrial" 
              className={`text-xs font-black uppercase tracking-widest transition-colors ${location.pathname.includes('/industrial') ? 'text-orange-600' : 'text-slate-500 hover:text-orange-600'}`}
            >
              {t('nav_industrial')}
            </Link>
            <Link 
              to="/category/municipal" 
              className={`text-xs font-black uppercase tracking-widest transition-colors ${location.pathname.includes('/municipal') ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
            >
              {t('nav_municipal')}
            </Link>
            
            <div className="w-px h-6 bg-slate-200 mx-2"></div>
            
            {/* Language Toggle */}
            <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${language === 'en' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${language === 'es' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                ES
              </button>
            </div>
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
    <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Flowform Eco-Technology Research</p>
        <p className="text-slate-500 text-[10px] mt-4 max-w-xl mx-auto leading-relaxed">Advanced biomimetic solutions for structural and biochemical water stabilization. Supporting global ecological restoration since 1970.</p>
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

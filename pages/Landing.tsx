
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Landing: React.FC = () => {
  const { t, setLanguage, language } = useLanguage();
  const navigate = useNavigate();

  const categoryThemes: Record<string, string> = {
    vitalization: 'neutral',
    industrial: 'zinc',
    municipal: 'stone'
  };

  const categories = [
    {
      id: 'vitalization',
      title: t('landing_vitalization_title'),
      desc: t('landing_vitalization_desc'),
      image: '/images/whirlpool-petg.png',
      color: 'neutral'
    },
    {
      id: 'industrial',
      title: t('landing_industrial_title'),
      desc: t('landing_industrial_desc'),
      image: '/images/vortex.png',
      color: 'zinc'
    },
    {
      id: 'municipal',
      title: t('landing_municipal_title'),
      desc: t('landing_municipal_desc'),
      image: '/images/vortex-municipal.png',
      color: 'stone'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">

      {/* Decorative Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950 pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-neutral-800/20 rounded-full blur-[120px] pulse-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] pulse-slow"></div>

      {/* Language Selector - Top Right */}
      <div className="absolute top-8 right-8 z-20 flex space-x-3">
        <button onClick={() => setLanguage('en')} className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${language === 'en' ? 'bg-white text-neutral-950 shadow-2xl' : 'text-neutral-500 border border-white/5 hover:border-white/20 hover:text-white'}`}>EN</button>
        <button onClick={() => setLanguage('es')} className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${language === 'es' ? 'bg-white text-neutral-950 shadow-2xl' : 'text-neutral-500 border border-white/5 hover:border-white/20 hover:text-white'}`}>ES</button>
      </div>

      <div className="max-w-7xl w-full z-10 text-center">
        <header className="mb-24">
          <div className="w-20 h-20 mx-auto rounded-[1.5rem] bg-white text-neutral-950 flex items-center justify-center mb-8 shadow-2xl overflow-hidden animate-fadeIn">
            <img src="/images/logo.png" alt="Flowform Logo" className="w-12 h-12 object-contain" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none animate-fadeIn uppercase" style={{ animationDelay: '100ms' }}>
            {t('landing_title')}
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 font-medium tracking-tight max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '200ms' }}>{t('landing_subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/category/${cat.id}`)}
              className="group relative bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] text-left hover:bg-white transition-all duration-700 transform hover:-translate-y-2 shadow-2xl overflow-hidden animate-fadeIn"
              style={{ animationDelay: `${300 + idx * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-${cat.color}-600/20 group-hover:bg-transparent transition-colors duration-700 z-10`}></div>
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-10">
                <h2 className="text-2xl font-black mb-3 tracking-tight leading-none text-white group-hover:text-neutral-950 transition-colors">{cat.title}</h2>
                <p className="text-neutral-400 group-hover:text-neutral-600 leading-relaxed mb-8 text-sm font-medium transition-colors">{cat.desc}</p>
                <div className={`inline-flex items-center text-white p-3 rounded-full bg-white/5 group-hover:bg-neutral-100 group-hover:text-neutral-900 font-black uppercase transition-all tracking-[0.2em] text-[10px]`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 7l5 5-5 5M6 7l5 5-5 5" strokeWidth={3} /></svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;

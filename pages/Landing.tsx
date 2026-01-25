
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Landing: React.FC = () => {
  const { t, setLanguage, language } = useLanguage();
  const navigate = useNavigate();

  const categories = [
    {
      id: 'vitalization',
      title: t('landing_vitalization_title'),
      desc: t('landing_vitalization_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
        </svg>
      ),
      color: 'teal'
    },
    {
      id: 'industrial',
      title: t('landing_industrial_title'),
      desc: t('landing_industrial_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'orange'
    },
    {
      id: 'municipal',
      title: t('landing_municipal_title'),
      desc: t('landing_municipal_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'blue'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-teal-500 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-500 blur-3xl rounded-full"></div>
      </div>

      {/* Language Selector - Top Right */}
      <div className="absolute top-8 right-8 z-20 flex space-x-3">
        <button onClick={() => setLanguage('en')} className={`px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${language === 'en' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 border border-white/10 hover:border-white/30 hover:text-white'}`}>EN</button>
        <button onClick={() => setLanguage('es')} className={`px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${language === 'es' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 border border-white/10 hover:border-white/30 hover:text-white'}`}>ES</button>
      </div>

      <div className="max-w-7xl w-full z-10 text-center">
        <header className="mb-20">
          <div className="w-24 h-24 mx-auto rounded-[2rem] bg-white text-slate-900 flex items-center justify-center mb-10 shadow-2xl">
            <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C12 2 8 6 8 10c0 2.21 1.79 4 4 4s4-1.79 4-4c0-4-4-8-4-8z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v8M8 18c0 2.21 1.79 4 4 4s4-1.79 4-4" />
            </svg>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            {t('landing_title')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium tracking-tight max-w-4xl mx-auto leading-relaxed">{t('landing_subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/category/${cat.id}`)}
              className="group relative bg-white/5 border border-white/10 p-12 rounded-[3.5rem] text-left hover:bg-white hover:text-slate-900 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl"
            >
              <div className={`mb-8 w-16 h-16 rounded-2xl bg-${cat.color}-500/20 flex items-center justify-center group-hover:bg-${cat.color}-600 transition-colors`}>
                <div className={`text-${cat.color}-400 group-hover:text-white`}>
                  {cat.icon}
                </div>
              </div>
              <h2 className="text-3xl font-black mb-4 tracking-tight leading-none">{cat.title}</h2>
              <p className="text-slate-400 group-hover:text-slate-600 leading-relaxed mb-10 text-lg font-medium">{cat.desc}</p>
              <div className={`inline-flex items-center text-${cat.color}-500 font-black uppercase tracking-[0.2em] text-[10px]`}>
                {t('btn_explore')}
                <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 7l5 5-5 5M6 7l5 5-5 5" strokeWidth={3} /></svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;

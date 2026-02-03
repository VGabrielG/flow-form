
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import AnimatedPulsePill from '../components/AnimatedPulsePill';


const Landing: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Gradient Overlays for Premium Look */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none z-[1]"></div>

      <div className="max-w-7xl w-full z-10 text-center pt-32 pb-20 relative">
        <header className="mb-16">
          <h1
            className="text-5xl md:text-8xl font-black text-neutral-950 mb-12 tracking-[0.12em] leading-tight animate-fadeIn uppercase font-outfit"
            style={{ animationDelay: '100ms' }}
          >
            FLOWFORM
          </h1>

          <div className="mb-16 animate-fadeIn grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto" style={{ animationDelay: '200ms' }}>
            {[
              { label: t('nav_mining'), path: '/mining', color: 'hover:border-blue-500' },
              { label: t('nav_meat'), path: '/meat-industry', color: 'hover:border-green-500' },
              { label: t('nav_winery'), path: '/winery', color: 'hover:border-red-500' },
              { label: t('nav_municipalities'), path: '/municipalities', color: 'hover:border-cyan-500' }
            ].map((industry) => (
              <button
                key={industry.path}
                onClick={() => navigate(industry.path)}
                className={`group relative px-6 py-5 bg-white text-neutral-950 border border-neutral-200 rounded-3xl overflow-hidden shadow-xl transition-all hover:scale-105 hover:bg-neutral-950 hover:text-white ${industry.color}`}
              >
                <span className="relative font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px]">
                  {industry.label}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-center mb-16 animate-fadeIn" style={{ animationDelay: '300ms' }}>
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/10 border-[8px] border-white bg-neutral-100">
              <iframe
                width="1000"
                height="562"
                src="https://www.youtube.com/embed/zNYkAv-ccXw?si=55mR_8hnJK5MWvIW&autoplay=1&mute=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-[95vw] md:w-[1000px] aspect-video h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mb-32 px-6 animate-fadeIn" style={{ animationDelay: '400ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-left">
                <AnimatedPulsePill
                  label={t('core_tech_label')}
                  color="white"
                />

                <h2 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tighter leading-tight">
                  What is Flowform?
                </h2>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-xl">
                  {t('landing_main_desc')}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 text-left">
                {[
                  { id: '01', title: 'Natural Oxygenation', desc: 'Restores dissolved oxygen levels naturally through rhythmic pulse actions.' },
                  { id: '02', title: 'Water Revitalization', desc: 'Realigns water structure for improved biological absorption and health.' },
                  { id: '03', title: 'Aesthetic Harmony', desc: 'Creates stunning visual and auditory landscapes that promote relaxation.' }
                ].map((item) => (
                  <div key={item.id} className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800 hover:border-neutral-600 transition-all group">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center text-sm mr-4 font-black">{item.id}</span>
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 pl-14 group-hover:text-neutral-300 transition-colors leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mb-32 px-6 animate-fadeIn" style={{ animationDelay: '500ms' }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-6 uppercase">
                {t('how_it_works_title')}
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                {t('how_it_works_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { step: 1, title: 'step_1_title', desc: 'step_1_desc' },
                { step: 2, title: 'step_2_title', desc: 'step_2_desc' },
                { step: 3, title: 'step_3_title', desc: 'step_3_desc' },
                { step: 4, title: 'step_4_title', desc: 'step_4_desc' }
              ].map((item, idx) => (
                <div key={item.step} className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800 relative group hover:border-neutral-600 transition-all">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-neutral-900 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-white mb-3 mt-2">{t(item.title)}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t(item.desc)}</p>
                  </div>
                  {idx < 3 && (
                    <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-neutral-600 hidden lg:block">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto mb-32 px-6 animate-fadeIn" style={{ animationDelay: '600ms' }}>
            <div className="bg-neutral-50 rounded-[4rem] p-12 md:p-24 border border-neutral-100 flex flex-col md:flex-row items-center gap-16 text-left">
              <div className="flex-1 space-y-8">
                <AnimatedPulsePill
                  label={language === 'es' ? 'Sector de Élite' : 'Elite Sector'}
                  color="red"
                  className="mb-8"
                />

                <h2 className="text-5xl font-black text-neutral-900 tracking-tighter leading-tight uppercase">
                  {t('winery_title')}
                </h2>
                <p className="text-xl text-neutral-500 font-medium leading-relaxed">
                  {t('winery_desc')}
                </p>
                <button
                  onClick={() => navigate('/winery')}
                  className="px-10 py-4 bg-neutral-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-red-900 transition-colors shadow-xl"
                >
                  {language === 'es' ? 'VER ANÁLISIS TÉCNICO' : 'VIEW TECHNICAL ANALYSIS'}
                </button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                {[
                  { value: '100%', label: language === 'es' ? 'OLORES' : 'ODORS' },
                  { value: '6.3 ppm', label: language === 'es' ? 'OXÍGENO' : 'OXYGEN' },
                  { value: '+32.5%', label: language === 'es' ? 'BIOMASA' : 'BIOMASS' },
                  { value: '+22%', label: language === 'es' ? 'NUTRIENTES' : 'NUTRIENTS' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm text-center">
                    <div className="text-3xl font-black text-red-900 mb-2">{stat.value}</div>
                    <div className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mb-32 px-6 animate-fadeIn" style={{ animationDelay: '700ms' }}>
            <div className="bg-gradient-to-br from-slate-950 to-cyan-950 rounded-[4rem] p-12 md:p-24 border border-cyan-900/30 flex flex-col md:flex-row items-center gap-16 text-left shadow-2xl">
              <div className="flex-1 space-y-8">
                <AnimatedPulsePill
                  label={language === 'es' ? 'SECTOR INDUSTRIAL' : 'INDUSTRIAL SECTOR'}
                  color="cyan"
                  className="mb-8"
                />

                <h2 className="text-5xl font-black text-white tracking-tighter leading-tight uppercase">
                  {t('mining_title')}
                </h2>
                <p className="text-xl text-slate-300 font-medium leading-relaxed">
                  {t('mining_desc')}
                </p>
                <button
                  onClick={() => navigate('/mining')}
                  className="px-10 py-4 bg-cyan-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-cyan-500 transition-colors shadow-xl"
                >
                  {language === 'es' ? 'VER EVIDENCIA CIENTÍFICA' : 'VIEW SCIENTIFIC EVIDENCE'}
                </button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                {[
                  { value: '92%', label: language === 'es' ? 'NITRÓGENO' : 'NITROGEN' },
                  { value: '6.3 ppm', label: language === 'es' ? 'OD (OXÍGENO)' : 'DO (OXYGEN)' },
                  { value: '100%', label: language === 'es' ? 'OLORES' : 'ODORS' },
                  { value: '99.9%', label: language === 'es' ? 'PATÓGENOS' : 'PATHOGENS' }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-cyan-800/30 shadow-xl text-center">
                    <div className="text-3xl font-black text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Landing;

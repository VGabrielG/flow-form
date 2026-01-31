
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MODELS_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { language, t } = useLanguage();
  const cat = category || 'vitalization';
  const models = MODELS_DATA[language][cat] || [];
  const chartData = models.map((m: any) => ({ name: m.id.toUpperCase().split('-')[0], lph: m.lph }));

  const categoryThemes: Record<string, string> = {
    vitalization: 'neutral',
    industrial: 'zinc',
    municipal: 'stone'
  };

  const themeColor = categoryThemes[cat] || 'neutral';

  const catImages: Record<string, string> = {
    vitalization: '/images/whirlpool-petg.png',
    industrial: '/images/vortex.png',
    municipal: '/images/vortex-municipal.png'
  };

  const heroImage = catImages[cat] || catImages.vitalization;

  return (
    <div className="animate-fadeIn bg-white-dots min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden text-neutral-950 border-b border-neutral-100">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">

            <h1 className="text-5xl md:text-8xl font-black leading-none mb-8 tracking-tighter text-neutral-950 uppercase">
              {t(`landing_${cat}_title`)}
            </h1>
            <p className="text-xl text-neutral-500 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              {t(`landing_${cat}_desc`)}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#models" className={`bg-neutral-950 text-white hover:bg-neutral-800 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl`}>
                {t('btn_explore')}
              </a>
              <Link to={`/biochemistry/${cat}`} className="bg-neutral-100 text-neutral-900 hover:bg-neutral-200 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all border border-neutral-200">
                {t('btn_research')}
              </Link>
            </div>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className={`absolute -inset-4 bg-${themeColor}-600/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
            <img
              src={heroImage}
              alt={t(`landing_${cat}_title`)}
              className="relative rounded-[2.5rem] shadow-2xl border border-neutral-100 w-full h-[600px] object-cover animate-float"
            />
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section id="models" className="py-32 max-w-7xl mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-black text-neutral-900 mb-6 tracking-tight uppercase">{t('grid_title')}</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            {t('grid_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {models.map((model: any) => (
            <Link
              key={model.id}
              to={`/model/${cat}/${model.id}`}
              className="group bg-neutral-950 text-white rounded-[2.5rem] border border-white/5 shadow-2xl hover:shadow-white/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img src={model.imageUrl} alt={model.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute top-6 right-6">
                  <div className="bg-neutral-950/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/10">
                    <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest leading-none mb-1">{t('lph')}</div>
                    <div className="text-sm font-black text-white">{model.lph.toLocaleString()}</div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className={`text-2xl font-black text-white mb-3 group-hover:text-${themeColor}-400 transition-colors tracking-tight`}>{model.name}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {model.industries.slice(0, 3).map((ind: string, i: number) => (
                    <span key={i} className="text-[9px] bg-white/5 text-neutral-400 border border-white/5 px-3 py-1 rounded-full font-black uppercase tracking-widest">{ind}</span>
                  ))}
                </div>
                <p className="text-neutral-400 text-sm line-clamp-2 mb-8 font-medium leading-relaxed">
                  {model.description}
                </p>
                <div className={`flex items-center text-${themeColor}-400 font-black uppercase tracking-widest text-[10px] space-x-2`}>
                  <span>{language === 'es' ? 'Ver Especificaciones' : 'View Technical Specs'}</span>
                  <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 7l5 5-5 5M6 7l5 5-5 5" strokeWidth={3} /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Farming Section - For Agricultural Sectors */}
      {cat === 'vitalization' && (
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className={`bg-neutral-950 rounded-[3.5rem] p-12 md:p-20 border border-white/5 relative overflow-hidden shadow-2xl text-white`}>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="relative z-10 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t('farming_title')}</h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-medium leading-relaxed">
                  {t('farming_subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-start space-x-5 bg-white/5 p-8 rounded-[2rem] shadow-sm border border-white/5 hover:bg-white/10 transition-colors">
                    <div className={`w-10 h-10 rounded-xl bg-${themeColor}-600/20 text-${themeColor}-400 flex-shrink-0 flex items-center justify-center`}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-200 font-bold text-base leading-snug">{t(`farming_item_${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Landscape Section - For Aesthetic/Public Sectors */}
      {cat === 'municipal' && (
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className={`bg-neutral-950 rounded-[3.5rem] p-12 md:p-20 border border-white/5 relative overflow-hidden shadow-2xl bg-grid-technical`}>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="relative z-10 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t('landscape_title')}</h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-medium leading-relaxed">
                  {t('landscape_subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group p-10 rounded-[2.5rem] bg-white/5 hover:bg-white-dots transition-all duration-500 border border-white/5 hover:border-white shadow-xl">
                    <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-white-dots text-neutral-950 group-hover:bg-neutral-900 group-hover:text-white transition-colors shadow-lg`}>
                      {i === 1 && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                      {i === 2 && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      {i === 3 && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
                    </div>
                    <p className="text-white group-hover:text-neutral-900 text-lg font-black leading-tight transition-colors">{t(`landscape_item_${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}



      {/* Recommended Solutions Section */}
      <section className="py-32 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-neutral-900 mb-12 tracking-tight">
            {language === 'es' ? 'Otras Soluciones Recomendadas' : 'Other Recommended Solutions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {Object.keys(MODELS_DATA[language])
              .filter(key => key !== cat)
              .map(otherCat => {
                const recommendation = MODELS_DATA[language][otherCat][0];
                return (
                  <Link
                    key={otherCat}
                    to={`/category/${otherCat}`}
                    className="group relative h-96 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-4"
                  >
                    <img
                      src={recommendation.imageUrl}
                      alt={recommendation.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 text-left">

                      <h3 className="text-3xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors">
                        {language === 'es' ? `Ver ${t(`landing_${otherCat}_title`)}` : `Explore ${t(`landing_${otherCat}_title`)}`}
                      </h3>
                      <div className="inline-flex items-center space-x-3 text-white font-black uppercase tracking-widest text-[10px]">
                        <span>{language === 'es' ? 'Descubrir Más' : 'Discover More'}</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

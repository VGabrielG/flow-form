
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MODELS_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const ModelDetails: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const { language, t } = useLanguage();
  const cat = category || 'vitalization';
  const models = MODELS_DATA[language][cat] || [];
  const model = models.find((m: any) => m.id === id);

  const categoryThemes: Record<string, string> = {
    vitalization: 'teal',
    industrial: 'orange',
    municipal: 'blue'
  };

  const themeColor = categoryThemes[cat] || 'teal';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!model) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('model_not_found') || 'Model not found'}</h2>
        <Link to="/" className="text-teal-600 font-bold hover:underline">{t('back_home') || 'Go Back Home'}</Link>
      </div>
    </div>
  );

  return (
    <div className="animate-fadeIn pb-20 bg-slate-50">
      {/* Header Banner */}
      <div className="bg-slate-900 pt-16 pb-32 text-white relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-1/2 h-full bg-${themeColor}-600/10 blur-[120px] rounded-full -mr-64`}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link to={`/category/${cat}`} className={`text-${themeColor}-400 flex items-center mb-8 text-sm font-bold uppercase tracking-widest hover:text-${themeColor}-300 transition-colors`}>
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" /></svg>
            {t('back_models')}
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">{model.name}</h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">{model.description}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex items-center space-x-10 shadow-2xl">
               <div className="text-center">
                  <div className={`text-4xl font-black text-${themeColor}-400 mb-1`}>{model.lph.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">{t('capacity_label')}</div>
               </div>
               <div className="w-px h-16 bg-white/10"></div>
               <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1">{model.pumpHP.split(' ')[0]}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">{t('motor_hp')}</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* The Biological Heart: System Logic */}
            <section className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
               <div className="flex items-center space-x-4 mb-10">
                  <div className={`w-12 h-12 rounded-2xl bg-${themeColor}-600 flex items-center justify-center text-white shadow-lg shadow-${themeColor}-600/20`}>
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t('glossary_title')}</h2>
               </div>

               <div className="grid grid-cols-1 gap-6 relative">
                  <div className="flex gap-6 group">
                     <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black z-10 shrink-0">1</div>
                        <div className="w-1 h-full bg-slate-100 my-2"></div>
                     </div>
                     <div className="pb-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t('step_1_title')}</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">{t('step_1_desc')}</p>
                     </div>
                  </div>
                  <div className="flex gap-6 group">
                     <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full bg-${themeColor}-600 text-white flex items-center justify-center font-black z-10 shrink-0 shadow-lg`}>2</div>
                        <div className="w-1 h-full bg-slate-100 my-2"></div>
                     </div>
                     <div className="pb-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t('step_2_title')}</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">{t('step_2_desc')}</p>
                     </div>
                  </div>
                  <div className="flex gap-6 group">
                     <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black z-10 shrink-0">3</div>
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t('step_3_title')}</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">{t('step_3_desc')}</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* The 14-Day Shift Explanation */}
            <section className={`bg-${themeColor}-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden`}>
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
               <div className="relative z-10">
                  <h2 className="text-3xl font-black mb-6 tracking-tight">{t('shift_title')}</h2>
                  <p className="text-lg text-white/80 leading-relaxed mb-8 font-medium">
                     {t('shift_desc')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div className="text-[10px] font-black text-white/50 uppercase mb-4 tracking-widest">{language === 'es' ? 'FASE 1: PUTREFACCIÓN' : 'PHASE 1: PUTREFACTION'}</div>
                        <div className="flex items-center text-red-400 font-bold mb-2">
                           <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" /></svg>
                           {language === 'es' ? 'Carga Anaeróbica' : 'Anaerobic Load'}
                        </div>
                        <p className="text-xs text-white/60 font-medium">{language === 'es' ? 'Días 1-7: Se rompen los gases tóxicos. El agua huele mal pero el O2 sube.' : 'Days 1-7: Toxic gases break down. Water smells but O2 rises.'}</p>
                     </div>
                     <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div className="text-[10px] font-black text-white/50 uppercase mb-4 tracking-widest">{language === 'es' ? 'FASE 2: RESPIRACIÓN' : 'PHASE 2: RESPIRATION'}</div>
                        <div className={`flex items-center text-${themeColor}-400 font-bold mb-2`}>
                           <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                           {language === 'es' ? 'Dominio Aeróbico' : 'Aerobic Dominance'}
                        </div>
                        <p className="text-xs text-white/60 font-medium">{language === 'es' ? 'Días 14+: Las bacterias buenas dominan. El sistema se estabiliza solo.' : 'Days 14+: Good bacteria dominate. System stabilizes itself.'}</p>
                     </div>
                  </div>
               </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center">
                     <div className={`w-1.5 h-6 bg-${themeColor}-500 rounded-full mr-3`}></div>
                     {t('benefits_title')}
                  </h3>
                  <div className="space-y-4">
                     {model.benefits.map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-start">
                           <svg className={`w-5 h-5 mr-3 text-${themeColor}-500 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                           <span className="text-slate-700 font-medium">{benefit}</span>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center">
                     <div className="w-1.5 h-6 bg-slate-900 rounded-full mr-3"></div>
                     {t('milestones_title')}
                  </h3>
                  <div className="space-y-6">
                     {model.milestones ? (
                       <>
                         <div className="p-4 bg-slate-50 rounded-xl">
                            <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">{t('milestone_time')}</div>
                            <div className="text-2xl font-black text-slate-900">{model.milestones.time}</div>
                         </div>
                         <div className="p-4 bg-slate-50 rounded-xl">
                            <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">{t('milestone_result')}</div>
                            <div className={`text-lg font-bold text-${themeColor}-600`}>{model.milestones.result}</div>
                         </div>
                       </>
                     ) : (
                       <div className="p-8 text-center text-slate-400 italic">
                         {language === 'es' ? 'Datos de hitos no disponibles para este modelo.' : 'Milestone data currently unavailable for this model.'}
                       </div>
                     )}
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className={`bg-${themeColor}-900 p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16`}></div>
              <h3 className="text-lg font-bold mb-8 flex items-center">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {language === 'es' ? 'Conceptos Técnicos' : 'Technical Concepts'}
              </h3>
              <div className="space-y-8">
                <div>
                   <div className="text-[10px] font-black text-white/40 uppercase mb-2 tracking-[0.2em]">{t('def_unit_title') || 'Sector Unit'}</div>
                   <div className="text-xs text-white/80 leading-relaxed font-medium">{language === 'es' ? 'Una cascada de 7 unidades crea la resonancia necesaria.' : 'A 7-unit cascade creates necessary resonance.'}</div>
                </div>
                <div>
                   <div className="text-[10px] font-black text-white/40 uppercase mb-2 tracking-[0.2em]">{t('def_time_title') || 'Retention Time'}</div>
                   <div className="text-xs text-white/80 leading-relaxed font-medium">{language === 'es' ? 'Impacto acumulativo mediante operación continua.' : 'Cumulative impact via continuous operation.'}</div>
                </div>
                <div>
                   <div className="text-[10px] font-black text-white/40 uppercase mb-2 tracking-[0.2em]">{t('def_flow_title') || 'Flow Velocity'}</div>
                   <div className="text-xs text-white/80 leading-relaxed font-medium">{language === 'es' ? 'Velocidad de lemniscata necesaria para oxigenación.' : 'Lemniscate velocity required for oxygenation.'}</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-black text-slate-900 mb-8 flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                {t('pump_req')}
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">{t('spec_flow_h')}</div>
                  <div className="text-3xl font-black text-slate-900">{model.lph.toLocaleString()} <span className="text-sm text-slate-400 font-bold">{t('lph')}</span></div>
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">{t('pump_desc')}</div>
                  <div className={`text-2xl font-black text-${themeColor}-600`}>{model.minLPM} {t('lpm')}</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl shadow-xl text-white">
              <h3 className="text-lg font-black mb-8 flex items-center">
                <svg className={`w-5 h-5 mr-3 text-${themeColor}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                {t('energy_label')}
              </h3>
              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                   <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('motor_hp')}</div>
                   <div className={`text-3xl font-black text-${themeColor}-400`}>{model.pumpHP}</div>
                </div>
                <div className="flex justify-between items-end">
                   <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('energy_cons')}</div>
                   <div className="text-xl font-bold text-white">~ {parseFloat(model.pumpHP) ? (parseFloat(model.pumpHP) * 0.745).toFixed(2) : 'N/A'} kW/h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;

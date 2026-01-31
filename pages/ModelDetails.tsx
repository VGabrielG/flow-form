
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

   const themeHex = cat === 'vitalization' ? '#404040' : cat === 'industrial' ? '#52525b' : '#57534e';
   const themeColor = cat === 'vitalization' ? 'neutral' : cat === 'industrial' ? 'zinc' : 'stone';

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [id]);

   if (!model) return (
      <div className="min-h-screen flex items-center justify-center bg-white-dots">
         <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">{t('model_not_found') || 'Model not found'}</h2>
            <Link to="/" className="text-neutral-600 font-bold hover:underline">{t('back_home') || 'Go Back Home'}</Link>
         </div>
      </div>
   );

   return (
      <div className="animate-fadeIn pb-32 bg-white-dots min-h-screen">
         {/* Header Banner */}
         <div className="pt-24 pb-48 text-neutral-950 relative overflow-hidden border-b border-neutral-100">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
               <Link to={`/category/${cat}`} className={`text-${themeColor}-600 flex items-center justify-center mb-12 text-[10px] font-black uppercase tracking-[0.3em] hover:text-${themeColor}-500 transition-colors group`}>
                  <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 17l-5-5m0 0l5-5m-5 5h12" strokeWidth={3} /></svg>
                  {t('back_models')}
               </Link>

               <div className="text-center max-w-4xl mx-auto mb-20">

                  <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none text-neutral-950 uppercase">{model.name}</h1>
                  <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-3xl mx-auto">{model.description}</p>
               </div>

               <div className="flex flex-col items-center gap-16">
                  <div className="relative group">
                     <div className={`absolute -inset-10 bg-${themeColor}-600/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
                     <img src={model.imageUrl} alt={model.name} className="relative w-[500px] h-[500px] object-cover rounded-[4rem] shadow-2xl border border-neutral-100" />
                  </div>

                  <div className="bg-neutral-950 backdrop-blur-2xl border border-white/5 p-12 rounded-[4rem] flex flex-wrap justify-center items-center gap-12 md:gap-24 shadow-2xl">
                     <div className="text-center">
                        <div className={`text-6xl font-black text-${themeColor}-400 mb-2 leading-none`}>{model.lph.toLocaleString()}</div>
                        <div className="text-[10px] text-neutral-500 uppercase font-black tracking-[0.2em]">{t('capacity_label')}</div>
                     </div>
                     <div className="hidden md:block w-px h-20 bg-white/10"></div>
                     <div className="text-center">
                        <div className="text-6xl font-black text-white mb-2 leading-none">{model.pumpHP.split(' ')[0]}</div>
                        <div className="text-[10px] text-neutral-500 uppercase font-black tracking-[0.2em]">{t('motor_hp')}</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

               {/* Main Body */}
               <div className="lg:col-span-8 space-y-16">

                  {/* The Biological Heart: System Logic */}
                  <section className="bg-neutral-950 p-12 md:p-16 rounded-[4rem] shadow-2xl border border-white/5 text-white">
                     <div className="flex items-center space-x-5 mb-14">
                        <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-neutral-950 shadow-xl`}>
                           <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                        </div>
                        <h2 className="text-4xl font-black text-white tracking-tight">{t('glossary_title')}</h2>
                     </div>

                     <div className="grid grid-cols-1 gap-10 relative">
                        <div className="flex gap-10 group">
                           <div className="flex flex-col items-center">
                              <div className="w-12 h-12 rounded-full bg-white text-neutral-950 flex items-center justify-center font-black z-10 shrink-0 text-lg shadow-lg">01</div>
                              <div className="w-1.5 h-full bg-white/10 my-2 rounded-full"></div>
                           </div>
                           <div className="pb-10">
                              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{t('step_1_title')}</h3>
                              <p className="text-neutral-400 leading-relaxed font-medium text-lg">{t('step_1_desc')}</p>
                           </div>
                        </div>
                        <div className="flex gap-10 group">
                           <div className="flex flex-col items-center">
                              <div className={`w-12 h-12 rounded-full bg-${themeColor}-600 text-white flex items-center justify-center font-black z-10 shrink-0 text-lg shadow-xl shadow-${themeColor}-600/20`}>02</div>
                              <div className="w-1.5 h-full bg-white/10 my-2 rounded-full"></div>
                           </div>
                           <div className="pb-10">
                              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{t('step_2_title')}</h3>
                              <p className="text-neutral-400 leading-relaxed font-medium text-lg">{t('step_2_desc')}</p>
                           </div>
                        </div>
                        <div className="flex gap-10 group">
                           <div className="flex flex-col items-center">
                              <div className="w-12 h-12 rounded-full bg-white text-neutral-950 flex items-center justify-center font-black z-10 shrink-0 text-lg shadow-lg">03</div>
                           </div>
                           <div>
                              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{t('step_3_title')}</h3>
                              <p className="text-neutral-400 leading-relaxed font-medium text-lg">{t('step_3_desc')}</p>
                           </div>
                        </div>
                     </div>
                  </section>

                  {/* The 14-Day Shift Explanation */}
                  <section className={`bg-neutral-900 rounded-[4rem] p-16 text-white shadow-2xl relative overflow-hidden`}>
                     <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-${themeColor}-600/10 to-transparent pointer-events-none"></div>
                     <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-black mb-6 tracking-tight">{t('shift_title')}</h2>
                        <p className="text-lg text-neutral-400 leading-relaxed font-medium">
                           {t('shift_desc')}
                        </p>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                        <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5 backdrop-blur-xl group hover:bg-white/10 transition-colors">
                           <div className="text-[10px] font-black text-neutral-500 uppercase mb-6 tracking-[0.3em]">{language === 'es' ? 'FASE 1: PUTREFACCIÓN' : 'PHASE 1: PUTREFACTION'}</div>
                           <div className="flex items-center text-red-400 font-black mb-4 text-xl tracking-tight">
                              {language === 'es' ? 'Carga Anaeróbica' : 'Anaerobic Load'}
                           </div>
                           <p className="text-sm text-neutral-400 font-medium leading-relaxed">{language === 'es' ? 'Días 1-7: Se rompen los gases tóxicos. El agua huele mal pero el O2 sube.' : 'Days 1-7: Toxic gases break down. Water smells but O2 rises.'}</p>
                        </div>
                        <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5 backdrop-blur-xl group hover:bg-white/10 transition-colors">
                           <div className="text-[10px] font-black text-neutral-500 uppercase mb-6 tracking-[0.3em]">{language === 'es' ? 'FASE 2: RESPIRACIÓN' : 'PHASE 2: RESPIRATION'}</div>
                           <div className={`flex items-center text-${themeColor}-400 font-black mb-4 text-xl tracking-tight`}>
                              {language === 'es' ? 'Dominio Aeróbico' : 'Aerobic Dominance'}
                           </div>
                           <p className="text-sm text-neutral-400 font-medium leading-relaxed">{language === 'es' ? 'Días 14+: Las bacterias buenas dominan. El sistema se estabiliza solo.' : 'Days 14+: Good bacteria dominate. System stabilizes itself.'}</p>
                        </div>
                     </div>
                  </section>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="bg-neutral-950 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl text-white">
                        <h3 className="text-xl font-black text-white mb-10 flex items-center">
                           <div className={`w-2 h-8 bg-${themeColor}-600 rounded-full mr-4`}></div>
                           {t('benefits_title')}
                        </h3>
                        <div className="space-y-6">
                           {model.benefits.map((benefit: string, idx: number) => (
                              <div key={idx} className="flex items-start group">
                                 <div className={`w-6 h-6 rounded-lg bg-white/5 text-${themeColor}-400 flex items-center justify-center mr-4 mt-1 shrink-0 group-hover:bg-${themeColor}-600 group-hover:text-white transition-colors`}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                 </div>
                                 <span className="text-neutral-400 font-medium text-lg leading-tight group-hover:text-white transition-colors">{benefit}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="bg-neutral-950 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl text-white">
                        <h3 className="text-xl font-black text-white mb-10 flex items-center">
                           <div className="w-2 h-8 bg-white rounded-full mr-4"></div>
                           {t('milestones_title')}
                        </h3>
                        <div className="space-y-8">
                           {model.milestones ? (
                              <>
                                 <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 shadow-inner">
                                    <div className="text-[10px] font-black text-neutral-500 uppercase mb-3 tracking-widest">{t('milestone_time')}</div>
                                    <div className="text-4xl font-black text-white tracking-tighter">{model.milestones.time}</div>
                                 </div>
                                 <div className="p-8 bg-neutral-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-white/10">
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-${themeColor}-600/10 rounded-full -mr-12 -mt-12`}></div>
                                    <div className="text-[10px] font-black text-neutral-500 uppercase mb-3 tracking-widest">{t('milestone_result')}</div>
                                    <div className={`text-2xl font-black text-${themeColor}-400 leading-tight`}>{model.milestones.result}</div>
                                 </div>
                              </>
                           ) : (
                              <div className="p-12 text-center text-neutral-500 italic font-medium">
                                 {language === 'es' ? 'Datos de hitos no disponibles para este modelo.' : 'Milestone data currently unavailable for this model.'}
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4 space-y-8">
                  <div className={`bg-neutral-900 p-12 rounded-[3.5rem] shadow-2xl text-white relative overflow-hidden`}>
                     <div className={`absolute top-0 right-0 w-full h-1.5 bg-${themeColor}-600`}></div>
                     <h3 className="text-xl font-black mb-12 flex items-center tracking-tight">
                        {language === 'es' ? 'Conceptos Técnicos' : 'Technical Concepts'}
                     </h3>
                     <div className="space-y-12">
                        <div className="group">
                           <div className="text-[9px] font-black text-neutral-500 uppercase mb-3 tracking-[0.3em] group-hover:text-${themeColor}-400 transition-colors">{t('def_unit_title') || 'Sector Unit'}</div>
                           <div className="text-sm text-neutral-400 leading-relaxed font-medium">{language === 'es' ? 'Una cascada de 7 unidades crea la resonancia necesaria.' : 'A 7-unit cascade creates necessary resonance.'}</div>
                        </div>
                        <div className="group">
                           <div className="text-[9px] font-black text-neutral-500 uppercase mb-3 tracking-[0.3em] group-hover:text-${themeColor}-400 transition-colors">{t('def_time_title') || 'Retention Time'}</div>
                           <div className="text-sm text-neutral-400 leading-relaxed font-medium">{language === 'es' ? 'Impacto acumulativo mediante operación continua.' : 'Cumulative impact via continuous operation.'}</div>
                        </div>
                        <div className="group">
                           <div className="text-[9px] font-black text-neutral-500 uppercase mb-3 tracking-[0.3em] group-hover:text-${themeColor}-400 transition-colors">{t('def_flow_title') || 'Flow Velocity'}</div>
                           <div className="text-sm text-neutral-400 leading-relaxed font-medium">{language === 'es' ? 'Velocidad de lemniscata necesaria para oxigenación.' : 'Lemniscate velocity required for oxygenation.'}</div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-neutral-950 p-12 rounded-[3.5rem] shadow-2xl border border-white/5 text-white">
                     <h3 className="text-xl font-black text-white mb-12 flex items-center tracking-tight">
                        {t('pump_req')}
                     </h3>
                     <div className="space-y-12">
                        <div>
                           <div className="text-[9px] font-black text-neutral-500 uppercase mb-3 tracking-[0.2em]">{t('spec_flow_h')}</div>
                           <div className="text-4xl font-black text-white tracking-tighter">{model.lph.toLocaleString()} <span className="text-sm text-neutral-500 font-bold ml-1">{t('lph')}</span></div>
                        </div>
                        <div className="pt-8 border-t border-white/5">
                           <div className="text-[9px] font-black text-neutral-500 uppercase mb-3 tracking-[0.2em]">{t('pump_desc')}</div>
                           <div className={`text-3xl font-black text-${themeColor}-400 tracking-tight`}>{model.minLPM} {t('lpm')}</div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-neutral-950 p-12 rounded-[3.5rem] shadow-2xl text-white relative overflow-hidden">
                     <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-${themeColor}-600/50`}></div>
                     <h3 className="text-xl font-black mb-12 flex items-center tracking-tight">
                        {t('energy_label')}
                     </h3>
                     <div className="space-y-10">
                        <div className="flex justify-between items-end border-b border-white/5 pb-6">
                           <div className="text-[9px] font-black text-neutral-500 uppercase tracking-widest">{t('motor_hp')}</div>
                           <div className={`text-4xl font-black text-${themeColor}-400 leading-none`}>{model.pumpHP}</div>
                        </div>
                        <div className="flex justify-between items-end">
                           <div className="text-[9px] font-black text-neutral-500 uppercase tracking-widest">{t('energy_cons')}</div>
                           <div className="text-2xl font-black text-white leading-none">~ {parseFloat(model.pumpHP) ? (parseFloat(model.pumpHP) * 0.745).toFixed(2) : 'N/A'} <span className="text-[10px] text-neutral-500 font-bold ml-1">kW/h</span></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>



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

export default ModelDetails;

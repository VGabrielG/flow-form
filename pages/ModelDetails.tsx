
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { MODELS_DATA } from '../constants';

const ModelDetails: React.FC = () => {
   const { category, id } = useParams<{ category: string; id: string }>();
   const { language, t } = useLanguage();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [id, category]);

   const categoryMap: Record<string, string> = {
      'farming': 'industrial',
      'landscaping': 'municipal',
      'living': 'vitalization'
   };
   const dataCategory = categoryMap[category || ''] || category || 'vitalization';
   const categoryData = MODELS_DATA[language][dataCategory];
   const product = categoryData?.find(m => m.id === id);

   if (!product) {
      return (
         <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
               <h2 className="text-2xl font-bold mb-4">Product not found</h2>
               <Link to="/products" className="text-indigo-600 hover:underline">Back to Products</Link>
            </div>
         </div>
      );
   }

   const otherProducts = categoryData
      ?.filter(m => m.id !== id)
      .slice(0, 3);

   const categoryColor = dataCategory === 'industrial' ? 'emerald' : 'indigo';
   const categoryName = t(`nav_${dataCategory}`);

   return (
      <div className="min-h-screen flex flex-col relative bg-white">
         <canvas className="fixed inset-0 pointer-events-none z-0" width="639" height="632"></canvas>

         <main className="flex-grow relative z-10">
            <div className="animate-fadeIn pb-32 bg-transparent min-h-screen border-t border-neutral-100">
               <div className="pt-32 pb-48 text-neutral-950 relative overflow-hidden border-b border-neutral-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-transparent pointer-events-none"></div>
                  <div className="max-w-7xl mx-auto px-4 relative z-10">
                     <Link
                        className={`text-${categoryColor}-600 flex items-center justify-center mb-12 text-[10px] font-black uppercase tracking-[0.3em] hover:text-${categoryColor}-500 transition-colors group`}
                        to="/products"
                     >
                        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path d="M11 17l-5-5m0 0l5-5m-5 5h12" stroke-width="3"></path>
                        </svg>
                        {t('back_models')}
                     </Link>
                     <div className="text-center max-w-4xl mx-auto mb-20">
                        {product.price && (
                           <div className="mb-6">
                              <span className={`inline-block px-4 py-1.5 bg-${categoryColor}-500/10 text-${categoryColor}-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-${categoryColor}-500/20 shadow-sm`}>
                                 {product.price}
                              </span>
                           </div>
                        )}
                        <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none text-neutral-950 uppercase">{product.name}</h1>
                        <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-3xl mx-auto">
                           {product.description}
                        </p>
                     </div>
                     <div className="flex flex-col items-center gap-16">
                        <div className="relative group">
                           <div className={`absolute -inset-10 bg-${categoryColor}-600/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
                           <img alt={product.name} className="relative w-[500px] h-[500px] object-cover rounded-[4rem] shadow-2xl border border-neutral-100" src={product.imageUrl} />
                        </div>
                        <div className="bg-neutral-950 backdrop-blur-2xl border border-white/5 p-12 rounded-[4rem] flex flex-wrap justify-center items-center gap-12 md:gap-24 shadow-2xl">
                           <div className="text-center">
                              <div className={`text-6xl font-black text-${categoryColor}-400 mb-2 leading-none`}>{product.lph}</div>
                              <div className="text-[10px] text-neutral-500 uppercase font-black tracking-[0.2em]">{t('capacity_label')}</div>
                           </div>
                           <div className="hidden md:block w-px h-20 bg-white/10"></div>
                           <div className="text-center">
                              <div className="text-6xl font-black text-white mb-2 leading-none">{product.optFlow || (product.pumpHP ? product.pumpHP.split(' ')[0] : '0')}</div>
                              <div className="text-[10px] text-neutral-500 uppercase font-black tracking-[0.2em]">{product.optFlow ? t('opt_flow_label') : t('motor_hp')}</div>
                           </div>
                           {product.weight && (
                              <>
                                 <div className="hidden md:block w-px h-20 bg-white/10"></div>
                                 <div className="text-center">
                                    <div className="text-6xl font-black text-white mb-2 leading-none">{product.weight}</div>
                                    <div className="text-[10px] text-neutral-500 uppercase font-black tracking-[0.2em]">{t('weight_label')}</div>
                                 </div>
                              </>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                     <div className="lg:col-span-12 space-y-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                           <div className="bg-white p-10 rounded-3xl border border-neutral-200 shadow-lg">
                              <h3 className="text-2xl font-black text-neutral-900 mb-8 flex items-center uppercase tracking-tight">
                                 <div className="w-1.5 h-6 bg-neutral-900 rounded-full mr-3"></div>
                                 {t('benefits_title')}
                              </h3>
                              <div className="space-y-4">
                                 {product.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start group">
                                       <div className="w-6 h-6 rounded-md bg-neutral-100 text-neutral-600 flex items-center justify-center mr-4 mt-0.5 shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                          </svg>
                                       </div>
                                       <span className="text-neutral-600 font-medium leading-relaxed group-hover:text-neutral-900 transition-colors">{benefit}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>
                           <div className="bg-neutral-900 p-10 rounded-3xl border border-neutral-800 shadow-lg">
                              <h3 className="text-2xl font-black text-white mb-8 flex items-center uppercase tracking-tight">
                                 <div className="w-1.5 h-6 bg-white rounded-full mr-3"></div>
                                 {t('technical_specs')}
                              </h3>
                              <div className="grid grid-cols-2 gap-6">
                                 {[
                                    { label: t('material_label'), value: product.material },
                                    { label: t('dimensions_label'), value: product.dimensions },
                                    { label: t('durability_label'), value: product.durability },
                                    { label: t('maintenance_label'), value: product.maintenance }
                                 ].map((spec, i) => (
                                    <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10">
                                       <div className="text-[10px] font-black text-neutral-500 uppercase mb-1 tracking-widest">{spec.label}</div>
                                       <div className="text-base font-semibold text-white">{spec.value}</div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                        {product.studies && product.studies.length > 0 && (
                           <div className="grid grid-cols-1 gap-10">
                              <div className="bg-white p-10 rounded-3xl border border-neutral-200 shadow-lg">
                                 <h3 className="text-2xl font-black text-neutral-900 mb-8 flex items-center uppercase tracking-tight">
                                    <div className="w-1.5 h-6 bg-neutral-900 rounded-full mr-3"></div>
                                    {t('scientific_validation')}
                                 </h3>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {product.studies.map((study, i) => (
                                       <a key={i} className="group flex items-center p-5 bg-neutral-50 hover:bg-neutral-100 rounded-2xl border border-neutral-200 transition-all hover:border-neutral-400" href={study.url} target="_blank" rel="noopener noreferrer">
                                          <div className="w-10 h-10 rounded-xl bg-neutral-200 text-neutral-600 flex items-center justify-center mr-4 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                             </svg>
                                          </div>
                                          <div className="flex-1">
                                             <h4 className="text-neutral-900 font-bold leading-tight group-hover:text-neutral-600 transition-colors text-sm">{study.title}</h4>
                                             <div className="text-[10px] text-neutral-500 mt-1 font-mono uppercase">{study.type}</div>
                                          </div>
                                          <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                          </svg>
                                       </a>
                                    ))}
                                 </div>
                                 <div className="mt-6 pt-6 border-t border-neutral-200 text-sm text-neutral-500 font-medium">{t('studies_disclaimer')}</div>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
               <section className="py-32 bg-neutral-50 border-t border-neutral-200 mt-32">
                  <div className="max-w-7xl mx-auto px-4 text-center">
                     <h2 className="text-4xl font-black text-neutral-900 mb-12 tracking-tight uppercase">
                        {language === 'en' ? `More ${categoryName} Solutions` : `Más Soluciones de ${categoryName}`}
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {otherProducts?.map((m, i) => (
                           <Link key={i} className="group relative h-96 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-4" to={`/model/${category}/${m.id}`}>
                              <img alt={m.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={m.imageUrl} />
                              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                              <div className="absolute bottom-12 left-12 right-12 text-left">
                                 <h3 className="text-3xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors">{m.name}</h3>
                                 <div className="inline-flex items-center space-x-3 text-white font-black uppercase tracking-widest text-[10px]">
                                    <span>{language === 'en' ? 'View Details' : 'Ver Detalles'}</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                 </div>
                              </div>
                           </Link>
                        ))}
                        <Link className="group relative h-96 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-dashed border-neutral-300 flex items-center justify-center p-12 transition-all hover:bg-white hover:border-neutral-900" to={`/products?category=${category}`}>
                           <div className="text-center">
                              <div className="w-16 h-16 bg-neutral-950 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-8 h-8">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                 </svg>
                              </div>
                              <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tight">{language === 'en' ? 'View all products' : 'Ver todos los productos'}</h3>
                           </div>
                        </Link>
                     </div>
                  </div>
               </section>
            </div>
         </main>
      </div>
   );
};

export default ModelDetails;

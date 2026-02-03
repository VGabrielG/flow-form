import React, { useState } from 'react';
import { CASE_STUDIES_DATA, SCIENCE_STATS } from '../constants';
import { useLanguage } from '../LanguageContext';
import TechnicalEvaluationCTA from '../components/TechnicalEvaluationCTA';
import AnimatedPulsePill from '../components/AnimatedPulsePill';


interface MetricCardProps {
    label: string;
    value: string;
    study: string;
    language: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, study, language }) => {
    return (
        <div className="bg-neutral-50 p-10 rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full border-l-4 border-l-green-900/20">
            <div className="text-5xl font-black text-green-900 mb-6 tracking-tighter">
                {value}
            </div>
            <div className="text-[11px] font-black text-neutral-900 uppercase tracking-[0.2em] mb-8 leading-relaxed h-10">
                {label}
            </div>

            <div className="mt-auto pt-6 border-t border-neutral-100">
                <a
                    href={study}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] font-black uppercase tracking-widest text-neutral-400 hover:text-green-900 transition-colors flex items-center group"
                >
                    {language === 'es' ? 'VER ESTUDIO' : 'VIEW STUDY'}
                    <svg className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default function MeatIndustry() {
    const { language, t } = useLanguage();
    const cat = 'meatIndustry';
    const caseStudies = CASE_STUDIES_DATA[language]?.[cat] || [];
    const scienceFacts = SCIENCE_STATS[language]?.[cat] || [];

    const pillars = [
        { title: t('meat_pillar_1_title'), desc: t('meat_pillar_1_desc'), color: 'bg-green-50 text-green-900' },
        { title: t('meat_pillar_2_title'), desc: t('meat_pillar_2_desc'), color: 'bg-neutral-100 text-neutral-900' },
        { title: t('meat_pillar_3_title'), desc: t('meat_pillar_3_desc'), color: 'bg-neutral-100 text-neutral-900' },
        { title: t('meat_pillar_4_title'), desc: t('meat_pillar_4_desc'), color: 'bg-neutral-100 text-neutral-900' },
    ];

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-outfit">
            {/* Hero Section - Livestock Dark Theme */}
            <header className="pt-32 pb-48 text-white relative overflow-hidden bg-green-950 border-b border-green-900/30">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-transparent to-green-950/50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedPulsePill
                            label={language === 'es' ? 'SECTOR GANADERO' : 'LIVESTOCK SECTOR'}
                            color="green"
                            className="mb-8"
                        />



                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
                            {t('meat_title')}
                        </h1>

                        <p className="text-xl text-green-200/70 leading-relaxed font-medium max-w-3xl mx-auto">
                            {t('meat_desc')}
                        </p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 relative z-20 pb-32 -mt-24">

                {/* Problems & Solutions (1st Section) */}
                <section className="mb-32">
                    <div className="bg-green-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-none uppercase">
                                    {language === 'es' ? 'La Crisis de Residuos' : 'The Waste Crisis'}
                                </h2>
                                <p className="text-xl text-green-200/80 mb-12 font-medium leading-relaxed">
                                    {language === 'es'
                                        ? 'La ganadería moderna enfrenta regulaciones más estrictas y costos operativos crecientes relacionados con la gestión de efluentes y la salud animal.'
                                        : 'Modern livestock farming faces stricter regulations and rising operational costs related to effluent management and animal health.'}
                                </p>

                                <div className="space-y-6">
                                    {[
                                        {
                                            title: language === 'es' ? 'ACUMULACIÓN DE LODOS' : 'SLUDGE ACCUMULATION',
                                            desc: language === 'es' ? 'Costoso dragado y pérdida de capacidad de lagunas.' : 'Costly dredging and loss of lagoon capacity.'
                                        },
                                        {
                                            title: language === 'es' ? 'OLORES INTENSOS' : 'INTENSE ODORS',
                                            desc: language === 'es' ? 'Impacto ambiental y estrés en el ganado.' : 'Environmental impact and livestock stress.'
                                        },
                                        {
                                            title: language === 'es' ? 'RIESGO BIOLÓGICO' : 'BIOHAZARD RISK',
                                            desc: language === 'es' ? 'Proliferación de patógenos en el agua de bebida.' : 'Pathogen proliferation in drinking water.'
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center space-x-4 border-b border-white/10 pb-4">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <div>
                                                <div className="text-xs font-black uppercase tracking-widest text-green-400">{item.title}</div>
                                                <div className="text-sm text-neutral-300">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10">
                                <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">
                                    {language === 'es' ? 'La Solución Flowform' : 'The Flowform Solution'}
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="mr-6 text-4xl p-2 bg-green-500/10 rounded-2xl">🦠</div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2">{language === 'es' ? 'Activación Microbiana' : 'Microbial Activation'}</h4>
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                {language === 'es'
                                                    ? 'El vórtice oxigena el agua, activando bacterias aeróbicas que devoran los lodos rápidamente.'
                                                    : 'The vortex oxygenates water, activating aerobic bacteria that devour sludge rapidly.'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-6 text-4xl p-2 bg-green-500/10 rounded-2xl">⚡</div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2">{language === 'es' ? 'Valorización de Fertilizante' : 'Fertilizer Optimization'}</h4>
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                {language === 'es'
                                                    ? 'Transforma efluentes tóxicos en irrigación rica en nutrientes y segura para pasturas.'
                                                    : 'Transforms toxic effluents into nutrient-rich, pasture-safe irrigation.'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-6 text-4xl p-2 bg-green-500/10 rounded-2xl">🐮</div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2">{language === 'es' ? 'Salud Animal' : 'Animal Health'}</h4>
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                {language === 'es'
                                                    ? 'Agua de bebida limpia y vitalizada mejora la hidratación y la conversión alimenticia.'
                                                    : 'Clean, vitalized drinking water improves hydration and feed conversion ratios.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategic Pillars (2nd Section) */}
                <section className="mb-32">
                    <h2 className="text-sm font-black text-neutral-400 uppercase tracking-[0.4em] mb-12 border-l-2 border-green-900 pl-4">
                        {language === 'es' ? 'PILARES ESTRATÉGICOS' : 'STRATEGIC PILLARS'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pillars.map((pillar, i) => (
                            <div key={i} className={`${pillar.color} p-12 rounded-[3.5rem] border border-black/5`}>
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{pillar.title}</h3>
                                <p className="text-sm font-bold leading-relaxed opacity-80">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Success Stories (Narrative Section) (3rd Section) */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-black text-green-600 uppercase tracking-[0.4em] mb-4">
                                {language === 'es' ? 'CASOS DE ÉXITO' : 'SUCCESS STORIES'}
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter leading-none uppercase">
                                {language === 'es' ? 'Transformación Comprobada' : 'Proven Transformation'}
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Story 1: Hohepa Farm */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[450px] border border-white/5 hover:border-green-500/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/30 transition-all duration-700"></div>

                            <div>
                                <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 backdrop-blur-md rounded-full text-green-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                    {language === 'es' ? 'LECHERÍA' : 'DAIRY FARM'}
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'El Ciclo de Rechazo' : 'The Rejection Cycle'}
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Las vacas rechazaban pastar zonas regadas con efluente por 14 días. Con Flowform, el efluente se volvió inodoro y las vacas volvieron en solo 4 días.'
                                        : 'Cows refused to graze effluent-irrigated zones for 14 days. With Flowform, effluent became odorless and cows returned in just 4 days.'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">{language === 'es' ? 'ANTES' : 'BEFORE'}</div>
                                    <div className="text-xl font-black text-neutral-400">14 {language === 'es' ? 'Días' : 'Days'}</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-green-400 uppercase tracking-widest mb-1">{language === 'es' ? 'AHORA' : 'NOW'}</div>
                                    <div className="text-3xl font-black text-green-400">4 {language === 'es' ? 'Días' : 'Days'}</div>
                                </div>
                            </div>

                            <a
                                href="/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all text-center"
                            >
                                {language === 'es' ? 'VER REPORTE DE CAMPO' : 'VIEW FIELD REPORT'}
                            </a>

                        </div>

                        {/* Story 2: Rawhiti Piggery */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[450px] border border-white/5 hover:border-green-500/30 transition-all duration-500">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-900/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-green-800/50 transition-all duration-700"></div>

                            <div>
                                <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 backdrop-blur-md rounded-full text-green-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                    {language === 'es' ? 'PORCINOS' : 'PIGGERY'}
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Evitando el Cierre' : 'Avoiding Closure'}
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Enfrentando cierre por olores ofensivos y multas. El sistema Vortex transformó la laguna, eliminó el olor y convirtió el problema en fertilizante.'
                                        : 'Facing closure due to offensive odors and fines. The Vortex system transformed the lagoon, eliminated odor, and turned the problem into fertilizer.'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">{language === 'es' ? 'MULTAS' : 'FINES'}</div>
                                    <div className="text-xl font-black text-red-400/80 line-through">$$$</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-green-400 uppercase tracking-widest mb-1">{language === 'es' ? 'RESULTADO' : 'RESULT'}</div>
                                    <div className="text-xl font-black text-green-400">{language === 'es' ? 'OPERATIVO' : 'OPERATIONAL'}</div>
                                </div>
                            </div>

                            <a
                                href="/studies/Farming/5. Agricultural_Effluent_Brochure.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all text-center"
                            >
                                {language === 'es' ? 'VER BROCHURE TÉCNICO' : 'VIEW TECHNICAL BROCHURE'}
                            </a>

                        </div>

                        {/* Story 3: Byron Bay Abattoir */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[450px] border border-white/5 hover:border-green-500/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/20 transition-all duration-700"></div>

                            <div>
                                <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 backdrop-blur-md rounded-full text-green-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                    {language === 'es' ? 'MATADERO' : 'ABATTOIR'}
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Resurrección del Oxígeno' : 'Oxygen Resurrection'}
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Con 4.3 millones de litros de efluente anaeróbico muerto (0 ppm OD), la instalación instaló 21 unidades Vortex. En 6 semanas, el oxígeno revivió.'
                                        : 'With 4.3 million liters of dead anaerobic effluent (0 ppm DO), the facility installed 21 Vortex units. In 6 weeks, oxygen levels revived.'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">{language === 'es' ? 'ANTES' : 'BEFORE'}</div>
                                    <div className="text-xl font-black text-neutral-400">0 <span className="text-xs">ppm</span></div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-green-400 uppercase tracking-widest mb-1">{language === 'es' ? 'AHORA' : 'NOW'}</div>
                                    <div className="text-3xl font-black text-green-400">6.3 <span className="text-xs">ppm</span></div>
                                </div>
                            </div>

                            <a
                                href="/studies/Farming/10. Animal effluent treatment chemistry by Peter Bacchus.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all text-center"
                            >
                                {language === 'es' ? 'VER VALIDACIÓN CIENTÍFICA' : 'VIEW SCIENTIFIC VALIDATION'}
                            </a>

                        </div>
                    </div>
                </section>



                {/* Technical Metrics Grid (5th Section - END) */}
                <section className="mb-32">
                    <div className="flex items-center space-x-5 mb-20">
                        <h2 className="text-4xl font-black text-neutral-900 tracking-tight leading-none uppercase">
                            {language === 'es' ? 'Métricas de Reducción de Impacto' : 'Impact Reduction Metrics'}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {scienceFacts.map((fact, i) => (
                            <MetricCard
                                key={i}
                                label={fact.label}
                                value={fact.value}
                                study={fact.pdf}
                                language={language}
                            />
                        ))}
                    </div>
                </section>

                {/* CTA / Conclusion */}
                <TechnicalEvaluationCTA
                    variant="livestock"
                    titleEs="La Eficiencia es Biológica"
                    titleEn="Efficiency is Biological"
                    descEs="No luche contra la naturaleza con químicos costosos. Únase a la revolución rítmica y convierta sus residuos en su recurso más valioso."
                    descEn="Don't fight nature with expensive chemicals. Join the rhythmic revolution and turn your waste into your most valuable resource."
                />
            </div>
        </div>
    );
}

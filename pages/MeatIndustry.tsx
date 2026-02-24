import React, { useState } from 'react';
import { CASE_STUDIES_DATA, SCIENCE_STATS } from '../constants';
import { useLanguage } from '../LanguageContext';
import TechnicalEvaluationCTA from '../components/TechnicalEvaluationCTA';
import AnimatedPulsePill from '../components/AnimatedPulsePill';
import CoreTechnologySection from '../components/CoreTechnologySection';


interface MetricCardProps {
    label: string;
    value: string;
    study: string;
    language: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, study, language }) => {
    return (
        <div className="bg-neutral-50/40 backdrop-blur-sm p-10 rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full border-l-4 border-l-green-900/20">
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

    const unifiedPillars = [
        {
            icon: '🦠',
            title: language === 'es' ? 'Activación Microbiana' : 'Microbial Activation',
            desc: language === 'es' ? 'Bacterias aeróbicas devoran lodos rápidamente.' : 'Aerobic bacteria devour sludge rapidly.',
            color: 'bg-green-50/40 backdrop-blur-md text-green-900'
        },
        {
            icon: '⚡',
            title: language === 'es' ? 'Valorización de Fertilizante' : 'Fertilizer Optimization',
            desc: language === 'es' ? 'Transforma efluentes en irrigación nutritiva.' : 'Transforms toxic effluents into nutrient-rich irrigation.',
            color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900'
        },
        {
            icon: '🐮',
            title: language === 'es' ? 'Salud Animal' : 'Animal Health',
            desc: language === 'es' ? 'Mejora hidratación y conversión alimenticia.' : 'Improves hydration and feed conversion ratios.',
            color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900'
        },
        { icon: '🌍', title: t('meat_pillar_1_title'), desc: t('meat_pillar_1_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
        { icon: '♻️', title: t('meat_pillar_2_title'), desc: t('meat_pillar_2_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
        { icon: '⭐', title: t('meat_pillar_3_title'), desc: t('meat_pillar_3_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
        { icon: '📈', title: t('meat_pillar_4_title'), desc: t('meat_pillar_4_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
    ];

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-outfit">
            {/* Hero Section - Livestock Dark Theme */}
            <header className="pt-32 pb-24 text-white relative overflow-hidden bg-green-950 border-b border-green-900/30">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-transparent to-green-950/50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Text side */}
                        <div className="flex-1 text-left">
                            <AnimatedPulsePill
                                label={language === 'es' ? 'SECTOR GANADERO' : 'LIVESTOCK SECTOR'}
                                color="green"
                                className="mb-8"
                            />
                            <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-none uppercase">
                                {t('meat_title')}
                            </h1>
                            <p className="text-xl text-green-200/70 leading-relaxed font-medium max-w-xl">
                                {t('meat_desc')}
                            </p>
                        </div>
                        {/* Image side */}
                        <div className="flex-1 flex justify-center items-center">
                            <img
                                src="/images/vortex.png"
                                alt="Flowform Vortex"
                                className="w-full max-w-md max-h-72 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 relative z-20 pb-32">

                {/* Core Technology Description */}
                <section className="mb-20">
                    <CoreTechnologySection themeColor="emerald" />
                </section>

                {/* Strategic Pillars Unified (2nd Section) */}
                <section className="mb-32">
                    <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter leading-none uppercase mb-12">
                        {language === 'es' ? 'VALOR' : 'VALUE'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {unifiedPillars.map((pillar, i) => (
                            <div key={i} className={`${pillar.color} p-8 rounded-[2.5rem] border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all`}>
                                {pillar.icon && <div className="text-4xl mb-6">{pillar.icon}</div>}
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{pillar.title}</h3>
                                <p className="text-sm font-medium leading-relaxed opacity-80">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Success Stories (Narrative Section) (3rd Section) */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter leading-none uppercase">
                                {language === 'es' ? 'CASOS DE ÉXITO' : 'SUCCESS STORIES'}
                            </h2>
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

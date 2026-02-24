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
        <div className="bg-neutral-50/40 backdrop-blur-sm p-10 rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full border-l-4 border-l-cyan-900/20">
            <div className="text-5xl font-black text-cyan-900 mb-6 tracking-tighter">
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
                    className="text-[9px] font-black uppercase tracking-widest text-neutral-400 hover:text-cyan-900 transition-colors flex items-center group"
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

export default function Municipalities() {
    const { language, t } = useLanguage();
    const cat = 'municipal';
    const caseStudies = CASE_STUDIES_DATA[language][cat] || [];
    const scienceFacts = SCIENCE_STATS[language][cat] || [];

    const unifiedPillars = [
        {
            icon: '🏙️',
            title: language === 'es' ? 'Bienestar Ciudadano' : 'Citizen Well-being',
            desc: language === 'es' ? 'Eliminación de olores ofensivos en zonas urbanas densas.' : 'Elimination of offensive odors in dense urban areas.',
            color: 'bg-cyan-50/40 backdrop-blur-md text-cyan-900'
        },
        {
            icon: '🦆',
            title: language === 'es' ? 'Restauración Ecológica' : 'Ecological Restoration',
            desc: language === 'es' ? 'Lagos limpios y claros que invitan a la recreación.' : 'Clean lakes and canals that invite recreation.',
            color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900'
        },
        {
            icon: '💰',
            title: language === 'es' ? 'Ahorro Operativo' : 'Operational Savings',
            desc: language === 'es' ? 'Reducción de consumo en aireación y menos químicos.' : 'Reduced energy consumption and fewer chemicals.',
            color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900'
        },
        { icon: '🌍', title: t('muni_pillar_1_title'), desc: t('muni_pillar_1_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
        { icon: '♻️', title: t('muni_pillar_2_title'), desc: t('muni_pillar_2_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
        { icon: '⭐', title: t('muni_pillar_3_title'), desc: t('muni_pillar_3_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
        { icon: '📈', title: t('muni_pillar_4_title'), desc: t('muni_pillar_4_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
    ];

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-outfit">
            {/* Hero Section - Municipal Dark Theme */}
            <header className="pt-32 pb-24 text-white relative overflow-hidden bg-cyan-950 border-b border-cyan-900/30">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-transparent to-cyan-950/50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Text side */}
                        <div className="flex-1 text-left">
                            <AnimatedPulsePill
                                label={language === 'es' ? 'SECTOR MUNICIPAL' : 'MUNICIPAL SECTOR'}
                                color="cyan"
                                className="mb-8"
                            />
                            <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-none uppercase">
                                {t('muni_title')}
                            </h1>
                            <p className="text-xl text-cyan-200/70 leading-relaxed font-medium max-w-xl">
                                {t('muni_desc')}
                            </p>
                        </div>
                        {/* Image side */}
                        <div className="flex-1 flex justify-center items-center">
                            <img
                                src="/images/meander.png"
                                alt="Flowform Meander"
                                className="w-full max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 relative z-20 pb-32">

                {/* Core Technology Description */}
                <section className="mb-20">
                    <CoreTechnologySection themeColor="cyan" />
                </section>

                {/* Strategic Pillars Unified (2nd Section) */}
                <section className="mb-32">
                    <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter leading-none uppercase mb-12">
                        {language === 'es' ? 'VALOR' : 'VALUE'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {unifiedPillars.map((pillar, i) => (
                            <div key={i} className={`${pillar.color} p-8 rounded-[2.5rem] border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-lg transition-all`}>
                                {pillar.icon && <div className="text-4xl mb-6">{pillar.icon}</div>}
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{pillar.title}</h3>
                                <p className="text-sm font-medium leading-relaxed opacity-80">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Success Stories (Narrative) (3rd Section) */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter leading-none uppercase">
                                {language === 'es' ? 'CASOS DE ÉXITO' : 'SUCCESS STORIES'}
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Story 1: Soerendonk */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[450px] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/30 transition-all duration-700"></div>

                            <div>
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md rounded-full text-cyan-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                    SOERENDONK
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Tratamiento Terciario' : 'Tertiary Treatment'}
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Planta municipal (40,000 h.e.) implementó sistema en cascada. Eliminación de patógenos y efluente cristalino en 4 días.'
                                        : 'Municipal plant (40,000 p.e.) implemented cascade system. Pathogen elimination and crystal clear effluent in 4 days.'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">{language === 'es' ? 'PATÓGENOS' : 'PATHOGENS'}</div>
                                    <div className="text-xl font-black text-white">0%</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-cyan-400 uppercase tracking-widest mb-1">{language === 'es' ? 'FÓSFORO' : 'PHOSPHORUS'}</div>
                                    <div className="text-3xl font-black text-cyan-400">-96%</div>
                                </div>
                            </div>

                            <a
                                href="/studies/human aplications/16. Municipal effluent treatment_Netherlands_Soerendonk.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all text-center"
                            >
                                {language === 'es' ? 'VER ESTUDIO TÉCNICO' : 'VIEW TECHNICAL STUDY'}
                            </a>

                        </div>

                        {/* Story 2: Hanoi */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[450px] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-900/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-cyan-800/50 transition-all duration-700"></div>

                            <div>
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md rounded-full text-cyan-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                    HANOI, VIETNAM
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Rehabilitación de Lagos' : 'Lake Rehabilitation'}
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Lagos urbanos severamente eutrofizados recuperaron claridad y vida acuática. Reducción masiva de DQO y olores.'
                                        : 'Severely eutrophic urban lakes regained clarity and aquatic life. Massive reduction in COD and odors.'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">{language === 'es' ? 'DBQ' : 'COD'}</div>
                                    <div className="text-xl font-black text-white">-92%</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-cyan-400 uppercase tracking-widest mb-1">{language === 'es' ? 'OD' : 'DO'}</div>
                                    <div className="text-3xl font-black text-cyan-400">5.6 <span className="text-sm">mg/L</span></div>
                                </div>
                            </div>

                            <a
                                href="/studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all text-center"
                            >
                                {language === 'es' ? 'VER EVIDENCIA CIENTÍFICA' : 'VIEW SCIENTIFIC EVIDENCE'}
                            </a>

                        </div>

                        {/* Story 3: Vidaråsen */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[450px] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-cyan-900/30 transition-all duration-700"></div>

                            <div>
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md rounded-full text-cyan-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                    VIDARÅSEN, NORWAY
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Ecosistemas de Tratamiento' : 'Treatment Ecosystems'}
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Comunidad de 200 personas utiliza sistema Vortex y Meander como parte integral de su tratamiento de aguas por más de 5 años.'
                                        : 'A community of 200 people uses the Vortex and Meander system as an integral part of their water treatment for over 5 years.'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">{language === 'es' ? 'FÓSFORO' : 'PHOSPHORUS'}</div>
                                    <div className="text-xl font-black text-white">-96%</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-cyan-400 uppercase tracking-widest mb-1">{language === 'es' ? 'NITRÓGENO' : 'NITROGEN'}</div>
                                    <div className="text-3xl font-black text-cyan-400">-92%</div>
                                </div>
                            </div>

                            <a
                                href="/studies/landscaping/Hawkwood Ponds and Wetlands Sewage System.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all text-center"
                            >
                                {language === 'es' ? 'VER VALIDACIÓN' : 'VIEW VALIDATION'}
                            </a>
                        </div>

                        {/* Story 4: Four Plants */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[450px] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-all duration-700"></div>

                            <div>
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md rounded-full text-cyan-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                    EMERSON UK
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Vitalidad de Parques' : 'Park Vitality'}
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'El riego con agua Flowform aumentó la expresión arquetípica y resistencia de las plantas en espacios verdes.'
                                        : 'Irrigation with Flowform water increased archetypal expression and resilience of plants in green spaces.'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">{language === 'es' ? 'RAMAS' : 'BRANCHES'}</div>
                                    <div className="text-xl font-black text-white">+35%</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-cyan-400 uppercase tracking-widest mb-1">{language === 'es' ? 'VITALIDAD' : 'VITALITY'}</div>
                                    <div className="text-3xl font-black text-cyan-400">High</div>
                                </div>
                            </div>

                            <a
                                href="/studies/flow form studies/8. Report 2015 Four Plants research 20151027.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all text-center"
                            >
                                {language === 'es' ? 'VER ESTUDIO BOTÁNICO' : 'VIEW BOTANICAL STUDY'}
                            </a>
                        </div>
                    </div>
                </section>



                {/* Technical Metrics Grid (5th Section - END) */}
                <section className="mb-32">
                    <div className="flex items-center space-x-5 mb-20">
                        <h2 className="text-4xl font-black text-neutral-900 tracking-tight leading-none uppercase">
                            {language === 'es' ? 'Métricas de Validación Técnica' : 'Technical Validation Metrics'}
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

                {/* Informative Footer Box */}
                <TechnicalEvaluationCTA />
            </div>
        </div>
    );
}

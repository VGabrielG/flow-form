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
        <div className="bg-neutral-50 p-10 rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full border-l-4 border-l-cyan-900/20">
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

    const pillars = [
        { title: t('muni_pillar_1_title'), desc: t('muni_pillar_1_desc'), color: 'bg-cyan-50 text-cyan-900' },
        { title: t('muni_pillar_2_title'), desc: t('muni_pillar_2_desc'), color: 'bg-neutral-100 text-neutral-900' },
        { title: t('muni_pillar_3_title'), desc: t('muni_pillar_3_desc'), color: 'bg-neutral-100 text-neutral-900' },
        { title: t('muni_pillar_4_title'), desc: t('muni_pillar_4_desc'), color: 'bg-neutral-100 text-neutral-900' },
    ];

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-outfit">
            {/* Hero Section - Municipal Dark Theme */}
            <header className="pt-32 pb-48 text-white relative overflow-hidden bg-cyan-950 border-b border-cyan-900/30">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-transparent to-cyan-950/50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedPulsePill
                            label={language === 'es' ? 'SECTOR MUNICIPAL' : 'MUNICIPAL SECTOR'}
                            color="cyan"
                            className="mb-8"
                        />



                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
                            {t('muni_title')}
                        </h1>

                        <p className="text-xl text-cyan-200/70 leading-relaxed font-medium max-w-3xl mx-auto">
                            {t('muni_desc')}
                        </p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 relative z-20 pb-32 -mt-24">

                {/* Problems & Solutions (1st Section) */}
                <section className="mb-32">
                    <div className="bg-cyan-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-none uppercase">
                                    {language === 'es' ? 'Gestión Urbana' : 'Urban Management'}
                                </h2>
                                <p className="text-xl text-cyan-200/80 mb-12 font-medium leading-relaxed">
                                    {language === 'es'
                                        ? 'Las municipalidades modernas deben equilibrar presupuestos ajustados con expectativas ciudadanas altas sobre calidad de vida y medio ambiente.'
                                        : 'Modern municipalities must balance tight budgets with high citizen expectations for quality of life and the environment.'}
                                </p>

                                <div className="space-y-6">
                                    {[
                                        {
                                            title: language === 'es' ? 'QUEJAS VECINALES' : 'NEIGHBOR COMPLAINTS',
                                            desc: language === 'es' ? 'Olores de plantas de tratamiento cerca de zonas residenciales.' : 'Odors from treatment plants near residential zones.'
                                        },
                                        {
                                            title: language === 'es' ? 'COSTOS MANTENIMIENTO' : 'MAINTENANCE COSTS',
                                            desc: language === 'es' ? 'Dragado frecuente de lodos y uso intensivo de químicos.' : 'Frequent sludge dredging and intensive chemical use.'
                                        },
                                        {
                                            title: language === 'es' ? 'ESTÉTICA URBANA' : 'URBAN AESTHETICS',
                                            desc: language === 'es' ? 'Cuerpos de agua eutrofizados (verdes/sucios).' : 'Eutrophic water bodies (green/dirty).'
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center space-x-4 border-b border-white/10 pb-4">
                                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                            <div>
                                                <div className="text-xs font-black uppercase tracking-widest text-cyan-400">{item.title}</div>
                                                <div className="text-sm text-neutral-300">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10">
                                <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">
                                    {language === 'es' ? 'Soluciones Flowform' : 'Flowform Solutions'}
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="mr-6 text-4xl p-2 bg-cyan-500/10 rounded-2xl">🏙️</div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2">{language === 'es' ? 'Bienestar Ciudadano' : 'Citizen Well-being'}</h4>
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                {language === 'es'
                                                    ? 'Eliminación de olores ofensivos en zonas urbanas densas.'
                                                    : 'Elimination of offensive odors in dense urban areas.'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-6 text-4xl p-2 bg-cyan-500/10 rounded-2xl">🦆</div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2">{language === 'es' ? 'Restauración Ecológica' : 'Ecological Restoration'}</h4>
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                {language === 'es'
                                                    ? 'Lagos y canales limpios y claros que invitan a la recreación.'
                                                    : 'Clean, clear lakes and canals that invite recreation.'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-6 text-4xl p-2 bg-cyan-500/10 rounded-2xl">💰</div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2">{language === 'es' ? 'Ahorro Operativo' : 'Operational Savings'}</h4>
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                {language === 'es'
                                                    ? 'Reducción de consumo energético en aireación y menos químicos.'
                                                    : 'Reduced energy consumption in aeration and fewer chemicals.'}
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
                    <h2 className="text-sm font-black text-neutral-400 uppercase tracking-[0.4em] mb-12 border-l-2 border-cyan-900 pl-4">
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

                {/* Success Stories (Narrative) (3rd Section) */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-black text-cyan-600 uppercase tracking-[0.4em] mb-4">
                                {language === 'es' ? 'CASOS DE ÉXITO' : 'SUCCESS STORIES'}
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter leading-none uppercase">
                                {language === 'es' ? 'Ciudades Vivas' : 'Living Cities'}
                            </h3>
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

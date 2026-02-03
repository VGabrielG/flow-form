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
        <div className="bg-neutral-50 p-10 rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full border-l-4 border-l-red-900/20">
            <div className="text-5xl font-black text-red-900 mb-6 tracking-tighter">
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
                    className="text-[9px] font-black uppercase tracking-widest text-neutral-400 hover:text-red-900 transition-colors flex items-center group"
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

export default function Winery() {
    const { language, t } = useLanguage();
    const cat = 'winery';
    const caseStudies = CASE_STUDIES_DATA[language][cat] || [];
    const scienceFacts = SCIENCE_STATS[language][cat] || [];

    const pillars = [
        { title: t('winery_pillar_1_title'), desc: t('winery_pillar_1_desc'), color: 'bg-red-50 text-red-900' },
        { title: t('winery_pillar_2_title'), desc: t('winery_pillar_2_desc'), color: 'bg-neutral-100 text-neutral-900' },
        { title: t('winery_pillar_3_title'), desc: t('winery_pillar_3_desc'), color: 'bg-neutral-100 text-neutral-900' },
        { title: t('winery_pillar_4_title'), desc: t('winery_pillar_4_desc'), color: 'bg-neutral-100 text-neutral-900' },
    ];

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-outfit">
            {/* Hero Section - Dark Wine Theme */}
            <header className="pt-32 pb-48 text-white relative overflow-hidden bg-red-950 border-b border-red-900/30">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-red-950/50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedPulsePill
                            label={language === 'es' ? 'VINOS' : 'WINE'}
                            color="red"
                            className="mb-8"
                        />



                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
                            {t('winery_title')}
                        </h1>

                        <p className="text-xl text-red-200/70 leading-relaxed font-medium max-w-3xl mx-auto">
                            {t('winery_desc')}
                        </p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 relative z-20 pb-32 -mt-24">

                {/* Problems & Solutions (1st Section) */}
                <section className="mb-32">
                    <div className="bg-red-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-none uppercase">
                                    {language === 'es' ? 'Desafíos Modernos' : 'Modern Challenges'}
                                </h2>
                                <p className="text-xl text-red-200/80 mb-12 font-medium leading-relaxed">
                                    {language === 'es'
                                        ? 'La industria vinícola enfrenta una presión creciente por la escasez de agua, regulaciones ambientales estrictas y la demanda de vinos de mayor calidad sin aditivos.'
                                        : 'The wine industry faces increasing pressure from water scarcity, strict environmental regulations, and demand for higher quality wines without additives.'}
                                </p>

                                <div className="space-y-6">
                                    {[
                                        {
                                            title: language === 'es' ? 'OLORES OFENSIVOS (H2S)' : 'OFFENSIVE ODORS (H2S)',
                                            desc: language === 'es' ? 'Riesgo de multas y quejas comunitarias.' : 'Risk of fines and community complaints.'
                                        },
                                        {
                                            title: language === 'es' ? 'ESTRÉS HÍDRICO' : 'WATER STRESS',
                                            desc: language === 'es' ? 'Viñedos vulnerables a sequías.' : 'Vineyards vulnerable to drought.'
                                        },
                                        {
                                            title: language === 'es' ? 'TANINOS ÁSPEROS' : 'HARSH TANNINS',
                                            desc: language === 'es' ? 'Necesidad de envejecimiento costoso.' : 'Need for costly aging.'
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center space-x-4 border-b border-white/10 pb-4">
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                            <div>
                                                <div className="text-xs font-black uppercase tracking-widest text-red-400">{item.title}</div>
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
                                        <div className="mr-6 text-4xl p-2 bg-red-500/10 rounded-2xl">💧</div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2">{language === 'es' ? 'Remediación Inmediata' : 'Immediate Remediation'}</h4>
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                {language === 'es'
                                                    ? 'Eliminación de olores en <4 horas mediante oxigenación rítmica intensa.'
                                                    : 'Odor elimination in <4 hours via intense rhythmic oxygenation.'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-6 text-4xl p-2 bg-red-500/10 rounded-2xl">🌱</div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2">{language === 'es' ? 'Vitalidad del Suelo' : 'Soil Vitality'}</h4>
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                {language === 'es'
                                                    ? 'Agua estructurada que penetra más profundo y desbloquea nutrientes del suelo.'
                                                    : 'Structured water that penetrates deeper and unlocks soil nutrients.'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-6 text-4xl p-2 bg-red-500/10 rounded-2xl">🍷</div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2">{language === 'es' ? 'Perfil Premium' : 'Premium Profile'}</h4>
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                {language === 'es'
                                                    ? 'Suavizado natural de taninos y mejora de la expresión del terroir.'
                                                    : 'Natural tannin softening and improved terroir expression.'}
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
                    <h2 className="text-sm font-black text-neutral-400 uppercase tracking-[0.4em] mb-12 border-l-2 border-red-900 pl-4">
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

                {/* Case Studies (Narrative) (3rd Section) */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.4em] mb-4">
                                {language === 'es' ? 'CASOS DE ÉXITO' : 'SUCCESS STORIES'}
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter leading-none uppercase">
                                {language === 'es' ? 'Excelencia Enológica' : 'Oenological Excellence'}
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Story 1: Flavor */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[450px] border border-white/5 hover:border-red-500/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/30 transition-all duration-700"></div>

                            <div>
                                <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 backdrop-blur-md rounded-full text-red-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                                    {language === 'es' ? 'CALIDAD' : 'QUALITY'}
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Estructura & Sabor' : 'Structure & Flavor'}
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Las pruebas comparativas mostraron una notable mejora en la estructura de los taninos y la complejidad aromática, elevando el perfil premium del vino.'
                                        : 'Comparative trials showed a remarkable improvement in tannin structure and aromatic complexity, elevating the wine\'s premium profile.'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">{language === 'es' ? 'TANINOS' : 'TANNINS'}</div>
                                    <div className="text-xl font-black text-white">{language === 'es' ? 'Suaves' : 'Silky'}</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-red-400 uppercase tracking-widest mb-1">{language === 'es' ? 'BRIX' : 'BRIX'}</div>
                                    <div className="text-3xl font-black text-red-400">{language === 'es' ? 'Opt' : 'Opt'}</div>
                                </div>
                            </div>

                            <a
                                href="/studies/wine/4. French wine making and food growth feedback .pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all text-center"
                            >
                                {language === 'es' ? 'VER ESTUDIO ENOLÓGICO' : 'VIEW ENOLOGICAL STUDY'}
                            </a>

                        </div>

                        {/* Story 2: Effluent */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[450px] border border-white/5 hover:border-red-500/30 transition-all duration-500">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-red-800/50 transition-all duration-700"></div>

                            <div>
                                <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 backdrop-blur-md rounded-full text-red-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                                    {language === 'es' ? 'EFLUENTES' : 'EFFLUENT'}
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Cumplimiento Inmediato' : 'Immediate Compliance'}
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Los olores agresivos y el pH ácido se neutralizaron rápidamente. El sistema transformó un problema de cumplimiento legal en agua de riego segura.'
                                        : 'Aggressive odors and acidic pH were neutralized rapidly. The system transformed a compliance liability into safe irrigation water.'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">{language === 'es' ? 'OLOR' : 'ODOR'}</div>
                                    <div className="text-xl font-black text-white">0%</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-red-400 uppercase tracking-widest mb-1">{language === 'es' ? 'TIEMPO' : 'TIME'}</div>
                                    <div className="text-3xl font-black text-red-400">4 <span className="text-base">hrs</span></div>
                                </div>
                            </div>

                            <a
                                href="/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all text-center"
                            >
                                {language === 'es' ? 'VER REPORTE DE CAMPO' : 'VIEW FIELD REPORT'}
                            </a>

                        </div>

                        {/* Story 3: Irrigation */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[450px] border border-white/5 hover:border-red-500/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/20 transition-all duration-700"></div>

                            <div>
                                <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 backdrop-blur-md rounded-full text-red-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                                    {language === 'es' ? 'RIEGO' : 'IRRIGATION'}
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Vigor Radicular' : 'Root Vigor'}
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Las vides mostraron una resistencia superior a la sequía y un desarrollo radicular más profundo. Vitalidad visible en solo una temporada.'
                                        : 'Vines showed superior drought resilience and deeper root development. Visible vitality in just one season.'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">{language === 'es' ? 'NUTRIENTES' : 'NUTRIENTS'}</div>
                                    <div className="text-xl font-black text-white">+22%</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-red-400 uppercase tracking-widest mb-1">{language === 'es' ? 'RAÍCES' : 'ROOTS'}</div>
                                    <div className="text-3xl font-black text-red-400">+9.5%</div>
                                </div>
                            </div>

                            <a
                                href="/studies/flow form studies/8. Report 2015 Four Plants research 20151027.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all text-center"
                            >
                                {language === 'es' ? 'VER REPORTE CIENTÍFICO' : 'VIEW SCIENTIFIC REPORT'}
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
                <TechnicalEvaluationCTA
                    variant="winery"
                    titleEs="Diferenciación de Marca y Sabor"
                    titleEn="Brand Differentiation & Flavor"
                    descEs="Nuestra tecnología permite a las bodegas crear una narrativa de pureza y vitalidad, mejorando la sensación en boca y suavizando taninos de forma natural."
                    descEn="Our technology allows wineries to create a narrative of purity and vitality, improving mouthfeel and softening tannins naturally."
                />
            </div>
        </div>
    );
}

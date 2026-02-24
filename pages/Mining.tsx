import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SCIENCE_STATS, CASE_STUDIES_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';
import TechnicalEvaluationCTA from '../components/TechnicalEvaluationCTA';
import AnimatedPulsePill from '../components/AnimatedPulsePill';
import CoreTechnologySection from '../components/CoreTechnologySection';


export default function Mining() {
    const { language, t } = useLanguage();
    const navigate = useNavigate();
    const miningStats = SCIENCE_STATS[language]['mining'] || [];
    const miningStudies = CASE_STUDIES_DATA[language]['mining'] || [];


    return (
        <div className="animate-fadeIn min-h-screen bg-white text-neutral-900 font-outfit">
            {/* Hero Section - Industrial Dark Theme */}
            <header className="pt-32 pb-24 text-white relative overflow-hidden bg-slate-950 border-b border-slate-800">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-transparent to-slate-950/50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Text side */}
                        <div className="flex-1 text-left">
                            <AnimatedPulsePill
                                label={language === 'es' ? 'REMEDIACIÓN INDUSTRIAL' : 'INDUSTRIAL REMEDIATION'}
                                color="cyan"
                                className="mb-8"
                            />
                            <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-none uppercase">
                                {language === 'es' ? 'MINERÍA SOSTENIBLE' : 'SUSTAINABLE MINING'}
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed font-medium max-w-xl">
                                {language === 'es'
                                    ? 'Tecnología de flujo rítmico para la remediación de aguas en operaciones mineras. Reducción de impacto ambiental y mejora de la licencia social para operar.'
                                    : 'Rhythmic flow technology for water remediation in mining operations. Reducing environmental impact and improving social license to operate.'}
                            </p>
                        </div>
                        {/* Image side */}
                        <div className="flex-1 flex justify-center items-center">
                            <img
                                src="/images/sevenfold.png"
                                alt="Flowform Sevenfold"
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

                {/* Solutions & Strategic Value Grid */}
                <section className="mb-32">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none uppercase mb-12">
                        {language === 'es' ? 'VALOR' : 'VALUE'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: '⚒️',
                                title: language === 'es' ? 'Oxidación Pasiva' : 'Passive Oxidation',
                                desc: language === 'es'
                                    ? 'Manejo de grandes volúmenes de AMD con precipitación eficiente de metales.'
                                    : 'Handling large volumes of AMD with efficient metal precipitation.',
                                color: 'bg-cyan-50/30 backdrop-blur-md text-cyan-900'
                            },
                            {
                                icon: '🔄',
                                title: language === 'es' ? 'Recirculación Segura' : 'Safe Recirculation',
                                desc: language === 'es'
                                    ? 'Restauración de la calidad del agua para su reutilización en procesos.'
                                    : 'Restoration of water quality for reuse in processes.',
                                color: 'bg-slate-50/40 backdrop-blur-md text-slate-900'
                            },
                            {
                                icon: '🛡️',
                                title: language === 'es' ? 'Cumplimiento ESG' : 'ESG Compliance',
                                desc: language === 'es'
                                    ? 'Demostración tangible de compromiso ambiental y protección de cuencas.'
                                    : 'Tangible demonstration of environmental commitment and watershed protection.',
                                color: 'bg-slate-50/40 backdrop-blur-md text-slate-900'
                            },
                            {
                                icon: '👃',
                                title: language === 'es' ? 'Aire Limpio' : 'Clean Air',
                                desc: language === 'es'
                                    ? 'Eliminación de olores que afectan la calidad de vida.'
                                    : 'Elimination of odors affecting quality of life.',
                                color: 'bg-slate-50/40 backdrop-blur-md text-slate-900'
                            },
                            {
                                icon: '🌿',
                                title: language === 'es' ? 'Estética' : 'Aesthetics',
                                desc: language === 'es'
                                    ? 'Integración paisajística de estructuras de tratamiento.'
                                    : 'Landscape integration of treatment structures.',
                                color: 'bg-slate-50/40 backdrop-blur-md text-slate-900'
                            },
                            {
                                icon: '🐟',
                                title: language === 'es' ? 'Biodiversidad' : 'Biodiversity',
                                desc: language === 'es'
                                    ? 'Retorno de flora y fauna a cuerpos de agua recuperados.'
                                    : 'Return of flora and fauna to recovered water bodies.',
                                color: 'bg-slate-50/40 backdrop-blur-md text-slate-900'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className={`${item.color} p-10 rounded-[2.5rem] border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-lg transition-all`}>
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                                <p className="text-sm opacity-80 leading-relaxed font-medium">{item.desc}</p>
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Story 1: Tailings Pilot */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white p-8 flex flex-col justify-between min-h-[400px] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/30 transition-all duration-700"></div>
                            <div>
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md rounded-full text-cyan-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6">
                                    {language === 'es' ? 'RELAVES INDUSTRIALES' : 'INDUSTRIAL TAILINGS'}
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Oxigenación Masiva' : 'Massive Oxygenation'}
                                </h4>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Piloto en 4.3 millones de litros de relaves. La instalación de 21 unidades Vortex elevó el oxígeno disuelto de 0 ppm a 6.3 ppm en 6 semanas.'
                                        : 'Pilot on 4.3 million liters of tailings. Installation of 21 Vortex units raised dissolved oxygen from 0 ppm to 6.3 ppm in 6 weeks.'}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">{language === 'es' ? 'ANTES' : 'BEFORE'}</div>
                                    <div className="text-xl font-black text-red-400">0 ppm</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-cyan-400 uppercase tracking-widest mb-1">{language === 'es' ? 'AHORA' : 'NOW'}</div>
                                    <div className="text-3xl font-black text-cyan-400">6.3 ppm</div>
                                </div>
                            </div>
                        </div>

                        {/* Story 2: Mining Camp */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white p-8 flex flex-col justify-between min-h-[400px] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-950/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-cyan-800/50 transition-all duration-700"></div>
                            <div>
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md rounded-full text-cyan-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6">
                                    {language === 'es' ? 'CAMPAMENTO MINERO' : 'MINING CAMP'}
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Control de Olores' : 'Odor Control'}
                                </h4>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Sistema de cascada implementado para el tratamiento de aguas servidas de 40,000 h.e. Eliminación total de olores ofensivos en el entorno.'
                                        : 'Cascade system implemented for wastewater treatment of 40,000 p.e. Total elimination of offensive odors in the surroundings.'}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">{language === 'es' ? 'OLORES' : 'ODORS'}</div>
                                    <div className="text-xl font-black text-red-400">-100%</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-cyan-400 uppercase tracking-widest mb-1">{language === 'es' ? 'ESTADO' : 'STATUS'}</div>
                                    <div className="text-xl font-black text-cyan-400">{language === 'es' ? 'CUMPLIMIENTO' : 'COMPLIANT'}</div>
                                </div>
                            </div>
                        </div>

                        {/* Story 3: Acid Mine Drainage */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white p-8 flex flex-col justify-between min-h-[400px] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                            <div>
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md rounded-full text-cyan-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6">
                                    {language === 'es' ? 'DRENAJE ÁCIDO' : 'ACID DRAINAGE'}
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Estabilización de pH' : 'pH Stabilization'}
                                </h4>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Tratamiento de drenaje ácido de mina mediante oxigenación pasiva. El pH se estabilizó en 7.2 en solo 14 días de tratamiento.'
                                        : 'Treatment of acid mine drainage through passive oxygenation. pH stabilized at 7.2 in just 14 days of treatment.'}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">{language === 'es' ? 'TIEMPO' : 'TIME'}</div>
                                    <div className="text-xl font-black text-white">14 {language === 'es' ? 'Días' : 'Days'}</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-cyan-400 uppercase tracking-widest mb-1">{language === 'es' ? 'pH FINAL' : 'FINAL pH'}</div>
                                    <div className="text-3xl font-black text-cyan-400">7.2</div>
                                </div>
                            </div>
                        </div>

                        {/* Story 4: Process Water */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white p-8 flex flex-col justify-between min-h-[400px] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-950/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-cyan-800/50 transition-all duration-700"></div>
                            <div>
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md rounded-full text-cyan-300 text-[9px] font-black uppercase tracking-[0.2em] mb-6">
                                    {language === 'es' ? 'AGUA DE PROCESO' : 'PROCESS WATER'}
                                </div>
                                <h4 className="text-2xl font-black leading-tight mb-4 tracking-tight">
                                    {language === 'es' ? 'Recuperación Nitrógeno' : 'Nitrogen Recovery'}
                                </h4>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
                                    {language === 'es'
                                        ? 'Recuperación de 12,000 L/h de agua de proceso. Se logró una remoción del 92% de nitrógeno, permitiendo su recirculación inmediata.'
                                        : 'Recovery of 12,000 L/h of process water. 92% nitrogen removal achieved, allowing immediate recirculation.'}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">{language === 'es' ? 'FLUJO' : 'FLOW'}</div>
                                    <div className="text-xl font-black text-white">12k L/h</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-cyan-400 uppercase tracking-widest mb-1">{language === 'es' ? 'NITRÓGENO' : 'NITROGEN'}</div>
                                    <div className="text-3xl font-black text-cyan-400">-92%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Stats Grid (Metrics - 5th Section - END) */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 uppercase">
                            {language === 'es' ? 'Métricas de Impacto' : 'Impact Metrics'}
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            {language === 'es'
                                ? 'Resultados documentados en estudios aplicados'
                                : 'Documented results from applied studies'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {miningStats.map((stat, i) => (
                            <div key={i} className="bg-slate-950 p-10 rounded-3xl border border-slate-800 shadow-xl group hover:border-cyan-700 transition-all">
                                <div className="text-4xl font-black text-cyan-400 mb-4 tracking-tight">{stat.value}</div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-6 leading-relaxed h-10">{stat.label}</div>
                                <div className="pt-6 border-t border-slate-800 mt-auto">
                                    <a
                                        href={stat.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-colors flex items-center group/link"
                                    >
                                        {language === 'es' ? 'VER ESTUDIO' : 'VIEW STUDY'}
                                        <svg className="w-3.5 h-3.5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <TechnicalEvaluationCTA
                    variant="mining"
                    titleEs="¿Listo para Transformar tu Operación?"
                    titleEn="Ready to Transform Your Operation?"
                    descEs="Descubre cómo la tecnología Flowform puede ayudar a tu operación minera a cumplir normativas ambientales y mejorar la relación con las comunidades."
                    descEn="Discover how Flowform technology can help your mining operation meet environmental regulations and improve community relations."
                />
            </div>
        </div>
    );
}

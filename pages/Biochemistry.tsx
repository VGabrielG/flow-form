
import React from 'react';
import { useParams } from 'react-router-dom';
import { CASE_STUDIES_DATA, SCIENCE_STATS } from '../constants';
import { useLanguage } from '../LanguageContext';

/**
 * Biochemistry page detailing the scientific principles of Flowform technology.
 */
export default function Biochemistry() {
  const { category } = useParams<{ category: string }>();
  const { language, t } = useLanguage();
  const cat = category || 'vitalization';
  const caseStudies = CASE_STUDIES_DATA[language][cat] || [];
  const scienceFacts = SCIENCE_STATS[language][cat] || [];

  const themeHex = cat === 'vitalization' ? '#404040' : cat === 'industrial' ? '#52525b' : '#57534e';
  const themeColor = cat === 'vitalization' ? 'neutral' : cat === 'industrial' ? 'zinc' : 'stone';

  return (
    <div className="animate-fadeIn min-h-screen bg-white-dots text-neutral-900">
      <header className="pt-32 pb-48 text-neutral-950 relative overflow-hidden bg-grid-technical border-b border-neutral-100">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-neutral-950 uppercase">{t('science_title')}</h1>
            <p className="text-xl text-neutral-500 leading-relaxed font-medium max-w-3xl mx-auto">
              {t('science_desc')}
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20 pb-32">
        {/* Verified Science Facts Grid */}
        <section className="mb-32">
          <div className="flex items-center space-x-5 mb-16">
            <div className={`w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white shadow-xl`}>
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-4xl font-black text-neutral-950 tracking-tight leading-none uppercase">
              {language === 'es' ? 'Evidencia Científica Verificada' : 'Verified Scientific Evidence'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {scienceFacts.map((fact, i) => (
              <div key={i} className="bg-neutral-950 p-12 rounded-[4rem] border border-white/5 shadow-2xl transition-all duration-700 relative overflow-hidden group hover:-translate-y-3 bg-grid-technical text-white flex flex-col h-full">
                <div className={`absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl transition-opacity group-hover:opacity-100 opacity-50`}></div>
                <div className={`text-7xl font-black text-white mb-8 tracking-tighter leading-none`}>{fact.value}</div>
                <div className="text-[11px] font-black text-white/90 uppercase tracking-[0.25em] mb-12 leading-relaxed h-10">{fact.label}</div>
                <div className="mt-auto space-y-8">
                  <div className="space-y-3">
                    <div className="text-[9px] font-black text-neutral-500 uppercase tracking-[0.3em]">{language === 'es' ? 'Fuente:' : 'Source:'}</div>
                    <div className="text-xs text-neutral-400 font-bold italic line-clamp-2 leading-relaxed">{fact.pdf}</div>
                  </div>
                  <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="bg-neutral-800/80 px-4 py-2 rounded-xl text-[10px] font-black text-white tracking-widest uppercase border border-white/5 shadow-lg">
                      {language === 'es' ? 'Pág.' : 'Pg.'} {fact.page}
                    </div>
                    <a
                      href={fact.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white flex items-center transition-all duration-300 group/btn`}
                    >
                      {language === 'es' ? 'Análisis Técnico' : 'Technical Analysis'}
                      <svg className="w-3.5 h-3.5 ml-2 transform group-hover/btn:translate-x-1 transition-transform opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 7l5 5-5 5M6 7l5 5-5 5" strokeWidth={3} /></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Case Studies Table */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black text-neutral-900 mb-6 tracking-tighter leading-none uppercase">{t('case_title')}</h2>
              <p className="text-lg text-neutral-500 font-medium">Detailed field studies across diverse biological and industrial environments.</p>
            </div>
            <div className={`h-2 w-32 bg-${themeColor}-600 rounded-full mb-4`}></div>
          </div>
          <div className="overflow-x-auto rounded-[3.5rem] border border-neutral-100 shadow-2xl bg-white overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-neutral-50 border-b border-neutral-100">
                <tr>
                  <th className="px-10 py-8 text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">{t('col_subject')}</th>
                  <th className="px-10 py-8 text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">{t('col_volume')}</th>
                  <th className="px-10 py-8 text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">{t('col_setup')}</th>
                  <th className="px-10 py-8 text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">{t('col_time')}</th>
                  <th className="px-10 py-8 text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">{t('col_result')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-50">
                {caseStudies.map((study: any, idx: number) => (
                  <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-10 py-8 font-black text-neutral-950 text-xl tracking-tight leading-none">{study.subject}</td>
                    <td className="px-10 py-8 text-sm text-neutral-500 font-bold uppercase tracking-widest">{study.volume}</td>
                    <td className="px-10 py-8 text-neutral-600 font-medium leading-relaxed">{study.setup}</td>
                    <td className="px-10 py-8 text-sm text-neutral-400 italic font-bold tracking-tight">{study.time}</td>
                    <td className="px-10 py-8">
                      <div className={`inline-block px-6 py-2 rounded-xl bg-neutral-950 text-white font-black text-xs uppercase tracking-widest shadow-lg group-hover:scale-105 transition-transform`}>
                        {study.result}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

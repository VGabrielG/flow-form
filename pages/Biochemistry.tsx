
import React from 'react';
import { useParams } from 'react-router-dom';
import { CASE_STUDIES_DATA, SCIENCE_STATS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

/**
 * Biochemistry page detailing the scientific principles of Flowform technology.
 */
export default function Biochemistry() {
  const { category } = useParams<{ category: string }>();
  const { language, t } = useLanguage();
  const cat = category || 'vitalization';
  const caseStudies = CASE_STUDIES_DATA[language][cat] || [];
  const scienceFacts = SCIENCE_STATS[language][cat] || [];

  const themeHex = cat === 'vitalization' ? '#0d9488' : cat === 'industrial' ? '#ea580c' : '#2563eb';
  const themeColor = cat === 'vitalization' ? 'teal' : cat === 'industrial' ? 'orange' : 'blue';

  // Performance data for the vertical bar chart based on sector
  const performanceData = cat === 'vitalization'
    ? [
        { name: language === 'en' ? 'Biomass Weight' : 'Peso Biomasa', weight: 132.5 },
        { name: language === 'en' ? 'Root Length' : 'Largo Raíz', weight: 109.5 },
        { name: language === 'en' ? 'Vitality Factor' : 'Factor Vitalidad', weight: 120 },
      ]
    : cat === 'industrial'
    ? [
        { name: 'Odor Control', weight: 100 },
        { name: 'BOD Reduction', weight: 86.1 },
        { name: 'DO Saturation', weight: 95 },
      ]
    : [
        { name: 'Nitrogen Removal', weight: 92 },
        { name: 'Phosphorus Removal', weight: 96 },
        { name: 'Ammonia Removal', weight: 99.7 },
      ];

  const abattoirData = [
    { interval: 0, do: 0.26 },
    { interval: 1, do: 1.15 },
    { interval: 2, do: 2.67 },
    { interval: 3, do: 3.60 },
    { interval: 4, do: 4.56 },
    { interval: 5, do: 5.67 },
    { interval: 6, do: 7.01 },
  ];

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 py-16">
      <header className="mb-16 border-b border-slate-200 pb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{t('science_title')}</h1>
        <p className="text-xl text-slate-600 max-w-4xl leading-relaxed font-medium">
          {t('science_desc')}
        </p>
      </header>

      {/* Verified Science Facts Grid */}
      <section className="mb-24">
        <div className="flex items-center space-x-4 mb-10">
           <div className={`w-8 h-8 rounded-lg bg-${themeColor}-600 flex items-center justify-center text-white`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           </div>
           <h2 className="text-2xl font-black text-slate-900">{language === 'es' ? 'Evidencia Científica Verificada' : 'Verified Scientific Evidence'}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {scienceFacts.map((fact, i) => (
             <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-${themeColor}-500/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150`}></div>
                <div className={`text-4xl font-black text-${themeColor}-600 mb-4`}>{fact.value}</div>
                <div className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">{fact.label}</div>
                <div className="pt-6 border-t border-slate-100">
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      {language === 'es' ? 'Fuente: ' : 'Source: '}
                   </div>
                   <div className="text-[11px] text-slate-500 font-medium italic mb-4 line-clamp-1">{fact.pdf}</div>
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-black tracking-tighter">Pág. {fact.page}</span>
                      <button className={`text-[10px] font-black uppercase tracking-widest text-${themeColor}-600 hover:text-${themeColor}-700 flex items-center transition-colors`}>
                         {language === 'es' ? 'Ver Estudio' : 'See Study'}
                         <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" /></svg>
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
        <div className="space-y-8">
          <div className={`bg-${themeColor}-50/50 border-${themeColor}-100 p-8 rounded-3xl border`}>
            <h2 className={`text-2xl font-bold text-${themeColor}-900 mb-4`}>{t('nitro_title')}</h2>
            <p className="text-slate-700 leading-relaxed text-lg font-medium">
              {t('nitro_desc')}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center text-lg">
              <div className={`w-1.5 h-6 bg-${themeColor}-500 rounded-full mr-3`}></div>
              {t('chem_title')}
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start text-slate-600">
                <span className={`w-6 h-6 rounded-full bg-${themeColor}-100 text-${themeColor}-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold text-xs`}>1</span>
                <div className="font-medium">
                  <strong className="text-slate-900">CO2 Stripping:</strong> {cat === 'vitalization' ? 'Energizing water structure for bio-availability.' : 'Neutralizing acidity to shift pH naturally.'}
                </div>
              </li>
              <li className="flex items-start text-slate-600">
                <span className={`w-6 h-6 rounded-full bg-${themeColor}-100 text-${themeColor}-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold text-xs`}>2</span>
                <div className="font-medium">
                  <strong className="text-slate-900">O2 Saturation:</strong> Forced injection of molecular oxygen through thin-film rhythmic pulses.
                </div>
              </li>
              <li className="flex items-start text-slate-600">
                <span className={`w-6 h-6 rounded-full bg-${themeColor}-100 text-${themeColor}-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold text-xs`}>3</span>
                <div className="font-medium">
                  <strong className="text-slate-900">Generative Growth:</strong> {cat === 'vitalization' ? 'Promoting root expansion and flowering.' : 'Replacing anaerobic bacteria with aerobic colonies.'}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl h-[450px]">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">{t('abattoir_chart')} (DO mg/L per Unit)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={abattoirData} margin={{ bottom: 30 }}>
              <defs>
                <linearGradient id="colorTheme" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={themeHex} stopOpacity={0.2}/>
                  <stop offset="95%" stopColor={themeHex} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="interval" tick={{ fontSize: 10, fontWeight: 'bold' }} label={{ value: 'Units', position: 'insideBottom', offset: 20, fontSize: 10, fontWeight: 'bold' }} />
              <YAxis tick={{ fontSize: 10, fontWeight: 'bold' }} label={{ value: 'mg/L', angle: -90, position: 'insideLeft', fontSize: 10, fontWeight: 'bold' }} />
              <Tooltip />
              <Area type="monotone" dataKey="do" stroke={themeHex} fillOpacity={1} fill="url(#colorTheme)" strokeWidth={4} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Results Section */}
      <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 mb-24 text-white shadow-2xl relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-${themeColor}-500/10 rounded-full -mr-48 -mt-48 blur-3xl`}></div>
        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">{t('crop_title')}</h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg font-medium">
              {t('crop_desc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className={`text-4xl font-black text-${themeColor}-400 mb-2`}>{scienceFacts[0]?.value || 'N/A'}</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">{scienceFacts[0]?.label || 'Primary Result'}</div>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className={`text-4xl font-black text-${themeColor}-400 mb-2`}>{scienceFacts[1]?.value || 'N/A'}</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">{scienceFacts[1]?.label || 'Secondary Result'}</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} layout="vertical" margin={{ left: 100 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#ffffff10" />
                <XAxis type="number" hide domain={[0, 140]} />
                <YAxis dataKey="name" type="category" stroke="#fff" tick={{ fontSize: 12, fontWeight: 'bold' } as Record<string, any>} width={100} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' } as Record<string, any>}
                />
                <Bar dataKey="weight" fill={themeHex} radius={[0, 8, 8, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Case Studies Table */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-slate-900">{t('case_title')}</h2>
          <div className="h-1 flex-grow mx-8 bg-slate-100 rounded-full"></div>
        </div>
        <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-xl">
          <table className="w-full text-left bg-white">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">{t('col_subject')}</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">{t('col_volume')}</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">{t('col_setup')}</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">{t('col_time')}</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">{t('col_result')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {caseStudies.map((study: any, idx: number) => (
                <tr key={idx} className={`hover:bg-${themeColor}-50/30 transition-colors`}>
                  <td className="px-8 py-6 font-bold text-slate-900 text-lg">{study.subject}</td>
                  <td className="px-8 py-6 text-sm text-slate-600 font-medium">{study.volume}</td>
                  <td className="px-8 py-6 text-sm text-slate-600 font-medium">{study.setup}</td>
                  <td className="px-8 py-6 text-sm text-slate-500 italic font-medium">{study.time}</td>
                  <td className={`px-8 py-6 text-sm font-bold bg-${themeColor}-50/50 text-${themeColor}-700`}>{study.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

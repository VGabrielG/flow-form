
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MODELS_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Home: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { language, t } = useLanguage();
  const cat = category || 'vitalization';
  const models = MODELS_DATA[language][cat] || [];
  const chartData = models.map((m: any) => ({ name: m.id.toUpperCase().split('-')[0], lph: m.lph }));

  const categoryThemes: Record<string, string> = {
    vitalization: 'teal',
    industrial: 'orange',
    municipal: 'blue'
  };

  const themeColor = categoryThemes[cat] || 'teal';

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden bg-slate-900 text-white`}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className={`absolute top-0 -left-1/4 w-1/2 h-full bg-${themeColor}-500 blur-3xl rounded-full`}></div>
          <div className={`absolute bottom-0 -right-1/4 w-1/2 h-full bg-${themeColor}-700 blur-3xl rounded-full`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t(`landing_${cat}_title`)}
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {t(`landing_${cat}_desc`)}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#models" className={`bg-${themeColor}-600 hover:bg-${themeColor}-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg`}>
                {t('btn_explore')}
              </a>
              <Link to={`/biochemistry/${cat}`} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-all border border-slate-700">
                {t('btn_research')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section id="models" className="py-20 max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('grid_title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('grid_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model: any) => (
            <Link
              key={model.id}
              to={`/model/${cat}/${model.id}`}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={model.imageUrl} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold text-slate-800 mb-2 group-hover:text-${themeColor}-600 transition-colors`}>{model.name}</h3>
                <div className="flex justify-between items-center text-sm text-slate-500 mb-4">
                  <span>{model.lpm} {t('lpm')}</span>
                  <span>{model.lph.toLocaleString()} {t('lph')}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {model.industries.slice(0, 2).map((ind: string, i: number) => (
                    <span key={i} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold uppercase tracking-tighter">{ind}</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4 font-medium">
                  {model.description}
                </p>
                <div className={`flex items-center text-${themeColor}-600 font-semibold text-sm`}>
                  {t('btn_explore')}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparative Chart */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t(`nav_${cat}`)} Capacity (LPH)</h2>
              <p className="text-slate-600 mb-6 font-medium">
                Throughput comparison across different rhythmic iterations within the {cat} sector. Parallel scaling allows for unlimited volume remediation.
              </p>
            </div>
            <div className="lg:w-1/2 w-full h-80 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} label={{ value: t('lph'), angle: -90, position: 'insideLeft' }} />
                  <Tooltip
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="lph" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={themeColor === 'teal' ? '#0d9488' : themeColor === 'orange' ? '#ea580c' : '#2563eb'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MODELS_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
    const { category: urlCategory } = useParams<{ category: string }>();
    const { language, t } = useLanguage();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'all' | 'landscaping' | 'farming' | 'living'>(
        urlCategory === 'municipal' ? 'landscaping' :
            urlCategory === 'industrial' ? 'farming' :
                urlCategory === 'vitalization' ? 'living' : 'all'
    );

    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Ripple Effect Canvas Logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const allModels = useMemo(() => {
        return {
            landscaping: MODELS_DATA[language].municipal || [],
            farming: MODELS_DATA[language].industrial || [],
            living: MODELS_DATA[language].vitalization || []
        };
    }, [language]);

    const filteredModels = useMemo(() => {
        const searchLower = searchTerm.toLowerCase();
        const filterBySearch = (list: any[]) =>
            list.filter(m =>
                m.name.toLowerCase().includes(searchLower) ||
                m.description.toLowerCase().includes(searchLower)
            );

        return {
            landscaping: activeTab === 'all' || activeTab === 'landscaping' ? filterBySearch(allModels.landscaping) : [],
            farming: activeTab === 'all' || activeTab === 'farming' ? filterBySearch(allModels.farming) : [],
            living: activeTab === 'all' || activeTab === 'living' ? filterBySearch(allModels.living) : []
        };
    }, [searchTerm, activeTab, allModels]);

    const renderProductGrid = (title: string, models: any[], catId: string) => {
        if (models.length === 0) return null;
        return (
            <div className="space-y-8" key={catId}>
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-black uppercase tracking-wider text-neutral-900 whitespace-nowrap">{title}</h2>
                    <div className="h-px bg-neutral-200 w-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {models.map((model) => (
                        <div
                            key={model.id}
                            onClick={() => navigate(`/model/${catId}/${model.id}`)}
                            className="group relative h-96 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-4 cursor-pointer"
                        >
                            <img
                                src={model.imageUrl}
                                alt={model.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>

                            {model.price && (
                                <div className="absolute top-8 right-8 z-20">
                                    <span className="inline-block px-4 py-1.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10 shadow-lg group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                                        {model.price}
                                    </span>
                                </div>
                            )}

                            <div className="absolute bottom-10 left-10 right-10 text-left z-20">
                                <h3 className="text-3xl font-black text-white mb-4 leading-none group-hover:text-blue-400 transition-colors shadow-black drop-shadow-lg">
                                    {model.name}
                                </h3>
                                <p className="text-gray-200 text-sm line-clamp-2 mb-6 font-medium leading-relaxed drop-shadow-md opacity-90">
                                    {model.description}
                                </p>
                                <div className="inline-flex items-center space-x-3 text-white font-black uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
                                    <span>VIEW DETAILS</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col relative bg-white">
            {/* Background Dot Grid */}
            <div className="fixed inset-0 bg-grid-technical pointer-events-none z-0 opacity-[0.03]"></div>

            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0"
            />

            <main className="flex-grow relative z-10 pt-32 pb-20">
                <div className="animate-fadeIn max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-6 font-outfit">
                            Our Products
                        </h1>
                        <p className="max-w-2xl mx-auto text-neutral-600 font-medium leading-relaxed">
                            Explore our range of biomimetic water flow technologies designed for home, agriculture, and landscaping.
                        </p>
                    </div>

                    <div className="mb-12 space-y-8">
                        <div className="max-w-xl mx-auto relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-neutral-400 group-focus-within:text-blue-600 transition-colors"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search products, applications..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-12 pr-4 py-4 bg-white border border-neutral-200 rounded-full text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm hover:shadow-md"
                            />
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { id: 'all', label: 'All' },
                                { id: 'landscaping', label: 'Landscaping' },
                                { id: 'farming', label: 'Farming' },
                                { id: 'living', label: 'Living' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 border ${activeTab === tab.id
                                        ? 'bg-neutral-950 text-white border-neutral-900 shadow-lg transform scale-105'
                                        : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 hover:shadow-md'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-20">
                        {renderProductGrid('Landscaping', filteredModels.landscaping, 'landscaping')}
                        {renderProductGrid('Agricultural Solutions', filteredModels.farming, 'farming')}
                        {renderProductGrid('Interior Living', filteredModels.living, 'living')}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;

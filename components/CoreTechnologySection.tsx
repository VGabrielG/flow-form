import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

interface CoreTechnologySectionProps {
    themeColor?: 'red' | 'amber' | 'cyan' | 'yellow' | 'emerald';
}

const colorMap = {
    red: {
        button: 'bg-red-900 hover:bg-red-800 text-white border-red-700',
        accent: 'text-red-400',
        border: 'border-red-500',
    },
    amber: {
        button: 'bg-amber-700 hover:bg-amber-600 text-white border-amber-600',
        accent: 'text-amber-400',
        border: 'border-amber-500',
    },
    cyan: {
        button: 'bg-cyan-800 hover:bg-cyan-700 text-white border-cyan-600',
        accent: 'text-cyan-400',
        border: 'border-cyan-500',
    },
    yellow: {
        button: 'bg-yellow-700 hover:bg-yellow-600 text-white border-yellow-500',
        accent: 'text-yellow-400',
        border: 'border-yellow-500',
    },
    emerald: {
        button: 'bg-emerald-800 hover:bg-emerald-700 text-white border-emerald-600',
        accent: 'text-emerald-400',
        border: 'border-emerald-500',
    },
};

export default function CoreTechnologySection({ themeColor = 'red' }: CoreTechnologySectionProps) {
    const { language, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const colors = colorMap[themeColor];

    return (
        <div className="w-full flex flex-col items-center mt-12 relative z-20">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`group flex items-center gap-4 px-8 py-4 rounded-full border transition-all duration-300 shadow-lg hover:shadow-xl ${colors.button} ${colors.border}`}
            >
                <span className="text-sm font-black uppercase tracking-widest">
                    {language === 'es' ? 'Cómo funciona la tecnología' : 'How the technology works'}
                </span>
                <svg
                    className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div className={`w-full overflow-hidden transition-all duration-700 ease-in-out text-left ${isOpen ? 'max-h-[2000px] opacity-100 translate-y-0 mt-8' : 'max-h-0 opacity-0 -translate-y-8'}`}>
                <div className="bg-neutral-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    <div className="relative z-10 w-full">
                        <h2 className={`text-sm font-black uppercase tracking-[0.4em] mb-12 border-l-2 ${colors.border} ${colors.accent} pl-4`}>
                            {language === 'es' ? 'MECANISMO CORE' : 'CORE MECHANISM'}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-left">
                            <div>
                                <div className={`text-4xl mb-6 ${colors.accent}`}>01</div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{t('step_1_title')}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">{t('step_1_desc')}</p>
                            </div>
                            <div>
                                <div className={`text-4xl mb-6 ${colors.accent}`}>02</div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{t('step_2_title')}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">{t('step_2_desc')}</p>
                            </div>
                            <div>
                                <div className={`text-4xl mb-6 ${colors.accent}`}>03</div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{t('step_3_title')}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">{t('step_3_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

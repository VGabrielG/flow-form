import React from 'react';
import { useLanguage } from '../LanguageContext';

type Variant = 'livestock' | 'winery' | 'mining' | 'municipalities';

interface TechnicalEvaluationCTAProps {
    variant: Variant;
    titleEs: string;
    titleEn: string;
    descEs: string;
    descEn: string;
}

const TechnicalEvaluationCTA: React.FC<TechnicalEvaluationCTAProps> = ({ variant }) => {
    const { language } = useLanguage();

    return (
        <div className="w-full flex items-center justify-center gap-4 my-10">
            {/* Arrow pointing right toward the button */}
            <div className="flex items-center gap-2 text-neutral-400">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                    {language === 'es' ? 'Evaluación' : 'Evaluation'}
                </span>
                <svg
                    className="w-8 h-8 animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </div>

            <button className="bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-500 px-8 py-3 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all duration-300 shadow-lg">
                {language === 'es' ? 'Solicitar Evaluación Técnica' : 'Request Technical Evaluation'}
            </button>
        </div>
    );
};

export default TechnicalEvaluationCTA;

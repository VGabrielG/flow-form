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

const TechnicalEvaluationCTA: React.FC<TechnicalEvaluationCTAProps> = ({ variant, titleEs, titleEn, descEs, descEn }) => {
    const { language } = useLanguage();

    const getThemeClasses = () => {
        switch (variant) {
            case 'livestock':
                return {
                    bg: 'bg-green-950',
                    text: 'text-green-200/80',
                    buttonText: 'text-green-950',
                    glow: 'bg-green-600/20'
                };
            case 'winery':
                return {
                    bg: 'bg-red-950',
                    text: 'text-red-200/80',
                    buttonText: 'text-red-950',
                    glow: 'bg-red-600/20'
                };
            case 'mining':
                return {
                    bg: 'bg-slate-950',
                    text: 'text-slate-300',
                    buttonText: 'text-slate-950',
                    glow: 'bg-cyan-600/10' // Cold/Industrial feel
                };
            case 'municipalities':
                return {
                    bg: 'bg-cyan-950',
                    text: 'text-cyan-200/80',
                    buttonText: 'text-cyan-950',
                    glow: 'bg-cyan-400/20'
                };
            default:
                return {
                    bg: 'bg-neutral-950',
                    text: 'text-neutral-200',
                    buttonText: 'text-neutral-950',
                    glow: 'bg-neutral-500/20'
                };
        }
    };

    const theme = getThemeClasses();

    return (
        <section className={`${theme.bg} text-white p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden transition-colors duration-500`}>
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            {/* Glow Effect */}
            <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] ${theme.glow} rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none`}></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight leading-tight">
                    {language === 'es' ? titleEs : titleEn}
                </h3>
                <p className={`text-xl ${theme.text} font-medium mb-12 leading-relaxed`}>
                    {language === 'es' ? descEs : descEn}
                </p>
                <button className={`bg-white ${theme.buttonText} px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 shadow-2xl`}>
                    {language === 'es' ? 'Solicitar Evaluación Técnica' : 'Request Technical Evaluation'}
                </button>
            </div>
        </section>
    );
};

export default TechnicalEvaluationCTA;

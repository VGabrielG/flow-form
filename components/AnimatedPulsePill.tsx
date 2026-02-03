import React from 'react';

interface AnimatedPulsePillProps {
    label: string;
    color: 'red' | 'green' | 'cyan' | 'white' | 'slate';
    className?: string;
}

const AnimatedPulsePill: React.FC<AnimatedPulsePillProps> = ({ label, color, className = '' }) => {
    const theme = {
        red: {
            bg: 'bg-red-500/10',
            border: 'border-red-500/20',
            dot: 'bg-red-500',
            text: 'text-red-200',
            glow: 'rgba(239, 68, 68, 0.5)'
        },
        green: {
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            dot: 'bg-green-500',
            text: 'text-green-200',
            glow: 'rgba(34, 197, 94, 0.5)'
        },
        cyan: {
            bg: 'bg-cyan-500/10',
            border: 'border-cyan-500/20',
            dot: 'bg-cyan-400',
            text: 'text-cyan-200',
            glow: 'rgba(34, 211, 238, 0.5)'
        },
        white: {
            bg: 'bg-white/10',
            border: 'border-white/20',
            dot: 'bg-white',
            text: 'text-white',
            glow: 'rgba(255, 255, 255, 0.5)'
        },
        slate: {
            bg: 'bg-slate-500/10',
            border: 'border-slate-500/20',
            dot: 'bg-slate-400',
            text: 'text-slate-200',
            glow: 'rgba(148, 163, 184, 0.5)'
        }
    }[color];

    return (
        <div className={`inline-flex items-center space-x-3 px-4 py-2 ${theme.bg} rounded-full border ${theme.border} backdrop-blur-md ${className}`}>
            <div className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.dot} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${theme.dot} shadow-[0_0_10px_${theme.glow}]`}></span>
            </div>

            <span className={`${theme.text} text-[10px] font-black uppercase tracking-[0.2em]`}>
                {label}
            </span>
        </div>
    );
};


export default AnimatedPulsePill;

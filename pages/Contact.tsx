
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Ripple Effect Canvas Logic (consistent with Home.tsx)
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

    return (
        <div className="min-h-screen flex flex-col relative bg-white">
            {/* Background Dot Grid (consistent with Home.tsx) */}
            <div className="fixed inset-0 bg-grid-technical pointer-events-none z-0 opacity-[0.03]"></div>

            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0"
            />

            <div className="min-h-screen bg-transparent pt-32 pb-24 px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-black text-neutral-900 mb-6 uppercase tracking-tight">
                            {t('nav_contact')}
                        </h1>
                        <p className="text-xl text-neutral-500 font-medium">
                            Get in touch with our team for inquiries and support.
                        </p>
                    </div>

                    <div className="bg-neutral-50 rounded-[2.5rem] p-10 md:p-16 border border-neutral-100 shadow-xl">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-neutral-400 pl-4">Name</label>
                                    <input
                                        className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 font-medium focus:outline-none focus:border-neutral-400 transition-colors"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-neutral-400 pl-4">Email</label>
                                    <input
                                        className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 font-medium focus:outline-none focus:border-neutral-400 transition-colors"
                                        placeholder="john@example.com"
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-neutral-400 pl-4">Message</label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 text-neutral-900 font-medium focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-neutral-950 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-neutral-800 transition-colors shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>

                        <div className="mt-16 pt-16 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h3 className="font-black uppercase tracking-widest text-xs text-neutral-400 mb-2">Email</h3>
                                <p className="font-medium text-neutral-900">info@flowform.net</p>
                            </div>
                            <div>
                                <h3 className="font-black uppercase tracking-widest text-xs text-neutral-400 mb-2">Phone</h3>
                                <p className="font-medium text-neutral-900">+1 (555) 123-4567</p>
                            </div>
                            <div>
                                <h3 className="font-black uppercase tracking-widest text-xs text-neutral-400 mb-2">Location</h3>
                                <p className="font-medium text-neutral-900">New York, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

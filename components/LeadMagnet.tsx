'use client';

import React, { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Send, CheckCircle, BarChart3, Zap, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadMagnet({ source = "Genel" }: { source?: string }) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'lead',
                    phone,
                    website,
                    source: `Ücretsiz Analiz - ${source}`
                }),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                // Hata durumunda bile başarılı göster (CRO) veya fallback
                setStatus('success');
            }
        } catch (error) {
            setStatus('success');
        }
    };

    return (
        <section className="py-24 px-4 relative overflow-hidden bg-[#080808] border-y border-white/5">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00F5FF]/5 rounded-full blur-[100px]" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal direction="left">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 text-[#C9A84C] text-sm font-bold uppercase tracking-widest">
                                <BarChart3 size={16} /> Ücretsiz Analiz
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white font-sora leading-tight">
                                Sitenizi İnceleyip <span className="text-gradient-gold text-white">Sizi Arayalım.</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Karmaşık raporları unutun. Sitenizin SEO eksiklerini ve satış kaçıran noktalarını inceleyip sizi <strong className="text-white">24 saat içinde</strong> arayalım ve stratejinizi konuşalım.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { icon: Zap, text: "Telefonla Hızlı Strateji Özeti" },
                                    { icon: Target, text: "SEO Sıralama Fırsatları" },
                                    { icon: CheckCircle, text: "Dönüşüm (Satış) Engelleri" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <item.icon className="text-[#C9A84C]" size={20} />
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div className="p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group">
                            <AnimatePresence mode="wait">
                                {status !== 'success' ? (
                                    <motion.form
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6 relative z-10"
                                    >
                                        <div>
                                            <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-widest">Web Sitesi URL</label>
                                            <input
                                                required
                                                type="url"
                                                placeholder="https://siteniz.com"
                                                value={website}
                                                onChange={(e) => setWebsite(e.target.value)}
                                                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-all font-medium"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-widest">Telefon Numaranız</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="05XX XXX XX XX"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-all font-medium"
                                            />
                                        </div>
                                        <button
                                            disabled={status === 'loading'}
                                            type="submit"
                                            className="w-full py-5 bg-gradient-to-r from-[#C9A84C] to-[#FFD700] text-black font-bold rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#C9A84C]/20 disabled:opacity-50"
                                        >
                                            {status === 'loading' ? (
                                                <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                            ) : (
                                                <>Ücretsiz Analiz & Geri Arama <Send size={20} /></>
                                            )}
                                        </button>
                                        <p className="text-center text-gray-500 text-xs">
                                            Analizimiz tamamlandığında sizi verdiğiniz numaradan arayacağız.
                                        </p>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="text-center py-12 space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-[#C9A84C]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle className="text-[#C9A84C]" size={48} />
                                        </div>
                                        <h3 className="text-3xl font-bold font-sora text-white">Talebiniz Alındı!</h3>
                                        <p className="text-gray-400 text-lg">
                                            Ekibimiz <strong className="text-white">{website}</strong> adresini incelemeye başladı. 24 saat içinde sizi <strong className="text-white">{phone}</strong> numarasından arayacağız.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

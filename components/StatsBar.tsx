'use client';

import React from 'react';
import CountUp from './ui/CountUp';
import { GlassCard } from './ui/GlassCard';

export default function StatsBar() {
    const stats = [
        { label: 'Proje Teslimatı', value: 250, suffix: '+', prefix: '' },
        { label: 'SEO Başarı Oranı', value: 98, suffix: '%', prefix: '' },
        { label: 'Yıllık ROI Artışı', value: 3.5, suffix: 'X', prefix: '', decimals: 1 },
        { label: 'Aktif Müşteri', value: 120, suffix: '+', prefix: '' },
    ];

    return (
        <section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-sora">
                                <CountUp
                                    end={stat.value}
                                    suffix={stat.suffix}
                                    prefix={stat.prefix}
                                    decimals={stat.decimals}
                                />
                            </div>
                            <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider group-hover:text-[var(--color-gold)] transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
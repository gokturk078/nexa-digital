'use client';

import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import ScrollReveal from './ui/ScrollReveal';
import { XCircle, AlertTriangle, TrendingDown } from 'lucide-react';

const pains = [
    {
        title: 'Düşük Dönüşüm Oranları',
        description: 'Web siteniz trafik alıyor ama satış yapmıyorsa, bu sadece bir masraftır. Biz bu masrafı yatırıma dönüştürüyoruz.',
        icon: TrendingDown,
    },
    {
        title: 'Görünmezlik Sorunu',
        description: 'Google\'da ilk sayfada değilseniz, dijital dünyada yoksunuz demektir. Rakipleriniz müşterilerinizi çalıyor.',
        icon: Search,
    },
    {
        title: 'Yavaş ve Hantal Altyapı',
        description: '3 saniyeden geç açılan her site, ziyaretçilerinin %40\'ını henüz sayfa yüklenmeden kaybeder.',
        icon: AlertTriangle,
    },
];

import { Search } from 'lucide-react';

export function PainSection() {
    return (
        <section className="py-24 bg-[#050505] border-y border-white/5">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Neden Birçok İşletme Dijitalde Başarısız Oluyor?"
                    subtitle="Güzel bir tasarım yetmez. Doğru strateji, hız ve veriye dayanmayan hiçbir sistem size para kazandıramaz."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
                    {pains.map((pain, index) => (
                        <ScrollReveal key={index} delay={index * 0.2}>
                            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 hover:border-red-500/20 transition-all group">
                                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <pain.icon className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 font-sora">{pain.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {pain.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
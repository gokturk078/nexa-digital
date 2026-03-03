'use client';

import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import ScrollReveal from './ui/ScrollReveal';
import { Layout, Search, Cpu, BarChart3, Globe, Zap } from 'lucide-react';

interface ServicesProps {
    region?: 'tr' | 'cy';
}

export function ServicesSection({ region }: ServicesProps) {
    const services = [
        {
            title: 'Lüks Web Tasarım',
            description: 'Saniyede açılan, Apple standartlarında, dönüşüm odaklı dijital sanat eserleri.',
            icon: Layout,
            color: 'var(--color-gold)',
        },
        {
            title: 'Kurumsal SEO',
            description: 'Sektörünüzün en karlı anahtar kelimelerinde ilk sayfayı domine edin.',
            icon: Search,
            color: 'var(--color-cyan)',
        },
        {
            title: 'AI Entegrasyonları',
            description: 'Müşterilerinizi 7/24 karşılayan, satış kapatan akıllı AI chatbot sistemleri.',
            icon: Cpu,
            color: 'var(--color-gold)',
        },
        {
            title: 'Performans Pazarlama',
            description: 'Veri odaklı stratejilerle reklam bütçenizi maksimum ROI\'ye dönüştürün.',
            icon: BarChart3,
            color: 'var(--color-cyan)',
        },
        {
            title: 'Global Branding',
            description: region === 'tr'
                ? 'Markanızı Türkiye\'den dünya vitrinine taşıyan, global standartlarda dijital kimlik.'
                : 'Markanızı Kıbrıs\'tan dünya vitrinine taşıyan, global standartlarda dijital kimlik.',
            icon: Globe,
            color: 'var(--color-gold)',
        },
        {
            title: 'Hız Optimizasyonu',
            description: 'Google Core Web Vitals skorlarında %100 başarı ve anlık yükleme hızı.',
            icon: Zap,
            color: 'var(--color-cyan)',
        },
    ];
    return (
        <section id="hizmetler" className="py-24 lg:py-32 px-4">
            <div className="container mx-auto">
                <SectionHeading
                    title="Dijital Üstünlük Silahlarınız"
                    subtitle="Sadece bir web sitesi değil; müşteri getiren, satış yapan ve markanızı büyüten profesyonel bir ekosistem inşa ediyoruz."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <GlassCard className="h-full flex flex-col items-start text-left group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                                    <service.icon className="w-6 h-6" style={{ color: service.color }} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 font-sora">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {service.description}
                                </p>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
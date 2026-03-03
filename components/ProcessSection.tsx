'use client';

import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import ScrollReveal from './ui/ScrollReveal';

const steps = [
    {
        number: '01',
        title: 'Strateji ve Analiz',
        description: 'Hizmetinizi ve pazarınızı analiz ederek size özel dijital büyüme haritasını çıkarıyoruz.',
    },
    {
        number: '02',
        title: 'Üretim ve Geliştirme',
        description: 'En güncel teknolojilerle (Next.js 15, Tailwind 4) ultra-hızlı ve şık yapınızı inşa ediyoruz.',
    },
    {
        number: '03',
        title: 'SEO ve AI Entegrasyonu',
        description: 'Arama motorlarını domine edeceğiniz altyapıyı ve akıllı satış sistemlerini kuruyoruz.',
    },
    {
        number: '04',
        title: 'Test ve Lansman',
        description: 'Her şeyi kusursuzca test ederek dijital silahınızı dünyaya sunuyoruz.',
    },
];

export default function ProcessSection() {
    return (
        <section className="py-24 bg-[#080808]">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Nasıl Çalışıyoruz?"
                    subtitle="Kargaşa yok, belirsizlik yok. Adım adım başarıya giden şeffaf bir süreç."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />

                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.15} className="relative z-10">
                            <div className="group">
                                <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:border-[var(--color-gold)] group-hover:scale-110 transition-all duration-500">
                                    <span className="text-xl font-bold text-[var(--color-gold)]">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 font-sora text-center lg:text-left">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed text-center lg:text-left">
                                    {step.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
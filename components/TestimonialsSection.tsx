'use client';

import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import ScrollReveal from './ui/ScrollReveal';
import { GlassCard } from './ui/GlassCard';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Mehmet Yılmaz',
        role: 'CEO, Luxe Estate Holding',
        content: 'Nexa Digital ile çalıştıktan sonra web sitemizden gelen organik "nitelikli" randevu sayısı %340 arttı. Sıradan bir site değil, gerçekten satış yapan bir makine teslim ettiler.',
        rating: 5,
    },
    {
        name: 'Ayşe Demir',
        role: 'Kurucu Yönetici, Moda Nüans',
        content: 'Premium markamızı dijitale kusursuz taşıdılar. Hız, tasarım ve entegre ettikleri yapay zeka asistanı sayesinde müşteri geri dönüşlerimiz inanılmaz hızlandı.',
        rating: 5,
    },
    {
        name: 'Can Aksoy',
        role: 'Genel Müdür, Aksoy Mimarlık',
        content: 'SEO ve kurumsal prestij konusunda verdikleri her sözü tuttular. 3 ay içinde hedeflediğimiz tüm kelimelerde 1. sayfaya yerleştik. Sektördeki en iyi yatırımımız.',
        rating: 5,
    },
];

export function TestimonialsSection() {
    return (
        <section id="referanslar" className="py-24 lg:py-32 bg-black">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Müşterilerimizin Başarı Hikayeleri"
                    subtitle="Sadece biz değil, birlikte büyüdüğümüz iş ortaklarımız anlatıyor."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <GlassCard className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 italic mb-8 leading-relaxed">
                                        "{testimonial.content}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#00D4FF] flex items-center justify-center text-black font-bold text-xl relative">
                                        {testimonial.name.charAt(0)}
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">{testimonial.role}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
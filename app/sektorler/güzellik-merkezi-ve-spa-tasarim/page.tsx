import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Sparkles, Heart, Sun, Scissors, Zap, Target } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));

export const metadata: Metadata = {
    title: "Güzellik Merkezi & Spa Web Tasarım ve Dijital Pazarlama | Nexa Digital",
    description: "Estetik ve güzellik merkezleri için randevu odaklı, görsel derinliği yüksek ve lüks algısı yaratan premium web çözümleri. Dijitalde ışıldayın.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/güzellik-merkezi-ve-spa-tasarim"
    }
};

export default function GuzellikSektoru() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Güzellik & Spa Dijital Dönüşüm Paketi",
        "description": "Estetik merkezleri için lüks randevu sistemli web tasarımı ve görsel marka yönetimi.",
        "provider": { "@id": "https://wearenexa.co/#organization" }
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="text-pink-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Estetik, Zarafet & Dijital Prestij</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                Dijitalde <span className="text-gradient-gold">Kusursuz</span> Bir Görünüm.
                            </h1>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Müşterileriniz merkezinize gelmeden önce web sitenizde bir "ön seans" yapar. Onlara içeriye girmeden o ferahlığı, lüksü ve <strong className="text-white">güveni</strong> hissettiriyoruz.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <GradientButton href="#randevu" size="lg">Işıldamaya Başlayın</GradientButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Visual Experience */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Sparkles, title: "Lüks Galeri", desc: "Uygulamalarınızın sonucunu ve ambiyansını yansıtan görsel vitrinler." },
                            { icon: Heart, title: "Güven Faktörü", desc: "Uzman kadro tanıtımlarıyla müşterilerinizi ikna eden kurumsal yapı." },
                            { icon: Scissors, title: "VIP Randevu", desc: "Günün her saati telefon beklemeden randevu alma kolaylığı." },
                            { icon: Sun, title: "Sadakat Sistemi", desc: "VIP müşterileriniz için özel portal ve kampanya yönetimi." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center hover:border-pink-500/30 transition-all h-full group">
                                    <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-500/20 transition-colors">
                                        <item.icon className="text-pink-400" size={32} />
                                    </div>
                                    <h4 className="font-bold text-white mb-2 font-sora text-xl">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <BookingSection source="Güzellik Sektörü Sayfası" />
            <Footer />
        </main>
    );
}

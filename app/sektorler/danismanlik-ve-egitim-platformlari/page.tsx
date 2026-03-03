import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { GraduationCap, Briefcase, Globe, Award, Zap, Target } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));

export const metadata: Metadata = {
    title: "Danışmanlık ve Eğitim Platformları İçin Web Çözümleri | Nexa Digital",
    description: "Bilginizi kazanca dönüştürün. Danışmanlar, koçlar ve eğitim kurumları için profesyonel kişisel marka siteleri ve online eğitim (LMS) altyapıları.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/danismanlik-ve-egitim-platformlari"
    }
};

export default function DanismanlikSektoru() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Danışmanlık Dijital Otorite Paketi",
        "description": "Danışmanlar ve eğitimciler için kişisel marka odaklı lüks web tasarımı ve randevu sistemleri.",
        "provider": { "@id": "https://wearenexa.co/#organization" }
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <div>
                                <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Bilgi Otoritesi & Kişisel Marka</span>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                    Uzmanlığınızı <span className="text-gradient-gold">Global</span> Ölçekte Pazarlayın.
                                </h1>
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    Danışmanlık sektöründe ürününüz SİZSİNİZ. Uzmanlığınızı elit bir dille sunan <strong className="text-white">Dijital Satış Makinesi</strong> ile pazarda tek otorite haline gelin.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <GradientButton href="#randevu" size="lg">Uzmanlığınızı Gösterin</GradientButton>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
                                            ))}
                                        </div>
                                        <span>+100 Danışman Bizi Seçti</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Briefcase, label: "PROFESYONEL CV", color: "text-blue-400" },
                                    { icon: GraduationCap, label: "LMS AKADEMİ", color: "text-teal-400" },
                                    { icon: Award, label: "OTO-SERTİFİKA", color: "text-[#C9A84C]" },
                                    { icon: Globe, label: "GLOBAL ERİŞİM", color: "text-purple-400" }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 glass rounded-2xl border border-white/10 flex flex-col items-center hover:border-teal-500/30 transition-colors group">
                                        <item.icon size={48} className={`${item.color} mb-4 group-hover:scale-110 transition-transform`} />
                                        <h4 className="font-bold text-xs text-center text-white tracking-widest">{item.label}</h4>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            <BookingSection source="Danışmanlık Sektörü Sayfası" />
            <Footer />
        </main>
    );
}

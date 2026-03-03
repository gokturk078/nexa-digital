import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Utensils, Smartphone, Map, Star, Zap, Target } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: "Restoran & Cafe Dijital Menü ve Web Tasarım Çözümleri | Nexa Digital",
    description: "Gastronomi dünyasında fark yaratan, online rezervasyon ve QR menü entegrasyonlu premium restoran web siteleri. Müşterilerinizi masaya çekin.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/restoran-kafe-dijital-menu-ve-tasarim"
    }
};

export default function RestoranSektoru() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Restoran Dijital Deneyim Paketi",
        "description": "Restoran ve cafeler için QR menü, rezervasyon ve Google Haritalar odaklı dijital büyüme.",
        "provider": { "@id": "https://wearenexa.co/#organization" }
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "Sektörler", href: "/#sektorler" }, { name: "Restoran & Kafe", href: "/sektorler/restoran-kafe-dijital-menu-ve-tasarim" }]} />
            </div>

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <div>
                                <span className="text-red-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Gastronomi & Dijital Deneyim</span>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                    Lezzetinizi <span className="text-gradient-gold">Dijital</span> Dünyada Sergileyin.
                                </h1>
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    Bir restoran için web sitesi sadece bir "adres" değildir; o markanın dijital tadıdır. Misafirleriniz kapınızdan girmeden önce menünüzü, ambiyansınızı ve hızınızı online olarak test eder. Biz, restoranlar için <Link href="/hizmetler/hiz-optimizasyonu" className="text-gold-500 underline underline-offset-4 font-bold">Google Hız Optimizasyonu</Link> ve kusursuz UX tasarımı ile iştah kabartan bir dijital deneyim inşa ediyoruz. Saniyeler içinde rezervasyon yaptıran bir <strong className="text-white">Dijital Satış Makinesi</strong> sunuyoruz.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <GradientButton href="#randevu" size="lg">Menünüzü Dijitalleştirin</GradientButton>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
                                            ))}
                                        </div>
                                        <span>+50 Mekan Bizi Tercih Etti</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 glass rounded-2xl border border-white/10 text-center hover:border-red-500/30 transition-colors group">
                                    <Utensils className="text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-white font-bold">Lüks QR Menü</p>
                                </div>
                                <div className="p-6 glass rounded-2xl border border-white/10 text-center translate-y-8 hover:border-[#C9A84C]/30 transition-colors group">
                                    <Smartphone className="text-[#C9A84C] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-white font-bold">Mobil Sipariş</p>
                                </div>
                                <div className="p-6 glass rounded-2xl border border-white/10 text-center hover:border-blue-500/30 transition-colors group">
                                    <Map className="text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-white font-bold">Harita Karakteri</p>
                                </div>
                                <div className="p-6 glass rounded-2xl border border-white/10 text-center translate-y-8 hover:border-green-500/30 transition-colors group">
                                    <Star className="text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-white font-bold">VIP Rezervasyon</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            <LeadMagnet />
            <BookingSection source="Restoran Sektörü Sayfası" />
            <Footer />
        </main>
    );
}

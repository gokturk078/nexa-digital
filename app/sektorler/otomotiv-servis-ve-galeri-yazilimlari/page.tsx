import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Car, Settings, Wrench, MapPin, Zap, Target } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));

export const metadata: Metadata = {
    title: "Otomotiv Galeri ve Servisler İçin Dijital Çözümler | Nexa Digital",
    description: "Araç satışını ve servis randevularını artıran, Google Haritalar uyumlu otomotiv web tabanlı CRM ve katalog sistemleri. Markanızı dijitalde hızlandırın.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/otomotiv-servis-ve-galeri-yazilimlari"
    }
};

export default function OtomotivSektoru() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Otomotiv Dijital Satış & CRM Paketi",
        "description": "Galeriler ve servisler için araç kataloglu web tasarımı ve randevu sistemli CRM.",
        "provider": { "@id": "https://wearenexa.co/#organization" }
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Full-Throttle Digital Branding</span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-sora tracking-tight">
                                Hızınıza Uygun <span className="text-gradient-gold">Dijital Güç</span>.
                            </h1>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                                Galeriniz veya servisiniz için sadece bir site değil, her ay yüzlerce yeni müşteri kazandıran bir <strong className="text-white">Satış Makinesi</strong> tasarlıyoruz. Google'da liderliği ele alın.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <GradientButton href="#randevu" size="lg">Dijitalde Gaza Basın</GradientButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Features */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Car, title: "Dijital Katalog", desc: "Araçlarınızın her detayını premium kalitede sergileyen lüks katalog." },
                            { icon: Settings, title: "Online Randevu", desc: "Müşterilerinizin telefon açmadan servis sırası almasını sağlayan sistem." },
                            { icon: MapPin, title: "Lokal SEO", desc: "Google Haritalar'da şehrinizin 1 numaralı galerisi olun." },
                            { icon: Wrench, title: "Servis CRM", desc: "Müşteri geçmişini ve bakım periyotlarını takip eden akıllı altyapı." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all text-center h-full group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                                        <item.icon className="text-blue-400" size={32} />
                                    </div>
                                    <h4 className="font-bold text-white mb-2 font-sora text-xl text-center">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <BookingSection source="Otomotiv Sektörü Sayfası" />
            <Footer />
        </main>
    );
}

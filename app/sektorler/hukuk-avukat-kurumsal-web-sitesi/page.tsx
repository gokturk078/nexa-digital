import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Scale, ShieldCheck, Gavel, FileText, Target, Zap } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: "Hukuk ve Avukatlık Büroları İçin Profesyonel Web Tasarım | Nexa Digital",
    description: "Müvekkillerinize güven veren, otorite yansıtan ve 'avukat' aramalarında sizi öne çıkaran kurumsal hukuk web platformları. Etik ve lüks bir duruş.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/hukuk-avukat-kurumsal-web-sitesi"
    }
};

export default function HukukSektoru() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Hukuk Sektörü Dijital Otorite Paketi",
        "description": "Avukatlık büroları için baro kurallarına uyumlu, prestijli web tasarımı ve SEO.",
        "provider": { "@id": "https://wearenexa.co/#organization" }
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "Sektörler", href: "/#sektorler" }, { name: "Hukuk & Avukat", href: "/sektorler/hukuk-avukat-kurumsal-web-sitesi" }]} />
            </div>

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Hukuksal Otorite & Prestij</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                Güven İnşa Eden <span className="text-gradient-gold">Dijital Otorite</span>.
                            </h1>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                                Hukuk dünyasında güven, saniyeler içinde inşa edilir veya yıkılır. Potansiyel müvekkilleriniz Google'da bir avukat ararken, karşılarına çıkan sitenin ciddiyeti ve hızı karar verme süreçlerini doğrudan etkiler. Nexa Digital olarak, hukuk büroları için <Link href="/hizmetler/web-tasarim" className="text-gold-500 underline underline-offset-4 font-bold">Premium Web Tasarım</Link> çözümleri sunarak markanızın prestijini dijital dünyaya taşıyoruz.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <GradientButton href="#randevu" size="lg">Büronuzu Dijitalde Başlatın</GradientButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Pillars of Authority */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-sora mb-4">Hukuksal <span className="text-gradient-gold">Sütunlar</span></h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Baro kuralları çerçevesinde, etik değerleri modern teknolojiyle birleştiriyoruz.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Scale, title: "Etik Tasarım", desc: "Baro kurallarına uygun, ağırbaşlı ve kurumsal duruş." },
                            { icon: ShieldCheck, title: "Güven Faktörü", desc: "Müvekkilin psikolojik güvenini ilk 3 saniyede kazanan UX." },
                            { icon: Gavel, title: "SEO Otoritesi", desc: "Spesifik dava türlerinde 'en iyi avukat' aramalarında üst sıra." },
                            { icon: FileText, title: "İçerik Stratejisi", desc: "Uzmanlığınızı belgeleyen makaleler için gelişmiş blog altyapısı." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all text-center h-full group">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
                                        <item.icon className="text-purple-400" size={32} />
                                    </div>
                                    <h4 className="font-bold text-white mb-2 font-sora text-xl">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <LeadMagnet />
            <BookingSection source="Hukuk Sektörü Sayfası" />
            <Footer />
        </main>
    );
}

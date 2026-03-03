import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { BarChart, Target, Users, MousePointer2, TrendingUp, Zap, PieChart } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: "Performans Pazarlama & ROI Odaklı Reklam Yönetimi | Nexa Digital",
    description: "Reklam bütçenizi bir masraf değil, bir yatırım olarak görün. Google Ads, Meta ve LinkedIn reklamlarında maksimum dönüşüm (ROI) garantili stratejiler.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/performans-pazarlama"
    }
};

export default function PerformansPazarlama() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://wearenexa.co/hizmetler/performans-pazarlama#service",
        "name": "Nexa Performans & ROI Yönetimi",
        "provider": {
            "@id": "https://wearenexa.co/#organization"
        },
        "description": "Veri odaklı reklam yönetimi ve yüksek dönüşümlü satış hunileri.",
        "serviceType": "Performance Marketing"
    };

    const faqData = [
        {
            question: "Minimum reklam bütçesi ne kadar olmalı?",
            answer: "Sektörünüze ve hedeflerinize göre değişmekle birlikte, veri toplayabilmek ve anlamlı bir ROI (Geri Dönüş) elde edebilmek için günlük minimum 1.000 TL - 2.000 TL bandında bir bütçe ile başlamayı öneriyoruz."
        },
        {
            question: "Hangi reklam kanallarını kullanıyorsunuz?",
            answer: "B2C odaklı markalarda Meta (Instagram/Facebook) ve Google Ads; B2B odaklı markalarda ise Google Ads ve LinkedIn reklamlarını hibrit bir stratejiyle kullanıyoruz."
        },
        {
            question: "ROI (Yatırım Getirisi) takibi nasıl yapılıyor?",
            answer: "Google Analytics 4, Meta Pixel ve özel API dönüşümleri (CAPI) kullanarak, harcanan her kuruşun ne kadar ciroya veya kaç adet potansiyel müşteri formuna dönüştüğünü anlık olarak raporluyoruz."
        },
        {
            question: "Satış garantisi veriyor musunuz?",
            answer: "Rakamlarla konuşan bir ajans olarak, geçmiş verilerimize dayanarak 'Tahmini Dönüşüm Oranları' sunuyoruz. Ancak satış; sadece reklamla değil, ürününüzün kalitesi, fiyatı ve web sitenizin hızıyla bir bütündür."
        },
        {
            question: "Mevcut reklam hesaplarımdaki hataları düzeltiyor musunuz?",
            answer: "Evet. Sürece kapsamlı bir 'Ad Account Audit' (Hesap Denetimi) ile başlıyoruz. Dönüşüm kurulumlarınızdaki hataları gideriyor ve bütçe sızıntılarını önlüyoruz."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navbar />

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "Hizmetler", href: "/#hizmetler" }, { name: "Performans Pazarlama", href: "/hizmetler/performans-pazarlama" }]} />
            </div>

            {/* Silo Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <ScrollReveal>
                        <span className="text-green-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Growth Marketing & Scale</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-sora leading-tight">
                            Rakamlarla <span className="text-gradient-gold">Konuşuyoruz</span>.
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Tıklama değil, <strong className="text-white">kâr</strong> odaklıyız. Veri bilimini yaratıcılıkla birleştirerek reklam bütçenizi en verimli şekilde kullanıyor ve satışlarınızı ölçeklendiriyoruz.
                        </p>
                        <div className="flex justify-center gap-4">
                            <GradientButton href="#randevu" size="lg">Büyümeyi Başlatın</GradientButton>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Service Features */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: Target, title: "Hassas Hedefleme", desc: "Müşterilerinizin dijital ayak izlerini takip ederek en doğru anda karşılarına çıkıyoruz." },
                            { icon: TrendingUp, title: "ROI & Kâr Odaklılık", desc: "Harcadığınız her 1 TL'nin karşılığını şeffaf raporlarla anlık olarak takip edin." },
                            { icon: MousePointer2, title: "Conversion (CRO)", desc: "Sadece reklamı değil, reklamın gittiği sayfayı da dönüşüm için optimize ediyoruz." },
                            { icon: PieChart, title: "Multi-Channel Scale", desc: "Google, Meta ve LinkedIn kanallarını tek bir büyüme merkezinden yönetiyoruz." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="flex gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-green-500/30 transition-all h-full group">
                                    <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                                        <item.icon className="text-green-400" size={32} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 font-sora">{item.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqData} />
            <LeadMagnet />
            <BookingSection source="Hizmet Sayfası: Performans Pazarlama" />
            <Footer />
        </main>
    );
}

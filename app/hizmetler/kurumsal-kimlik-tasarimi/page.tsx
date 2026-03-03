import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Palette, PenTool, Layout, Layers, Box, Pen, Gem } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: "Kurumsal Kimlik ve Marka Tasarımı | Nexa Digital",
    description: "Markanız sadece bir logo değildir; o bir hikayedir. Nexa Digital ile markanızın ruhunu yansıtan, lüks ve akılda kalıcı kurumsal kimlik tasarımları.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/kurumsal-kimlik-tasarimi"
    }
};

export default function KurumsalKimlikHizmeti() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://wearenexa.co/hizmetler/kurumsal-kimlik-tasarimi#service",
        "name": "Nexa Marka Mimarisi & Kimlik Tasarımı",
        "provider": {
            "@id": "https://wearenexa.co/#organization"
        },
        "description": "Minimal, zamansız ve prestij odaklı kurumsal kimlik çözümleri.",
        "serviceType": "Brand Design"
    };

    const faqData = [
        {
            question: "Logo tasarımı sadece bir çizim mi?",
            answer: "Hayır. Nexa için logo tasarımı, markanızın hikayesini, değerlerini ve hedef kitlesine vermek istediği mesajı tek bir simgeye sığdıran stratejik bir süreçtir. Sektör analizi ve rakip araştırmasıyla başlar."
        },
        {
            question: "Kurumsal kimlik paketi neleri kapsar?",
            answer: "Logo tasarımı, kurumsal renk paleti, tipografi (yazı tipi) seçimi, kartvizit, antetli kağıt, dosya tasarımı ve sosyal medya görsel şablonlarını kapsayan bütünsel bir settir."
        },
        {
            question: "Revizyon hakkım var mı?",
            answer: "Evet. Taslak aşamasında sizinle sürekli iletişim halinde kalıyoruz. Nihai tasarım onaylanana kadar makul çerçevede sınırsız revizyon hakkı sunarak markanızın hayalinizdeki gibi olmasını sağlıyoruz."
        },
        {
            question: "Marka kılavuzu (Brandbook) veriyor musunuz?",
            answer: "Kesinlikle. Tasarım sürecinin sonunda, logonun nasıl kullanılacağını, renk kodlarını (CMYK, RGB, HEX) ve font detaylarını içeren profesyonel bir marka kılavuzu teslim ediyoruz."
        },
        {
            question: "Global tasarım trendlerini takip ediyor musunuz?",
            answer: "Evet. Tasarımlarımızı sadece bugünün değil, önümüzdeki 10 yılın trendlerini öngörerek 'zamansız' (timeless) bir çizgide hazırlıyoruz."
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
                <Breadcrumbs items={[{ name: "Hizmetler", href: "/#hizmetler" }, { name: "Kurumsal Kimlik", href: "/hizmetler/kurumsal-kimlik-tasarimi" }]} />
            </div>

            {/* Silo Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <ScrollReveal>
                        <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Brand Architecture & Aesthetics</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 font-sora leading-tight">
                            Rakiplerinizden <span className="text-gradient-gold">Farklı</span> Görünün.
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Sıradanlığı reddeden markalar için minimal, seçkin ve zamansız kurumsal kimlikler yaratıyoruz. Her detayda <strong className="text-white">Prestij</strong> saklı.
                        </p>
                        <div className="flex justify-center gap-4">
                            <GradientButton href="#randevu" size="lg">Markanızı Tasarlayalım</GradientButton>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Service Features */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: PenTool, title: "Logo Tasarımı", desc: "Markanızın özünü tek bir simgeye sığdıran akıllı tasarımlar." },
                            { icon: Palette, title: "Renk Teorisi", desc: "Müşterilerinizin bilinçaltına güven aşılıyacak renk paletleri." },
                            { icon: Box, title: "Bütünsel Kimlik", desc: "Kartvizitten tabelaya, sosyal medyadan web sitesine tam uyum." },
                            { icon: Gem, title: "Seçkinlik", desc: "Minimalist ve zamansız bir görsel dil ile kalıcı marka etkisi." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all text-center group h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
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

            <FAQSection faqs={faqData} />
            <LeadMagnet />
            <BookingSection source="Hizmet Sayfası: Kurumsal Kimlik" />
            <Footer />
        </main>
    );
}

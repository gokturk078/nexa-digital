import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Smartphone, Zap, Layout, Globe, Cpu, ShieldCheck, Target } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: "Mobil Uygulama Geliştirme (iOS & Android) | Nexa Digital",
    description: "Markanızı müşterilerinizin cebine taşıyın. React Native ve Flutter ile yüksek performanslı, yerel uygulama deneyimi sunan mobil çözümler.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/mobil-uygulama-gelistirme"
    }
};

export default function MobilUygulamaHizmeti() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://wearenexa.co/hizmetler/mobil-uygulama-gelistirme#service",
        "name": "Nexa Mobile Innovation Paketi",
        "provider": {
            "@id": "https://wearenexa.co/#organization"
        },
        "description": "iOS ve Android platformları için yüksek performanslı mobil uygulama geliştirme.",
        "serviceType": "Mobile Application Development"
    };

    const faqData = [
        {
            question: "Native mi yoksa Hybrid (React Native/Flutter) mi geliştiriyorsunuz?",
            answer: "Maliyet ve hız avantajı nedeniyle genellikle React Native ve Flutter (Hybrid) kullanıyoruz. Ancak yüksek işlem gücü gerektiren projelerde Swift ve Kotlin ile pure Native geliştirme de yapmaktayız."
        },
        {
            question: "App Store ve Play Store yayınlama süreci dahil mi?",
            answer: "Evet. Uygulamanızın her iki mağazada da sorunsuz yayınlanması, mağaza görsellerinin hazırlanması ve onay sürecinin takibi anahtar teslim hizmetimize dahildir."
        },
        {
            question: "Geliştirme süreci ne kadar sürer?",
            answer: "MVP (Minimum Uygulanabilir Ürün) aşamasındaki bir uygulama genellikle 8-12 haftada tamamlanır. Daha karmaşık ve büyük projeler 4-6 ayı bulabilir."
        },
        {
            question: "Satış sonrası destek veriyor musunuz?",
            answer: "Kesinlikle. İşletim sistemlerinin (iOS/Android) her yeni sürümünde uygulamanızın güncel kalması için aylık bakım ve teknik destek paketleri sunuyoruz."
        },
        {
            question: "Web sitemle senkronize çalışabilir mi?",
            answer: "Evet. Headless CMS veya API entegrasyonuyla web sitenizdeki tüm verilerin (ürünler, haberler vb.) anlık olarak mobil uygulamanızda da güncellenmesini sağlıyoruz."
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
                <Breadcrumbs items={[{ name: "Hizmetler", href: "/#hizmetler" }, { name: "Mobil Uygulama", href: "/hizmetler/mobil-uygulama-gelistirme" }]} />
            </div>

            {/* Silo Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <ScrollReveal>
                        <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Mobile Innovation & Performance</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-sora leading-tight">
                            Cebinizdeki <span className="text-gradient-gold">Sınırsız</span> Güç.
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Sadece bir uygulama değil, kullanıcılarınızın her gün açmak isteyeceği bir <strong className="text-white">Deneyim</strong> tasarlıyoruz. Native performansıyla tanışın.
                        </p>
                        <div className="flex justify-center gap-4">
                            <GradientButton href="#randevu" size="lg">Uygulamanızı Planlayalım</GradientButton>
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
                            { icon: Zap, title: "Native Hız", desc: "Saniyeler içinde açılan ve takılma yapmayan kusursuz akışlar." },
                            { icon: Layout, title: "Modern UI/UX", desc: "Parmak ucunda hissedeceğiniz elit ve ergonomik tasarım dili." },
                            { icon: Globe, title: "Cross-Platform", desc: "Tek kod altyapısı ile iOS ve Android'de mükemmel sonuçlar." },
                            { icon: ShieldCheck, title: "Güvenli Mimari", desc: "Banka seviyesinde veri koruma ve yüksek ölçeklenebilirlik." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center group hover:border-blue-500/30 transition-all h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                                        <item.icon className="text-blue-400" size={32} />
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
            <BookingSection source="Hizmet Sayfası: Mobil Uygulama" />
            <Footer />
        </main>
    );
}

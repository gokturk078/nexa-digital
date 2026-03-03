import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Zap, Gauge, LineChart, Cpu, Search, Globe, ShieldCheck } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: "Google Hız Optimizasyonu & Core Web Vitals | Nexa Digital",
    description: "Web siteniz 3 saniyeden geç açılıyorsa müşteri kaybediyorsunuz. Nexa Digital'in Next.js ve Edge teknolojileriyle sitenizi ışık hızına ulaştırın.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/hiz-optimizasyonu"
    }
};

export default function HizOptimizasyonu() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://wearenexa.co/hizmetler/hiz-optimizasyonu#service",
        "name": "Nexa Hız & Performans Optimizasyonu",
        "provider": {
            "@id": "https://wearenexa.co/#organization"
        },
        "description": "Core Web Vitals skorlarında %100 başarı ve ışık hızında kullanıcı deneyimi.",
        "serviceType": "Web Performance Optimization"
    };

    const faqData = [
        {
            question: "Sitemin hızlanması ne kadar sürer?",
            answer: "Teknik analiz sonrası, 'Vitals Fix' paketimizle sitenizi genellikle 3-7 iş günü içinde optimize ediyoruz. Altyapı değişimlerinde (Next.js geçişi gibi) bu süre 2-4 haftayı bulabilir."
        },
        {
            question: "Hızın SEO sıralamasına doğrudan etkisi var mı?",
            answer: "Kesinlikle. Google'ın 2021'de duyurduğu Core Web Vitals güncellemesiyle hantal ve yavaş sitelerin sıralamaları otomatik olarak düşürülür. Hızlı bir site, bütçe aynı kalsa bile reklamlarda daha düşük 'Tıklama Başına Maliyet' (CPC) sağlar."
        },
        {
            question: "Görsellerimin kalitesi bozulacak mı?",
            answer: "Hayır. 'Lossless Compression' ve 'AVIF/WebP' gibi yeni nesil formatlar kullanarak görsel kalitesini korurken dosya boyutlarını %80-90 oranında küçültüyoruz."
        },
        {
            question: "Paylaşımlı (Shared) hosting kullanıyorum, hızlanır mı?",
            answer: "Kısmen evet. Ancak gerçek bir satış makinesi için Edge Computing ve Global CDN destekli 'Serverless' veya 'High-End Managed Vps' altyapılarını öneriyoruz."
        },
        {
            question: "Desteğiniz optimizasyon bitince bitiyor mu?",
            answer: "Hayır. Sitenizin hızı zamanla eklenen içeriklerle (yeni blog yazıları vb.) düşebilir. Bunu engellemek için kod tarafında otomatik optimizasyon scriptleri kuruyoruz."
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
                <Breadcrumbs items={[{ name: "Hizmetler", href: "/#hizmetler" }, { name: "Hız Optimizasyonu", href: "/hizmetler/hiz-optimizasyonu" }]} />
            </div>

            {/* Silo Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <ScrollReveal>
                        <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Page Speed Performance & SEO</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 font-sora leading-tight">
                            Işık Hızında Bir <span className="text-gradient-gold">Web</span> Deneyimi.
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Sayfa yükleme süreleri sadece kullanıcı deneyimi değil, doğrudan bir <strong className="text-white">SEO sıralama faktörüdür</strong>. Core Web Vitals skorlarınızda %100 başarı hedefliyoruz.
                        </p>

                        <div className="flex justify-center gap-8 md:gap-16 mb-12">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-green-400 font-sora mb-2">100</div>
                                <div className="text-sm text-gray-500 font-semibold uppercase tracking-widest">Performance</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-green-400 font-sora mb-2">0.8s</div>
                                <div className="text-sm text-gray-500 font-semibold uppercase tracking-widest">LCP Speed</div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <GradientButton href="#randevu" size="lg">Sitemi Hızlandır</GradientButton>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Service Content */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <ScrollReveal direction="left">
                                <h2 className="text-4xl font-bold font-sora text-white">Neden Bizi Tercih Etmelisiniz?</h2>
                            </ScrollReveal>

                            {[
                                { icon: Gauge, title: "Lighthouse %100", desc: "Tüm performans, erişilebilirlik ve SEO metriklerinde tam puan garantisi." },
                                { icon: Cpu, title: "Modern Framework", desc: "Statik site oluşturma (SSG) ve sunucu tarafı render (SSR) ile anlık yükleme." },
                                { icon: LineChart, title: "Düşük Bounce Rate", desc: "Hızlı açılan sayfalarda kullanıcılar daha uzun süre kalır ve dönüşüm artar." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} direction="left">
                                    <div className="flex gap-6 group">
                                        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors shrink-0">
                                            <item.icon className="text-yellow-400" size={32} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-white mb-2 font-sora">{item.title}</h4>
                                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal direction="right">
                            <div className="p-10 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 relative group overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-[40px] group-hover:bg-yellow-500/20 transition-colors" />
                                <h3 className="text-2xl font-bold mb-8 font-sora text-yellow-500 relative z-10">Uyguladığımız Master Teknikler</h3>
                                <ul className="space-y-6 text-gray-300 relative z-10">
                                    {[
                                        "Edge Runtime & Global CDN Deployment",
                                        "Next Gen Image Formats (WebP/AVIF)",
                                        "Zero JS Hydration & Partial Components",
                                        "Aggressive Caching & Critical CSS"
                                    ].map((tech, i) => (
                                        <li key={i} className="flex items-center gap-4 text-lg">
                                            <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                                                <Zap className="text-yellow-500" size={14} />
                                            </div>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqData} />
            <LeadMagnet />
            <BookingSection source="Hizmet Sayfası: Hız Optimizasyonu" />
            <Footer />
        </main>
    );
}

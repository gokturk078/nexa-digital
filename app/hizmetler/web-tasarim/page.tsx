import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Layout, Palette, Zap, Target, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const FAQSection = dynamic(() => import('@/components/FAQSection'));

export const metadata: Metadata = {
    title: "Premium Web Tasarım Özelleştirilmiş Çözümler | Nexa Digital",
    description: "Standart şablonlara veda edin. Kıbrıs ve Türkiye'deki markanızı %300 daha fazla satış yapacak benzersiz UX/UI dizaynı ile dönüştürün.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/web-tasarim"
    },
    openGraph: {
        title: "God Mode Seçenekli Web Tasarım | Nexa Digital",
        description: "Müşterilerinizi ilk 3 saniyede bağlayacak 'Apple-Grade' animasyonlu Satış Makinesi inşası.",
        url: "https://wearenexa.co/hizmetler/web-tasarim",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Premium Web Tasarım - Nexa Digital" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Satış Makinesi Web Tasarımı | Nexa Digital",
        description: "Müşterilerinizi İlk 3 Saniyede Kapatalım. Şablon web sitelerini çöpe atın.",
        images: ["/og-image.jpg"]
    }
};

export default function WebTasarim() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://wearenexa.co/hizmetler/web-tasarim#service",
        "name": "Satış Makinesi Web Tasarımı (High-End UX/UI)",
        "provider": {
            "@id": "https://wearenexa.co/#organization"
        },
        "description": "Ziyaretçiyi saniyeler içinde büyüleyen, psikolojik 'Satış Hunisi' standartlarına göre kodlanmış ultra-hızlı web mimarisi.",
        "serviceType": "Web Design & Development"
    };

    const faqData = [
        {
            question: "Neden WordPress yerine Next.js ve React kullanıyorsunuz?",
            answer: "WordPress 20 yıl öncesinin teknolojisidir. Next.js, Google'ın en sevdiği hız kriterlerine (Core Web Vitals) tam uyum sağlar. Siteniz saniyeler içinde değil, milisaniyeler içinde açılır ve hacklenme riski neredeyse sıfırdır."
        },
        {
            question: "Web sitem ne kadar sürede tamamlanır?",
            answer: "Projenin kapsamına göre değişmekle birlikte, 'Sales Machine' standartlarında bir platform genellikle 3-6 hafta içinde yayına alınır. Bu sürece strateji, UX tasarımı, kodlama ve test aşamaları dahildir."
        },
        {
            question: "Arama motorlarında otomatik olarak üst sıralara çıkar mıyım?",
            answer: "Tasarım mimarimiz 'Edge SEO' uyumludur, yani Google botları sitenizi mükemmel bir hiyerarşiyle tarar. Bu, SEO çalışmalarınız için en güçlü temeli oluşturur. Ancak tam rekabetçi kelimeler için ayrıca SEO danışmanlığımızı öneririz."
        },
        {
            question: "Kendi başıma içerik ekleyebilir miyim?",
            answer: "Evet. Sanity veya Strapi gibi kullanıcı dostu yönetim panelleri (Headless CMS) entegre ediyoruz. Teknik bilgiye ihtiyaç duymadan blog yazısı veya yeni projeler ekleyebilirsiniz."
        },
        {
            question: "Mobil tasarım ayrıca mı yapılıyor?",
            answer: "Hayır, 'Mobile-First' (Önce Mobil) felsefesiyle tek bir kod tabanı üzerinden çalışıyoruz. Siteniz iPhone'dan masaüstü 4K monitörlere kadar her cihazda kusursuz görünür."
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

            {/* Silo Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="text-[#00D4FF] font-semibold tracking-wider uppercase text-sm mb-4 block">God Mode UX/UI Experience</span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-sora tracking-tight leading-tight">
                                Müşterilerinizi İlk <span className="text-gradient-gold">3 Saniyede</span> Kapatalım.
                            </h1>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                                Kullanıcıları sadece "bilgilendiren" değil, onlara rakiplerinizde bulamayacağı bir <strong className="text-white">prestij</strong> hissi veren Next.js altyapılı Sales Machine sistemleri tasarlıyoruz.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <GradientButton href="#randevu" size="lg">Dijital Kapanış Makinenizi Kurun</GradientButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Silo Content (Semantic HTML) */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-5xl px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <ScrollReveal>
                            <article className="prose prose-invert prose-lg max-w-none">
                                <h2 className="text-3xl font-bold font-sora mb-6">Web Siteniz Satış Ekibinizden Daha İyi Satış Yapmalı</h2>
                                <p className="text-gray-400">
                                    Nexa Digital olarak biz sıradan "kurumsal siteler" yapmıyoruz. Psikolojik satış tetikleyicileri (Urgency, Social Proof, Risk Reversal) ile donatılmış, ışık hızında açılan bir <strong className="text-white">Dijital Closer</strong> (Kapanış Makinesi) inşa ediyoruz.
                                </p>
                                <p className="text-gray-400">
                                    Kıbrıs ve Türkiye'deki rakipleriniz WordPress şablonlarıyla boğuşurken, siz pazarın tek elit seçeneği haline gelirsiniz.
                                </p>

                                <div className="p-8 my-10 bg-gradient-to-br from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/20 rounded-2xl relative group">
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00D4FF] rounded-xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
                                        <Zap className="text-black" />
                                    </div>
                                    <h4 className="text-[#00D4FF] mt-0 font-bold mb-4">Örnek Başarı Senaryosu</h4>
                                    <p className="mb-0 text-gray-300 italic">
                                        "Premium Diş Kliniği (DentPro), Nexa V2 Sales Machine mimarisine geçtikten sonra reklam bütçesini artırmadan site içi rezervasyon oranını %410 artırdı. Müşteriler 'Sitenizi görünce fiyat bile sormadık' demeye başladı."
                                    </p>
                                </div>
                            </article>
                        </ScrollReveal>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Zap,
                                    title: "LCP < 1sn Performansı",
                                    desc: "Next.js ve Edge-Caching ile sayfa geçişleri saniyenin kesirleri kadar sürer."
                                },
                                {
                                    icon: Layout,
                                    title: "Apple-Grade Animasyonlar",
                                    desc: "Siteniz her harekete lüks bir duyarlılıkla tepki verir, prestij algısını zirveye taşır."
                                },
                                {
                                    icon: Target,
                                    title: "CRO Odaklı Tasarım",
                                    desc: "Sürtünmesiz (frictionless) rezervasyon sistemleriyle trafiği nakde çeviririz."
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00D4FF]/30 transition-all flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center shrink-0">
                                            <item.icon className="text-[#00D4FF]" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqData} />

            <BookingSection source="Hizmet Sayfası: Web Tasarım" />
            <Footer />
        </main>
    );
}

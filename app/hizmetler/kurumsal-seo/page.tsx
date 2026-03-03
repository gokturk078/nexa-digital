import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Search, TrendingUp, BarChart3, Globe, Zap, Target, ShieldCheck } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));

export const metadata: Metadata = {
    title: "Kurumsal SEO Hizmeti | Nexa Digital",
    description: "Türkiye ve Kıbrıs'ın pazar liderlerine özel, risksiz ve gelir odaklı Kurumsal SEO danışmanlığı. Rakiplerinizi ezip geçin.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/kurumsal-seo"
    },
    openGraph: {
        title: "Kurumsal SEO Otoritesi | Nexa Digital",
        description: "Sektörünüzdeki tüm organik talebi emen Dijital Otorite inşa ediyoruz.",
        url: "https://wearenexa.co/hizmetler/kurumsal-seo",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Kurumsal SEO - Nexa Digital" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Kurumsal SEO | Nexa Digital",
        description: "Rakiplerinizi finanse etmeyi bırakın. 1. Sıraya yerleşin.",
        images: ["/og-image.jpg"]
    }
};

export default function KurumsalSeo() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://wearenexa.co/hizmetler/kurumsal-seo#service",
        "name": "Kurumsal SEO Danışmanlığı",
        "provider": {
            "@id": "https://wearenexa.co/#organization"
        },
        "description": "Büyük ölçekli web siteleri ve kurumsal platformlar için tasarlanmış, trafik değil gelir garantili organik büyüme mimarisi.",
        "serviceType": "Search Engine Optimization"
    };

    const faqData = [
        {
            question: "SEO sonuçlarını ne zaman görmeye başlarız?",
            answer: "SEO bir maratondur ancak Nexa'nın 'Silo Mimarisi' ve 'Edge SEO' teknikleriyle, teknik hataların giderilmesini takip eden ilk 4-8 hafta içinde organik görünürlükte anlamlı artışlar gözlemlenir. Tam pazar hakimiyeti genellikle 6-12 aylık bir projeksiyondur."
        },
        {
            question: "%100 ilk sıra garantisi veriyor musunuz?",
            answer: "Google'ın sahibi olmayan hiçbir ajans %100 garanti veremez. Biz, 'Süreç ve Şeffaflık' garantisi veriyoruz. KPI'larımızı (Trafik değeri, dönüşüm oranı, anahtar kelime pazar payı) net bir şekilde belirliyor ve sözleşmemizi bu hedeflere dayandırıyoruz."
        },
        {
            question: "Mevcut sitemizi tamamen değiştirmemiz gerekiyor mu?",
            answer: "Çoğu durumda hayır. Mevcut altyapınızı (WordPress, Özel Yazılım) optimize edebiliriz. Ancak altyapınız Google'ın modern Core Web Vitals standartlarını karşılayamıyorsa, 'Zero-Latency' Nexa altyapısına geçişi performans gereği önerebiliriz."
        },
        {
            question: "Raporlama süreci nasıl işliyor?",
            answer: "Dashboard'umuz üzerinden 7/24 canlı veriye erişebilirsiniz. Ayrıca aylık bazda; rakiplerinizin ne yaptığı, hangi kelimeleri kazandığımız ve bu trafiğin ne kadar satışa dönüştüğünü içeren stratejik bir yönetici raporu sunuyoruz."
        },
        {
            question: "Yerel SEO mu yoksa Global SEO mu yapıyorsunuz?",
            answer: "Her ikisini de. Kıbrıs, Türkiye veya Global pazarlarda (İngilizce, Almanca) markanızı hedef kitlenizin tam karşısına çıkaracak çok dilli ve çok bölgeli SEO stratejileri geliştiriyoruz."
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
                <Breadcrumbs items={[{ name: "Hizmetler", href: "/#hizmetler" }, { name: "Kurumsal SEO", href: "/hizmetler/kurumsal-seo" }]} />
            </div>

            {/* Silo Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="text-[#C9A84C] font-semibold tracking-wider uppercase text-sm mb-4 block">Topical Authority Uzmanlığı</span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-sora tracking-tight leading-tight">
                                Siteniz 1. Sırada Değilse, <span className="text-gradient-gold">Rakiplerinizi</span> Finanse Ediyorsunuz.
                            </h1>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Standart SEO ajansları size "backlink" satar. Biz, sektörünüzdeki tüm organik talebi emen bir <strong className="text-white">Dijital Otorite</strong> inşa ediyoruz.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <GradientButton href="#randevu" size="lg">Hemen Strateji Belirle</GradientButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Silo Content (Semantic HTML) */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <ScrollReveal>
                            <article className="prose prose-invert prose-lg max-w-none">
                                <h2 className="text-3xl font-bold font-sora mb-6">Kurumsal SEO Nedir ve Neden Hayatidir?</h2>
                                <p className="text-gray-400">
                                    Kurumsal SEO, binlerce sayfası olan kompleks web sitelerinin arama motorlarında sadece "bulunmasını" değil; domine etmesini sağlayan mühendislik sürecidir.
                                </p>
                                <p className="text-gray-400">
                                    Kıbrıs ve Türkiye'deki rakipleriniz günü kurtaran taktikler uygularken, biz sitenizi Google'ın gözünde bir <strong className="text-white">Sektör Otoritesi</strong> haline getiriyoruz.
                                </p>

                                <div className="p-8 my-10 bg-gradient-to-br from-[#C9A84C]/10 to-transparent border border-[#C9A84C]/20 rounded-3xl relative group">
                                    <TrendingUp className="text-[#C9A84C] mb-4" size={40} />
                                    <h4 className="text-[#C9A84C] mt-0 font-bold mb-2 text-xl">Örnek Başarı Senaryosu</h4>
                                    <p className="mb-0 text-gray-300 italic">
                                        "Lüks Emlak sektöründeki bir müşterimiz (Luxe Estate), 3 aylık Kurumsal SEO Silo Mimarisi inşası sonucunda organik trafiğini %340 artırdı ve aylık nitelikli (VIP) başvuru sayısını 5 katına çıkardı. Detaylar için <Link href='/basari-hikayeleri/nexa-luxe-estate' className='text-gold-500 underline underline-offset-4 font-bold'>Başarı Hikayesini Oku</Link>."
                                    </p>
                                </div>
                            </article>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Globe,
                                    title: "Topical Authority",
                                    desc: "Sektörünüzle ilgili her soruda Google'a en uzman kaynak olduğunuzu kanıtlama."
                                },
                                {
                                    icon: Zap,
                                    title: "Crawl Optimization",
                                    desc: "Google botlarının en değerli sayfalarınızı saniyeler içinde taradığı hız mimarisi."
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Entity Based SEO",
                                    desc: "Knowledge Graph ve FAQPage şemalarıyla Google SGE'ye tam entegrasyon."
                                },
                                {
                                    icon: BarChart3,
                                    title: "Gelir Garantisi",
                                    desc: "Trafik değil, nitelikli lead ve satış artışı odaklı organik büyüme planı."
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C9A84C]/30 transition-all h-full group">
                                        <div className="w-14 h-14 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/20 transition-colors">
                                            <item.icon className="text-[#C9A84C]" size={32} />
                                        </div>
                                        <h4 className="font-bold text-white mb-3 font-sora text-lg leading-tight">{item.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqData} />
            <LeadMagnet />
            <BookingSection source="Hizmet Sayfası: Kurumsal SEO" />
            <Footer />
        </main>
    );
}

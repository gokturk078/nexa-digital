import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';

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
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://wearenexa.co/hizmetler/kurumsal-seo#service",
        "name": "Kurumsal SEO Danışmanlığı",
        "provider": {
            "@id": "https://wearenexa.co/#organization"
        },
        "description": "Büyük ölçekli web siteleri ve e-ticaret platformları için tasarlanmış, trafik değil gelir garantili organik büyüme mimarisi.",
        "serviceType": "Search Engine Optimization"
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            {/* Silo Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <span className="text-[#C9A84C] font-semibold tracking-wider uppercase text-sm mb-4 block">Topical Authority Uzmanlığı</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Siteniz 1. Sırada Değilse, Rakiplerinizi Finanse Ediyorsunuz.
                    </h1>
                    <p className="text-xl text-gray-400 mb-10">
                        Standart SEO ajansları size "backlink" ve "kelime" satar. Biz, sektörünüzdeki tüm organik talebi emen bir <strong className="text-white">Dijital Otorite</strong> inşa ediyoruz.
                    </p>
                    <GradientButton href="/#randevu" size="lg">Hemen Strateji Belirle</GradientButton>
                </div>
            </section>

            {/* Silo Content (Semantic HTML) */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto max-w-4xl px-4">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2>Kurumsal SEO Nedir ve Neden Hayatidir?</h2>
                        <p>
                            Kurumsal SEO (Enterprise SEO), binlerce sayfası olan, kompleks mimarili web sitelerinin arama motorlarında sadece "bulunmasını" değil; domine etmesini sağlayan mühendislik sürecidir. Kıbrıs ve Türkiye'deki rakipleriniz günü kurtaran taktikler uygularken, biz sitenizi Google'ın gözünde bir <strong>Sektör Kurumu</strong> (Entity) haline getiriyoruz.
                        </p>

                        <h3>Nexa Digital SEO Farkı (V2 Mimari)</h3>
                        <ul>
                            <li><strong>Topical Authority (Konusal Otorite):</strong> Sadece hedef kelimelerde değil, sektörünüzle ilgili yüzlerce alt sorguda Google'a "en uzman kaynak" olduğunuzu semantik kodlama ile kanıtlarız.</li>
                            <li><strong>Gelişmiş Tarama Bütçesi (Crawl Budget):</strong> Google botlarının sitenizin en değerli sayfalarını saniyeler içinde taramasını sağlayacak Log analizi ve site hızı (Core Web Vitals) mimarisi kurarız.</li>
                            <li><strong>Entity Tabanlı Şema Ağı:</strong> Web sitenizi sadece yazılardan ibaret olmaktan çıkarır; <code>Organization</code>, <code>LocalBusiness</code>, ve <code>FAQPage</code> şemalarını birbirine matematiksel olarak bağlayarak oluşturduğumuz Knowledge Graph (Bilgi Grafiği) ile Google SGE'ye entegre ederiz.</li>
                        </ul>

                        <div className="p-8 my-10 bg-gradient-to-br from-[#C9A84C]/10 to-transparent border border-[#C9A84C]/20 rounded-2xl">
                            <h4 className="text-[#C9A84C] mt-0">Örnek Başarı Senaryosu</h4>
                            <p className="mb-0">
                                Lüks Emlak sektöründeki bir müşterimiz (Luxe Estate), 3 aylık Kurumsal SEO Silo Mimarisi inşası sonucunda organik trafiğini %340 artırdı ve aylık nitelikli (VIP) başvuru sayısını 5 katına çıkardı.
                            </p>
                        </div>

                        <h2>Sürecimiz Nasıl İşliyor?</h2>
                        <ol>
                            <li>Düşman Hatlarını Tarama (Rakip ve Pazar Analizi)</li>
                            <li>Teknik Mimarinin Dezenfeksiyonu (Hız ve Kod Hataları)</li>
                            <li>Semantik İçerik ve Silo İnşası</li>
                            <li>Otorite Transferi (Premium Digital PR)</li>
                        </ol>

                        <p className="mt-12 text-center text-gray-400">
                            Bu hizmet, e-ticaret siteleri, büyük kurumsal firmalar ve dijitalde liderlik hedefleyen markalar için tasarlanmıştır.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}

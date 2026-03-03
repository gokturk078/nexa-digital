import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';

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
    const schema = {
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

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            {/* Silo Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <span className="text-[#00D4FF] font-semibold tracking-wider uppercase text-sm mb-4 block">God Mode UX/UI</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Müşterilerinizi İlk 3 Saniyede Kapatalım.
                    </h1>
                    <p className="text-xl text-gray-400 mb-10">
                        Kullanıcıları sadece "bilgilendiren" değil, onlara rakiplerinizde bulamayacağı bir <strong>prestij</strong> hissi veren Next.js altyapılı Sales Machine sistemleri tasarlıyoruz.
                    </p>
                    <GradientButton href="/#randevu" size="lg">Markanızı Büyütün</GradientButton>
                </div>
            </section>

            {/* Silo Content (Semantic HTML) */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto max-w-4xl px-4">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2>Web Siteniz Satış Ekibinizden Daha İyi Satış Yapmalı</h2>
                        <p>
                            Nexa Digital olarak biz sıradan "kurumsal siteler" yapmıyoruz. Psikolojik satış tetikleyicileri (Urgency, Social Proof, Risk Reversal) ile donatılmış, ışık hızında açılan bir **Dijital Closer** (Kapanış Makinesi) inşa ediyoruz. Kıbrıs ve Türkiye'deki rakipleriniz WordPress şablonlarıyla boğuşurken, siz pazarın tek elit seçeneği haline gelirsiniz.
                        </p>

                        <h3>Enterprise-Grade Performans (Next.js & Tailwind)</h3>
                        <ul>
                            <li><strong>Işık Hızında Yükleme (LCP &lt; 1sn):</strong> Dünyanın en gelişmiş framework'ü Next.js ile Vercel üzerinde host edilen, sayfa geçişleri saniyenin kesirleri kadar süren bir mimari.</li>
                            <li><strong>Mikro Etkileşimler (Micro-Interactions):</strong> Siteniz cansız durmaz; Framer Motion yay fiziği (spring animasyonlar) ile müşterinin her hareketine "Apple kalitesinde" tepkiler verir.</li>
                            <li><strong>Dönüşüm Optimizasyonu (CRO):</strong> Sadece güzel tasarımlar yapmayız. Exit-intent popupları, canlı bildirimler ve sürtünmesiz (frictionless) rezervasyon sistemleriyle her giren trafiği nakde çevirmeye odaklanırız.</li>
                        </ul>

                        <div className="p-8 my-10 bg-gradient-to-br from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/20 rounded-2xl">
                            <h4 className="text-[#00D4FF] mt-0">Örnek Başarı Senaryosu</h4>
                            <p className="mb-0">
                                Premium Diş Kliniği (DentPro), Nexa V2 Sales Machine mimarisine geçtikten sonra reklam bütçesini artırmadan site içi rezervasyon oranını <strong>%410</strong> artırdı. Müşteriler "Sitenizi görünce fiyat bile sormadık" demeye başladı.
                            </p>
                        </div>

                        <h2>Neden Hazır Şablonlar Markanızı Öldürür?</h2>
                        <p>
                            Piyasadaki sitelerin %90'ı birbirinin kopyasıdır. Şablon kullanan bir işletme, bilinçaltında müşterisine "Ben sıradanım" mesajı verir. Biz, markanızın hikayesine özel, lüks ve güven aşılayan "Bespoke" (Özel Dikim) tasarım dilini yazılıma dökeriz.
                        </p>

                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}

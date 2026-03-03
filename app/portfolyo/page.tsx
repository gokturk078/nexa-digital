import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PortfolioSection } from '@/components/PortfolioSection';

export const metadata: Metadata = {
    title: "Portfolyo | Nexa Digital - Elit Proje Galerisi",
    description: "Kıbrıs ve Türkiye'deki pazar lideri markalar için inşa ettiğimiz 'Sales Machine' web platformlarını ve SEO başarı hikayelerini inceleyin.",
    alternates: {
        canonical: "https://wearenexa.co/portfolyo"
    }
};

export default function Portfolyo() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="pt-32 pb-10 px-4">
                <div className="container mx-auto max-w-7xl">
                    <SectionHeading
                        title="Dijital Başarı Hikayeleri"
                        subtitle="Sadece web sitesi yapmıyoruz; sektörleri domine eden, milyarlarca TL ciro üreten dijital ekosistemler kuruyoruz."
                    />
                </div>
            </section>

            {/* Reuse the existing PortfolioSection component but in a full-page context */}
            <PortfolioSection />

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto max-w-4xl text-center px-4">
                    <h2 className="text-3xl font-bold mb-6 font-sora">Sıradaki Başarı Hikayesi Sizin Markanız Olsun</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Rakiplerinizin imrenerek bakacağı, müşterilerinizin saniyeler içinde bağlandığı o platformu birlikte inşa edelim.
                    </p>
                    <a href="/iletisim" className="inline-block py-4 px-10 rounded-full bg-[var(--color-gold)] text-black font-bold hover:bg-white transition-all transform hover:scale-105">
                        Ücretsiz Analiz Alın
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

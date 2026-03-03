import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatsBar from '@/components/StatsBar';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const PortfolioSection = dynamic(() => import('@/components/PortfolioSection').then(mod => mod.PortfolioSection));
const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));

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

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "Portfolyo", href: "/portfolyo" }]} />
            </div>

            {/* Premium Hero */}
            <section className="pt-20 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <ScrollReveal>
                        <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Proven Excellence</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 font-sora leading-tight">
                            Dijital <span className="text-gradient-gold">Başarı</span> Hikayeleri.
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Sadece web sitesi yapmıyoruz; sektörleri domine eden, <strong className="text-white">milyarlarca TL ciro</strong> üreten dijital ekosistemler kuruyoruz.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <StatsBar />

            <div className="py-10">
                <PortfolioSection />
            </div>

            <PainSection />

            <BookingSection source="Kurumsal: Portfolyo Sayfası" />
            <Footer />
        </main>
    );
}

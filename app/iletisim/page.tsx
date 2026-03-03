import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatsBar from '@/components/StatsBar';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));

export const metadata: Metadata = {
    title: "İletişim | Nexa Digital - Ücretsiz Strateji Görüşmesi",
    description: "Dijitalde devleşmeye hazır mısınız? Nexa Digital ekibiyle iletişime geçin, markanız için ücretsiz strateji ve analiz görüşmesi planlayalım.",
    alternates: {
        canonical: "https://wearenexa.co/iletisim"
    }
};

export default function Iletisim() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "İletişim", href: "/iletisim" }]} />
            </div>

            {/* Fast Track Booking - Direct Focus */}
            <section className="pt-20 pb-20 px-4 relative overflow-hidden" id="randevu">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-4">
                            <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Fast Track Strategy</span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 font-sora leading-tight">
                                Geleceğinizi <span className="text-gradient-gold">Birlikte</span> İnşa Edelim.
                            </h1>
                        </div>
                    </ScrollReveal>

                    <div className="mt-10">
                        <BookingSection source="Kurumsal: İletişim (Fast Track)" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Utensils, Smartphone, Map, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: "Restoran & Cafe Dijital Menü ve Web Tasarım Çözümleri | Nexa Digital",
    description: "Gastronomi dünyasında fark yaratan, online rezervasyon ve QR menü entegrasyonlu premium restoran web siteleri. Müşterilerinizi masaya çekin.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/restoran-kafe-dijital-menu-ve-tasarim"
    }
};

export default function RestoranSektoru() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-5xl relative z-10 text-center lg:text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-red-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Gastronomi & Prestij</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                Lezzetinizi <span className="text-[var(--color-gold)]">Dijital</span> Dünyada Sergileyin.
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Restoran seçimi artık Google Haritalar'da veya sosyal medyada başlar. Biz, mekanınızın ruhunu ve lezzetini hissettiren, saniyeler içinde rezervasyon yaptıran bir **Dijital Deneyim** sunuyoruz.
                            </p>
                            <GradientButton href="/iletisim" size="lg">Menünüzü Dijitalleştirin</GradientButton>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 glass rounded-2xl border border-white/10 text-center">
                                <Utensils className="text-red-400 mx-auto mb-3" />
                                <p className="text-white font-bold">QR Menü</p>
                            </div>
                            <div className="p-6 glass rounded-2xl border border-white/10 text-center translate-y-8">
                                <Smartphone className="text-red-400 mx-auto mb-3" />
                                <p className="text-white font-bold">Mobil Uyum</p>
                            </div>
                            <div className="p-6 glass rounded-2xl border border-white/10 text-center">
                                <Map className="text-red-400 mx-auto mb-3" />
                                <p className="text-white font-bold">Harita Kaydı</p>
                            </div>
                            <div className="p-6 glass rounded-2xl border border-white/10 text-center translate-y-8">
                                <Star className="text-red-400 mx-auto mb-3" />
                                <p className="text-white font-bold">CRM Takip</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

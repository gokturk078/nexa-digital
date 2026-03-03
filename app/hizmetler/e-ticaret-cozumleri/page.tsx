import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { ShoppingCart, Zap, Shield, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
    title: "E-Ticaret Çözümleri & Satış Odaklı Alt Yapılar | Nexa Digital",
    description: "Sadece ürün sergilemeyin, satın. Işık hızında açılan, güven veren ve tüm ödeme sistemleriyle entegre Nexa E-Ticaret ekosistemlerini keşfedin.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/e-ticaret-cozumleri"
    }
};

export default function ETicaretHizmeti() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-4 relative">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Sales Engine</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sora">E-Ticarette 'Hız' Kazandırır.</h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                        Sayfa yükleme süresindeki her 1 saniyelik gecikme, dönüşüm oranınızda %7 düşüşe neden olur. Biz, dünyanın en hızlı e-ticaret altyapılarını Next.js ile kuruyoruz.
                    </p>
                    <GradientButton href="/iletisim" size="lg">Mağazanıza Güç Katın</GradientButton>
                </div>
            </section>

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Zap, title: "Anlık Yükleme", desc: "Müşterileriniz beklemez. Sayfalar arası geçiş ışık hızındadır." },
                            { icon: Shield, title: "Üstün Güvenlik", desc: "Veri sızıntılarına karşı en güncel ve güvenli mimari." },
                            { icon: CreditCard, title: "Ödeme Entegrasyonu", desc: "Iyzico, Stripe ve yerel banka sistemleriyle tam entegre." },
                            { icon: ShoppingCart, title: "Kusursuz UX", desc: "Sepetten ödemeye sürtünmesiz (frictionless) bir alışveriş deneyimi." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center group hover:bg-cyan-500/10 transition-colors">
                                <item.icon className="text-cyan-400 mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
                                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

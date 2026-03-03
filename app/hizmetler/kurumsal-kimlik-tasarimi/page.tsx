import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Palette, PenTool, Layout, Layers } from 'lucide-react';

export const metadata: Metadata = {
    title: "Kurumsal Kimlik ve Marka Tasarımı | Nexa Digital",
    description: "Markanız sadece bir logo değildir; o bir hikayedir. Nexa Digital ile markanızın ruhunu yansıtan, lüks ve akılda kalıcı kurumsal kimlik tasarımları.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/kurumsal-kimlik-tasarimi"
    }
};

export default function KurumsalKimlikHizmeti() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="pt-32 pb-24 px-4 relative overflow-hidden text-center">
                <div className="container mx-auto max-w-4xl">
                    <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Brand Architecture</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 font-sora">Rakiplerinizden <span className="text-[var(--color-gold)]">Farklı</span> Görünün.</h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Sıradanlığı reddeden markalar için minimal, seçkin ve zamansız kurumsal kimlikler yaratıyoruz. Logonuzdan tipografinize kadar her detayda prestij saklı.
                    </p>
                    <GradientButton href="/iletisim" size="lg">Markanızı Tasarlayalım</GradientButton>
                </div>
            </section>

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: PenTool, title: "Logo Tasarımı", desc: "Markanızın özünü tek bir simgeye sığdıran akıllı tasarımlar." },
                            { icon: Palette, title: "Renk Teorisi", desc: "Müşterilerinizin bilinçaltına güven aşılıyacak renk paletleri." },
                            { icon: Layout, title: "Kurumsal Kitapçık", desc: "Tüm dijital ve fiziki mecralar için standartlaşmış kullanım kılavuzu." },
                            { icon: Layers, title: "Bütünsel Kimlik", desc: "Kartvizitten tabelaya, sosyal medyadan web sitesine tam uyum." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all text-center group">
                                <item.icon className="text-purple-400 mx-auto mb-6 group-hover:rotate-12 transition-transform" size={40} />
                                <h4 className="font-bold text-white mb-2 font-sora">{item.title}</h4>
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

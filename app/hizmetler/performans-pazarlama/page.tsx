import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { BarChart, Target, Users, MousePointer2 } from 'lucide-react';

export const metadata: Metadata = {
    title: "Performans Pazarlama & ROI Odaklı Reklam Yönetimi | Nexa Digital",
    description: "Reklam bütçenizi bir masraf değil, bir yatırım olarak görün. Google Ads, Meta ve LinkedIn reklamlarında maksimum dönüşüm (ROI) garantili stratejiler.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/performans-pazarlama"
    }
};

export default function PerformansPazarlama() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-4 relative">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-green-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Growth Marketing</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sora">Rakamlarla Konuşuyoruz.</h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                        Tıklama değil, **kâr** odaklıyız. Veri bilimini yaratıcılıkla birleştirerek reklam bütçenizi en verimli şekilde kullanıyor ve satışlarınızı ölçeklendiriyoruz.
                    </p>
                    <GradientButton href="/iletisim" size="lg">Büyümeyi Başlatın</GradientButton>
                </div>
            </section>

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { icon: Target, title: "Hassas Hedefleme", desc: "Potansiyel müşterilerinizin dijital ayak izlerini takip ederek en doğru anda karşılarına çıkıyoruz." },
                            { icon: BarChart, title: "ROI Takibi", desc: "Harcadığınız her 1 TL'nin karşılığını şeffaf raporlarla anlık olarak takip edin." },
                            { icon: MousePointer2, title: "Conversion (CRO)", desc: "Sadece reklamı değil, reklamın gittiği sayfayı da dönüşüm için optimize ediyoruz." },
                            { icon: Users, title: "Retargeting", desc: "Sitenizi daha önce ziyaret etmiş potansiyel alıcıları 'kapatıcı' (closer) reklamlarla geri kazanıyoruz." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/20 transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0">
                                    <item.icon className="text-green-500" size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2 font-sora">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

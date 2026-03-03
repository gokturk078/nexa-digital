import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Sparkles, Heart, Sun, Scissors } from 'lucide-react';

export const metadata: Metadata = {
    title: "Güzellik Merkezi & Spa Web Tasarım ve Dijital Pazarlama | Nexa Digital",
    description: "Estetik ve güzellik merkezleri için randevu odaklı, görsel derinliği yüksek ve lüks algısı yaratan premium web çözümleri. Dijitalde ışıldayın.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/güzellik-merkezi-ve-spa-tasarim"
    }
};

export default function GuzellikSektoru() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <span className="text-pink-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Estetik & Zarafet</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                        Dijitalde <span className="text-[var(--color-gold)]">Kusursuz</span> Bir Görünüm.
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
                        Müşterileriniz merkezinize gelmeden önce web sitenizde bir "ön temizlik" yapar. Biz onlara içeriye girmeden o ferahlığı, lüksü ve güveni hissettiriyoruz.
                    </p>
                    <GradientButton href="/iletisim" size="lg">Merkezinizi Dijitalde Tanıtın</GradientButton>
                </div>
            </section>

            {/* Visual Experience */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Sparkles, title: "Lüks Galeri", desc: "Uygulamalarınızın sonucunu ve merkezinizin ambiyansını yansıtan özel çekim vitrinleri." },
                            { icon: Heart, title: "Güven Faktörü", desc: "E-Bülten ve uzman kadro tanıtımlarıyla müşterilerinizi ikna eden yapı." },
                            { icon: Scissors, title: "Online Rezervasyon", desc: "Günün her saati telefon beklemeden işlem randevusu alma kolaylığı." },
                            { icon: Sun, title: "Üyelik Sistemleri", desc: "Sadık müşterileriniz için özel VIP portal ve kampanya yönetimi." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-pink-500/10 transition-colors">
                                <item.icon className="text-pink-400 mx-auto mb-6" size={32} />
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

import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Scale, ShieldCheck, Gavel, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: "Hukuk ve Avukatlık Büroları İçin Profesyonel Web Tasarım | Nexa Digital",
    description: "Müvekkillerinize güven veren, otorite yansıtan ve 'avukat' aramalarında sizi öne çıkaran kurumsal hukuk web platformları. Etik ve lüks bir duruş.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/hukuk-avukat-kurumsal-web-sitesi"
    }
};

export default function HukukSektoru() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Hukuksal Otorite</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                        Güven İnşa Eden <span className="text-[var(--color-gold)]">Dijital Otorite</span>.
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Müvekkilleriniz Google'da bir çözüm ararken karşılarına çıkan ilk şey sizin dijital kimliğinizdir. Biz o kimliği **güven, otorite ve prestij** ile donatıyoruz.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <GradientButton href="/iletisim" size="lg">Büronuzu Dijitalde Başlatın</GradientButton>
                    </div>
                </div>
            </section>

            {/* Pillars of Authority */}
            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Scale, title: "Etik Tasarım", desc: "Baro kurallarına uygun, ağırbaşlı ve kurumsal duruş." },
                            { icon: ShieldCheck, title: "Güven Faktörü", desc: "Müvekkilin psikolojik güvenini ilk 3 saniyede kazanan UX." },
                            { icon: Gavel, title: "SEO Otoritesi", desc: "Spesifik dava türlerinde 'en iyi avukat' aramalarında üst sıra." },
                            { icon: FileText, title: "İçerik Stratejisi", desc: "Uzmanlığınızı belgeleyen makaleler için gelişmiş blog altyapısı." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all text-center">
                                <item.icon className="text-purple-400 mx-auto mb-6" size={32} />
                                <h4 className="font-bold text-white mb-2 font-sora">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

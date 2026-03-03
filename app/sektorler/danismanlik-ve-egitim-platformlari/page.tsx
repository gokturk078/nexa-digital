import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { GraduationCap, Briefcase, Globe, Award } from 'lucide-react';

export const metadata: Metadata = {
    title: "Danışmanlık ve Eğitim Platformları İçin Web Çözümleri | Nexa Digital",
    description: "Bilginizi kazanca dönüştürün. Danışmanlar, koçlar ve eğitim kurumları için profesyonel kişisel marka siteleri ve online eğitim (LMS) altyapıları.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/danismanlik-ve-egitim-platformlari"
    }
};

export default function DanismanlikSektoru() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                        <div>
                            <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Bilgi Otoritesi</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                Uzmanlığınızı <span className="text-[var(--color-gold)]">Global</span> Ölçekte Pazarlayın.
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Danışmanlık sektöründe ürününüz SİZSİNİZ. Uzmanlığınızı, vizyonunuzu ve referanslarınızı elit bir dille sunan kişisel marka siteleriyle pazarda tek otorite haline gelin.
                            </p>
                            <GradientButton href="/iletisim" size="lg">Uzmanlığınızı Gösterin</GradientButton>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Briefcase, label: "PROFESYONEL CV" },
                                { icon: GraduationCap, label: "LMS AKADEMİ" },
                                { icon: Award, label: "CERTIFICATES" },
                                { icon: Globe, label: "GLOBAL REACH" }
                            ].map((item, i) => (
                                <div key={i} className="p-8 glass rounded-2xl border border-white/10 flex flex-col items-center">
                                    <item.icon size={32} className="text-teal-400 mb-4" />
                                    <h4 className="font-bold text-xs text-center">{item.label}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

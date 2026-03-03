import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Smartphone, Zap, Layout, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: "Mobil Uygulama Geliştirme (iOS & Android) | Nexa Digital",
    description: "Markanızı müşterilerinizin cebine taşıyın. React Native ve Flutter ile yüksek performanslı, yerel uygulama deneyimi sunan mobil çözümler.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/mobil-uygulama-gelistirme"
    }
};

export default function MobilUygulamaHizmeti() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Mobile Innovation</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-sora">Cebinizdeki <span className="text-[var(--color-gold)]">Güç</span>.</h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Sadece bir uygulama değil, kullanıcılarınızın her gün açmak isteyeceği bir **Deneyim** tasarlıyoruz. Işık hızında iOS ve Android yerel (native) performansıyla tanışın.
                    </p>
                    <GradientButton href="/iletisim" size="lg">Uygulamanızı Planlayalım</GradientButton>
                </div>
            </section>

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-8">
                            <Zap className="text-blue-400 mx-auto mb-6" size={48} />
                            <h3 className="text-2xl font-bold mb-4">Hızlı Performans</h3>
                            <p className="text-gray-400 leading-relaxed">Saniyeler içinde açılan ve takılma yapmayan kusursuz akışlar.</p>
                        </div>
                        <div className="p-8 border-x border-white/5">
                            <Layout className="text-blue-400 mx-auto mb-6" size={48} />
                            <h3 className="text-2xl font-bold mb-4">Modern UI/UX</h3>
                            <p className="text-gray-400 leading-relaxed">Kullanıcının parmağının ucunda hissedeceği elit ve ergonomik tasarım dili.</p>
                        </div>
                        <div className="p-8">
                            <Globe className="text-blue-400 mx-auto mb-6" size={48} />
                            <h3 className="text-2xl font-bold mb-4">Cross-Platform</h3>
                            <p className="text-gray-400 leading-relaxed">Tek kod altyapısı ile hem App Store hem Play Store'da mükemmel sonuçlar.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

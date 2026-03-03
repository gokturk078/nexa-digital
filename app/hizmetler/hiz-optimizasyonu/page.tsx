import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Zap, Gauge, LineChart, Cpu } from 'lucide-react';

export const metadata: Metadata = {
    title: "Google Hız Optimizasyonu & Core Web Vitals | Nexa Digital",
    description: "Web siteniz 3 saniyeden geç açılıyorsa müşteri kaybediyorsunuz. Nexa Digital'in Next.js ve Edge teknolojileriyle sitenizi ışık hızına ulaştırın.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/hiz-optimizasyonu"
    }
};

export default function HizOptimizasyonu() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="pt-40 pb-24 px-4 relative">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Page Speed Performance</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 font-sora">Işık Hızında Bir Web Deneyimi.</h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Sayfa yükleme süreleri sadece kullanıcı deneyimi değil, doğrudan bir <strong>SEO sıralama faktörüdür</strong>. Core Web Vitals skorlarınızda %100 başarı hedefliyoruz.
                    </p>
                    <div className="flex justify-center gap-12 mb-16">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-green-400 font-sora mb-2">100</div>
                            <div className="text-sm text-gray-500 font-semibold uppercase">Performance</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-green-400 font-sora mb-2">0.8s</div>
                            <div className="text-sm text-gray-500 font-semibold uppercase">LCP Speed</div>
                        </div>
                    </div>
                    <GradientButton href="/iletisim" size="lg">Sitemi Hızlandır</GradientButton>
                </div>
            </section>

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold font-sora">Neden Bizi Tercih Etmelisiniz?</h2>
                            {[
                                { icon: Gauge, title: "Lighthouse %100", desc: "Tüm performans, erişilebilirlik ve SEO metriklerinde tam puan." },
                                { icon: Cpu, title: "Modern Framework", desc: "Statik site oluşturma (SSG) ve sunucu tarafı render (SSR) ile anlık yükleme." },
                                { icon: LineChart, title: "Düşük Bounce Rate", desc: "Hızlı açılan sayfalarda kullanıcılar daha uzun süre kalır ve daha çok satın alır." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                                        <item.icon className="text-yellow-400" size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-white mb-2">{item.title}</h4>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20">
                            <h3 className="text-2xl font-bold mb-6 font-sora text-yellow-500">Uyguladığımız Teknikler</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <Zap className="text-yellow-500" size={18} /> Edge Runtime & CDN Deployment
                                </li>
                                <li className="flex items-center gap-3">
                                    <Zap className="text-yellow-500" size={18} /> Next Generation Image Formats (WebP/AVIF)
                                </li>
                                <li className="flex items-center gap-3">
                                    <Zap className="text-yellow-500" size={18} /> Zero JS Hydration Strategies
                                </li>
                                <li className="flex items-center gap-3">
                                    <Zap className="text-yellow-500" size={18} /> Aggressive Caching Mechanisms
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

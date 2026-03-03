import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Home, Key, MapPin, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: "Emlak & Gayrimenkul Dijital Pazarlama Stratejileri | Nexa Digital",
    description: "Lüks gayrimenkul projeleri ve emlak ofisleri için ilan vitrini, CRM entegrasyonu ve nitelikli lead toplama odaklı web çözümleri. Sektörde fark yaratın.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/emlak-gayrimenkul-dijital-pazarlama"
    }
};

export default function EmlakSektoru() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-5xl relative z-10 text-center lg:text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Lüks Gayrimenkul</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                Mülklerinizi Değil, <span className="text-[var(--color-gold)]">Hayalleri</span> Satın.
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Emlak sektöründe ilk intiba her şeydir. Potansiyel alıcılar ilan sitelerinden bıktı; onlar <strong>güven</strong> ve <strong>prestij</strong> arıyor. Biz sizin için milyarlarca TL değerindeki portföyünüzü hak ettiği lüksle sergileyen dijital vitrinler kuruyoruz.
                            </p>
                            <GradientButton href="/iletisim" size="lg">İlanlarınızı Dijitalde Canlandırın</GradientButton>
                        </div>
                        <div className="hidden lg:flex items-center justify-center relative">
                            <div className="w-full aspect-square max-w-md bg-gradient-to-br from-[var(--color-gold)]/20 to-transparent rounded-full flex items-center justify-center border border-white/10 relative">
                                <Home className="w-32 h-32 text-[var(--color-gold)] animate-pulse" />
                                <div className="absolute -top-4 -right-4 p-6 glass rounded-2xl border border-white/20">
                                    <TrendingUp className="text-green-400 mb-2" />
                                    <p className="font-bold text-xl">%320</p>
                                    <p className="text-xs text-gray-500">Lead Artışı</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Solutions */}
            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--color-gold)]/30 transition-all">
                            <Key className="text-[var(--color-gold)] mb-6" size={32} />
                            <h3 className="text-2xl font-bold mb-4 font-sora">Lüks İlan Vitrini</h3>
                            <p className="text-gray-400">Yüksek çözünürlüklü galeriler, sanal tur entegrasyonları ve filtrelenebilir ilan modülleri.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--color-gold)]/30 transition-all">
                            <MapPin className="text-[var(--color-gold)] mb-6" size={32} />
                            <h3 className="text-2xl font-bold mb-4 font-sora">Bölgesel SEO</h3>
                            <p className="text-gray-400">"Kıbrıs satılık villa", "İstanbul lüks konut" gibi kelimelerde rakiplerinizi geride bırakan strateji.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--color-gold)]/30 transition-all">
                            <TrendingUp className="text-[var(--color-gold)] mb-6" size={32} />
                            <h3 className="text-2xl font-bold mb-4 font-sora">CRM Entegrasyonu</h3>
                            <p className="text-gray-400">Web sitesinden gelen her lead'i anında satış ekibinizin telefonuna düşüren otomasyon sistemleri.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

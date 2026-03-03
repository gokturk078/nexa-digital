import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Car, Settings, Wrench, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: "Otomotiv Galeri ve Servisler İçin Dijital Çözümler | Nexa Digital",
    description: "Araç satışını ve servis randevularını artıran, Google Haritalar uyumlu otomotiv web tabanlı CRM ve katalog sistemleri. Markanızı dijitalde hızlandırın.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/otomotiv-servis-ve-galeri-yazilimlari"
    }
};

export default function OtomotivSektoru() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Full-Throttle Digital</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sora">
                        Hızınıza Uygun <span className="text-[var(--color-gold)]">Dijital Güç</span>.
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Galeriniz veya servisiniz için sadece bir site değil, her ay yüzlerce yeni müşteri kazandıran bir **Satış Makinesi** tasarlıyoruz. Google'da 'yakınımdaki servis' aramasında lider olun.
                    </p>
                    <GradientButton href="/iletisim" size="lg">Gaza Basın</GradientButton>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Car, title: "Dijital Katalog", desc: "Araçlarınızın her detayını premium kalitede sergileyen katalog." },
                            { icon: Settings, title: "Online Randevu", desc: "Müşterilerinizin telefon açmadan servis sırası almasını sağlayan sistem." },
                            { icon: MapPin, title: "Lokal SEO", desc: "Google Haritalar'da şehrinizin 1 numaralı galerisi olun." },
                            { icon: Wrench, title: "Servis CRM", desc: "Müşteri geçmişini ve bakım periyotlarını takip eden akıllı altyapı." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all text-center">
                                <item.icon className="text-blue-400 mx-auto mb-6" size={32} />
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

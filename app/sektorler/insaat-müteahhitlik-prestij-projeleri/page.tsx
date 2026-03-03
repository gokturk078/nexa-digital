import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { HardHat, Building, Ruler, Ship } from 'lucide-react';

export const metadata: Metadata = {
    title: "İnşaat ve Müteahhitlik Sektörü Prestij Web Tasarımı | Nexa Digital",
    description: "Dev projelerinizi dijitalde hak ettiği lüksle sergileyin. İnşaat ve mimari ofisler için portfolyo odaklı, güven aşılayan kurumsal web çözümleri.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/insaat-müteahhitlik-prestij-projeleri"
    }
};

export default function InsaatSektoru() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-5xl relative z-10 text-center lg:text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Endüstriyel Prestij</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                Projeleriniz Sizin <span className="text-[var(--color-gold)]">Güvencenizdir</span>.
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                İnşaat sektöründe güven her şeydir. Tamamlanan ve devam eden projelerinizi "Apple kalitesinde" bir dijital vitrinle sergileyerek, yatırımcılarınıza ve müşterilerinize sarsılmaz bir güven aşılayın.
                            </p>
                            <GradientButton href="/iletisim" size="lg">Projenizi Başlatın</GradientButton>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-8 glass rounded-2xl border border-white/10 flex flex-col items-center">
                                <Building size={40} className="text-orange-400 mb-4" />
                                <h4 className="font-bold text-lg">PROJE VİTRİNİ</h4>
                            </div>
                            <div className="p-8 glass rounded-2xl border border-white/10 flex flex-col items-center translate-y-4">
                                <Ruler size={40} className="text-orange-400 mb-4" />
                                <h4 className="font-bold text-lg">MİMARİ SUNUM</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

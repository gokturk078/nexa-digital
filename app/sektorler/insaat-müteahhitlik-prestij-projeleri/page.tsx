import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { HardHat, Building, Ruler, Ship, Zap, Target } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: "İnşaat ve Müteahhitlik Sektörü Prestij Web Tasarımı | Nexa Digital",
    description: "Dev projelerinizi dijitalde hak ettiği lüksle sergileyin. İnşaat ve mimari ofisler için portfolyo odaklı, güven aşılayan kurumsal web çözümleri.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/insaat-müteahhitlik-prestij-projeleri"
    }
};

export default function InsaatSektoru() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "İnşaat Sektörü Dijital Prestij Paketi",
        "description": "Müteahhitlik ve inşaat firmaları için proje odaklı lüks web tasarımı ve kurumsal kimlik.",
        "provider": { "@id": "https://wearenexa.co/#organization" }
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "Sektörler", href: "/#sektorler" }, { name: "İnşaat & Mimari", href: "/sektorler/insaat-müteahhitlik-prestij-projeleri" }]} />
            </div>

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <div>
                                <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Endüstriyel Prestij & Mimari Güven</span>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                    Projeleriniz Sizin <span className="text-gradient-gold">Güvencenizdir</span>.
                                </h1>
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    İnşaat ve müteahhitlik projelerinde "güven" her şeydir. Bir mülk satın almak, insanların hayatlarındaki en büyük yatırımdır. Bu süreçte markanızın dijitaldeki duruşu, projenizin kalitesini temsil eder. Nexa Digital olarak inşaat markalarınız için <Link href="/hizmetler/kurumsal-kimlik-tasarimi" className="text-gold-500 underline underline-offset-4 font-bold">Kurumsal Kimlik Tasarımı</Link> ve prestijli web çözümleri sunarak, yatırımcılarınıza sarsılmaz bir <strong className="text-white">prestij</strong> aşılayın.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <GradientButton href="#randevu" size="lg">Projenizi Dijitalleştirin</GradientButton>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
                                            ))}
                                        </div>
                                        <span>+30 Dev Proje Referansı</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-8 glass rounded-2xl border border-white/10 flex flex-col items-center hover:border-orange-500/30 transition-colors group">
                                    <Building size={48} className="text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-lg text-white">PROJE VİTRİNİ</h4>
                                    <p className="text-xs text-gray-500 text-center mt-2">Ultra HD Galeri</p>
                                </div>
                                <div className="p-8 glass rounded-2xl border border-white/10 flex flex-col items-center translate-y-4 hover:border-[#C9A84C]/30 transition-colors group">
                                    <Ruler size={48} className="text-[#C9A84C] mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-lg text-white">MİMARİ SUNUM</h4>
                                    <p className="text-xs text-gray-500 text-center mt-2">Teknik Estetik</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            <LeadMagnet />
            <BookingSection source="İnşaat Sektörü Sayfası" />
            <Footer />
        </main>
    );
}

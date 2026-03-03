import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatsBar from '@/components/StatsBar';
import { Target, Lightbulb, Zap, Rocket } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));

export const metadata: Metadata = {
    title: "Hakkımızda | Nexa Digital - Premium Dijital Strateji",
    description: "Nexa Digital, Kıbrıs ve Türkiye merkezli, işletmeleri dijitalde devleştiren yüksek performanslı bir ajanstır. Hikayemizi ve vizyonumuzu keşfedin.",
    alternates: {
        canonical: "https://wearenexa.co/hakkimizda"
    }
};

export default function Hakkimizda() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "Hakkımızda", href: "/hakkimizda" }]} />
            </div>

            {/* Premium Hero */}
            <section className="pt-20 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <ScrollReveal>
                        <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Manifesto</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 font-sora leading-tight">
                            Dijitalde Sınırları <br /> <span className="text-gradient-gold">Yeniden</span> Tanımlıyoruz.
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Statükoyu kabul etmeyen, her projeye bir sanat eseri ve bir <strong className="text-white">Satış Makinesi</strong> olarak yaklaşan elit bir ekibiz.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <StatsBar />

            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-5xl px-4 relative z-10">
                    <div className="prose prose-invert prose-lg max-w-none">
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold font-sora mb-6">Biz Kimiz?</h2>
                            <p className="text-gray-400">
                                Nexa Digital, sadece bir "yazılım şirketi" veya "reklam ajansı" değildir. Biz, işletmenizin dijital dünyadaki <strong className="text-white">stratejik büyüme ortağıyız</strong>. İstanbul ve Lefkoşa merkezli operasyonlarımızla, global standartlardaki tasarım dilini ve en yüksek performanslı teknolojileri bir araya getiriyoruz.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <h2 className="text-3xl font-bold font-sora mt-16 mb-6">Felsefemiz: Veri Odaklı Sanat</h2>
                            <p className="text-gray-400">
                                Güzel görünen bir web sitesi yeterli değildir. Bizim için başarı, sitenizin ne kadar "tıklandığı" değil, ne kadar <strong className="text-white">dönüşüm</strong> sağladığıdır. Her pikseli psikolojik satış tetikleyicileri ile kodluyor, her satır kodu Google'ın en üst sırasına çıkmak için optimize ediyoruz.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20 not-prose">
                            {[
                                {
                                    icon: Target,
                                    title: "Vizyonumuz",
                                    desc: "Türkiye ve Kıbrıs'taki markaları, dijitalde dünya vitrinine taşıyan en prestijli teknoloji ortağı olmak."
                                },
                                {
                                    icon: Rocket,
                                    title: "Misyonumuz",
                                    desc: "İşletmelere sadece trafik değil, sürdürülebilir ve ölçeklenebilir bir dijital büyüme ekosistemi sunmak."
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-gold-500/30 transition-all h-full group">
                                        <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                                            <item.icon className="text-gold-500" size={32} />
                                        </div>
                                        <h4 className="text-white text-2xl font-bold mb-4 font-sora">{item.title}</h4>
                                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal>
                            <h2 className="text-3xl font-bold font-sora mt-16 mb-6 text-gradient-gold">Neden Nexa?</h2>
                            <p className="text-gray-400">
                                Sıradan ajanslar size "site" verir. Biz size <strong className="text-white">"Pazar Hakimiyeti"</strong> veriyoruz. Işık hızında açılan altyapılarımız, yapay zeka destekli müşteri asistanlarımız ve rakiplerinizi ezip geçen SEO stratejilerimizle dijitalin kurallarını sizin lehine değiştiriyoruz.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <PainSection />
            <BookingSection source="Kurumsal: Hakkımızda" />
            <Footer />
        </main>
    );
}

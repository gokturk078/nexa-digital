import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { CheckCircle2, Zap, Target, BarChart3, Clock, ShieldCheck } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: "Sağlık & Klinik Web Tasarım ve SEO Uzmanlığı | Nexa Digital",
    description: "Doktorlar ve hastaneler için hasta kazanımı odaklı lüks web tasarımı ve tıbbi SEO çözümleri. Google'da 'en iyi klinik' aramalarında 1. sıraya yerleşin.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/saglik-web-tasarim-ve-seo"
    }
};

export default function SaglikSektoru() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Sağlık Sektörü Dijital Büyüme Paketi",
        "description": "Klinikler ve sağlık kuruluşları için özel randevu sistemli web tasarımı ve tıbbi SEO.",
        "provider": { "@id": "https://wearenexa.co/#organization" }
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "Sektörler", href: "/#sektorler" }, { name: "Sağlık & Klinik", href: "/sektorler/saglik-web-tasarim-ve-seo" }]} />
            </div>

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <div>
                                <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Medikal Otorite</span>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                    Hastalarınız Google'da <span className="text-gradient-gold">Sizi Arıyor.</span>
                                </h1>
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    Sağlık sektöründe rekabet sadece "iyi doktor" olmakla sınırlı değil. Dijitalde güven vermeyen her klinik hasta kaybeder. Biz sizi <strong className="text-white">Lider Otorite</strong> konumuna taşıyoruz.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <GradientButton href="#randevu" size="lg">Kliniğinizi Dijitalde Büyütün</GradientButton>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
                                            ))}
                                        </div>
                                        <span>+40 Klinik Bizi Seçti</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="bg-gradient-to-br from-white/10 to-transparent p-1 rounded-3xl">
                                <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                                <BarChart3 className="text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold text-white">%410</p>
                                                <p className="text-sm text-gray-500 font-semibold uppercase">Ortalama Randevu Artışı</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center">
                                                <Target className="text-[#C9A84C]" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold text-white">#1 Sıra</p>
                                                <p className="text-sm text-gray-500 font-semibold uppercase">Tıbbi SEO Dominasyonu</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                                <ShieldCheck className="text-green-400" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold text-white">Hukuki Uyum</p>
                                                <p className="text-sm text-gray-500 font-semibold uppercase">Rekabet Kurulu Uyumlu Yapı</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Strategic Content */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-4xl px-4 relative z-10">
                    <ScrollReveal>
                        <article className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-[var(--color-gold)] font-sora">Klinikler İçin 'Sales Machine' Neden Gerekli?</h2>
                            <p>
                                Günümüzde hastaların %82'si bir doktorla görüşmeden önce onun web sitesini ve Google yorumlarını inceler. Eğer siteniz yavaşsa, mobilde bozuksa veya "kurumsal güven" aşılamıyorsa; o hasta rakip kliniğe gider. Nexa Digital olarak biz sadece bir site kodlamıyoruz; 7/24 çalışan bir sanal asistan inşa ediyoruz. Bu başarının anahtarı, kliniğinizin Google'ın en üst sıralarında yer almasını sağlayan <Link href="/hizmetler/kurumsal-seo" className="text-gold-500 underline underline-offset-4 font-bold">Kurumsal SEO</Link> mühendisliğimizdir.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
                                <div className="flex gap-4 p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-[#C9A84C]/30 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                                        <Clock className="text-[#C9A84C]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2 underline decoration-[#C9A84C]/30">7/24 Akıllı Randevu</h4>
                                        <p className="text-sm text-gray-400">Telefon beklemeden, hastaların anında takviminizden yer ayırmasını sağlayan sistemler.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                                        <Target className="text-blue-400" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2 underline decoration-blue-500/30">Lokal Tıbbi SEO</h4>
                                        <p className="text-sm text-gray-400">"İmplant tedavisi fiyatları", "en iyi diş hekimi" gibi aramalarda en üstte yer alın.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="font-sora">Marka İmajı ve Hasta Psikolojisi</h2>
                            <p>
                                Medikal sektörde tasarım sadece "estetik" değildir; bir <strong>etik</strong> ve <strong>güven</strong> meselesidir. Nexa'nın özel tasarım diliyle, kliniğinizin uzmanlığını hastaya ilk 3 saniyede hissettiriyoruz.
                            </p>
                        </article>
                    </ScrollReveal>
                </div>
            </section>

            <LeadMagnet />
            <BookingSection source="Sağlık Sektörü Sayfası" />
            <Footer />
        </main>
    );
}

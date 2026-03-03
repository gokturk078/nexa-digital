import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { CheckCircle2, Zap, Target, BarChart3 } from 'lucide-react';

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

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Medikal Otorite</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                Hastalarınız Google'da Sizi Arıyor.
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Sağlık sektöründe rekabet sadece "iyi doktor" olmakla sınırlı değil. Dijitalde güven vermeyen, hızlı randevu sunmayan her klinik hasta kaybeder. Biz sizi <strong>Lider Otorite</strong> konumuna taşıyoruz.
                            </p>
                            <GradientButton href="/iletisim" size="lg">Kliniğinizi Dijitalde Büyütün</GradientButton>
                        </div>
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
                                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                            <Target className="text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-white">#1 Sıra</p>
                                            <p className="text-sm text-gray-500 font-semibold uppercase">Tıbbi SEO Dominasyonu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Content */}
            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto max-w-4xl px-4">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-[var(--color-gold)]">Klinikler İçin 'Sales Machine' Neden Gerekli?</h2>
                        <p>
                            Günümüzde hastaların %82'si bir doktorla görüşmeden önce onun web sitesini ve Google yorumlarını inceler. Eğer siteniz yavaşsa, mobilde bozuksa veya "kurumsal güven" aşılamıyorsa; o hasta rakip kliniğe gider. Nexa Digital olarak biz sadece bir site kodlamıyoruz; 7/24 çalışan bir sanal asistan inşa ediyoruz.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
                            <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <Zap className="text-[var(--color-gold)] shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-white mb-2 underline decoration-[var(--color-gold)]">7/24 Randevu</h4>
                                    <p className="text-sm text-gray-400">Telefon beklemeden, hastaların anında takviminizden yer ayırmasını sağlayan akıllı sistemler.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <CheckCircle2 className="text-[var(--color-gold)] shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-white mb-2 underline decoration-[var(--color-gold)]">Tıbbi SEO</h4>
                                    <p className="text-sm text-gray-400">"İmplant tedavisi fiyatları", "en iyi diş hekimi" gibi spesifik aramalarında ilk sayfada görünürlük.</p>
                                </div>
                            </div>
                        </div>

                        <h2>Marka İmajı ve Hasta Psikolojisi</h2>
                        <p>
                            Medikal sektörde tasarım sadece "estetik" değildir; bir **etik** ve **güven** meselesidir. Nexa'nın özel tasarım diliyle, kliniğinizin uzmanlığını hastaya ilk 3 saniyede hissettiriyoruz.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}

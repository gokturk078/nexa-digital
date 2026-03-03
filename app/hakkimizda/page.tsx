import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

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

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <SectionHeading
                        title="Dijitalde Sınırları Yeniden Tanımlıyoruz"
                        subtitle="Statükoyu kabul etmeyen, her projeye bir sanat eseri ve bir satış makinesi olarak yaklaşan elit bir ekibiz."
                        align="left"
                    />

                    <div className="prose prose-invert prose-lg max-w-none mt-16">
                        <ScrollReveal>
                            <h2>Biz Kimiz?</h2>
                            <p>
                                Nexa Digital, sadece bir "yazılım şirketi" veya "reklam ajansı" değildir. Biz, işletmenizin dijital dünyadaki **stratejik büyüme ortağıyız**. İstanbul ve Lefkoşa merkezli operasyonlarımızla, global standartlardaki tasarım dilini (Apple-Grade) ve en yüksek performanslı teknolojileri (Next.js, AI) bir araya getiriyoruz.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <h2>Felsefemiz: Veri Odaklı Sanat</h2>
                            <p>
                                Güzel görünen bir web sitesi yeterli değildir. Bizim için başarı, sitenizin ne kadar "tıklandığı" değil, ne kadar "dönüşüm" (satış/randevu) sağladığıdır. Her pikseli psikolojik satış tetikleyicileri ile kodluyor, her satır kodu Google'ın en üst sırasına çıkmak için optimize ediyoruz.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 not-prose">
                            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                                <h4 className="text-[var(--color-gold)] text-xl font-bold mb-4">Vizyonumuz</h4>
                                <p className="text-gray-400">Türkiye ve Kıbrıs'taki markaları, dijitalde dünya vitrinine taşıyan en prestijli teknoloji ortağı olmak.</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                                <h4 className="text-[var(--color-gold)] text-xl font-bold mb-4">Misyonumuz</h4>
                                <p className="text-gray-400">İşletmelere sadece trafik değil, sürdürülebilir ve ölçeklenebilir bir dijital büyüme ekosistemi sunmak.</p>
                            </div>
                        </div>

                        <ScrollReveal>
                            <h2>Neden Nexa?</h2>
                            <p>
                                Sıradan ajanslar size "site" verir. Biz size **"Pazar Hakimiyeti"** veriyoruz. Işık hızında açılan altyapılarımız, yapay zeka destekli müşteri asistanlarımız ve rakiplerinizi ezip geçen SEO stratejilerimizle dijitalin kurallarını sizin lehine değiştiriyoruz.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

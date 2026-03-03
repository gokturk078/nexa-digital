import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Home, Key, MapPin, TrendingUp, ShieldCheck, Building, LayoutDashboard } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: "Emlak & Gayrimenkul Dijital Pazarlama Stratejileri | Nexa Digital",
    description: "Lüks gayrimenkul projeleri ve emlak ofisleri için ilan vitrini, CRM entegrasyonu ve nitelikli lead toplama odaklı web çözümleri. Sektörde fark yaratın.",
    alternates: {
        canonical: "https://wearenexa.co/sektorler/emlak-gayrimenkul-dijital-pazarlama"
    }
};

export default function EmlakSektoru() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Emlak Sektörü Dijital Satış Sistemi",
        "description": "Lüks gayrimenkul projeleri için özel dijital pazarlama ve satış odaklı web altyapıları.",
        "provider": { "@id": "https://wearenexa.co/#organization" }
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "Sektörler", href: "/#sektorler" }, { name: "Emlak & Gayrimenkul", href: "/sektorler/emlak-gayrimenkul-dijital-pazarlama" }]} />
            </div>

            {/* Sector Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <div>
                                <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Lüks Gayrimenkul & Proje Pazarlama</span>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sora leading-tight">
                                    Mülklerinizi Değil, <span className="text-gradient-gold">Hayalleri</span> Satın.
                                </h1>
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    Gayrimenkul pazarında "bulunabilir" olmak ile "otorite" olmak arasında büyük bir fark vardır. Potansiyel yatırımcılar sadece ilan görmeyi değil, uzmanlık ve güven aramaktadır. Nexa Digital olarak, emlak profesyonelleri için geliştirdiğimiz <Link href="/hizmetler/kurumsal-seo" className="text-gold-500 underline underline-offset-4 font-bold">Kurumsal SEO</Link> altyapısı ile markanızı bölgesel bir güç merkezine dönüştürüyoruz.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-start">
                                    <GradientButton href="#randevu" size="lg">Dijital Vitrininizi Kurun</GradientButton>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
                                            ))}
                                        </div>
                                        <span>+25 Emlak Devine Hizmet</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="hidden lg:flex items-center justify-center relative">
                                <div className="w-full aspect-square max-w-md bg-gradient-to-br from-[#C9A84C]/20 to-transparent rounded-full flex items-center justify-center border border-white/10 relative">
                                    <Home className="w-32 h-32 text-[#C9A84C] animate-pulse" />
                                    <div className="absolute -top-4 -right-4 p-6 glass rounded-2xl border border-white/20">
                                        <TrendingUp className="text-green-400 mb-2" />
                                        <p className="font-bold text-xl">%320</p>
                                        <p className="text-xs text-gray-500 font-semibold">Lead Artışı</p>
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 p-5 glass rounded-2xl border border-white/20">
                                        <LayoutDashboard className="text-blue-400 mb-2" />
                                        <p className="font-bold text-lg">CRM Hazır</p>
                                        <p className="text-[10px] text-gray-500">Otomatik Takip</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Core Solutions */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-sora mb-4">Emlak Satış Makinesi <span className="text-gradient-gold">Çözümleri</span></h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Sadece bir site değil, her tıklamayı nitelikli birer alıcı adayına dönüştüren bir ekosistem.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Key,
                                title: "Lüks İlan Vitrini",
                                desc: "Yüksek çözünürlüklü galeriler, sanal tur entegrasyonları ve filtrelenebilir lüks ilan modülleri."
                            },
                            {
                                icon: MapPin,
                                title: "Bölgesel SEO",
                                desc: " 'Kıbrıs satılık villa', 'İstanbul lüks konut' gibi kelimelerde rakiplerinizi geride bırakan yerel dominasyon."
                            },
                            {
                                icon: ShieldCheck,
                                title: "CRM Entegrasyonu",
                                desc: "Web sitesinden gelen her lead'i anında satış ekibinizin telefonuna düşüren özel Telegram ve CRM bağlamları."
                            }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C9A84C]/30 transition-all group h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/20 transition-colors text-[#C9A84C]">
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 font-sora">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <LeadMagnet />
            <BookingSection source="Emlak Sektörü Sayfası" />
            <Footer />
        </main>
    );
}

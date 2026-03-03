import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Calendar, ArrowRight, TrendingUp, Globe, Bot } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const BookingSection = dynamic(() => import('@/components/BookingSection'));

export const metadata: Metadata = {
    title: "Nexa Blog | Dijital Strateji ve Teknoloji Analizleri",
    description: "2026 dijital pazarlama trendleri, SEO stratejileri ve yapay zeka otomasyonları hakkında uzman görüşleri.",
    alternates: {
        canonical: "https://wearenexa.co/blog"
    }
};

const posts = [
    {
        title: "2026 Dijital Pazarlama Trendleri & AI Devrimi",
        slug: "2026-dijital-pazarlama-trendleri",
        desc: "Gelecek burada. 2026'da markanızı zirveye taşıyacak yapay zeka ve yeni nesil SEO stratejilerini keşfedin.",
        tag: "Trend Analizi",
        icon: TrendingUp,
        color: "text-purple-400",
        bg: "bg-purple-500/10"
    },
    {
        title: "Türkiye ve Kıbrıs SEO Rehberi: Bölgesel Otorite",
        slug: "turkiye-kibris-seo-stratejisi",
        desc: "İki farklı pazar, tek bir başarı formülü. Bölgesel SEO ile Google'da rakiplerinizi nasıl geride bırakırsınız?",
        tag: "SEO Strateji",
        icon: Globe,
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        title: "Yapay Zeka ile Satış Otomasyonu: 7/24 Kazanan Sistemler",
        slug: "yapay-zeka-ile-satis-otomasyonu",
        desc: "Satış ekibiniz uyurken bile çalışan, müşterileri ikna eden AI asistanları ile tanışın.",
        tag: "AI Automation",
        icon: Bot,
        color: "text-gold-500",
        bg: "bg-gold-500/10"
    }
];

export default function BlogIndex() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
            </div>

            <section className="pt-20 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <ScrollReveal>
                        <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Knowledge Hub</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 font-sora leading-tight">
                            Dijital <span className="text-gradient-gold">İstihbarat.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Pazarı domine etmek için ihtiyacınız olan en güncel stratejiler, vaka analizleri ve teknoloji incelemeleri.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="pb-32 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <a href={`/blog/${post.slug}`} className="group block h-full">
                                    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 group-hover:border-gold-500/30 transition-all h-full flex flex-col relative overflow-hidden">
                                        <div className={`w-12 h-12 rounded-2xl ${post.bg} flex items-center justify-center mb-6`}>
                                            <post.icon className={post.color} size={24} />
                                        </div>
                                        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">{post.tag}</span>
                                        <h3 className="text-2xl font-bold text-white mb-4 font-sora group-hover:text-gold-500 transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                                            {post.desc}
                                        </p>
                                        <div className="flex items-center gap-2 text-gold-500 font-bold group-hover:gap-4 transition-all">
                                            Makaleyi Oku <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </a>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <BookingSection source="Blog Index" />
            <Footer />
        </main>
    );
}

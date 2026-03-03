import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { caseStudies } from '@/data/case-studies';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { TrendingUp, Zap, Smartphone, Users, Search, Globe, Phone, Award, Heart, ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GradientButton } from '@/components/ui/GradientButton';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import dynamic from 'next/dynamic';

const BookingSection = dynamic(() => import('@/components/BookingSection'));

const iconMap: { [key: string]: any } = {
    TrendingUp, Zap, Smartphone, Users, Search, Globe, Phone, Award, Heart
};

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);
    if (!study) return { title: 'Başarı Hikayesi' };

    return {
        title: `${study.title} | Nexa Digital Başarı Hikayeleri`,
        description: study.subtitle,
        openGraph: {
            title: study.title,
            description: study.subtitle,
            type: 'article',
        }
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": study.title,
        "description": study.subtitle,
        "author": {
            "@type": "Organization",
            "name": "Nexa Digital"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Nexa Digital",
            "logo": {
                "@type": "ImageObject",
                "url": "https://wearenexa.co/logo.png"
            }
        }
    };

    return (
        <main className="bg-black min-h-screen text-white overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            {/* Case Study Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <ScrollReveal>
                        <div className="mb-8">
                            <Breadcrumbs items={[{ name: "Başarı Hikayeleri", href: "/portfolyo" }, { name: study.title, href: `/basari-hikayeleri/${study.slug}` }]} />
                        </div>
                        <a href="/portfolyo" className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors mb-8 group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Portfolyoya Dön
                        </a>
                        <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-4 block">{study.category}</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 font-sora tracking-tight leading-tight max-w-5xl">
                            {study.title}
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
                            {study.subtitle}
                        </p>
                    </ScrollReveal>

                    {/* Quick Results Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {study.results.map((result, i) => {
                            const Icon = iconMap[result.icon] || TrendingUp;
                            return (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-gold-500/30 transition-all group">
                                        <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                                            <Icon className="text-gold-500" size={24} />
                                        </div>
                                        <div className="text-4xl font-bold text-white mb-2 font-sora">{result.value}</div>
                                        <div className="text-gray-500 font-medium uppercase tracking-widest text-xs">{result.label}</div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Narrative */}
                        <div className="lg:col-span-8 space-y-16">
                            <ScrollReveal>
                                <div className="prose prose-invert prose-lg max-w-none">
                                    <h2 className="text-3xl font-bold font-sora text-white mb-8 border-l-4 border-gold-500 pl-6">Analiz & Zorluk</h2>
                                    <p className="text-gray-400 leading-relaxed text-xl">
                                        {study.challenge}
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="prose prose-invert prose-lg max-w-none">
                                    <h2 className="text-3xl font-bold font-sora text-white mb-8 border-l-4 border-gold-500 pl-6">Nexa Çözümü</h2>
                                    <p className="text-gray-400 leading-relaxed text-xl">
                                        {study.solution}
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
                                    <h3 className="text-2xl font-bold font-sora text-white mb-8">Kazanılan Teknik Metrikler</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {study.metrics.map((metric, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <CheckCircle2 className="text-gold-500 shrink-0 mt-1" size={24} />
                                                <span className="text-gray-300 text-lg leading-snug">{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <ScrollReveal direction="right">
                                <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] sticky top-32">
                                    <h4 className="text-white font-bold mb-6 font-sora text-xl">Proje Detayları</h4>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Müşteri</div>
                                            <div className="text-white font-medium">{study.client}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Yıl</div>
                                            <div className="text-white font-medium">{study.year}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Teknoloji Yığını</div>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {study.technologies.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="pt-6">
                                            <GradientButton href={study.link} size="lg" className="w-full">
                                                Canlı Projeyi Gör <ExternalLink size={18} className="ml-2" />
                                            </GradientButton>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <BookingSection source={`Case Study: ${study.client}`} />
            <Footer />
        </main>
    );
}

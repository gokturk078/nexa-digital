import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatsBar from '@/components/StatsBar';
import { Calendar, Clock, User, Share2, TrendingUp, Sparkles, Zap } from 'lucide-react';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));

export const metadata: Metadata = {
    title: "2026 Dijital Pazarlama Trendleri & AI Devrimi | Nexa Blog",
    description: "Gelecek burada. 2026'da markanızı zirveye taşıyacak yapay zeka, hiper-kişiselleştirme ve yeni nesil SEO stratejilerini keşfedin.",
    alternates: {
        canonical: "https://wearenexa.co/blog/2026-dijital-pazarlama-trendleri"
    }
};

export default function BlogTrendler() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Post Hero */}
            <section className="pt-40 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-4xl relative z-10">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 text-purple-400 font-bold tracking-widest uppercase text-xs mb-6">
                            <span className="bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 flex items-center gap-2 text-white">
                                <TrendingUp size={14} /> TREND ANALİZİ
                            </span>
                            <span className="flex items-center gap-2"><Clock size={14} /> 5 DAKİKA OKUMA</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 font-sora leading-tight text-white tracking-tight">
                            2026 Dijital Pazarlama Trendleri: Yapay Zeka Artık Seçenek Değil, <span className="text-gradient-gold">Zorunluluk.</span>
                        </h1>
                        <div className="flex items-center gap-6 text-gray-400 pb-10 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-500 to-yellow-500" />
                                <span>Nexa Strateji Ekibi</span>
                            </div>
                            <div className="flex items-center gap-2"><Calendar size={16} /> Mart 2026</div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <StatsBar />

            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto max-w-4xl px-4 relative z-10">
                    <article className="prose prose-invert prose-lg max-w-none prose-headings:font-sora prose-headings:text-white prose-p:text-gray-400 prose-strong:text-white prose-a:text-gold-500 hover:prose-a:text-white transition-colors">
                        <ScrollReveal>
                            <p className="lead text-xl text-gray-300 font-medium leading-relaxed">
                                Dijital dünya her gün kabuk değiştiriyor. 2026 yılına girerken, geleneksel reklam modellerinin yerini hiper-hızlı ve hiper-kişiselleştirilmiş <strong className="text-white">AI-Native</strong> stratejiler alıyor. Markanız hazır mı?
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className="flex items-center gap-4 mt-16"><Sparkles className="text-purple-400" /> 1. AI-Powered Search (SGE) ve SEO Mimarisi</h2>
                            <p>
                                Google artık sadece bir link listesi değil, bir yanıt makinesi. Search Generative Experience (SGE) ile kullanıcılar sorularına doğrudan yapay zeka tarafından oluşturulmuş yanıtlar alıyor. Bu dönemde SEO, sadece anahtar kelime girmek değil, Google'ın AI modeline "en güvenilir otorite" olduğunuzu kanıtlamaktır.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="p-10 bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 my-12 rounded-3xl relative group overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500/10 rounded-full blur-[30px]" />
                                <h4 className="mt-0 font-sora text-gold-500 flex items-center gap-2">
                                    <Zap size={20} /> Nexa Analizi:
                                </h4>
                                <p className="mb-0 italic text-gray-300 text-lg leading-relaxed">
                                    "Sadece içerik üretmek yetmez; içeriğinizin semantik olarak doğru yapılandırılması ve 'Entities' bazlı SEO hiyerarşisine uyması 2026'da hayatta kalmanın tek yolu."
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className="mt-16">2. Hiper-Kişiselleştirilmiş Müşteri Yolculukları</h2>
                            <p>
                                Müşteriler artık genel mesajlardan kaçıyor. 2026'da başarı, bir kullanıcının sitenize girdiğinde onun geçmişine, ilgi alanlarına ve o anki ruh haline göre dinamik olarak değişen arayüzler sunabilmektir. Nexa olarak geliştirdiğimiz <strong className="text-white">'Sales Machine'</strong> altyapıları tam olarak bu noktada devreye giriyor.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className="mt-16">3. Video ve İnteraktif Deneyimlerin Dominasyonu</h2>
                            <p>
                                Artık statik görsellerin yerini, kullanıcıyla etkileşime giren 3D modeller, artırılmış gerçeklik (AR) ve kısa, vurucu video içerikleri alıyor. Web siteniz artık dijital bir broşür değil, yaşayan bir organizma olmalı.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="mt-20 p-1 bg-gradient-to-r from-gold-500 via-yellow-500 to-gold-500 rounded-[2.5rem]">
                                <div className="bg-black p-12 rounded-[2.4rem] text-center">
                                    <h3 className="mt-0 text-white text-3xl font-bold mb-4">Markanızı Geleceğe Hazırlayın</h3>
                                    <p className="text-gray-400 text-lg mb-8">
                                        Değişim kapıda değil, odanın içinde. 2026 trendlerini belirleyenler arasında yer almak için dijital altyapınızı bugünden modernize etmelisiniz.
                                    </p>
                                    <a href="#randevu" className="inline-block py-4 px-12 rounded-full bg-white text-black font-bold hover:bg-gold-500 transition-all transform hover:scale-105">
                                        Ücretsiz Strateji Görüşmesi Planla
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </article>
                </div>
            </section>

            <PainSection />

            <div id="randevu">
                <BookingSection source="Blog: 2026 Trends" />
            </div>

            <Footer />
        </main>
    );
}

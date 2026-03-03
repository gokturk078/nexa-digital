import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatsBar from '@/components/StatsBar';
import { MapPin, Globe, Zap, CheckCircle2, Pin, Navigation, Calendar, Clock } from 'lucide-react';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));

export const metadata: Metadata = {
    title: "Türkiye ve Kıbrıs SEO Rehberi: Bölgesel Otorite Stratejisi | Nexa Blog",
    description: "İki farklı pazar, tek bir başarı formülü. Türkiye ve Kıbrıs'ta Google'da nasıl 1. sıraya çıkılır? Yerel SEO stratejilerinin püf noktaları.",
    alternates: {
        canonical: "https://wearenexa.co/blog/turkiye-kibris-seo-stratejisi"
    }
};

export default function BlogSEO() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Post Hero */}
            <section className="pt-40 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-4xl relative z-10">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 text-blue-400 font-bold tracking-widest uppercase text-xs mb-6">
                            <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 flex items-center gap-2 text-white">
                                <Globe size={14} /> SEO STRATEGY
                            </span>
                            <span className="flex items-center gap-2"><Clock size={14} /> 7 DAKİKA OKUMA</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 font-sora leading-tight text-white tracking-tight">
                            Türkiye ve Kıbrıs: Bölgesel SEO'da <span className="text-gradient-gold">Çifte Zafer</span> Kazanmanın Yolları.
                        </h1>
                        <div className="flex items-center gap-6 text-gray-400 pb-10 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500" />
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
                                Türkiye ve Kıbrıs pazarları dijital alışkanlıklar açısından benzer görünse de, Google'ın bölge bazlı algoritmaları çok farklı çalışır. İki pazarda da lider olmak istiyorsanız, stratejinizi <strong className="text-white">"Bölgesel Otorite" (Local Authority)</strong> üzerine kurmalısınız.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className="flex items-center gap-4 mt-16"><Navigation className="text-blue-400" /> 1. Lokasyon Hedefli Silo Yapısı</h2>
                            <p>
                                Google, "Kıbrıs web tasarım" araması yapan birine yerel bir otorite göstermek ister. Sitenizin sadece ana sayfasında bu kelimeleri geçirmek yetmez. Her bölge için özel, o bölgenin şehirlerine (Lefkoşa, İstanbul, Girne, İzmir) odaklanan alt sayfalar (Silo) oluşturmalısınız.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="p-10 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 my-12 rounded-3xl relative group overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-[30px]" />
                                <h4 className="mt-0 font-sora text-blue-400 flex items-center gap-2">
                                    <CheckCircle2 size={20} /> Pro İpucu:
                                </h4>
                                <p className="mb-0 italic text-gray-300 text-lg leading-relaxed">
                                    "Yerel silo sayfalarında o bölgeye özel projelerinizden ve yerel referanslarınızdan bahsetmek, Google'ın sizi 'yerel uzman' olarak işaretlemesini sağlar."
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className="mt-16">2. Mobil Hız: Ada ve Ana Karada Aynı Kural</h2>
                            <p>
                                Kıbrıs gibi mobil internet kullanımının yüksek olduğu yerlerde sitenizin 1 saniyenin altında açılması sadece SEO değil, bir hayatta kalma meselesidir. Nexa'nın Next.js altyapıları, en zayıf bağlantılarda bile ışık hızında sonuç verir.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className="mt-16">3. Google My Business (GMB) Entegrasyonu</h2>
                            <p>
                                Bölgesel SEO'nun kalbi Haritalar'dır. Türkiye ve Kıbrıs ofisleriniz için optimize edilmiş GMB profilleri ve bu profillerle siteniz arasındaki semantik bağ, sizi "Yakınımdaki" aramalarında zirveye taşır.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="mt-20 p-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-[2.5rem]">
                                <div className="bg-black p-12 rounded-[2.4rem] text-center">
                                    <h3 className="mt-0 text-white text-3xl font-bold mb-4">Pazarınızı Domine Edin</h3>
                                    <p className="text-gray-400 text-lg mb-8">
                                        Rakipleriniz hala genel anahtar kelimelerle uğraşırken, siz bölgesel otoritenizle tüm trafiği toplayın.
                                    </p>
                                    <a href="#randevu" className="inline-block py-4 px-12 rounded-full bg-white text-black font-bold hover:bg-gold-500 transition-all transform hover:scale-105">
                                        Ücretsiz SEO Analizi Al
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </article>
                </div>
            </section>

            <PainSection />

            <div id="randevu">
                <BookingSection source="Blog: SEO Strategy TR/CY" />
            </div>

            <Footer />
        </main>
    );
}

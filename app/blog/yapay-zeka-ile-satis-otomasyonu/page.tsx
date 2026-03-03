import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatsBar from '@/components/StatsBar';
import { Bot, MessageSquare, Zap, Target, Cpu, BarChart3, Calendar, Clock } from 'lucide-react';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));

export const metadata: Metadata = {
    title: "Yapay Zeka ile Satış Otomasyonu: 7/24 Kazanan Sistemler | Nexa Blog",
    description: "Satış ekibiniz uyurken bile çalışan, müşterileri ikna eden ve randevu toplayan yapay zeka asistanları ile tanışın. Geleceğin satış hunisi.",
    alternates: {
        canonical: "https://wearenexa.co/blog/yapay-zeka-ile-satis-otomasyonu"
    }
};

export default function BlogAI() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Post Hero */}
            <section className="pt-40 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto max-w-4xl relative z-10">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 text-gold-500 font-bold tracking-widest uppercase text-xs mb-6">
                            <span className="bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20 flex items-center gap-2 text-white">
                                <Bot size={14} /> AI AUTOMATION
                            </span>
                            <span className="flex items-center gap-2"><Clock size={14} /> 6 DAKİKA OKUMA</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 font-sora leading-tight text-white tracking-tight">
                            Ekibiniz Uyurken <span className="text-gradient-gold">AI</span> Satış Yapsın.
                        </h1>
                        <div className="flex items-center gap-6 text-gray-400 pb-10 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-500 to-yellow-500" />
                                <span>Nexa AI Labs</span>
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
                                Klasik "Bize Ulaşın" formlarının dönemi kapandı. Artık müşteriler anında yanıt, anında çözüm bekliyor. Yapay zeka ile entegre edilmiş satış hunileri, bu beklentiyi karşılamanın en maliyetsiz ve en verimli yoludur.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className="flex items-center gap-4 mt-16"><MessageSquare className="text-gold-500" /> WhatsApp ve Web AI Asistanları</h2>
                            <p>
                                Nexa AI Motoru, sitenize gelen ziyaretçinin sorusunu anında yanıtlar, hizmetlerinizi anlatır ve en önemlisi ona uygun boş saati bularak takviminize bir randevu ekler. Bu, <strong className="text-white">%0 kaçırılmış lead</strong> demektir.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="p-10 bg-white/[0.03] border border-white/10 my-12 rounded-3xl relative group overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500/5 rounded-full blur-[30px]" />
                                <h4 className="mt-0 font-sora text-gold-500 flex items-center gap-2">
                                    <Cpu size={20} /> Teknik Altyapı:
                                </h4>
                                <p className="mb-0 text-gray-300 leading-relaxed">
                                    Sistemlerimiz, GPT-4o ve Claude 3.5 Sonnet mimarilerini kullanarak markanızın tonuna tam uyum sağlar. Müşteriniz bir robotla değil, markanızın en bilgili uzmanıyla konuştuğunu hisseder.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className="mt-16">Dinamik Lead Puanlama (Scoring)</h2>
                            <p>
                                Yapay zeka sadece yanıt vermez, aynı zamanda gelen müşterinin "ne kadar ciddi" olduğunu da analiz eder. Yüksek potansiyelli müşterileri önceliklendirerek satış ekibinizin enerjisini doğru yere yönlendirmesini sağlar.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className="mt-16">Gelecek Şimdi Başlıyor</h2>
                            <p>
                                Yapay zeka asistanlarını sitenize entegre etmek bir lüks değil, operasyonel verimlilik için bir zorunluluktur. Dijitalde 7/24 açık bir ofisiniz olsun istiyorsanız, Nexa AI çözümleriyle tanışma vaktiniz gelmiş demektir.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="mt-20 p-1 bg-gradient-to-r from-gold-500 via-yellow-500 to-gold-500 rounded-[2.5rem]">
                                <div className="bg-black p-12 rounded-[2.4rem] text-center">
                                    <h3 className="mt-0 text-white text-3xl font-bold mb-4">Otomasyona Geçin</h3>
                                    <p className="text-gray-400 text-lg mb-8">
                                        Müşterilerinizin sorularını saniyeler içinde yanıtlayan ve onları randevuya dönüştüren sistemi bugün kuralım.
                                    </p>
                                    <a href="#randevu" className="inline-block py-4 px-12 rounded-full bg-white text-black font-bold hover:bg-gold-500 transition-all transform hover:scale-105">
                                        AI Chatbot Demosu Al
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </article>
                </div>
            </section>

            <PainSection />

            <div id="randevu">
                <BookingSection source="Blog: AI Automation" />
            </div>

            <Footer />
        </main>
    );
}

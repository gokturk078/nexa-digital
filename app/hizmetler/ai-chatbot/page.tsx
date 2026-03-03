import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';
import { Bot, MessageSquare, Zap, Target, Cpu, Workflow, ShieldCheck } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ScrollReveal from '@/components/ui/ScrollReveal';

const BookingSection = dynamic(() => import('@/components/BookingSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'));
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: "AI Chatbot Sistemleri & Satış Asistanı | Nexa Digital",
    description: "Markanızı 24 saat uyanık tutan, %100 kapanış odaklı Özel Yapay Zeka (AI) Chatbot ve Otomasyon Sistemleri.",
    alternates: {
        canonical: "https://wearenexa.co/hizmetler/ai-chatbot"
    },
    openGraph: {
        title: "Otonom Yapay Zeka Asistanı | Nexa Digital",
        description: "Müşterilerinize 3 saniyede, gece yarısında bile satış yapın.",
        url: "https://wearenexa.co/hizmetler/ai-chatbot",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Yapay Zeka Chatbot - Nexa Digital" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Nexa AI Asistanı",
        description: "Canlı Destek öldü. 7/24 uyumayan AI Closer Hattı kurguluyoruz.",
        images: ["/og-image.jpg"]
    }
};

export default function AiChatbot() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://wearenexa.co/hizmetler/ai-chatbot#service",
        "name": "Otonom Yapay Zeka Satış Asistanı",
        "provider": {
            "@id": "https://wearenexa.co/#organization"
        },
        "description": "7/24 uyumaz, hastalanmaz, itiraz karşılar ve satış kapatır. İşletmenizin dijital beyni.",
        "serviceType": "Artificial Intelligence Consulting"
    };

    const faqData = [
        {
            question: "AI Chatbot her dilde hizmet verebilir mi?",
            answer: "Evet. Nexa AI sistemleri, GPT-4 ve Claude 3.5 altyapısı sayesinde Türkçe, İngilizce, Almanca, Rusça ve Arapça dahil 90+ dilde akıcı ve satış odaklı iletişim kurabilir."
        },
        {
            question: "Şirketimin özel verilerini (fiyatlar, stoklar) nasıl öğreniyor?",
            answer: "RAG (Retrieval-Augmented Generation) teknolojisiyle chatbotunuzu sadece sizin verilerinizle (PDF, Excel, Web sitesi) eğitiyoruz. Bu sayede sadece sizin onayladığınız doğrultuda ve profesyonellik çerçevesinde cevap verir."
        },
        {
            question: "WhatsApp üzerinden satış kapatabilir mi?",
            answer: "Kesinlikle. Web sitenizin yanı sıra WhatsApp Business API entegrasyonuyla, müşterilerinizin sorularını yanıtlayıp doğrudan randevu set edebilir veya ürün satışı gerçekleştirebilir."
        },
        {
            question: "Setup (Kurulum) süreci ne kadar sürer?",
            answer: "Veri setinizin büyüklüğüne göre değişmekle birlikte, akıllı bir asistanın eğitilmesi, test edilmesi ve tüm kanallara entegre edilmesi genellikle 10-14 gün sürer."
        },
        {
            question: "Müşteriler bot olduğunu anlar mı?",
            answer: "Nexa AI, klasik 'bas-geç' botlar gibi değildir. 'Human-like' (insansı) bir tonlamayla konuşur. Ancak şeffaflık adına müşteriye yapay zeka ile konuştuğunu belirten opsiyonel ibareler de ekleyebiliriz."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navbar />

            <div className="container mx-auto max-w-7xl px-4 pt-24">
                <Breadcrumbs items={[{ name: "Hizmetler", href: "/#hizmetler" }, { name: "AI Chatbot", href: "/hizmetler/ai-chatbot" }]} />
            </div>

            {/* Silo Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Geleceğin Operasyon Hattı: Nexa AI</span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-sora tracking-tight leading-tight">
                                Gece Yarısı Bile <span className="text-gradient-gold">Satış</span> Yapan Otonom Zekalar.
                            </h1>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Sadece "Sıkça Sorulan Sorulara" cevap veren botları unutun. Markanızın dilini konuşan, itirazları kıran ve <strong className="text-white">Randevu alan</strong> otonom satış temsilcileri kurguluyoruz.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <GradientButton href="#randevu" size="lg">Kendi Yapay Zekanızı Kurgulayın</GradientButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <StatsBar />

            <PainSection />

            {/* Silo Content (Semantic HTML) */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <ScrollReveal direction="left">
                            <article className="prose prose-invert prose-lg max-w-none">
                                <h2 className="text-3xl font-bold font-sora mb-6 text-white">Canlı Destek Öldü. Yaşasın AI Closer Hattı.</h2>
                                <p className="text-gray-400">
                                    İnsan kaynaklı "Mesaide değiliz" veya "Eksik bilgi verdim" bahaneleri cironuzu eritiyor. Nexa Özel AI Chatbot sistemleri, ürün veritabanınıza (RAG Mimarisi) bağlanarak şirketinizdeki en <strong className="text-white">kıdemli</strong> satış personelinizden daha bilgili hale gelir.
                                </p>

                                <div className="p-8 my-10 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-3xl relative group">
                                    <MessageSquare className="text-purple-400 mb-4" size={40} />
                                    <h4 className="text-purple-400 mt-0 font-bold mb-2 text-xl">Örnek Başarı Senaryosu</h4>
                                    <p className="mb-0 text-gray-300 italic">
                                        "Lüks Butik Otel (Moda Nüans), gece 02:00-06:00 arası gelen soruları AI asistanımızla yanıtlayarak doğrudan rezervasyon oranını %600 artırdı."
                                    </p>
                                </div>
                            </article>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Cpu,
                                    title: "Sınırsız Hafıza (RAG)",
                                    desc: "PDF listeleriniz ve veritabanınıza bağlanarak asla hata yapmayan, unutmayan bir asistan."
                                },
                                {
                                    icon: Workflow,
                                    title: "Omnichannel Otonomi",
                                    desc: "WhatsApp Business, Telegram ve Web sitesinde eş zamanlı müşteri yönetimi."
                                },
                                {
                                    icon: Target,
                                    title: "Lead Generation",
                                    desc: "Numara alıp anında CRM'e düşüren ve randevu set eden kurşun geçirmez kapanış."
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Enterprise Güvenlik",
                                    desc: "Token maliyet optimizasyonu ve en gelişmiş GPT-4/Claude modelleriyle tam entegrasyon."
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all h-full group">
                                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                                            <item.icon className="text-purple-400" size={32} />
                                        </div>
                                        <h4 className="font-bold text-white mb-3 font-sora text-lg leading-tight">{item.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqData} />
            <LeadMagnet />
            <BookingSection source="Hizmet Sayfası: AI Chatbot" />
            <Footer />
        </main>
    );
}

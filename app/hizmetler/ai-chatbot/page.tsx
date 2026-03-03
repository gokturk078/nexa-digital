import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientButton } from '@/components/ui/GradientButton';

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
    const schema = {
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

    return (
        <main className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            {/* Silo Hero */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Geleceğin Operasyon Hattı</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Müşterilerinize 3 Saniyede, Gece Yarısında Bile <span className="text-gradient-gold">Satış</span> Yapın.
                    </h1>
                    <p className="text-xl text-gray-400 mb-10">
                        Sadece "Sıkça Sorulan Sorulara" cevap veren aptal botları unutun. Biz; markanızın dilini konuşan, itirazları kıran ve Calendly/Telegram/WhatsApp entegrasyonu ile <strong>Randevu alan</strong> otonom zekalar eğitiyoruz.
                    </p>
                    <GradientButton href="/#randevu" size="lg">Kendi Yapay Zekanızı Kurgulayın</GradientButton>
                </div>
            </section>

            {/* Silo Content (Semantic HTML) */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto max-w-4xl px-4">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2>Canlı Destek Öldü. Yaşasın AI Closer Hattı.</h2>
                        <p>
                            İnsan kaynaklı "Mesaide değiliz", "Yemeğe çıktım" veya "Eksik bilgi verdim" bahaneleri cironuzu eritiyor. Nexa Özel AI Chatbot sistemleri, ürün veritabanınıza (RAG Mimarisi) bağlanarak şirketinizdeki en **kıdemli** satış personelinizden daha bilgili hale gelir.
                        </p>

                        <h3>Sistemin Kurumsal Yetenekleri</h3>
                        <ul>
                            <li><strong>Sınırsız Hafıza (RAG):</strong> PDF fiyat listeleriniz, önceki müşteri görüşmeleriniz ve site içeriklerinizi sisteme yükler (vektor veritabanı). Asistan asla unutmaz, hata yapmaz.</li>
                            <li><strong>Çoklu Kanal Otonomisi:</strong> Sadece web sitenizde değil; WhatsApp Business API ve Telegram üzerinden doğrudan müşterilerle mesajlaşır (Omnichannel).</li>
                            <li><strong>Lead Generation (Kurşun Geçirmez Kapanış):</strong> "Fiyat alabilir miyim?" diyen müşteriye fiyatı verip bırakmaz. "İhtiyacınızı netleştirmek için numaranızı alabilir miyim?" diyerek numarayı alır ve anında CRM'inize / Mail'inize düşürür.</li>
                        </ul>

                        <div className="p-8 my-10 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-2xl">
                            <h4 className="text-purple-400 mt-0">Örnek Başarı Senaryosu</h4>
                            <p className="mb-0">
                                Lüks Butik Otel Müşterimiz (Moda Nüans Konaklama), gece 02:00 ile 06:00 arasında gelen "Oda müsait mi? Fiyat nedir? Konum nasıl?" sorularını yanıtlamak için AI asistan sistemimizi entegre etti. Sonuç: Gece mesaisinde gerçekleşen doğrudan rezervasyon (kapalı satış) oranında <strong>%600</strong> artış.
                            </p>
                        </div>

                        <h2>Rakipler Sizi Neden Yakalayamaz?</h2>
                        <p>
                            Yapay Zeka botu "kod bilmeyenlerin" yaptığı gibi basit Prompt'larla değil; gelişmiş Node/LangChain sistemleri, Vercel AI SDK ve GPT-4 / Claude Opus entegrasyonlarıyla "Enterprise" seviyesinde kodluyoruz. Token (kullanım) maliyetlerinizi optimize ediyoruz. Müşteri, bir robotla konuştuğunu anlasa bile, bu akıllılık karşısında <em>saygı duyar</em> ve premium hisseder.
                        </p>

                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}

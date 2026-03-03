import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

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

            <article className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <span className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-4 block">AI Automation • 6 Dakika Okuma</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 font-sora leading-tight">
                        Ekibiniz Uyurken <span className="text-[var(--color-gold)]">AI</span> Satış Yapsın.
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none border-t border-white/10 pt-10">
                        <p>
                            Klasik "Bize Ulaşın" formlarının dönemi kapandı. Artık müşteriler anında yanıt, anında çözüm bekliyor. Yapay zeka ile entegre edilmiş satış hunileri, bu beklentiyi karşılamanın en maliyetsiz ve en verimli yoludur.
                        </p>

                        <h2>WhatsApp ve Web AI Asistanları</h2>
                        <p>
                            Nexa AI Motoru, sitenize gelen ziyaretçinin sorusunu anında yanıtlar, hizmetlerinizi anlatır ve en önemlisi ona uygun boş saati bularak takviminize bir randevu ekler. Bu, %0 kaçırılmış lead demektir.
                        </p>

                        <h2>Dinamik Lead Puanlama (Scoring)</h2>
                        <p>
                            Yapay zeka sadece yanıt vermez, aynı zamanda gelen müşterinin "ne kadar ciddi" olduğunu da analiz eder. Yüksek potansiyelli müşterileri önceliklendirerek satış ekibinizin enerjisini doğru yere yönlendirmesini sağlar.
                        </p>

                        <h2>Gelecek Şimdi Başlıyor</h2>
                        <p>
                            Yapay zeka asistanlarını sitenize entegre etmek bir lüks değil, operasyonel verimlilik için bir zorunluluktur. Dijitalde 7/24 açık bir ofisiniz olsun istiyorsanız, Nexa AI çözümleriyle tanışma vaktiniz gelmiş demektir.
                        </p>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

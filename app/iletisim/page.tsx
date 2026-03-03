import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
    title: "İletişim | Nexa Digital - Ücretsiz Strateji Görüşmesi",
    description: "Dijitalde devleşmeye hazır mısınız? Nexa Digital ekibiyle iletişime geçin, markanız için ücretsiz strateji ve analiz görüşmesi planlayalım.",
    alternates: {
        canonical: "https://wearenexa.co/iletisim"
    }
};

export default function Iletisim() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <SectionHeading
                        title="Geleceğinizi Birlikte İnşa Edelim"
                        subtitle="Formu doldurun veya doğrudan ulaşın. 24 saat içinde strateji ekibimiz sizinle iletişime geçecektir."
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
                        {/* Info Column */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 font-sora">Doğrudan İletişim</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 transition-colors">
                                            <Mail className="text-[var(--color-gold)]" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">E-posta</p>
                                            <a href="mailto:info@wearenexa.co" className="text-lg">info@wearenexa.co</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 transition-colors">
                                            <Phone className="text-[var(--color-gold)]" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Telefon</p>
                                            <a href="tel:+905480000000" className="text-lg">+90 548 XXX XX XX</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 transition-colors">
                                            <MapPin className="text-[var(--color-gold)]" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Konum</p>
                                            <p className="text-lg">Lefkoşa, Kuzey Kıbrıs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent border border-[var(--color-gold)]/20">
                                <h4 className="text-xl font-bold text-white mb-2 font-sora flex items-center gap-2">
                                    <MessageSquare size={20} className="text-[var(--color-gold)]" />
                                    Ücretsiz Danışmanlık
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    Mevcut dijital varlığınızı (Site hızı, SEO, Tasarım) ücretsiz analiz edip rapor sunuyoruz. Kaybedecek bir şeyiniz yok, kazanacak çok şeyiniz var.
                                </p>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="glass rounded-3xl p-8 md:p-10 border-white/10">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">İsim Soyisim</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[var(--color-gold)] outline-none transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">E-posta</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[var(--color-gold)] outline-none transition-colors" placeholder="john@company.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Web Siteniz (Varsa)</label>
                                    <input type="url" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[var(--color-gold)] outline-none transition-colors" placeholder="www.markaniz.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Nasıl Yardımcı Olabiliriz?</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[var(--color-gold)] outline-none transition-colors appearance-none">
                                        <option className="bg-black">Web Tasarım & Sales Machine</option>
                                        <option className="bg-black">Kurumsal SEO</option>
                                        <option className="bg-black">AI Chatbot Entegrasyonu</option>
                                        <option className="bg-black">Hepsi & Diğer</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Mesajınız</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[var(--color-gold)] outline-none transition-colors" placeholder="Projenizden bahsedin..."></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 rounded-xl bg-[var(--color-gold)] text-black font-bold hover:bg-white transition-all transform hover:scale-[1.02]">
                                    Gönder & Strateji Belirle
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

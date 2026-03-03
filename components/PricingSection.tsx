'use client';

import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import ScrollReveal from './ui/ScrollReveal';
import { Check } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: "Showcase Presence",
      price: "₺20.000",
      description: "Dijitalde güçlü ve hızlı bir başlangıç",
      features: [
        "Tek sayfalık ultra-hızlı web sitesi",
        "Mobil öncelikli responsive tasarım",
        "Temel SEO & Google Haritalar kaydı",
        "SSL Sertifikası & Güvenlik",
        "WhatsApp Butonu entegrasyonu",
        "1 ay teknik destek"
      ],
      delivery: "Teslim: 7 iş günü",
      buttonText: "Başvuru Yap →",
      highlight: false
    },
    {
      name: "Digital Authority",
      price: "₺28.000",
      description: "Sektörünüzü domine eden satış makinesi",
      features: [
        "Çok sayfalık dinamik web sitesi",
        "Karar Ağacı Tabanlı AI Chatbot",
        "Ultra SEO Mimarlığı (Silo Yapısı)",
        "Google Search Console & Analytics",
        "Hız Optimizasyonu (< 1s açılış)",
        "Profesyonel Copywriting (Satış Odaklı)",
        "Gelişmiş Randevu / Rezervasyon",
        "3 ay öncelikli teknik destek"
      ],
      delivery: "Teslim: 12 iş günü",
      buttonText: "Hemen Başla →",
      highlight: true,
      badge: "⭐ En Çok Tercih Edilen"
    },
    {
      name: "Elite Hybrid Bundle",
      price: "₺45.000",
      description: "Tam ekosistem: Web + Mobil Uygulama",
      features: [
        "Premium'daki her şey dahil",
        "iOS & Android Mobil Uygulama",
        "Veritabanı Odaklı Altyapı",
        "Özel Admin Paneli / CRM Entegrasyonu",
        "Çok Dilli Altyapı (TR / EN / RU)",
        "Yüksek Trafik Ölçeklenebilirliği",
        "Özel Dashboard & Analitik",
        "12 ay VIP teknik destek"
      ],
      delivery: "Teslim: 25 iş günü",
      buttonText: "İletişime Geç →",
      highlight: false
    }
  ];

  return (
    <section id="fiyatlandirma" className="py-24 lg:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading
            title="Yatırım Planları"
            subtitle="Bütçenize değil, büyüme hedeflerinize göre seçin."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-16">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              {plan.highlight ? (
                <div className="relative">
                  {/* "En Popüler" badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-6 py-2 bg-gradient-to-r from-[#C9A84C] to-[#FFD700] text-black text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>

                  {/* Kart — altın border + glow */}
                  <div className="glass rounded-2xl p-8 pt-12 border-2 border-[#C9A84C]/40 glow-gold-strong relative flex flex-col h-full">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-6">{plan.description}</p>
                      {/* Fiyat — altın gradient */}
                      <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-1">
                        {plan.price}
                      </div>
                      <div className="text-gray-500 text-sm mb-6">tek seferlik</div>
                    </div>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <Check className="text-[#C9A84C] shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8 border-t border-white/10">
                      <p className="text-center text-sm text-gray-400 mb-6">{plan.delivery}</p>
                      {/* CTA — dolu gradient buton */}
                      <a
                        href="#randevu"
                        className="block w-full py-4 bg-gradient-to-r from-[#C9A84C] to-[#00D4FF] text-black font-bold text-center rounded-xl hover:scale-[1.02] transition-transform pulse-glow"
                      >
                        {plan.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="glass rounded-2xl p-8 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white">
                        {plan.price}
                      </span>
                    </div>
                    {!plan.price.includes('+') && <div className="text-gray-500 text-sm mb-6 mt-1">tek seferlik</div>}
                    {plan.price.includes('+') && <div className="text-gray-500 text-sm mb-6 mt-1">&nbsp;</div>}
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="text-[#C9A84C] shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8 border-t border-white/10">
                    <p className="text-center text-sm text-gray-400 mb-6">{plan.delivery}</p>
                    <a
                      href="#randevu"
                      className="block w-full py-4 border border-[#C9A84C]/30 text-[#C9A84C] font-semibold text-center rounded-xl hover:bg-[#C9A84C]/5 transition-colors"
                    >
                      {plan.buttonText}
                    </a>
                  </div>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
        {/* AI Chatbot Subscription Add-on */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                ✨ Sürekli Gelişim Modeli
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sora">
                AI Chatbot <span className="text-cyan-400">Destek & Bakım</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Yapay zekanız asla eskimesin. Sektörel değişimlere ve müşteri taleplerine göre chatbotunuzu her ay optimize ediyor, yeni bilgilerle eğitiyoruz.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Sürekli Öğrenme & Bilgi Güncelleme",
                  "Satış Mantığı Optimizasyonu",
                  "7/24 Teknik Kontrol & Güvenlik",
                  "Aylık Performans Raporu"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10 flex flex-col items-center lg:items-end justify-center">
              <div className="p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md text-center lg:text-right min-w-[280px]">
                <div className="text-gray-400 text-sm mb-1 uppercase tracking-tighter">İşletme Aboneliği</div>
                <div className="text-5xl font-bold text-white mb-2 font-sora">₺2.000<span className="text-xl text-gray-500 font-normal">/ay</span></div>
                <p className="text-gray-500 text-xs mb-6 italic">Kuruluş sonrası opsiyonel aylık paket</p>
                <a
                  href="#randevu"
                  className="inline-block px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors"
                >
                  Hemen Abone Ol
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Risk Reversal Guarantee */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 max-w-4xl mx-auto glass rounded-3xl p-8 md:p-10 border border-[#C9A84C]/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#C9A84C] to-[#00D4FF]" />
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Nexa %100 Performans Garantisi</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Biz sadece "güzel" web siteleri yapmıyoruz, para kazandıran sistemler kuruyoruz. Eğer kurduğumuz sistem ilk 90 gün içinde size ölçülebilir bir dijital büyüme (lead/randevu artışı) sağlamazsa, hedeflere ulaşana kadar sizin için <span className="text-[#C9A84C] font-bold">ÜCRETSİZ</span> çalışmaya devam ediyoruz. <br /><span className="text-white font-medium mt-2 inline-block">Risk bizim, büyüme sizin.</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import ScrollReveal from './ui/ScrollReveal';
import { Check } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: "Starter Showcase",
      price: "₺28.000",
      description: "Dijitalde güçlü bir ilk izlenim",
      features: [
        "Tek sayfalık ultra-hızlı web sitesi",
        "Mobil öncelikli responsive tasarım",
        "Temel SEO altyapısı",
        "Google My Business optimizasyonu",
        "WhatsApp entegrasyonu",
        "1 ay teknik destek"
      ],
      delivery: "Teslim: 10 iş günü",
      buttonText: "Başvuru Yap →",
      highlight: false
    },
    {
      name: "Premium Ecosystem",
      price: "₺45.000",
      description: "Rakiplerinizi geride bırakan dijital ekosistem",
      features: [
        "Çok sayfalık dinamik web sitesi (5-8 sayfa)",
        "AI destekli akıllı chatbot",
        "Randevu / Rezervasyon sistemi",
        "Gelişmiş SEO & yerel arama dominasyonu",
        "Google Analytics & dönüşüm takibi",
        "Profesyonel copywriting (TR & EN)",
        "Sosyal medya entegrasyonu",
        "3 ay teknik destek + performans raporu"
      ],
      delivery: "Teslim: 15 iş günü",
      buttonText: "Hemen Başla →",
      highlight: true,
      badge: "⭐ En Popüler"
    },
    {
      name: "Corporate Integration",
      price: "₺75.000+",
      description: "Sektörünüzün dijital lideri olun",
      features: [
        "Premium'daki her şey dahil",
        "Özel CRM entegrasyonu",
        "Çok dilli altyapı (TR / EN / RU)",
        "E-ticaret veya özel portal modülü",
        "Otomatik e-posta pazarlama",
        "6 ay SEO & içerik yönetimi",
        "Özel dashboard & analitik",
        "7/24 öncelikli destek"
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
                  Biz sadece "güzel" web siteleri yapmıyoruz, para kazandıran sistemler kuruyoruz. Eğer kurduğumuz sistem ilk 90 gün içinde size ölçülebilir bir dijital büyüme (lead/randevu artışı) sağlamazsa, hedeflere ulaşana kadar sizin için <span className="text-[#C9A84C] font-bold">ÜCRETSİZ</span> çalışmaya devam ediyoruz. <br/><span className="text-white font-medium mt-2 inline-block">Risk bizim, büyüme sizin.</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

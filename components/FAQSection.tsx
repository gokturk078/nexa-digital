'use client';

import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import ScrollReveal from './ui/ScrollReveal';
import StaggerContainer, { staggerItem } from './ui/StaggerContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  region?: 'tr' | 'cy';
}

export function FAQSection({ region }: FAQProps) {
  const faqs = [
    {
      q: "Neden bu kadar pahalısınız?",
      a: "Pahalı değiliz — değerliyiz. Bir web sitesi değil, size müşteri kazandıran bir dijital ekosistem inşa ediyoruz. Yatırımınız ilk 3 ayda kendini geri öder."
    },
    {
      q: "Süreç nasıl işliyor?",
      a: "1) Ücretsiz strateji görüşmesi → 2) İhtiyaç analizi & teklif → 3) Tasarım onayı → 4) Geliştirme → 5) Test & lansman → 6) Destek & büyüme takibi. Her adımda şeffaf iletişim."
    },
    {
      q: "Teslim süresi ne kadar?",
      a: "Projenin kapsamına göre 10-25 iş günü. Starter paket 10, Premium 15, Corporate 25 iş günü. Acil projeler için express seçenek mevcuttur."
    },
    {
      q: region === 'tr' ? "Sadece Türkiye'de mi hizmet veriyorsunuz?" : "Sadece Kıbrıs'ta mı hizmet veriyorsunuz?",
      a: region === 'tr'
        ? "İstanbul merkezli ekibimizle tüm Türkiye ve Kıbrıs genelinde hizmet veriyoruz. Hibrit çalışma modelimizle her noktadaki işletmeye premium çözüm sunuyoruz."
        : "Hayır. Kıbrıs ve Türkiye genelinde hizmet veriyoruz. Lefkoşa ve Girne'deki fiziksel varlığımızın yanı sıra tüm dünyaya dijital çözüm üretebiliyoruz."
    },
    {
      q: "Mevcut sitemin yenilenmesi mümkün mü?",
      a: "Kesinlikle. Mevcut sitenizi analiz eder, zayıf noktaları belirler ve sıfırdan veya mevcut altyapı üzerinde yeniden inşa ederiz."
    },
    {
      q: "SEO sonuçlarını ne zaman görürüm?",
      a: "Teknik SEO iyileştirmeleri anında etkilidir. Organik sıralama sonuçları genellikle 2-4 ay içinde belirgin şekilde görülür. İlerlemeyi aylık raporlarla takip edersiniz."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-24 lg:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Sıkça Sorulan Sorular"
        />

        <StaggerContainer className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={staggerItem}>
              <div
                className="glass rounded-2xl p-6 cursor-pointer transition-colors duration-300 hover:bg-white/[0.05]"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-white font-sora">
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#C9A84C] shrink-0"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-gray-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

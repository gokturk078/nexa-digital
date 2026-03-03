'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
  region?: string;
}

export default function FAQSection({
  faqs: propFaqs,
  title = "Sıkça Sorulan Sorular",
  subtitle = "Süreçlerimiz ve stratejilerimiz hakkında merak edilen teknik detaylar.",
  region
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const defaultFaqs = [
    {
      question: "Nexa Digital hangi bölgelerde hizmet veriyor?",
      answer: region === 'cy'
        ? "Kıbrıs (KKTC) merkezli bir ajans olarak tüm adada ve global pazarlarda hizmet veriyoruz."
        : "İstanbul ve Kıbrıs ofislerimizle Türkiye, KKTC ve Avrupa pazarlarındaki markalara hizmet veriyoruz.",
    },
    {
      question: "Projeler ne kadar sürede tamamlanıyor?",
      answer: "Web tasarım projeleri 4-6 hafta, SEO projeleri ise 6-12 aylık bir stratejik plan dahilinde ilerler."
    },
    {
      question: "Fiyatlandırma politikanız nasıl?",
      answer: "Her işletmenin ihtiyacı farklıdır. Markanızın hedeflerine ve rekabet durumuna göre özel bir 'Sales Machine' teklifi hazırlıyoruz."
    }
  ];

  const faqs = propFaqs || defaultFaqs;

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-[#050505]">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 text-[#C9A84C] text-sm font-medium mb-6">
              <HelpCircle size={16} /> BİLGİ MERKEZİ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sora">
              {title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-lg font-bold text-white group-hover:text-[#C9A84C] transition-colors font-sora">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${activeIndex === index ? 'bg-[#C9A84C] border-[#C9A84C] text-black rotate-180' : 'text-gray-400'}`}>
                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 px-4">
      <div className="max-w-4xl mx-auto relative">
        {/* Arka plan glow efektleri */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#C9A84C] opacity-[0.04] blur-[100px]" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-[#00D4FF] opacity-[0.03] blur-[100px]" />

        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* İç glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Sınırlı Kontenjan — Mart Ayı Dolmak Üzere
          </motion.div>

          {/* Başlık */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Dijital Dönüşümünüz İçin<br />
            <span className="text-gradient-gold">Doğru Zaman Şimdi.</span>
          </h2>

          {/* Alt başlık */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Ayda yalnızca 4 vizyoner işletme kabul ediyoruz. Kontenjan dolmadan aşağıdaki formdan görüşme ayarlayın.
          </p>

          {/* CTA Butonu — EN BÜYÜK */}
          <motion.a
            href="#randevu"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#C9A84C] to-[#00D4FF] text-black font-bold text-xl rounded-2xl pulse-glow hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Şimdi Randevu Alın
            <span className="text-2xl">↑</span>
          </motion.a>
          
          <div className="mt-4">
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905480000000"}?text=${encodeURIComponent("Merhaba, ücretsiz strateji görüşmesi ayarlamak istiyorum.")}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#C9A84C] transition-colors">
              veya WhatsApp'tan hızlıca ulaşın →
            </a>
          </div>

          {/* Güvence */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 text-gray-500 text-sm">
            <span>✓ Ücretsiz</span>
            <span className="hidden md:inline">•</span>
            <span>✓ Bağlayıcı değil</span>
            <span className="hidden md:inline">•</span>
            <span>✓ 30 dakika</span>
          </div>
        </div>
      </div>
    </section>
  );
}

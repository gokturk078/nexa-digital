"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';

export default function FounderManifesto() {
  return (
    <section className="py-24 lg:py-32 px-4 bg-black relative overflow-hidden">
      {/* Arka plan efekti */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4 block">Neden Farklıyız?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
              "Biz Şablon Satmıyoruz, <br className="hidden md:block" />
              <span className="text-gradient-gold">Satış Psikolojisi</span> İnşa Ediyoruz."
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Dijital ajansların %90'ı size sadece "güzel görünen" bir web sitesi satar. Bir şablon alırlar, logonuzu koyarlar ve işin bittiğini düşünürler.
              </p>
              <p>
                <strong className="text-white">Biz buna inanmıyoruz.</strong>
              </p>
              <p>
                Nexa Digital olarak biz, bir web sitesinin bir "broşür" değil, 7/24 uyumayan, maaş istemeyen ve sürekli müşteri getiren bir <strong className="text-[#C9A84C]">satış makinesi</strong> olması gerektiğine inanıyoruz.
              </p>
              <p>
                Tasarımlarımızda kullandığımız her renk, her buton konumu ve her kelime; insan psikolojisine, karar verme mekanizmalarına ve dönüşüm optimizasyonuna (CRO) dayanır.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 relative">
              <div className="absolute -top-6 -left-6 text-6xl text-[#C9A84C] opacity-30 font-serif">"</div>
              <p className="text-xl md:text-2xl text-white font-medium italic leading-snug mb-8 relative z-10">
                Eğer rakipleriniz sadece bir web sitesine sahipken, siz bir dijital ekosisteme sahip olursanız; rekabet biter, dominasyon başlar.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#00D4FF] p-0.5">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">N</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold">Nexa Kurucu Ekibi</h4>
                  <p className="text-[#C9A84C] text-sm">Dijital Dönüşüm Mimarları</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

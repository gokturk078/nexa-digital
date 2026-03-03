'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const [greeting, setGreeting] = useState("Kıbrıs'ın #1 Premium Dijital Ajansı");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) setGreeting("Sektörünüzün Lideri Olmaya Hazır Mısınız?");
    else if (hour >= 12 && hour < 18) setGreeting("Dijitalde Rakiplerinize %300 Fark Atın.");
    else setGreeting("Sıradan Web Sitelerini Unutun. Satış Makinesi İnşa Ediyoruz.");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 md:px-6">
      {/* Arka plan atmosfer efektleri */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sol üst altın glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#C9A84C] opacity-[0.07] blur-[150px]" />
        {/* Sağ alt mavi glow */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#00D4FF] opacity-[0.05] blur-[150px]" />
        {/* Merkez çok hafif gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-white/[0.02] to-transparent" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Mouse Tracking Glow */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          background: 'radial-gradient(600px at var(--x) var(--y), rgba(201, 168, 76, 0.15), transparent 80%)',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          '--x': `${mousePosition.x}px`,
          '--y': `${mousePosition.y}px`,
        } as React.CSSProperties}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></span>
          <span className="text-[#C9A84C] text-sm font-medium">🏆 {greeting}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {["Sadece Bir Web Sitesi Değil,", "7/24 Müşteri Getiren", "Satış Makinesi Kuruyoruz"].map(
            (line, i) => (
              <motion.span
                key={i}
                className={`block ${i === 1 ? "text-gradient-gold drop-shadow-lg" : "text-white"}`}
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                  visible: {
                    opacity: 1, y: 0, filter: "blur(0px)",
                    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
                  },
                }}
              >
                {line}
              </motion.span>
            )
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          Kıbrıs ve Türkiye&apos;nin en iddialı işletmelerine saniyede açılan, dönüşüm odaklı dijital ekosistemler inşa ediyoruz. Sıradan web sitesi yapmıyoruz — dijital üstünlük silahı üretiyoruz.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"
        >
          {/* Micro Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute -top-6 -right-4 sm:-right-8 bg-black border border-[#C9A84C] text-[#C9A84C] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow-[0_0_15px_rgba(201,168,76,0.3)]"
          >
            🔥 Sınırlı Kontenjan
          </motion.div>

          <motion.a
            href="#randevu"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#00D4FF] text-black font-bold text-lg rounded-xl pulse-glow overflow-hidden transition-transform hover:scale-105 shadow-[0_0_30px_rgba(201,168,76,0.2)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Shine sweep effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Ücretsiz Strateji Görüşmesi Ayarla</span>
            <span className="relative z-10">→</span>
          </motion.a>

          <motion.a
            href="#portfoy"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:border-[#C9A84C]/50 hover:bg-white/[0.03] transition-all duration-300"
          >
            Projelerimizi İncele <span>↓</span>
          </motion.a>
        </motion.div>

        {/* Güven Şeridi */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-12 text-gray-400 text-sm font-medium"
        >
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </div>
            %100 Ücretsiz Görüşme
          </span>
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </div>
            Sıfır Bağlayıcılık
          </span>
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </div>
            Risk Reversal Garantisi
          </span>
        </motion.div>
      </div>
    </section>
  );
}

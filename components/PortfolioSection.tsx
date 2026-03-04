'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from './ui/SectionHeading';
import ScrollReveal from './ui/ScrollReveal';

// Alt bileşen: Her bir portfolyo projesi kartı
function ProjectCard({ project }: { project: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group glass rounded-2xl overflow-hidden hover:border-[#C9A84C]/30 transition-all duration-500 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Live Preview Area - Clickable Link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-900 to-black block"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 z-10"
            referrerPolicy="no-referrer"
          />
        ) : (
          <>
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-0">
              {/* Sadece loading spinner veya Nexa logosu */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin"></div>
                <span className="text-[10px] text-gray-400 font-mono tracking-widest hidden md:block">INITIALIZING PREVIEW</span>
              </div>
            </div>

            {/* JIT Rendering: Iframe SADECE hover olunca VE mobilde (md tabanlı) değilse yüklenir. */}
            <div className="hidden md:block">
              {isHovered && (
                <iframe
                  src={project.link}
                  className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none transition-transform duration-700 group-hover:scale-[0.26] border-0 z-10 animate-fade-in"
                  title={project.name}
                  loading="lazy"
                  tabIndex={-1}
                />
              )}
            </div>

            {/* Mobil Fallback Görseli (Eğer resim yoksa ama iframe de yüklenmeyecekse) */}
            <div className="absolute inset-0 z-10 md:hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center border border-white/5">
              <span className="text-white/40 font-bold tracking-widest text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500/50"></div>
                {project.name}
              </span>
            </div>
          </>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <span className="px-6 py-3 bg-gradient-to-r from-[#C9A84C] to-[#00D4FF] text-black font-semibold rounded-xl transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
            Canlı Demo →
          </span>
        </div>
      </a>

      {/* Alt bilgi alanı */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.2em] uppercase">
            {project.category}
          </span>
          {project.slug && (
            <span className="px-2 py-0.5 bg-[#C9A84C]/10 text-[#C9A84C] text-[10px] font-bold rounded-md border border-[#C9A84C]/20">
              DEEP DIVE
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C9A84C] transition-colors font-sora">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-center text-xs font-bold hover:bg-white/10 transition-all hover:text-gold-500"
          >
            Canlı Demo
          </a>
          {project.slug && (
            <a
              href={`/basari-hikayeleri/${project.slug}`}
              className="flex-1 py-3 px-4 bg-[#C9A84C] text-black rounded-xl text-center text-xs font-bold hover:bg-white transition-all shadow-lg shadow-[#C9A84C]/10"
            >
              Hikayeyi Oku
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const projects = [
    {
      slug: "noir-moda-nuans",
      category: "Restoran & Kafe",
      name: "Noir QR Menü & Landing",
      description: "Müşteri deneyimini dijitalleştiren %600 rezervasyon artışlı başarı hikayesi.",
      link: "https://noir-menu-alpha.vercel.app"
    },
    {
      category: "Sağlık",
      name: "Premium Diş Kliniği",
      description: "Randevu odaklı, güven inşa eden diş kliniği ekosistemi.",
      link: "https://dis-klinigi.vercel.app"
    },
    {
      category: "Güzellik",
      name: "Lüks Güzellik Merkezi",
      description: "Rezervasyon ve hizmet vitrinli güzellik merkezi deneyimi.",
      link: "https://guzellik-merkezi-delta.vercel.app"
    },
    {
      category: "Hukuk",
      name: "Yılmaz Hukuk",
      description: "Otorite ve güven yansıtan kurumsal hukuk platformu.",
      link: "https://avukat-ofisi.vercel.app",
      image: "/yilmaz-hukuk.png"
    },
    {
      slug: "nexa-luxe-estate",
      category: "Emlak",
      name: "Nexa Luxe Estate",
      description: "Kuzey Kıbrıs lüks emlak piyasasında teknik SEO ve otorite liderliği.",
      link: "https://nexa-luxe.vercel.app/tr"
    },
    {
      slug: "oto-yasin",
      category: "Otomotiv",
      name: "Oto Yasin",
      description: "Lokal SEO ile Antalya/Kaş bölgesinin #1 numaralı dijital başarı hikayesi.",
      link: "https://oto-yasin.com"
    },
    {
      category: "Hizmet",
      name: "Fethiye İK",
      description: "Kurumsal kimliği yansıtan, etkileşim odaklı danışmanlık platformu.",
      link: "https://fethiyeik.com"
    },
    {
      category: "İnşaat",
      name: "Repsam Construction",
      description: "Güçlü marka imajı ve tamamlanan projeleri sergileyen inşaat portfolyosu.",
      link: "https://repsam-construction.vercel.app"
    }
  ];

  return (
    <section id="portfoy" className="py-24 lg:py-32 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Canlı Projelerimiz"
          subtitle="Demo değil, gerçek. Tıklayın, deneyimleyin, farkı hissedin."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

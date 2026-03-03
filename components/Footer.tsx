'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-8 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold text-white font-sora tracking-widest">NEXA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mb-1"></span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Kıbrıs ve Türkiye&apos;nin premium dijital ajansı.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold font-sora mb-2">Hizmetler</h4>
            <Link href="/hizmetler/web-tasarim" className="text-gray-400 hover:text-white transition-colors">Web Tasarım & Sales Machine</Link>
            <Link href="/hizmetler/kurumsal-seo" className="text-gray-400 hover:text-white transition-colors">Kurumsal SEO (Silo)</Link>
            <Link href="/hizmetler/ai-chatbot" className="text-gray-400 hover:text-white transition-colors">AI Chatbot Asistanı</Link>
            <Link href="#hizmetler" className="text-gray-400 hover:text-white transition-colors">Tüm Hizmetler</Link>
          </div>

          {/* Column 2.5 - Areas Served (Local SEO) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold font-sora mb-2">Hizmet Bölgeleri</h4>
            <Link href="/kibris-web-tasarim" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">Kıbrıs Ofisi</Link>
            <Link href="/turkiye-dijital-ajans" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">Türkiye Ofisi</Link>
          </div>

          {/* Column 3 - Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold font-sora mb-2">Şirket</h4>
            <Link href="#hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link>
            <Link href="#portfoy" className="text-gray-400 hover:text-white transition-colors">Portföy</Link>
            <Link href="#fiyatlandirma" className="text-gray-400 hover:text-white transition-colors">Fiyatlandırma</Link>
            <Link href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
            <Link href="#iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</Link>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col gap-4" id="iletisim">
            <h4 className="text-white font-bold font-sora mb-2">İletişim</h4>
            <div className="flex items-start gap-3 text-gray-400">
              <MapPin size={20} className="shrink-0 text-[var(--color-gold)]" />
              <span>Lefkoşa, Kuzey Kıbrıs</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail size={20} className="shrink-0 text-[var(--color-gold)]" />
              <a href="mailto:info@wearenexa.co" className="hover:text-white transition-colors">info@wearenexa.co</a>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Phone size={20} className="shrink-0 text-[var(--color-gold)]" />
              <a href="tel:+905480000000" className="hover:text-white transition-colors">+90 548 XXX XX XX</a>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-[var(--color-gold)] hover:text-white transition-colors mt-2 font-medium">
              WhatsApp&apos;tan Ulaşın →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Nexa Digital. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-white transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

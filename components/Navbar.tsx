'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientButton } from './ui/GradientButton';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [currentMonth, setCurrentMonth] = useState("Bu");

  useEffect(() => {
    setCurrentMonth(new Date().toLocaleString('tr-TR', { month: 'long' }));
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hizmetler', href: '#hizmetler' },
    { name: 'Portföy', href: '#portfoy' },
    { name: 'Fiyatlandırma', href: '#fiyatlandirma' },
    { name: 'SSS', href: '#sss' },
    { name: 'Randevu', href: '#randevu' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
      <AnimatePresence>
        {isBannerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gradient-to-r from-[#C9A84C] to-[#FFD700] text-black overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2 text-center text-xs md:text-sm font-bold flex items-center justify-center gap-2 md:gap-4 relative">
              <span className="pr-6 md:pr-0">🔥 {currentMonth} ayı strateji görüşmeleri için son 5 kontenjan!</span>
              <a href="#randevu" className="hidden md:inline-flex items-center gap-1 underline underline-offset-2 hover:text-white transition-colors">
                Hemen yerinizi ayırtın <ArrowRight size={14} />
              </a>
              <button
                onClick={() => setIsBannerVisible(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:opacity-70 p-2"
                aria-label="Kapat"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className={cn(
          'w-full transition-all duration-300 relative z-50',
          isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 py-3 md:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' : 'bg-transparent py-5 md:py-6'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold text-white font-sora tracking-widest">NEXA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mb-1"></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA (Sticky Closer Effect) */}
          <div className="hidden md:flex items-center gap-4">
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-2 mr-2"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Son 3</span>
                </motion.div>
              )}
            </AnimatePresence>
            <a
              href="#randevu"
              className={cn(
                "relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 overflow-hidden group",
                isScrolled
                  ? "px-5 py-2.5 bg-gradient-to-r from-[#C9A84C] to-[#00D4FF] text-black text-sm shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:scale-105"
                  : "px-6 py-3 bg-white/5 text-white text-sm border border-white/10 hover:border-[#C9A84C]/50 hover:bg-white/10"
              )}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2">
                Projeyi Başlat <ArrowRight size={16} />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 hover:text-[#C9A84C] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <GradientButton
                href="#randevu"
                size="md"
                className="w-full mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Strateji Görüşmesi
              </GradientButton>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

import React from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';

// Lazy load below-the-fold components
const TrustBadges = dynamic(() => import('@/components/TrustBadges'));
const IndustriesSection = dynamic(() => import('@/components/IndustriesSection'));
const PainSection = dynamic(() => import('@/components/PainSection').then(mod => mod.PainSection));
const ServicesSection = dynamic(() => import('@/components/ServicesSection').then(mod => mod.ServicesSection));
const PortfolioSection = dynamic(() => import('@/components/PortfolioSection').then(mod => mod.PortfolioSection));
const ProcessSection = dynamic(() => import('@/components/ProcessSection'));
const FounderManifesto = dynamic(() => import('@/components/FounderManifesto'));
const PricingSection = dynamic(() => import('@/components/PricingSection').then(mod => mod.PricingSection));
const BookingSection = dynamic(() => import('@/components/BookingSection'));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection').then(mod => mod.TestimonialsSection));
const FAQSection = dynamic(() => import('@/components/FAQSection').then(mod => mod.FAQSection));
const CTASection = dynamic(() => import('@/components/CTASection').then(mod => mod.CTASection));
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer));

// CRO & Sales Machine Components
const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup'));
const LiveNotifications = dynamic(() => import('@/components/LiveNotifications'));
const FloatingWhatsApp = dynamic(() => import('@/components/FloatingWhatsApp'));

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#C9A84C] selection:text-black">
      <Navbar />
      <HeroSection />          {/* 1. İlk izlenim — kanca */}
      <StatsBar />             {/* 2. Sayılarla güven */}
      <TrustBadges />          {/* 3. Teknoloji rozetleri */}
      <IndustriesSection />    {/* 4. YENİ — "Bu benim sektörüm" */}
      <PainSection />          {/* 5. Acı noktaları — korku */}
      <ServicesSection />      {/* 6. Çözümler — umut */}
      <PortfolioSection />     {/* 7. Kanıt — canlı demolar */}
      <ProcessSection />       {/* 8. YENİ — "Nasıl çalışıyor?" güvence */}
      <FounderManifesto />     {/* 8.5 YENİ — Neden Farklıyız? (Otorite) */}
      <PricingSection />       {/* 9. Karar noktası */}
      <BookingSection />       {/* 10. YENİ — Randevu sistemi (CLOSER) */}
      <TestimonialsSection />  {/* 11. Sosyal kanıt */}
      <FAQSection />           {/* 12. İtiraz kırma */}
      <CTASection />           {/* 13. Son kapanış — şimdi veya asla */}
      <Footer />               {/* 14. Temel bilgiler */}

      {/* CRO & Sales Machine Components */}
      <ExitIntentPopup />
      <LiveNotifications />
      <FloatingWhatsApp />
    </main>
  );
}

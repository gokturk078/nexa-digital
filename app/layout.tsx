import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';

// V3 EDGE SEO: ISR - Force fully cached static regeneration every 24 hours
export const revalidate = 86400;

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wearenexa.co'),
  title: {
    default: "Nexa Digital | Kıbrıs & Türkiye'nin 1 Numaralı Dijital Ajansı",
    template: "%s | Nexa Digital"
  },
  description: "Kuzey Kıbrıs ve Türkiye'nin en seçkin işletmelerine saniyede açılan web siteleri, satış garantili AI chatbotlar ve 1. sıra garantili Kurumsal SEO sistemleri kuruyoruz.",
  keywords: [
    "kıbrıs web tasarım", "lefkoşa web tasarım ajansı", "kuzey kıbrıs dijital ajans",
    "girne web tasarım", "kıbrıs seo uzmanı", "lüks web sitesi tasarımı türkiye",
    "türkiye premium dijital ajans", "dönüşüm odaklı web sitesi",
    "kurumsal seo danışmanlığı", "kıbrıs dijital pazarlama", "ai chatbot entegrasyonu"
  ],
  authors: [{ name: "Nexa Digital", url: "https://wearenexa.co" }],
  creator: "Nexa Digital",
  publisher: "Nexa Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://wearenexa.co",
    siteName: "Nexa Digital - Elite Web Design & SEO",
    title: "Nexa Digital | Kıbrıs & Türkiye'nin Premium Dijital Ajansı",
    description: "Sıradan bir web sitesi değil, 7/24 müşteri getiren bir satış makinesi inşa ediyoruz. Hemen ücretsiz strateji görüşmesi ayarlayın.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexa Digital - Kıbrıs Web Tasarım & SEO Lideri"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Digital | Premium Dijital Ajans",
    description: "Kıbrıs ve Türkiye'nin elit işletmelerine pazar liderliğini getiren dijital ekosistemler.",
    images: ["/og-image.jpg"],
    creator: "@wearenexa",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nexa Digital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://wearenexa.co",
    languages: {
      'tr-TR': 'https://wearenexa.co',
      'tr-CY': 'https://wearenexa.co',
    },
  },
  verification: {
    google: "yoursiteverificationcode", // SEO Check: Add Google verification
    yandex: "yandex-verification",
    me: ["info@wearenexa.co"],
  },
};

export const viewport = {
  themeColor: "#000000",
};

import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 1. Otorite: Enterprise Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nexa Digital",
    "url": "https://wearenexa.co",
    "logo": "https://wearenexa.co/logo.png",
    "sameAs": [
      "https://instagram.com/wearenexa",
      "https://linkedin.com/company/wearenexa"
    ],
    "description": "Kuzey Kıbrıs ve Türkiye'nin premium dijital ajansı. Satış garantili web tasarım, SEO ve AI çözümleri."
  };

  // 2. Yerel SEO: Çoklu Konum (Cyprus & Turkey) LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://wearenexa.co/#business",
    "name": "Nexa Digital - Lüks Web Tasarım & Kurumsal SEO",
    "image": "https://wearenexa.co/og-image.jpg",
    "url": "https://wearenexa.co",
    "telephone": "+905480000000",
    "priceRange": "₺₺₺",
    "areaServed": [
      { "@type": "Country", "name": "Cyprus" },
      { "@type": "Country", "name": "Turkey" },
      { "@type": "City", "name": "Nicosia" },
      { "@type": "City", "name": "Istanbul" }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Lefkoşa",
        "addressRegion": "Kuzey Kıbrıs",
        "addressCountry": "CY"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // 3. Dönüşüm: Servis (Hizmet) Şeması (Fiyat ve Detay İçerir)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Premium Web Design & SEO Services",
    "provider": {
      "@type": "Organization",
      "name": "Nexa Digital"
    },
    "areaServed": ["CY", "TR"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dijital Ajans Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Showcase Presence (₺20k)"
          },
          "price": "20000",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Authority (₺28k)"
          },
          "price": "28000",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elite Hybrid Bundle (₺45k)"
          },
          "price": "45000",
          "priceCurrency": "TRY"
        }
      ]
    }
  };

  // 4. İtiraz Kırma: Dinamik SSS Şeması
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kıbrıs'ta profesyonel web tasarım fiyatları ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nexa Digital olarak sıradan değil, satış odaklı premium sistemler kuruyoruz. Tek sayfalık performans siteleri 20.000 TL'den başlarken, çok sayfalı AI chatbot ve SEO entegreli tam ekosistemler 28.000 TL bandındadır."
        }
      },
      {
        "@type": "Question",
        "name": "SEO çalışması Türkiye ve Kıbrıs'ta ne kadar sürede sonuç verir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gelişmiş 'Silo' mimarisi ve Semantic HTML5 altyapımız sayesinde, genelde ilk 3 ay içinde 1. sayfa sonuçlarını görmeye başlarsınız. Risk Reversal garantimizle sonuç alana kadar optimizasyona devam ediyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Şirketimize özel yapay zeka (AI) chatbot nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ziyaretçilerinizi 7/24 karşılayan, ürün/hizmetlerinizi satan ve otomatik randevu oluşturan, WhatsApp veya Telegram'a entegre zeki asistan sistemidir."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://wearenexa.co"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hizmetler",
        "item": "https://wearenexa.co/#hizmetler"
      }
    ]
  };

  return (
    <html lang="tr" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Schema.org Enterprise Markup Injection */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>
      <body className="font-sans antialiased text-white bg-black selection:bg-[#C9A84C] selection:text-black" suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

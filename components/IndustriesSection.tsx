"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import {
  Stethoscope,
  Sparkles,
  Scale,
  Home,
  UtensilsCrossed,
  HardHat,
  Car,
  Users,
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    name: "Sağlık & Diş Klinikleri",
    painPoints: [
      "Hastaların %70'i online randevu alamadığı kliniği terk ediyor",
      "Google Haritalar'da görünmezseniz, hastalarınız rakibinize gidiyor",
      "Güven vermeyen site = randevu almayan hasta",
    ],
    solutions: [
      "7/24 online randevu sistemi entegrasyonu",
      "Google My Business & yerel SEO dominasyonu",
      "Hasta güveni inşa eden profesyonel dijital vitrin",
    ],
    stat: "%400",
    statLabel: "Online randevu artışı",
    color: "#3B82F6", // mavi
  },
  {
    icon: Sparkles,
    name: "Güzellik & SPA Merkezleri",
    painPoints: [
      "Instagram'da paylaşım yapıyorsunuz ama web siteniz yok veya çağ dışı",
      "Telefon ile rezervasyon kaybı — müşteriler anında sonuç istiyor",
      "Hizmet ve fiyat şeffaflığı olmadan güven inşa edilmiyor",
    ],
    solutions: [
      "Anlık online rezervasyon sistemi",
      "Instagram & sosyal medya entegrasyonu",
      "Hizmet galerisi + fiyat şeffaflığı ile güven",
    ],
    stat: "%250",
    statLabel: "Rezervasyon artışı",
    color: "#EC4899", // pembe
  },
  {
    icon: Scale,
    name: "Hukuk & Avukatlık Büroları",
    painPoints: [
      "Potansiyel müvekkiller Google'da sizi bulamıyor",
      "Siteniz 'güvenilir avukat' imajı yansıtmıyor",
      "Rakip bürolar dijitalde sizi 3 adım önde",
    ],
    solutions: [
      "Otorite ve güven yansıtan kurumsal web platformu",
      "SEO ile 'şehir + avukat' aramalarında üst sıra",
      "Danışan kazanımına odaklı dönüşüm stratejisi",
    ],
    stat: "%180",
    statLabel: "Danışan kazanım artışı",
    color: "#8B5CF6", // mor
  },
  {
    icon: Home,
    name: "Emlak & Gayrimenkul",
    painPoints: [
      "İlan sitelerine bağımlısınız — kendi dijital vitriniz yok",
      "Lüks mülkleriniz ucuz görünen bir sitede sergileniyor",
      "Lead toplama ve takip sisteminiz yok — müşteriler kayboluyor",
    ],
    solutions: [
      "Lüks ilan vitrini + gelişmiş filtreleme sistemi",
      "Otomatik lead toplama ve CRM entegrasyonu",
      "Sanal tur ve interaktif harita deneyimi",
    ],
    stat: "%320",
    statLabel: "Nitelikli lead artışı",
    color: "#F59E0B", // altın
  },
  {
    icon: UtensilsCrossed,
    name: "Restoran & Cafe",
    painPoints: [
      "Online menünüz yok veya güncel değil — müşteri ne sipariş edeceğini bilmiyor",
      "Masa rezervasyonu hala telefonla — müşteriler beklemek istemiyor",
      "Google'da 'yakınımdaki restoran' aramasında çıkmıyorsunuz",
    ],
    solutions: [
      "Dijital menü + QR kod entegrasyonu",
      "Online masa rezervasyon sistemi",
      "Yerel SEO ile 'yakınımdaki' aramalarında 1 numara",
    ],
    stat: "%200",
    statLabel: "Online sipariş artışı",
    color: "#EF4444", // kırmızı
  },
  {
    icon: HardHat,
    name: "İnşaat & Müteahhitlik",
    painPoints: [
      "Tamamlanan projeleriniz dijitalde sergilenmiyor — güven kaybı",
      "Kurumsal imajınız web sitenize yansımıyor",
      "Yeni müşteri kazanımı sadece referansla sınırlı",
    ],
    solutions: [
      "Proje portfolyosu ile güçlü marka imajı",
      "Kurumsal web sitesi + dijital prestij",
      "SEO ve dijital pazarlama ile yeni müşteri kanalları",
    ],
    stat: "%150",
    statLabel: "Web üzerinden müşteri artışı",
    color: "#F97316", // turuncu
  },
  {
    icon: Car,
    name: "Otomotiv & Servis",
    painPoints: [
      "Müşterileriniz sizi Google'da bulamıyor — rakip servise gidiyor",
      "Online randevu ve servis takibi yok — müşteri deneyimi zayıf",
      "Güven veren bir dijital varlığınız yok",
    ],
    solutions: [
      "Online servis randevusu ve durum takibi",
      "Google Haritalar optimizasyonu",
      "Müşteri güveni inşa eden profesyonel platform",
    ],
    stat: "%190",
    statLabel: "Servis randevu artışı",
    color: "#6366F1", // indigo
  },
  {
    icon: Users,
    name: "Danışmanlık & Hizmet",
    painPoints: [
      "Profesyonel web varlığınız yok — potansiyel müşteriler sizi ciddiye almıyor",
      "Hizmetlerinizi ve uzmanlığınızı dijitalde anlatamıyorsunuz",
      "Rakipleriniz dijitalde sizi geçiyor",
    ],
    solutions: [
      "Uzmanlık ve otorite yansıtan kurumsal web platformu",
      "İçerik stratejisi ile organik müşteri kazanımı",
      "Dijital pazarlama ile marka bilinirliği",
    ],
    stat: "%220",
    statLabel: "Organik müşteri artışı",
    color: "#14B8A6", // teal
  },
];

interface IndustriesProps {
  region?: 'tr' | 'cy';
}

export default function IndustriesSection({ region }: IndustriesProps) {
  const trText = "Türkiye genelinde (İstanbul, Ankara, İzmir) 8 farklı sektörde 120+ projeyle kanıtlanmış sonuçlar.";
  const cyText = "Kuzey Kıbrıs'ın (Lefkoşa, Girne, Mağusa) öncü işletmeleri için 8 farklı sektörde 120+ projeyle kanıtlanmış sonuçlar.";
  const defaultText = "8 farklı sektörde 120+ projeyle kanıtlanmış sonuçlar. Sektörünüzün acı noktalarını biliyoruz — çünkü onları defalarca çözdük.";

  return (
    <section id="sektorler" className="py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 text-[#C9A84C] text-sm font-medium mb-6">
              Sektörel Uzmanlık
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Her Sektörün Dijital DNA'sını Çözdük
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {region === 'tr' ? trText : region === 'cy' ? cyText : defaultText}
            </p>
          </div>
        </ScrollReveal>

        {/* Sektör Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {industries.map((sector, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group h-full glass rounded-2xl p-8 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                {/* Arka plan accent glow (hover'da görünür) */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700"
                  style={{ backgroundColor: sector.color }}
                />

                {/* Üst kısım: İkon + İsim + Stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300"
                      style={{
                        backgroundColor: `${sector.color}15`,
                      }}
                    >
                      <sector.icon
                        className="w-7 h-7 transition-colors duration-300"
                        style={{ color: sector.color }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">{sector.name}</h3>
                  </div>
                  {/* Büyüme istatistiği */}
                  <div className="text-right flex-shrink-0">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: sector.color }}
                    >
                      {sector.stat}
                    </div>
                    <div className="text-gray-500 text-xs">{sector.statLabel}</div>
                  </div>
                </div>

                {/* İki sütunlu içerik: Acı Noktaları vs Çözümler */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Sol: Acı Noktaları */}
                  <div>
                    <div className="text-red-400/70 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Sektörel Sorunlar
                    </div>
                    <ul className="space-y-2.5">
                      {sector.painPoints.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                          <span className="text-red-400/60 mt-0.5 flex-shrink-0">✕</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sağ: Nexa Çözümleri */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: sector.color }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sector.color }} />
                      Nexa Çözümü
                    </div>
                    <ul className="space-y-2.5">
                      {sector.solutions.map((sol, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                          <span style={{ color: sector.color }} className="mt-0.5 flex-shrink-0">✓</span>
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Alt kısım: CTA mini link */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href="#portfoy"
                    className="text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 group/link"
                    style={{ color: sector.color }}
                  >
                    Bu sektördeki projelerimizi inceleyin
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Alt CTA */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-4">
              Sektörünüzü listede göremdiniz mi? Endişelenmeyin.
            </p>
            <a
              href="#randevu"
              className="inline-flex items-center gap-2 text-[#C9A84C] font-medium hover:text-[#FFD700] transition-colors"
            >
              Sektörünüze özel ücretsiz analiz için görüşme ayarlayın
              <span>→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

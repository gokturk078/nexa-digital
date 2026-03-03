"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  Building2,
  User,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Shield,
  Zap,
  Target,
  MessageCircle,
} from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

// ===== WHATSAPP NUMARASI =====
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905480000000"; // Gerçek numara ile değiştir

// ===== SEKTÖR LİSTESİ =====
const sectors = [
  "Sağlık & Diş Kliniği",
  "Güzellik & SPA Merkezi",
  "Hukuk & Avukatlık Bürosu",
  "Emlak & Gayrimenkul",
  "Restoran & Cafe",
  "İnşaat & Müteahhitlik",
  "Otomotiv & Servis",
  "Danışmanlık & Hizmet",
  "Diğer",
];

// ===== UYGUN SAAT DİLİMLERİ =====
const timeSlots = [
  "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30",
  "22:00", "22:30", "23:00", "23:30",
];

// ===== TELEGRAM'A MESAJ GÖNDERME FONKSİYONU =====
async function sendTelegramNotification(data: {
  name: string;
  phone: string;
  email: string;
  business: string;
  sector: string;
  date: string;
  time: string;
  source?: string;
}) {
  try {
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (error) {
    console.error("Bildirim hatası:", error);
    return false;
  }
}

// ===== TAKVİM YARDIMCI FONKSİYONLARI =====
function getNext14Days(): { date: Date; label: string; dayName: string }[] {
  const days = [];
  const today = new Date();
  const turkishDays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  const turkishMonths = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      date,
      label: `${date.getDate()} ${turkishMonths[date.getMonth()]}`,
      dayName: turkishDays[date.getDay()],
    });
  }
  return days;
}

// ===== ANA COMPONENT =====
export default function BookingSection({ source = "Genel" }: { source?: string }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    sector: "",
    date: "",
    dateLabel: "",
    time: "",
  });

  const availableDays = useMemo(() => getNext14Days(), []);

  const updateForm = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Form validasyonu
  const isStep1Valid =
    formData.name.trim().length >= 2 &&
    formData.phone.trim().length >= 10 &&
    formData.business.trim().length >= 2 &&
    formData.sector !== "";

  const isStep2Valid = formData.date !== "" && formData.time !== "";

  // Form gönderme
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await sendTelegramNotification({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        business: formData.business,
        sector: formData.sector,
        date: formData.dateLabel,
        time: formData.time,
        source: source,
      });
      setIsSuccess(true);
      setStep(3);
    } catch (err) {
      // Hata olsa bile başarılı göster (müşteri deneyimi için)
      // Hata loglanır ama kullanıcıya gösterilmez
      setIsSuccess(true);
      setStep(3);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="randevu" className="py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 text-[#C9A84C] text-sm font-medium mb-6 shadow-[0_0_15px_rgba(201,168,76,0.15)]">
              🚀 15 Dakikalık Ücretsiz Keşif Görüşmesi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              İşletmenizi Dijital Bir <span className="text-gradient-gold">Satış Makinesine</span> Dönüştürün.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Sıradan "web uzmanlarıyla" vakit kaybetmeyin. Size tam teşekküllü, gelir getiren dijital bir altyapı inşa etmemiz için ilk adımı atın. (Kontenjan sınırımız bulunmaktadır).
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ===== SOL TARAF: NEDEN GÖRÜŞME AYARLAMALISINIZ (2/5) ===== */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Güven kartları */}
              {[
                {
                  icon: Target,
                  title: "Sektörel Dijital Analiz",
                  desc: "Sektörünüzdeki rakiplerinizi ve dijital konumunuzu analiz ediyoruz. Nerede durduğunuzu ve nereye gidebileceğinizi net olarak görürsünüz.",
                },
                {
                  icon: Zap,
                  title: "Özel Strateji Yol Haritası",
                  desc: "İşletmenize özel, uygulanabilir dijital büyüme stratejisi sunuyoruz. Görüşme sonrası elinizde somut bir plan olacak.",
                },
                {
                  icon: Shield,
                  title: "Sıfır Risk, Sıfır Bağlayıcılık",
                  desc: "Görüşme tamamen ücretsiz ve bağlayıcı değil. Beğenmezseniz, teşekkür eder geçersiniz. Baskı yapmıyoruz.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* WhatsApp alternatif */}
              <div className="mt-8 p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                <p className="text-gray-400 text-sm mb-3">
                  Form doldurmak istemiyor musunuz?
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Merhaba, Nexa Digital ile ücretsiz strateji görüşmesi ayarlamak istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20BD5A] transition-colors text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp'tan Hızlıca Yazın
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* ===== SAĞ TARAF: FORM (3/5) ===== */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Üst ince glow çizgisi */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

              {/* Görsel Kapasite Barı (Visceral FOMO) */}
              <div className="mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-[40px] -z-10" />
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Bu Ayki Kapasite Durumu
                  </span>
                  <span className="text-xs font-bold text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-0.5 rounded-md">Son 3 Proje</span>
                </div>
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "91%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#C9A84C] to-red-600 rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30 animate-pulse" />
                  </motion.div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 text-right uppercase tracking-wider font-semibold">%91 Doluluk Oranı — Kapasite Dolmak Üzere</p>
              </div>

              {/* Step göstergesi */}
              <div className="flex items-center justify-center gap-3 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step >= s
                        ? "bg-gradient-to-r from-[#C9A84C] to-[#FFD700] text-black"
                        : "bg-white/5 text-gray-500 border border-white/10"
                        }`}
                    >
                      {step > s ? "✓" : s}
                    </div>
                    {s < 3 && (
                      <div className={`w-12 h-0.5 rounded-full transition-colors duration-300 ${step > s ? "bg-[#C9A84C]" : "bg-white/10"}`} />
                    )}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* ===== ADIM 1: KİŞİSEL BİLGİLER ===== */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">İşletmenizi Büyütelim.</h3>
                    <p className="text-gray-400 text-sm mb-6">Size kusursuz bir strateji (Blueprint) çizebilmemiz için vizyonunuzu bilmeliyiz.</p>

                    <div className="space-y-4">
                      {/* İsim Soyisim */}
                      <div>
                        <label className="text-gray-300 text-sm font-medium mb-1.5 block">Adınız Soyadınız *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => updateForm("name", e.target.value)}
                            placeholder="Adınız Soyadınız"
                            className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 outline-none transition-all text-base"
                          />
                        </div>
                      </div>

                      {/* Telefon */}
                      <div>
                        <label className="text-gray-300 text-sm font-medium mb-1.5 block">Telefon Numaranız *</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateForm("phone", e.target.value)}
                            placeholder="+90 5XX XXX XX XX"
                            className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 outline-none transition-all text-base"
                          />
                        </div>
                      </div>

                      {/* E-posta */}
                      <div>
                        <label className="text-gray-300 text-sm font-medium mb-1.5 block">E-posta (opsiyonel)</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateForm("email", e.target.value)}
                            placeholder="isim@sirket.com"
                            className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 outline-none transition-all text-base"
                          />
                        </div>
                      </div>

                      {/* İşletme Adı + Sektör (yan yana) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-gray-300 text-sm font-medium mb-1.5 block">İşletme Adı *</label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                              type="text"
                              value={formData.business}
                              onChange={(e) => updateForm("business", e.target.value)}
                              placeholder="İşletme adınız"
                              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 outline-none transition-all text-base"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm font-medium mb-1.5 block">Sektör *</label>
                          <select
                            value={formData.sector}
                            onChange={(e) => updateForm("sector", e.target.value)}
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 outline-none transition-all cursor-pointer text-base"
                          >
                            <option value="" className="bg-black">Sektör seçin</option>
                            {sectors.map((s) => (
                              <option key={s} value={s} className="bg-black">{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* İleri butonu */}
                    <button
                      onClick={() => setStep(2)}
                      disabled={!isStep1Valid}
                      className={`w-full mt-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${isStep1Valid
                        ? "bg-gradient-to-r from-[#C9A84C] to-[#00D4FF] text-black hover:scale-[1.02] cursor-pointer"
                        : "bg-white/5 text-gray-600 cursor-not-allowed"
                        }`}
                    >
                      Devam Et — Tarih Seçin
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {/* ===== ADIM 2: TARİH VE SAAT SEÇİMİ ===== */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-1 text-gray-400 text-sm hover:text-white transition-colors mb-4"
                    >
                      <ChevronLeft className="w-4 h-4" /> Geri
                    </button>

                    <h3 className="text-xl font-bold text-white mb-1">Görüşme Tarihi & Saati</h3>
                    <p className="text-gray-400 text-sm mb-6">Size uygun bir gün ve saat seçin.</p>

                    {/* Tarih seçimi (Yatay Scroll - Mobile First) */}
                    <div className="mb-6">
                      <label className="text-gray-300 text-sm font-medium mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C9A84C]" />
                        Tarih Seçin
                      </label>
                      <div className="flex overflow-x-auto pb-4 gap-3 snap-x snap-mandatory custom-scrollbar-horizontal -mx-4 px-4 md:mx-0 md:px-0">
                        {availableDays.map((day, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              updateForm("date", day.date.toISOString().split("T")[0]);
                              updateForm("dateLabel", `${day.label} ${day.dayName}`);
                            }}
                            className={`flex-shrink-0 w-[100px] p-3 rounded-xl border text-center transition-all duration-200 snap-center ${formData.date === day.date.toISOString().split("T")[0]
                              ? "border-[#C9A84C] bg-[#C9A84C]/10 text-white"
                              : "border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:bg-white/[0.04]"
                              }`}
                          >
                            <div className="text-xs opacity-60">{day.dayName}</div>
                            <div className="text-sm font-semibold mt-0.5 whitespace-nowrap">{day.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Saat seçimi (Fat-Finger Optimized) */}
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#C9A84C]" />
                        Saat Seçin
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                        {timeSlots.map((time) => {
                          let badge = null;
                          if (time === "18:00" || time === "20:00") badge = <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md animate-pulse z-10">Popüler</span>;
                          if (time === "21:30" || time === "16:30") badge = <span className="absolute -top-2 -right-2 bg-[#C9A84C] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-md z-10">Son 1</span>;

                          return (
                            <button
                              key={time}
                              onClick={() => updateForm("time", time)}
                              className={`relative min-h-[44px] py-2.5 px-2 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center ${formData.time === time
                                ? "border-[#C9A84C] bg-[#C9A84C]/10 text-white"
                                : "border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20"
                                }`}
                            >
                              {badge}
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Onayla butonu */}
                    <button
                      onClick={handleSubmit}
                      disabled={!isStep2Valid || isSubmitting}
                      className={`w-full mt-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${isStep2Valid && !isSubmitting
                        ? "bg-gradient-to-r from-[#C9A84C] to-[#00D4FF] text-black hover:scale-[1.02] cursor-pointer pulse-glow"
                        : "bg-white/5 text-gray-600 cursor-not-allowed"
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          Görüşmeyi Onayla
                          <CheckCircle2 className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    {/* Mikro Güven Metinleri */}
                    <div className="mt-5 flex flex-col items-center gap-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Shield size={14} className="text-[#C9A84C]" />
                        <span>Bilgileriniz 256-bit SSL ile korunmaktadır. Asla spam yapmayız.</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Shield size={14} className="text-[#C9A84C]" />
                        <span>Kredi kartı gerekmez. Görüşme tamamen ücretsizdir.</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ===== ADIM 3: BAŞARI / ONAY EKRANI ===== */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#C9A84C] to-[#00D4FF] flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-black" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Görüşmeniz Planlandı! 🎉
                    </h3>
                    <p className="text-gray-400 mb-2">
                      <span className="text-white font-semibold">{formData.name}</span>, teşekkürler!
                    </p>
                    <p className="text-gray-400 mb-6">
                      <span className="text-[#C9A84C] font-semibold">{formData.dateLabel}</span> tarihinde saat{" "}
                      <span className="text-[#C9A84C] font-semibold">{formData.time}</span>'de{" "}
                      <span className="text-white font-semibold">{formData.phone}</span> numaranızdan arayacağız.
                    </p>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-6">
                      <p className="text-gray-400 text-sm">
                        ⏰ Görüşmeye hazırlanmak için: İşletmenizin mevcut web sitesini (varsa),
                        sosyal medya hesaplarınızı ve rakip firmalarınızı not edin. Bu bilgiler
                        görüşmeyi çok daha verimli kılacaktır.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`🚀 Merhaba Nexa Digital! ${formData.dateLabel} ${formData.time} saatindeki strateji görüşmemizi teyit ediyorum. Hedefimiz büyük, görüşmek üzere! \n\nAdım: ${formData.name}\nİşletme: ${formData.business}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#25D366] to-[#20BD5A] text-white font-bold rounded-xl hover:scale-105 transition-all text-sm shadow-[0_0_20px_rgba(37,211,102,0.3)] pulse-glow"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Görüşmeyi WhatsApp'tan Onayla!
                      </a>
                      <button
                        onClick={() => {
                          setStep(1);
                          setIsSuccess(false);
                          setFormData({
                            name: "", phone: "", email: "", business: "", sector: "", date: "", dateLabel: "", time: "",
                          });
                        }}
                        className="text-gray-400 text-sm hover:text-white transition-colors"
                      >
                        Başka bir görüşme ayarla
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

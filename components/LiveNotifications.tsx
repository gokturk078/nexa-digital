"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Daha geniş ve elit bir bildirim havuzu (God Mode)
const notificationPool = [
  { text: "Dr. Ahmet (Diş Kliniği) 14,000₺'lik SEO yatırımını başlattı.", type: "seo" },
  { text: "Elite Emlak Ajansı (VIP) VIP randevu oluşturdu.", type: "vip" },
  { text: "Kaya Hukuk Bürosu Premium Chatbot paketine geçti.", type: "ai" },
  { text: "Luna Güzellik SPA strateji görüşmesi ayarladı.", type: "strategy" },
  { text: "Can Mimarlık (Global) Corporate Web paketini aldı.", type: "web" },
  { text: "AutoFix Premium (Otomotiv) 4. ay SEO yenilemesini yaptı.", type: "seo" },
  { text: "Zeynep Hanım (E-ticaret) 28,000₺'lik dönüşüm paketine geçti.", type: "web" }
];

export default function LiveNotifications() {
  const [currentNotification, setCurrentNotification] = useState({ text: "", type: "" });
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;
    let lastIndex = -1;

    const showNextNotification = () => {
      if (!isMounted) return;

      // Aynı bildirimin üst üste çıkmasını engellemek için rastgele seçim
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * notificationPool.length);
      } while (randomIndex === lastIndex);

      lastIndex = randomIndex;
      setCurrentNotification(notificationPool[randomIndex]);
      setIsVisible(true);

      // 5 saniye sonra gizle
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => {
        if (isMounted) setIsVisible(false);
      }, 5000);

      // Bir sonraki bildirimi 15 ile 45 saniye arasında rastgele bir sürede göster (Daha inandırıcı)
      const nextDelay = Math.floor(Math.random() * (45000 - 15000 + 1) + 15000);
      timeoutRef.current = setTimeout(showNextNotification, nextDelay);
    };

    // İlk bildirimi sayfa yüklendikten 6 ile 12 saniye arasında rastgele bir sürede göster
    const initialDelay = Math.floor(Math.random() * (12000 - 6000 + 1) + 6000);
    timeoutRef.current = setTimeout(showNextNotification, initialDelay);

    return () => {
      isMounted = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 pointer-events-none hidden md:block">
      <AnimatePresence>
        {isVisible && currentNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass bg-black/80 backdrop-blur-md border border-[#C9A84C]/30 rounded-2xl p-4 shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <motion.div
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#00D4FF] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(201,168,76,0.5)]"
            >
              <CheckCircle2 size={20} className="text-black" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#C9A84C] uppercase tracking-widest font-bold mb-0.5">SİSTEM DOĞRULAMASI</span>
              <p className="text-sm text-gray-200 leading-tight font-medium">
                {currentNotification.text}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

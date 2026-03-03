"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905480000000";

export default function FloatingWhatsApp() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTooltipVisible(true);
    }, 5000); // 5 saniye sonra açılacak
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-[60] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, originX: 1, originY: 1 }}
            className="bg-white text-black p-3 md:p-4 rounded-2xl shadow-2xl max-w-[200px] md:max-w-[250px] relative origin-bottom-right"
          >
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-black p-1"
            >
              <X size={14} />
            </button>
            <p className="text-xs md:text-sm font-medium pr-4">
              Merhaba, projeniz için nasıl yardımcı olabilirim? Çevrimiçiyiz 🟢
            </p>
            {/* Küçük üçgen ok */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Merhaba, web sitenizden ulaşıyorum. Bilgi almak istiyorum.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform relative"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-50" />
        <MessageCircle size={28} className="relative z-10 md:w-8 md:h-8" />
      </a>
    </div>
  );
}

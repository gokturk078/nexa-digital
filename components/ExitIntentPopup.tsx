"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Sadece yukarı doğru çıkışlarda tetikle
      if (e.clientY <= 0) {
        const hasSeen = sessionStorage.getItem("exit_intent_seen");
        if (!hasSeen) {
          setIsVisible(true);
          sessionStorage.setItem("exit_intent_seen", "true");
        }
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass rounded-3xl p-8 md:p-12 max-w-lg w-full relative text-center border-2 border-[#C9A84C]/30 glow-gold-strong"
          >
            <button onClick={() => setIsVisible(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={24} />
            </button>
            <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl animate-pulse">🛑</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Rakipleriniz Sizi Geçmek Üzere.</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Sayfadan çıkabilirsiniz, ancak <span className="text-red-500 font-bold border-b border-red-500/50 pb-0.5">diğer ajansların size söylemediği</span> dijital sırları kaçırıyorsunuz. 15 dakikalık ücretsiz görüşmeyle pazar liderliğinin haritasını çıkaralım.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#randevu"
                onClick={() => setIsVisible(false)}
                className="w-full py-4.5 bg-gradient-to-r from-red-600 to-[#C9A84C] text-white font-bold rounded-xl text-lg shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:scale-[1.03] transition-transform"
              >
                Pazarı Domine Etmeye Başla
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-red-400 transition-colors py-2 text-sm mt-2 underline"
              >
                Hayır, rakiplerimin gerisinde kalmak istiyorum
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

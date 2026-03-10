"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center bg-white/5 rounded-full p-1 border border-white/10">
      <motion.div
        className="absolute w-[calc(50%-4px)] h-[calc(100%-8px)] bg-primary rounded-full shadow-[0_0_10px_rgba(0,245,255,0.3)]"
        animate={{
          x: language === 'zh' ? 0 : "100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <button
        onClick={() => setLanguage('zh')}
        className={cn(
          "relative z-10 px-3 py-1 text-xs font-bold transition-colors duration-200",
          language === 'zh' ? "text-black" : "text-white/60 hover:text-white"
        )}
      >
        中
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          "relative z-10 px-3 py-1 text-xs font-bold transition-colors duration-200",
          language === 'en' ? "text-black" : "text-white/60 hover:text-white"
        )}
      >
        EN
      </button>
    </div>
  );
}

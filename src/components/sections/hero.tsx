"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; delay: string }>>([]);
  const { t } = useLanguage();

  useEffect(() => {
    // Generate random particles only on client-side to avoid hydration mismatch
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[#050510]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-orbitron tracking-tight leading-tight">
              <span className="text-white">One Claw,</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FF6B1A] to-secondary neon-text animate-pulse">
                All AI
              </span>
            </h1>

            <p className="mx-auto lg:mx-0 max-w-[600px] text-lg md:text-xl text-white/70 font-inter leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="/api/download?platform=auto">
                <Button size="lg" className="w-full sm:w-auto gap-2 group bg-primary hover:bg-primary/80 text-white font-bold neon-glow transition-all duration-300">
                  <Download className="h-5 w-5" />
                  {t("hero.cta_primary")}
                </Button>
              </Link>
              <Link href="#pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 border-primary/50 text-primary hover:bg-primary/10">
                  <Layers className="h-5 w-5" />
                  {t("hero.cta_secondary")}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center items-center h-[400px]"
          >
            <div className="hexagon-3d-container relative">
              <div className="hexagon-3d">
                <div className="hex-face flex items-center justify-center border-2 border-primary/50 bg-black/20 backdrop-blur-sm">
                  <div className="text-primary font-orbitron text-4xl font-bold">AI</div>
                </div>
                <div className="hex-face flex items-center justify-center border-2 border-secondary/50 bg-black/20 backdrop-blur-sm">
                   <div className="text-secondary font-orbitron text-2xl">GPT</div>
                </div>
                <div className="hex-face flex items-center justify-center border-2 border-primary/50 bg-black/20 backdrop-blur-sm">
                   <div className="text-primary font-orbitron text-2xl">Claude</div>
                </div>
                <div className="hex-face flex items-center justify-center border-2 border-secondary/50 bg-black/20 backdrop-blur-sm">
                   <div className="text-secondary font-orbitron text-2xl">Gemini</div>
                </div>
                <div className="hex-face flex items-center justify-center border-2 border-primary/50 bg-black/20 backdrop-blur-sm">
                   <div className="text-primary font-orbitron text-2xl">Llama</div>
                </div>
                <div className="hex-face flex items-center justify-center border-2 border-secondary/50 bg-black/20 backdrop-blur-sm">
                   <div className="text-secondary font-orbitron text-2xl">Mistral</div>
                </div>
              </div>
              
              {/* Central Glowing Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 rounded-full blur-[40px] animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { Lock, Globe, Cpu, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      title: t("features.list.security.title"),
      description: t("features.list.security.desc"),
      icon: Lock,
    },
    {
      title: t("features.list.scalability.title"),
      description: t("features.list.scalability.desc"),
      icon: Globe,
    },
    {
      title: t("features.list.automation.title"),
      description: t("features.list.automation.desc"),
      icon: Cpu,
    },
    {
      title: t("features.list.crosschain.title"),
      description: t("features.list.crosschain.desc"),
      icon: Layers,
    },
  ];

  const stats = [
    { value: t("features.stats.models.value"), label: t("features.stats.models.label") },
    { value: t("features.stats.uptime.value"), label: t("features.stats.uptime.label") },
    { value: t("features.stats.latency.value"), label: t("features.stats.latency.label") },
    { value: t("features.stats.developers.value"), label: t("features.stats.developers.label") },
  ];

  return (
    <section id="features" className="py-24 bg-white/5 relative">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white">
              {t("features.title")} <span className="text-primary neon-text">{t("features.title_highlight")}</span>?
            </h2>
            <p className="text-white/60 text-lg">
              {t("features.desc")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold font-orbitron text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number for counter animation if possible
  const numberMatch = value.match(/(\d+(\.\d+)?)/);
  const numberValue = numberMatch ? parseFloat(numberMatch[0]) : 0;
  const prefix = value.substring(0, value.indexOf(numberMatch?.[0] || ""));
  const suffix = value.substring((value.indexOf(numberMatch?.[0] || "") + (numberMatch?.[0].length || 0)));
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 1500; // ms
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        setDisplayValue(numberValue * easedProgress);

        if (currentStep >= steps) {
          clearInterval(timer);
          setDisplayValue(numberValue);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numberValue]);

  // If no number found, just show the string directly without animation logic
  const content = numberMatch 
    ? <>{prefix}{displayValue.toFixed(numberValue % 1 === 0 ? 0 : 1)}{suffix}</>
    : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, boxShadow: "0 0 20px rgba(0, 245, 255, 0.2)" }}
      className="aspect-square flex flex-col items-center justify-center p-4 rounded-2xl bg-[#050510] border border-primary/30 relative overflow-hidden group transition-all duration-300"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 text-center">
        <div className="text-3xl md:text-4xl font-bold font-orbitron text-primary mb-2">
          {content}
        </div>
        <div className="text-sm font-medium text-white/40 uppercase tracking-wider">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

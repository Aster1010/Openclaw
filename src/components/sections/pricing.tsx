"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Types
type PricingFeature = {
  key: string;
  included: boolean;
};

type PricingPlan = {
  id: string;
  nameKey: string;
  price: {
    monthly: number;
    yearly: number;
  };
  monthlyAvg: number;
  saveAmount: number;
  descriptionKey: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaKey: string;
};

type ModelPackage = {
  id: string;
  price: number;
};

// Data
const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    nameKey: "pricing.plans.free.name",
    price: { monthly: 0, yearly: 0 },
    monthlyAvg: 0,
    saveAmount: 0,
    descriptionKey: "pricing.plans.free.description",
    ctaKey: "pricing.plans.free.cta",
    features: [
      { key: "pricing.plans.free.features.gpt35", included: true },
      { key: "pricing.plans.free.features.requests", included: true },
      { key: "pricing.plans.free.features.community", included: true },
      { key: "pricing.plans.free.features.api", included: false },
      { key: "pricing.plans.free.features.custom", included: false },
    ],
  },
  {
    id: "solo",
    nameKey: "pricing.plans.solo.name",
    price: { monthly: 19, yearly: 182 }, // $19 * 12 * 0.8 ≈ 182.4
    monthlyAvg: 15, // 182 / 12 ≈ 15.16
    saveAmount: 46, // (19 * 12) - 182 = 46
    descriptionKey: "pricing.plans.solo.description",
    ctaKey: "pricing.plans.solo.cta",
    features: [
      { key: "pricing.plans.solo.features.gpt4o", included: true },
      { key: "pricing.plans.solo.features.requests", included: true },
      { key: "pricing.plans.solo.features.email", included: true },
      { key: "pricing.plans.solo.features.api", included: true },
      { key: "pricing.plans.solo.features.custom", included: false },
    ],
  },
  {
    id: "pro",
    nameKey: "pricing.plans.pro.name",
    price: { monthly: 49, yearly: 470 }, // 49 * 12 * 0.8 ≈ 470.4
    monthlyAvg: 39, // 470 / 12 ≈ 39.16
    saveAmount: 118, // (49 * 12) - 470 = 118
    descriptionKey: "pricing.plans.pro.description",
    popular: true,
    ctaKey: "pricing.plans.pro.cta",
    features: [
      { key: "pricing.plans.pro.features.all_models", included: true },
      { key: "pricing.plans.pro.features.requests", included: true },
      { key: "pricing.plans.pro.features.priority", included: true },
      { key: "pricing.plans.pro.features.api", included: true },
      { key: "pricing.plans.pro.features.custom", included: true },
    ],
  },
  {
    id: "ultra",
    nameKey: "pricing.plans.ultra.name",
    price: { monthly: 99, yearly: 950 }, // 99 * 12 * 0.8 ≈ 950.4
    monthlyAvg: 79, // 950 / 12 ≈ 79.16
    saveAmount: 238, // (99 * 12) - 950 = 238
    descriptionKey: "pricing.plans.ultra.description",
    ctaKey: "pricing.plans.ultra.cta",
    features: [
      { key: "pricing.plans.ultra.features.all_models", included: true },
      { key: "pricing.plans.ultra.features.requests", included: true },
      { key: "pricing.plans.ultra.features.support", included: true },
      { key: "pricing.plans.ultra.features.api", included: true },
      { key: "pricing.plans.ultra.features.custom", included: true },
    ],
  },
  {
    id: "enterprise",
    nameKey: "pricing.plans.enterprise.name",
    price: { monthly: 299, yearly: 2870 }, // 299 * 12 * 0.8 ≈ 2870.4
    monthlyAvg: 239, // 2870 / 12 ≈ 239.16
    saveAmount: 718, // (299 * 12) - 2870 = 718
    descriptionKey: "pricing.plans.enterprise.description",
    ctaKey: "pricing.plans.enterprise.cta",
    features: [
      { key: "pricing.plans.enterprise.features.dedicated", included: true },
      { key: "pricing.plans.enterprise.features.requests", included: true },
      { key: "pricing.plans.enterprise.features.manager", included: true },
      { key: "pricing.plans.enterprise.features.sla", included: true },
      { key: "pricing.plans.enterprise.features.custom", included: true },
    ],
  },
];

const MODEL_PACKAGES: ModelPackage[] = [
  { id: "openai", price: 15 },
  { id: "claude", price: 15 },
  { id: "gemini", price: 12 },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const { t, language } = useLanguage();

  const formatPrice = (price: number) => {
    if (language === 'zh') {
      return `¥${(price * 7).toLocaleString()}`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white">
            {t("pricing.title")} <span className="text-primary neon-text">{t("pricing.title_highlight")}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  billingCycle === "monthly"
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-white/60 hover:text-white"
                )}
              >
                {t("pricing.monthly")}
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                  billingCycle === "yearly"
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-white/60 hover:text-white"
                )}
              >
                {t("pricing.yearly")}
                <span className="absolute -top-3 -right-3 bg-secondary text-white text-[10px] px-2 py-0.5 rounded-full animate-bounce">
                  {t("pricing.yearly_discount")}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -10 }}
              className={cn(
                "relative p-6 rounded-2xl border backdrop-blur-sm flex flex-col transition-all duration-300",
                plan.popular
                  ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(255,61,46,0.1)]"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/20 whitespace-nowrap">
                  {t("pricing.most_popular")}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-orbitron text-xl font-bold text-white mb-2">{t(plan.nameKey)}</h3>
                <p className="text-sm text-white/50 mb-4 h-10">{t(plan.descriptionKey)}</p>
                
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {formatPrice(billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly)}
                    </span>
                    <span className="text-sm text-white/50">
                      {billingCycle === "monthly" ? t("pricing.per_month") : t("pricing.per_year")}
                    </span>
                  </div>
                  
                  {billingCycle === "yearly" && plan.id !== "free" && (
                    <div className="flex flex-col items-start gap-1">
                      <div className="text-xs text-white/40">
                        {t("pricing.avg_month")} {formatPrice(plan.monthlyAvg)}
                      </div>
                      <div className="inline-block bg-secondary/20 text-secondary text-[10px] px-1.5 py-0.5 rounded border border-secondary/30">
                         {t("pricing.save")} {formatPrice(plan.saveAmount)} 🔥
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-grow mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-4 w-4 text-white/20 shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? "text-white/80" : "text-white/30"}>
                      {t(feature.key)}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={cn(
                  "w-full font-bold",
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary/90 neon-glow"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {t(plan.ctaKey)}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Model Packages */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-2xl font-orbitron font-bold text-white mb-8">
            {t("pricing.standalone.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MODEL_PACKAGES.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center text-center hover:border-secondary/50 hover:bg-secondary/5 transition-colors group"
              >
                <h4 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {t(`pricing.standalone.packages.${pkg.id}.name`)}
                </h4>
                <div className="text-2xl font-bold text-primary mb-2">
                  {formatPrice(pkg.price)}<span className="text-sm text-white/50 font-normal">{t("pricing.per_month")}</span>
                </div>
                <p className="text-sm text-white/60 mb-4">{t(`pricing.standalone.packages.${pkg.id}.desc`)}</p>
                <Button variant="outline" size="sm" className="w-full border-white/20 hover:border-secondary hover:text-secondary">
                  {t("pricing.standalone.add")}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Database } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProductPreview() {
  const { t } = useLanguage();

  const products = [
    {
      title: t("products.list.defi.title"),
      description: t("products.list.defi.desc"),
      icon: Shield,
      color: "text-primary",
    },
    {
      title: t("products.list.node.title"),
      description: t("products.list.node.desc"),
      icon: Zap,
      color: "text-secondary",
    },
    {
      title: t("products.list.data.title"),
      description: t("products.list.data.desc"),
      icon: Database,
      color: "text-primary",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white neon-text">
            {t("products.title")}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/products">
                <Card className="h-full group cursor-pointer border-white/5 bg-white/5 hover:bg-white/10">
                  <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:ring-primary/50 transition-all">
                    <product.icon className={`h-8 w-8 ${product.color}`} />
                  </div>
                  <h3 className="text-xl font-bold font-orbitron text-white mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

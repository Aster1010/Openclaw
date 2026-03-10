"use client";

import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Database, Server, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const allProducts = [
  {
    id: "defi-shield",
    category: "security",
    title: "DeFi Shield",
    description: "Advanced security protocols for decentralized finance applications, protecting against flash loan attacks and reentrancy vulnerabilities.",
    icon: Shield,
    color: "text-primary",
  },
  {
    id: "lightning-node",
    category: "infrastructure",
    title: "Lightning Node",
    description: "High-performance blockchain nodes with sub-millisecond latency, optimized for high-frequency trading and real-time analytics.",
    icon: Zap,
    color: "text-secondary",
  },
  {
    id: "data-forge",
    category: "infrastructure",
    title: "Data Forge",
    description: "Immutable storage solutions for enterprise-grade data integrity, leveraging IPFS and Filecoin networks.",
    icon: Database,
    color: "text-primary",
  },
  {
    id: "validator-pro",
    category: "infrastructure",
    title: "Validator Pro",
    description: "Enterprise-grade validator infrastructure for Proof-of-Stake networks with 99.99% uptime guarantee.",
    icon: Server,
    color: "text-secondary",
  },
  {
    id: "cross-bridge",
    category: "defi",
    title: "Cross-Chain Bridge",
    description: "Seamless asset transfer between Ethereum, Solana, and Cosmos ecosystems with minimal slippage.",
    icon: Globe,
    color: "text-primary",
  },
  {
    id: "smart-audit",
    category: "security",
    title: "Smart Audit AI",
    description: "AI-powered smart contract auditing tool that detects vulnerabilities before deployment.",
    icon: Cpu,
    color: "text-secondary",
  },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "defi", label: "DeFi" },
  { id: "security", label: "Security" },
];

export default function ProductsPage() {
  return (
    <div className="container px-4 md:px-6 py-24">
      <div className="text-center mb-16 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-orbitron text-white neon-text"
        >
          Our Products
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/60 max-w-2xl mx-auto"
        >
          Explore our comprehensive suite of Web3 tools and infrastructure solutions.
        </motion.p>
      </div>

      <Tabs.Root defaultValue="all" className="space-y-12">
        <Tabs.List className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Tabs.Trigger
              key={category.id}
              value={category.id}
              className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-primary transition-all font-orbitron"
            >
              {category.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {categories.map((category) => (
          <Tabs.Content key={category.id} value={category.id} className="outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts
                .filter((p) => category.id === "all" || p.category === category.id)
                .map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full flex flex-col group hover:bg-white/10 transition-colors">
                      <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:ring-primary/50 transition-all w-fit">
                        <product.icon className={`h-8 w-8 ${product.color}`} />
                      </div>
                      <h3 className="text-xl font-bold font-orbitron text-white mb-3 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                        {product.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full mt-auto group-hover:bg-primary/10 group-hover:border-primary group-hover:text-primary">
                        Learn More
                      </Button>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const team = [
  {
    name: "Alex Cipher",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in cryptography and distributed systems.",
  },
  {
    name: "Sarah Chain",
    role: "CTO",
    bio: "Core contributor to major blockchain protocols and expert in consensus algorithms.",
  },
  {
    name: "Mike Node",
    role: "Head of Engineering",
    bio: "Full-stack wizard specializing in high-performance infrastructure scaling.",
  },
  {
    name: "Elena Block",
    role: "Product Design",
    bio: "Award-winning designer creating intuitive interfaces for complex Web3 tools.",
  },
];

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-24">
      {/* Hero Section */}
      <div className="text-center mb-24 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-orbitron text-white neon-text"
        >
          About OpenClaw
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/60 max-w-3xl mx-auto text-lg"
        >
          We are a team of passionate engineers, cryptographers, and designers building the foundational layer of the decentralized internet.
        </motion.p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold font-orbitron text-white">Our Mission</h2>
          <p className="text-white/70 leading-relaxed">
            At OpenClaw, we believe in a future where digital sovereignty is accessible to everyone. Our mission is to lower the barrier to entry for Web3 development by providing robust, scalable, and secure infrastructure.
          </p>
          <p className="text-white/70 leading-relaxed">
            We are committed to open source principles and actively contribute to the ecosystems we support. By empowering developers with the right tools, we accelerate the transition to a more decentralized and equitable digital world.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="relative z-10 grid grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-orbitron text-primary neon-text mb-2">5+</div>
              <div className="text-sm text-white/60">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-orbitron text-secondary neon-text mb-2">50M+</div>
              <div className="text-sm text-white/60">Transactions Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-orbitron text-white mb-2">10k+</div>
              <div className="text-sm text-white/60">Active Nodes</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-orbitron text-white mb-2">24/7</div>
              <div className="text-sm text-white/60">Global Support</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold font-orbitron text-center text-white">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:border-primary/50 transition-colors group">
                <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <User className="h-10 w-10 text-white/50 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold font-orbitron text-white group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <div className="text-sm text-secondary font-medium mb-3">{member.role}</div>
                <p className="text-sm text-white/60">{member.bio}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

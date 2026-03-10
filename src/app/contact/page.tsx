"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, MessageSquare, MapPin, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-white neon-text">
              Get in Touch
            </h1>
            <p className="text-white/60 text-lg">
              Have questions about our products or want to discuss a partnership? We'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold font-orbitron text-white mb-1">Email Us</h3>
                <p className="text-white/60 mb-1">Our team is ready to assist you.</p>
                <a href="mailto:contact@openclaw.io" className="text-primary hover:underline">
                  contact@openclaw.io
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary mt-1">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold font-orbitron text-white mb-1">Join Community</h3>
                <p className="text-white/60 mb-1">Chat with us and other developers.</p>
                <a href="#" className="text-secondary hover:underline">
                  discord.gg/openclaw
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/10 text-white mt-1">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold font-orbitron text-white mb-1">Office</h3>
                <p className="text-white/60">
                  123 Blockchain Blvd, <br />
                  Decentral City, Web3 404
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h3 className="font-bold font-orbitron text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="p-3 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="p-3 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-all">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}

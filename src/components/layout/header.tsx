"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t("nav.features"), href: "/#features" },
    { name: t("nav.pricing"), href: "/#pricing" },
    { name: t("nav.download"), href: "/download" },
    { name: t("nav.docs"), href: "/docs" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#050510]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,61,46,0.9)] group-hover:scale-110 transition-transform duration-300">
            🦞
          </span>
          <span className="font-orbitron text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FF3D2E] to-[#FF6B1A] tracking-wider transition-colors neon-text">
            OpenClaw
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-white/70"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary neon-glow"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <Button variant="ghost" className="text-white/70 hover:text-primary hover:bg-white/5">
            {t("nav.login")}
          </Button>
          <Button className="bg-primary text-white font-bold hover:bg-primary/80 neon-glow">
            {t("nav.start")}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-primary"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#050510]/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-white/70 hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
                <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-primary">
                  {t("nav.login")}
                </Button>
                <Button className="w-full bg-primary text-white font-bold neon-glow">
                  {t("nav.start")}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

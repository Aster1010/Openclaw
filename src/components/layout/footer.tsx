"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050510] pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-orbitron text-xl font-bold text-white neon-text">
                OpenClaw
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              {t("footer.desc")}
              <br />
              One Claw, All AI.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-white/40 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/40 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/40 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Product Column */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-6 uppercase tracking-wider">{t("footer.products")}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/features" className="hover:text-primary transition-colors">{t("footer.products_list.features")}</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">{t("footer.products_list.pricing")}</Link></li>
              <li><Link href="/download" className="hover:text-primary transition-colors">{t("footer.products_list.download")}</Link></li>
              <li><Link href="/changelog" className="hover:text-primary transition-colors">{t("footer.products_list.changelog")}</Link></li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-6 uppercase tracking-wider">{t("footer.developers")}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/docs" className="hover:text-primary transition-colors">{t("footer.developers_list.docs")}</Link></li>
              <li><Link href="/sdk" className="hover:text-primary transition-colors">{t("footer.developers_list.sdk")}</Link></li>
              <li><Link href="/status" className="hover:text-primary transition-colors">{t("footer.developers_list.status")}</Link></li>
              <li><Link href="/community" className="hover:text-primary transition-colors">{t("footer.developers_list.community")}</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-6 uppercase tracking-wider">{t("footer.company")}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t("footer.company_list.about")}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t("footer.company_list.contact")}</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">{t("footer.company_list.privacy")}</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">{t("footer.company_list.terms")}</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>{t("footer.rights").replace("{year}", year.toString())}</p>
          {language === 'zh' && (
            <div className="flex items-center gap-6">
              <span>ICP备案号：京ICP备XXXXXXXX号-1</span>
              <span>公网安备 XXXXXXXXXXXXXX号</span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

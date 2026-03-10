"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown, ChevronUp, Monitor, Apple, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

type DownloadData = {
  version: string;
  size: string;
  downloadUrl: string;
};

type PlatformData = {
  [key: string]: DownloadData;
};

const CHANGELOG = [
  {
    version: "v1.2.0",
    date: "2024-03-15",
    changes: [
      "Added support for Gemini 1.5 Pro",
      "Improved response streaming performance",
      "Fixed dark mode toggle issue on Windows",
    ],
  },
  {
    version: "v1.1.0",
    date: "2024-02-28",
    changes: [
      "Introduced Claude 3 integration",
      "New conversation management UI",
      "Added keyboard shortcuts for quick actions",
    ],
  },
  {
    version: "v1.0.0",
    date: "2024-01-10",
    changes: ["Initial Release", "Core support for OpenAI models", "Basic markdown rendering"],
  },
];

export function DownloadSection() {
  const [platformData, setPlatformData] = useState<PlatformData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/download?platform=all");
        const data = await response.json();
        setPlatformData(data);
      } catch (error) {
        console.error("Failed to fetch download data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownload = (platform: string) => {
    if (platformData && platformData[platform]) {
      window.location.href = platformData[platform].downloadUrl;
    }
  };

  return (
    <section id="download" className="py-24 relative overflow-hidden bg-[#050510]">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white">
            {t("download.title")} <span className="text-primary neon-text">OpenClaw</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t("download.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* Windows */}
          <DownloadCard
            icon={<Monitor className="h-12 w-12 text-primary" />}
            title={t("download.windows.title")}
            subtitle={t("download.windows.subtitle")}
            data={platformData?.windows}
            loading={loading}
            onClick={() => handleDownload("windows")}
            buttonText={t("download.button.download")}
            loadingText={t("download.button.loading")}
          />

          {/* macOS */}
          <DownloadCard
            icon={<Apple className="h-12 w-12 text-primary" />}
            title={t("download.mac.title")}
            subtitle={t("download.mac.subtitle")}
            data={platformData?.mac}
            loading={loading}
            onClick={() => handleDownload("mac")}
            buttonText={t("download.button.download")}
            loadingText={t("download.button.loading")}
          />

          {/* Linux */}
          <DownloadCard
            icon={<Terminal className="h-12 w-12 text-primary" />}
            title={t("download.linux.title")}
            subtitle={t("download.linux.subtitle")}
            data={platformData?.linux}
            loading={loading}
            onClick={() => handleDownload("linux")}
            buttonText={t("download.button.download")}
            loadingText={t("download.button.loading")}
          />
        </div>

        {/* Changelog */}
        <div className="max-w-3xl mx-auto border border-white/10 rounded-xl bg-white/5 overflow-hidden">
          <button
            onClick={() => setIsChangelogOpen(!isChangelogOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
          >
            <span className="font-orbitron font-bold text-white flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              {t("download.changelog.title")}
            </span>
            {isChangelogOpen ? (
              <ChevronUp className="h-5 w-5 text-white/60" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white/60" />
            )}
          </button>

          <AnimatePresence>
            {isChangelogOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 border-t border-white/10 space-y-8">
                  {CHANGELOG.map((log) => (
                    <div key={log.version} className="relative pl-8 border-l border-white/10">
                      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary neon-glow" />
                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{log.version}</h4>
                        <span className="text-sm text-white/40">{log.date}</span>
                      </div>
                      <ul className="space-y-1">
                        {log.changes.map((change, i) => (
                          <li key={i} className="text-sm text-white/70 list-disc list-inside">
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function DownloadCard({
  icon,
  title,
  subtitle,
  data,
  loading,
  onClick,
  buttonText,
  loadingText,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  data?: DownloadData;
  loading: boolean;
  onClick: () => void;
  buttonText: string;
  loadingText: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center text-center hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)] transition-all duration-300 group"
    >
      <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-orbitron text-white mb-2">{title}</h3>
      <p className="text-sm text-white/50 mb-6">{subtitle}</p>
      
      <div className="mt-auto w-full space-y-3">
        <Button
          onClick={onClick}
          disabled={loading}
          className="w-full bg-primary text-black font-bold hover:bg-primary/90 neon-glow gap-2"
        >
          <Download className="h-4 w-4" />
          {loading ? loadingText : buttonText}
        </Button>
        
        {!loading && data && (
          <div className="flex justify-between text-xs text-white/40 px-2">
            <span>{data.version}</span>
            <span>{data.size}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

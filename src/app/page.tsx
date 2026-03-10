import { Hero } from "@/components/sections/hero";
import { ProductPreview } from "@/components/sections/product-preview";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { DownloadSection } from "@/components/sections/download";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-24">
      <Hero />
      <ProductPreview />
      <Features />
      <Pricing />
      <DownloadSection />
    </div>
  );
}

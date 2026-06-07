import type { Metadata } from "next";
import CuttingEdg from "./components/home/CuttingEdg";
import HeroSection from "./components/home/HeroSection";
import NumberSpeaks from "./components/home/NumberSpeaks";
import { OutSourcing } from "./components/home/OutSorching";
import ProductsSection from "./components/home/Products";

export const metadata: Metadata = {
  title: " Nanovision LTD",
  description:
    "Nanovision delivers enterprise communication solutions: SMS platform, live chat, ERP, and big-data services to help businesses scale.",
  openGraph: {
    title: "Nanovision - Revolutionize Your Communication",
    description:
      "Nanovision delivers enterprise communication solutions: SMS platform, live chat, ERP, and big-data services to help businesses scale.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="lg:mt-40 mt-20">
      <HeroSection />
      <CuttingEdg />
      <NumberSpeaks />
      <ProductsSection />
      <OutSourcing />
    </div>
  );
}

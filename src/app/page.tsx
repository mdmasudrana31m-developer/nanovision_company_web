import CuttingEdg from "./components/CuttingEdg";
import HeroSection from "./components/HeroSection";
import NumberSpeaks from "./components/NumberSpeaks";
import { OutSourcing } from "./components/OutSorching";
import ProductsSection from "./components/Products";

export default function Home() {
  return (
    <div className="lg:mt-40 mt-20">
      <HeroSection />
      <CuttingEdg />
      <NumberSpeaks/>
      <ProductsSection/>
      <OutSourcing/>
    </div>
  );
}

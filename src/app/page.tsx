import CuttingEdg from "./components/home/CuttingEdg";
import HeroSection from "./components/home/HeroSection";
import NumberSpeaks from "./components/home/NumberSpeaks";
import { OutSourcing } from "./components/home/OutSorching";
import ProductsSection from "./components/home/Products";


export default function Home() {
  return (
    <div className="lg:mt-40 mt-20">
      <HeroSection/>
      <CuttingEdg/>
      <NumberSpeaks/>
      <ProductsSection/>
      <OutSourcing/>
    </div>
  );
}

import React from "react";
import ServiceHeroSection from "../components/services/ServiceHeroSection";
import { TrustBy } from "../components/services/TrustBy";
import WeService from "../components/services/WeService";
import OurWorkFlow from "../components/services/OurWorkFlow";
import Technologies from "../components/services/Technologies";
import OurWork from "../components/services/OurWork";

const ServicesPage = () => {
  return (
    <div>
      <ServiceHeroSection />
      <TrustBy />
      <WeService />
      <OurWorkFlow />
      <Technologies />
      <OurWork />
    </div>
  );
};

export default ServicesPage;

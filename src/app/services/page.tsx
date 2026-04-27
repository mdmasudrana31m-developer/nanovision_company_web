import React from "react";
import ServiceHeroSection from "../components/services/ServiceHeroSection";
import { TrustBy } from "../components/services/TrustBy";
import WeService from "../components/services/WeService";
import OurWorkFlow from "../components/services/OurWorkFlow";

const ServicesPage = () => {
  return (
    <div>
      <ServiceHeroSection />
      <TrustBy />
      <WeService />
      <OurWorkFlow />
    </div>
  );
};

export default ServicesPage;

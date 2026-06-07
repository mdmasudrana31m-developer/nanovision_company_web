import type { Metadata } from "next";
import React from "react";
import ServiceHeroSection from "../components/services/ServiceHeroSection";
// import { TrustBy } from "../components/services/TrustBy";
import WeService from "../components/services/WeService";
import OurWorkFlow from "../components/services/OurWorkFlow";
import Technologies from "../components/services/Technologies";
import OurWork from "../components/services/OurWork";
import WorkDiscus from "../components/services/WorkDiscus";

export const metadata: Metadata = {
  title: "Services | Nanovision LTD",
  description:
    "Explore Nanovision's services: custom ERP, SMS platform, live chat solutions, and data engineering for enterprises.",
  openGraph: { images: ["/og-image.jpg"] },
};

const ServicesPage = () => {
  return (
    <div>
      <ServiceHeroSection />
      {/* <TrustBy /> */}
      <WeService />
      <OurWorkFlow />
      <Technologies />
      <OurWork />
      <WorkDiscus />
    </div>
  );
};

export default ServicesPage;

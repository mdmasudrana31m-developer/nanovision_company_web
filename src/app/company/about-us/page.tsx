import type { Metadata } from "next";
import Connectivity from "@/app/components/about-us/Connectivity";
import LeadershipMember from "@/app/components/about-us/LeadershipMember";
import TrustedWorld from "@/app/components/about-us/TrustedWorld";
import WhatWeDo from "@/app/components/about-us/WhatWeDo";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Nanovision LTD",
  description:
    "Learn about Nanovision's mission, leadership, and the solutions we build in communication, ERP and big data.",
  openGraph: { images: ["/og-image.jpg"] },
};

const page = () => {
  return (
    <>
      <WhatWeDo />
      <TrustedWorld />
      <Connectivity />
      <LeadershipMember />
    </>
  );
};

export default page;

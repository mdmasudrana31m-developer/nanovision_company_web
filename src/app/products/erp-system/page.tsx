import type { Metadata } from "next";
import ERPPlatform from "@/app/components/erp-system/ERPPlatform";
import ERPSolution from "@/app/components/erp-system/ERPSolution";
import ERPSytem from "@/app/components/erp-system/ERPSytem";
import ERPTechnology from "@/app/components/erp-system/ERPTechnology";
import React from "react";

export const metadata: Metadata = {
  title: "ERP System | Nanovision LTD",
  description:
    "Nanovision ERP solutions: modular, customizable enterprise resource planning for finance, inventory, and operations.",
  openGraph: { images: ["/og-image.jpg"] },
};

const ERPSystemN = () => {
  return (
    <>
      <ERPPlatform />
      <ERPSolution />
      <ERPTechnology />
      <ERPSytem />
    </>
  );
};

export default ERPSystemN;

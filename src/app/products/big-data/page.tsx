import type { Metadata } from "next";
import BigData from "@/app/components/big-data/BigData";
import BigDataBottomSection from "@/app/components/big-data/BigDataBottomSection";
import React from "react";

export const metadata: Metadata = {
  title: "Big Data | Nanovision LTD",
  description:
    "Nanovision Big Data solutions: analytics, data pipelines, and insights to drive smarter decisions for enterprises.",
  openGraph: { images: ["/og-image.jpg"] },
};

const BigDataPage = () => {
  return (
    <>
      <BigData />
      <BigDataBottomSection />
    </>
  );
};

export default BigDataPage;

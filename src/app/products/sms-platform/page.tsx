import type { Metadata } from "next";
import MessagingTechnology from "@/app/components/sms-platform/MessagingTechnology";
import SmsPlatform from "@/app/components/sms-platform/SmsPlatform";
import SmsSolution from "@/app/components/sms-platform/SmsSolution";
import TrafficBecomes from "@/app/components/sms-platform/TrafficBecomes";
import WhyNanoVision from "@/app/components/sms-platform/WhyNanoVision";
import React from "react";

export const metadata: Metadata = {
  title: "SMS Platform | Nanovision LTD",
  description:
    "Robust SMS platform from Nanovision: bulk messaging, campaigns, and reliable delivery for businesses and telcos.",
  openGraph: { images: ["/og-image.jpg"] },
};

const SMSPlatform = () => {
  return (
    <>
      <SmsPlatform />
      <SmsSolution />
      <TrafficBecomes />
      <MessagingTechnology />
      <WhyNanoVision />
    </>
  );
};

export default SMSPlatform;

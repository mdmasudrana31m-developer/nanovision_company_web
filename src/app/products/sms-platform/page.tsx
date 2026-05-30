import MessagingTechnology from "@/app/components/sms-platform/MessagingTechnology";
import SmsPlatform from "@/app/components/sms-platform/SmsPlatform";
import SmsSolution from "@/app/components/sms-platform/SmsSolution";
import TrafficBecomes from "@/app/components/sms-platform/TrafficBecomes";
import WhyNanoVision from "@/app/components/sms-platform/WhyNanoVision";
import React from "react";

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

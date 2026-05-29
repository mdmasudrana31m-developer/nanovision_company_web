import SmsPlatform from "@/app/components/sms-platform/SmsPlatform";
import SmsSolution from "@/app/components/sms-platform/SmsSolution";
import TrafficBecomes from "@/app/components/sms-platform/TrafficBecomes";
import React from "react";

const SMSPlatform = () => {
  return (
    <>
      <SmsPlatform />
      <SmsSolution />
      <TrafficBecomes />
    </>
  );
};

export default SMSPlatform;

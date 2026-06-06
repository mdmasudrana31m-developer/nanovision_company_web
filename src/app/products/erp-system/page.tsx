import ERPPlatform from "@/app/components/erp-system/ERPPlatform";
import ERPSolution from "@/app/components/erp-system/ERPSolution";
import ERPSytem from "@/app/components/erp-system/ERPSytem";
import ERPTechnology from "@/app/components/erp-system/ERPTechnology";
import React from "react";

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

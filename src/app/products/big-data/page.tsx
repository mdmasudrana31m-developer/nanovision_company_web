import BigData from "@/app/components/big-data/BigData";
import BigDataBottomSection from "@/app/components/big-data/BigDataBottomSection";
import BigDataExtraSections from "@/app/components/big-data/BigDataExtraSections";
import React from "react";

const BigDataPage = () => {
  return (
    <>
      <BigData />
      <BigDataExtraSections />
      <BigDataBottomSection/>
    </>
  );
};

export default BigDataPage;

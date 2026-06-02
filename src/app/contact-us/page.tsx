import React from "react";
import OurTeam from "../components/contact/OurTeam";
import BusinessEnquiry from "../components/contact/BusinessEnquiry";
import OfficeLocation from "../components/contact/OfficeLocation";

const page = () => {
  return (
    <>
      <OfficeLocation />
      <OurTeam />
      <BusinessEnquiry />
    </>
  );
};

export default page;

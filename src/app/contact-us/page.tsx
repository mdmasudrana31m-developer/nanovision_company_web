import type { Metadata } from "next";
import React from "react";
import OurTeam from "../components/contact/OurTeam";
import BusinessEnquiry from "../components/contact/BusinessEnquiry";
import OfficeLocation from "../components/contact/OfficeLocation";

export const metadata: Metadata = {
  title: "Contact Us | Nanovision LTD",
  description:
    "Get in touch with Nanovision — office locations, team contacts, and business enquiry forms for enterprise communication solutions.",
  openGraph: { images: ["/og-image.jpg"] },
};

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

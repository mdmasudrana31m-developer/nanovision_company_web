import type { Metadata } from "next";
import DropYourResume from "@/app/components/careers/DropYourResume";
import JoinTeamSection from "@/app/components/careers/JoinTeamSection";
import OurCulture from "@/app/components/careers/OurCulture";
import React from "react";

export const metadata: Metadata = {
  title: "Careers | Nanovision LTD",
  description:
    "Join the Nanovision team — explore open roles, culture, and benefits in communication and software engineering.",
  openGraph: { images: ["/og-image.jpg"] },
};

const page = () => {
  return (
    <>
      <JoinTeamSection />
      <OurCulture />
      <DropYourResume />
    </>
  );
};

export default page;

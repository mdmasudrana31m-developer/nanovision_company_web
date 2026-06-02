import DropYourResume from "@/app/components/careers/DropYourResume";
import JoinTeamSection from "@/app/components/careers/JoinTeamSection";
import OurCulture from "@/app/components/careers/OurCulture";
import React from "react";

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

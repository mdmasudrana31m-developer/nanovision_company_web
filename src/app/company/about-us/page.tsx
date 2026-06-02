import Connectivity from "@/app/components/about-us/Connectivity";
import LeadershipMember from "@/app/components/about-us/LeadershipMember";
import TrustedWorld from "@/app/components/about-us/TrustedWorld";
import WhatWeDo from "@/app/components/about-us/WhatWeDo";
import React from "react";


const page = () => {
  return (
    <>
      <WhatWeDo />
      <TrustedWorld />
      <Connectivity />
      <LeadershipMember />
    </>
  );
};

export default page;

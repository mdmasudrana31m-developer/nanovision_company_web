import React from "react";
import WhatWeDo from "../components/about-us/WhatWeDo";
import TrustedWorld from "../components/about-us/TrustedWorld";
import Connectivity from "../components/about-us/Connectivity";
import LeadershipMember from "../components/about-us/LeadershipMember";

const page = () => {
  return (
    <>
      <WhatWeDo />
      <TrustedWorld />
      <Connectivity/>
      <LeadershipMember/>
    </>
  );
};

export default page;

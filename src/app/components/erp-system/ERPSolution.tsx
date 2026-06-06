import Image from "next/image";
import React from "react";

const ERPSolution = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-20 md:py-28">
      {/* LEFT BG IMAGE */}
      <div className="absolute left-0 top-0 h-full w-[25%] opacity-99 pointer-events-none">
        <Image
          src="/sms-platform/bg-before.png"
          alt="Left Shape"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* RIGHT BG IMAGE */}
      <div className="absolute  right-0 top-0 h-full w-[25%] opacity-99 pointer-events-none">
        <Image
          src="/sms-platform/bg.png"
          alt="Right Shape"
          fill
          className="object-contain object-right"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* TITLE */}
        <h2
          className="
        text-[#111827]
        font-semibold
        leading-tight
        text-[22px]
        sm:text-[32px]
        md:text-[46px]
        lg:text-[54px]
      "
        >
          Transform the Way You Manage Your Business
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
        mt-8
        mx-auto
        max-w-4xl
        text-[#4B5563]
        leading-[1.9]
        text-[16px]
        sm:text-[18px]
        md:text-[22px]
      "
        >
          Managing multiple departments with disconnected systems can create
          inefficiencies, data inconsistencies, and operational challenges. Nano
          Vision LTD&apos;s ERP System provides a centralized platform that
          connects every aspect of your organization, enabling seamless
          collaboration, process automation, and real-time visibility across
          your business.
          <br />
          <br />
          Whether you&apos;re a growing company or a large enterprise, our ERP
          solution helps streamline operations, reduce costs, improve
          decision-making, and accelerate digital transformation.
        </p>
      </div>
    </section>
  );
};

export default ERPSolution;

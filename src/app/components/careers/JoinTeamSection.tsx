"use client";

import Button from "@/app/utils/Button";
import Image from "next/image";
import { useCallback } from "react";

export default function JoinTeamSection() {
  const handleScrollToBusiness = useCallback(() => {
    const section = document.getElementById("business");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "business";
    }
  }, []);
  return (
    <section className="bg-[#f5f5f7] mt-16 py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP CONTENT */}
        <div className="max-w-5xl mx-auto text-center flex flex-col justify-center items-center">
          <h2
            className="
            text-[36px]
            sm:text-[46px]
            md:text-[55px]
            lg:text-[60px]
            leading-[1.08]
            font-semibold
            tracking-[-2px]
            text-[#111827]
            "
          >
            Empowering Businesses with Innovative Solutions
          </h2>

          <p
            className="
            mt-6
            text-[15px]
            sm:text-[17px]
            md:text-[18px]
            leading-[1.8]
            text-[#4B5563]
            max-w-3xl
            mx-auto
            "
          >
            We empower businesses with innovative technology solutions that
            drive growth, improve efficiency, and transform ideas into impactful
            digital experiences through web, mobile, AI, and software
            development expertise.
          </p>

          {/* BUTTON */}
          <div
            className="mt-8 sm:mt-10     w-50
"
          >
            <Button
              buttonText="Join Our Team"
              onClick={handleScrollToBusiness}
            />
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <div
            className="
            relative
            w-full
            max-w-6xl
            mx-auto
            overflow-hidden
            rounded-[24px]
            sm:rounded-[32px]
            lg:rounded-[36px]
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
          >
            <Image
              src="/team-img/c.webp"
              alt="Team"
              width={1400}
              height={850}
              className="
              w-full
              h-auto
              object-cover
              transition-transform
              duration-700
              hover:scale-105
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

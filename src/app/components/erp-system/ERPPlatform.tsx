import Image from "next/image";
import React from "react";

const ERPPlatform = () => {
  return (
    <section className="w-full bg-[#f3f4f8] py-14 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl md:mt-14 lg:mt-0 mt-18 mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
        grid
        grid-cols-1
        lg:grid-cols-2
        items-center
        gap-12
        lg:gap-16
      "
        >
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            {/* TITLE */}
            <h1
              className="
            text-[40px]
            sm:text-[42px]
            md:text-[54px]
            lg:text-[62px]
            leading-[1]
            font-bold
            text-[#111827]
          "
            >
              Smart ERP for Modern Businesses
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
            mt-6
            text-[18px]
            sm:text-[20px]
            leading-[1.9]
            text-[#4b5563]
            max-w-2xl
            mx-auto
            lg:mx-0
          "
            >
              Integrate finance, HR, inventory, sales, procurement, and
              operations into one powerful platform that drives efficiency,
              productivity, and business growth.
            </p>

            {/* BUTTON */}
            {/* <div className="flex mt-8 flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start   ">
              <div className="min-w-50 ">
                <Button buttonText="Get a Free Demo" />
              </div>
            </div> */}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center ">
            <div
              className="
            relative
            w-full
            max-w-[650px]
            aspect-[1.2/1] 
          "
            >
              <Image
                src="/sms-platform/traffic-img/ERP-system.webp"
                alt="SMS Platform"
                fill
                priority
                className="object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPPlatform;

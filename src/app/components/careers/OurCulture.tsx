"use client";

import Image from "next/image";

export default function OurCulture() {
  return (
    <section className="bg-[#f5f5f7] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-md lg:max-w-lg">
            <h2
              className="
              text-[42px]
              sm:text-[56px]
              md:text-[64px]
              lg:text-[72px]
              leading-[1]
              tracking-[-2px]
              font-semibold
              text-[#111827]
              mb-8
              "
            >
              Our Culture
            </h2>

            <p
              className="
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              leading-[1.9]
              text-[#4B5563]
              "
            >
              At Nano Vision LTD, our culture is built on innovation, teamwork,
              and continuous growth. We foster a collaborative environment where
              creativity is encouraged, ideas are valued, and every team member
              is empowered to deliver impactful technology solutions with
              integrity, excellence, and a customer-focused mindset.
            </p>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="w-full flex justify-center lg:justify-end">
            <div
              className="
    relative
    w-full
    max-w-[820px]

    h-[260px]
    sm:h-[360px]
    md:h-[430px]
    lg:h-[500px]

    px-2
    sm:px-0

    overflow-hidden
    rounded-[22px]
    sm:rounded-[28px]
    md:rounded-[34px]
    lg:rounded-[40px]
    "
            >
              <Image
                src="/team-img/Frame1.png"
                alt="Culture"
                fill
                priority
                className="
      object-cover
      transition-transform
      duration-700
      "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

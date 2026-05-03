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
              At REVE Systems, we ensure the freedom for people to deliver their
              best output and maintain the responsibility to achieve excellence.
              We admire people who speak their minds and listen more while
              making a real effort to understand views that differ from their
              own. People here are friendly and helpful beyond expectation.
              Everyone shares a common goal to make the best products and
              services for the customers.
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
                src="/team-img/Frame.png"
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

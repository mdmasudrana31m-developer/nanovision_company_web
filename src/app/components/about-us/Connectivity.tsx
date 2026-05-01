"use client";

import Image from "next/image";

export default function Connectivity() {
  return (
    <section className="bg-[#f5f6f8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[42px] sm:text-[56px] md:text-[55px] leading-none font-semibold text-[#111827] mb-8">
              A Vision to Redefine Connectivity
            </h2>
            <div className="space-y-8 text-[#4b5563] text-[16px] md:text-[17px] leading-[1.8]">
              <p>
                By delivering reliable and scalable software solutions that
                bridge communication gaps and enhance connectivity, we have
                established ourselves as a globally recognized leader in the
                telecom and IP communication domain. With 20 years of expertise
                and a proven record of evolving success, we possess a deep
                understanding of your challenges and are dedicated to providing
                perfectly tailored solutions that meet your unique needs.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-[28px] shadow-lg">
              <Image
                src="/about-us/network.png"
                alt="Office Building"
                width={700}
                height={700}
                className="w-full h-auto object-cover hover:scale-105 transition duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

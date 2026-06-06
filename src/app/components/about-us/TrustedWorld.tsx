"use client";

import Image from "next/image";

export default function TrustedWorld() {
  return (
    <section className="bg-[#f5f6f8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-[30px] shadow-lg">
              <Image
                src="/about-us/trusted-worldwide.jpeg"
                alt="Trusted Worldwide"
                width={700}
                height={500}
                className="w-full h-auto object-cover hover:scale-105 transition duration-700"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-[42px] sm:text-[56px] md:text-[55px] leading-none font-semibold text-[#111827] mb-8">
              Trusted Worldwide
            </h2>

            <div className="space-y-8 text-[#4b5563] text-[16px] md:text-[17px] leading-[1.9]">
              <p>
                Over time, we have built a strong reputation for delivering high-quality solutions that clients can depend on. Our work is trusted by businesses across different industries and regions because we prioritize consistency, transparency, and performance.
              </p>

              <p>
                We believe trust is earned through results. That’s why we focus on delivering secure, stable, and scalable systems that perform reliably under real-world conditions. Our global mindset allows us to support clients from different markets while maintaining the same level of quality and commitment everywhere.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

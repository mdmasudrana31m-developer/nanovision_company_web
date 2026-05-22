"use client";

import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="bg-[#f5f6f8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-15 lg:mt-30">
          {/* GRID */}
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT CONTENT */}
            <div>
              <div className="space-y-8 text-[#4b5563] text-[16px] md:text-[17px] leading-[1.8]">
                <h2 className="text-[42px] sm:text-[56px] md:text-[68px] leading-none font-semibold text-[#111827] ">
                  What We Do
                </h2>
                <p>
                  We specialize in delivering end-to-end digital and software
                  solutions designed to meet the evolving needs of modern
                  businesses. Our services include software development, web and
                  mobile application development, system integration, cloud
                  solutions, and enterprise-grade platforms.
                </p>

                <p>
                  We work closely with clients to understand their challenges
                  and design customized solutions that improve operational
                  efficiency, automate workflows, and enhance user experiences.
                  From initial planning and UI/UX design to development,
                  testing, and deployment, we ensure every stage is handled with
                  precision and care.
                </p>

                <p>
                  Our goal is to turn complex business requirements into simple,
                  scalable, and effective digital products that drive measurable
                  results.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full">
              <div className="relative overflow-hidden rounded-[28px] shadow-lg">
                <Image
                  src="/about-us/office-buiding.webp"
                  alt="Office Building"
                  width={700}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

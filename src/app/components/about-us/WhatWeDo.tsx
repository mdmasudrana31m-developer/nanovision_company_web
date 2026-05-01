"use client";

import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="bg-[#f5f6f8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mt-15">
   <h2 className="text-[42px] sm:text-[56px] md:text-[68px] leading-none font-semibold text-[#111827] mb-8">
          What We Do
        </h2>
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <div className="space-y-8 text-[#4b5563] text-[16px] md:text-[17px] leading-[1.8]">
              <p>
                For over 20 years, REVE Systems has been a global leader in
                delivering cutting-edge telecommunication solutions to IP
                telephony and communication service providers. Today, the
                company holds a strong position in Carrier-Grade Class 4 and
                Class 5 Softswitch, Voice/Video & Messaging Apps, SMS Platforms,
                and Cloud Telephony solutions.
              </p>

              <p>
                On the other hand, REVE Systems has transformed customer
                experience (CX) by introducing an AI-based Omnichannel Customer
                Engagement Platform, setting new standards for innovation in the
                industry.
              </p>

              <p>
                The company’s excellence has been recognized with prestigious
                accolades such as the Red Herring Top 100 Global Winner, the NGN
                Leadership Award, and the Unified Communications Excellence
                Award. Additionally, REVE Systems is ISO 27001, ISO 9001
                certified, and CMMI Level 3 accredited, underscoring its
                commitment to quality, security, and process excellence.
              </p>

              <p>
                Our proven track record includes the successful delivery of
                large-scale projects for leading telecom operators, government
                organizations, and regulatory bodies, reflecting our expertise,
                reliability, and dedication to driving communication innovation.
                Therefore, more than 4500 customers from 80 countries rely on
                our solutions & services.
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
                height={900}
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

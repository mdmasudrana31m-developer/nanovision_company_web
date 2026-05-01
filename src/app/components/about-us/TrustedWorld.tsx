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
                src="/about-us/world.png"
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
                REVE Systems is headquartered in Singapore, with major Research
                & Development (R&D) centers strategically located in Bangladesh
                and India. Our full-stack communication solutions, coupled with
                a diversified technical and business team and decades of
                experience, empower enterprises, carriers, and telecom operators
                to address critical infrastructure challenges and maximize
                revenue streams.
              </p>

              <p>
                With a customer base spanning over 80 countries, REVE Systems
                has become the trusted partner of leading carriers and telecom
                operators worldwide. Our esteemed clients include Airtel, bKash,
                IDT, STC, Telecom Oman, 21st Century Ltd, and Babylon Mobile,
                reflecting our commitment to delivering innovative and reliable
                solutions on a global scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function NumberSpeaks() {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* 🔹 Left BG */}
      <div className="absolute left-0 top-25 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-full opacity-100 pointer-events-none">
               <Image
                 src="/cutting_edge_left-bg.webp"
                 alt="Background"
                 fill
                 className="object-contain"
                 sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 500px"
                 priority
               />
             </div>

      {/* 🔹 Right BG */}
      <div className="absolute right-0 top-0 w-[150px] sm:w-[250px] md:w-[400px] lg:w-[600px] h-[150px] sm:h-[250px] md:h-[400px] lg:h-[600px] opacity-20 pointer-events-none -z-10">
        <Image
          src="/cutting_edge_right-bg.webp"
          alt="Background"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 150px, (max-width: 1024px) 300px, 600px"
        />
      </div>

      {/* 🔥 Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* 🔹 Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
            Number Speaks
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            Our proven track record spanning over two decades serving
            large-scale telecom operators, government organizations, IP service
            providers, enterprises, etc., drives us toward innovation and
            excellence. Today, we proudly serve large number of clients across
            various industries and continents.
          </p>
        </div>

        {/* 🔹 Right Stats */}
        <div className="flex flex-col gap-8 md:gap-10 text-center md:text-left">
          {/* 22+ Years */}
          <div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0072BA]">
              22+ Years
            </h3>
            <p className="text-[#0072BA] text-sm md:text-base mt-2">
              of Partnership with Telcos & Service Providers
            </p>
          </div>

          {/* 80+ Countries */}
          <div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0072BA]">
              80+ Countries
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

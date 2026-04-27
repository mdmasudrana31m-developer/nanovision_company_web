"use client";

import Image from "next/image";

const data = [
  {
    title: "TELCOS",
    desc: "Advanced telco-grade SBC, SMS Platform, Virtual Roaming, and more with scalability and high performance",
    img: "/telcos.png",
  },
  {
    title: "SERVICE PROVIDERS",
    desc: "Customized and white-label IP communication solution with dedicated 24x7 support",
    img: "/services.svg",
  },
  {
    title: "ENTERPRISES",
    desc: "Secured communication for enterprises and large-scale businesses worldwide",
    img: "/enterprise.svg",
  },
  {
    title: "HOSTED PLATFORMS",
    desc: "Hosted mobile IP and switching solutions with a flexibility of monthly payment option",
    img: "/hosted.svg",
  },
];

export default function CuttingEdg() {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
      {/* 🔹 Heading */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Cutting Edge Solution for <br className="hidden md:block" />
          Your Business
        </h2>
      </div>

      {/* 🔥 Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#F3F4F6] rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Image */}
            <div className="flex justify-center mb-4">
              <Image
                src={item.img}
                alt={item.title}
                width={120}
                height={120}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

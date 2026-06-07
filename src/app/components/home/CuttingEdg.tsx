"use client";

import Image from "next/image";

const data = [
  {
    title: "Artificial Intelligence",
    desc: "Advanced AI-powered solutions with automation, intelligent chatbots, predictive analytics, and more. Scalable, high-performance, and built for the future.",
    img: "/home/cutting-img/Ai1.png",
  },
  {
    title: "SMS & SaaS Services",
    desc: "Custom white-label SMS and SaaS platforms for service providers, enterprises, and resellers. Secure, scalable, and supported 24/7 with flexible deployment options.",
    img: "/home/cutting-img/services.svg",
  },
  {
    title: "ENTERPRISES",
    desc: "Secure and reliable communication solutions designed for large enterprises and global businesses.",
    img: "/home/cutting-img/enterprise.svg",
  },
  {
    title: "VPS Server Platform",
    desc: "High-performance VPS hosting with scalable cloud infrastructure, dedicated resources, secure networking, and 24/7 monitoring. Flexible monthly plans for maximum convenience.",
    img: "/home/cutting-img/hosted.svg",
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
            <p className="text-gray-500 text-md sm:text-lg leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

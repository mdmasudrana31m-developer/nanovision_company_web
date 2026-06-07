"use client";

import { TbMessages } from "react-icons/tb";
import { RiGlobalFill } from "react-icons/ri";
import { GiServerRack } from "react-icons/gi";
import { IoLayers } from "react-icons/io5";
import Button from "@/app/utils/Button";
const products = [
  {
    icon: TbMessages,
    title: "Bulk SMS & WhatsApp Platform",
    desc: "A powerful communication platform for sending promotional, transactional, and OTP messages through SMS and WhatsApp with real-time delivery reports, API integration, and campaign management tools.",
  },
  {
    icon: RiGlobalFill,
    title: "Cloud PABX & IP Telephony System",
    desc: "Advanced cloud-based calling solution with IVR, call recording, extension management, and virtual numbers to help businesses manage customer communication efficiently from anywhere.",
  },
  {
    icon: GiServerRack,
    title: "ERP & Distribution Management Software",
    desc: "Complete business automation solution for inventory, sales, dealer management, delivery tracking, accounting, and order processing designed for wholesale and distribution companies.",
  },
  {
    icon: IoLayers, // 🔹 optional: 4th ta lucide thaklo
    title: "VPS & Cloud Hosting Platform",
    desc: "Secure and scalable VPS hosting infrastructure with high uptime, SSD storage, dedicated resources, and flexible monthly plans for hosting websites, applications, and enterprise systems.",
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gray-100">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Our Products
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-10 h-10 text-blue-600" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-md sm:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="min-w-50   mt-10 md:mt-14">
        <Button buttonText="Explore All Products" />
      </div>
    </section>
  );
}

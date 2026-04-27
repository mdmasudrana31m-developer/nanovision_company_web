"use client";


import { TbMessages, } from "react-icons/tb";
import { RiGlobalFill } from "react-icons/ri";
import { GiServerRack } from "react-icons/gi";
import { IoLayers } from "react-icons/io5";
const products = [
  {
    icon: TbMessages,
    title: "SMS Platform",
    desc: "All-in-one solution designed for wholesale and retail SMS trading, large-scale campaigns, and reselling",
  },
  {
    icon: RiGlobalFill,
    title: "Virtual Roaming Solution",
    desc: "App-based virtual roaming enables subscribers borderless communication without bilateral agreements",
  },
  {
    icon: GiServerRack,
    title: "Class 5 Softswitch",
    desc: "Versatile Softswitch platform offering retail, wholesale, and hybrid IP solutions with integrated billing",
  },
  {
    icon: IoLayers, // 🔹 optional: 4th ta lucide thaklo
    title: "Self-Serving Wholesale Platform",
    desc: "Unified platform for Voice, SMS, and DID services, enabling global telecom businesses",
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gray-100">
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

              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10 md:mt-14">
        <button className="px-6 py-2 md:px-8 md:py-3 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
          Explore All
        </button>
      </div>
    </section>
  );
}

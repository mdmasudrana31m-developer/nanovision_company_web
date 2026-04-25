"use client";

import React from "react";
import { IconType } from "react-icons";
import { BiCodeBlock } from "react-icons/bi";
import {
  TbDeviceImacCode,
  TbDeviceMobileCode,
  TbSettingsCode,
} from "react-icons/tb";
import { GrSettingsOption } from "react-icons/gr";
import { TiWeatherStormy } from "react-icons/ti";

interface CardItem {
  Icon: IconType;
  text: string;
}

export const OutSourcing = () => {
  const services: CardItem[] = [
    { Icon: BiCodeBlock, text: "Custom Software Development" },
    { Icon: TbDeviceImacCode, text: "Web Application Development" },
    { Icon: TbDeviceMobileCode, text: "Mobile App Development" },
    { Icon: TbSettingsCode, text: "Enterprise Software Development" },
    { Icon: GrSettingsOption, text: "ERP Development" },
    { Icon: TiWeatherStormy, text: "Cloud Engineering & DevOps" },
  ];

  const loopItems = [...services, ...services];

  return (
    <section className="w-full bg-[#FAFAFA] py-12 md:py-16 overflow-hidden">
      <div className="w-full">
        {/* 🔹 Heading */}
        <div className="text-center mb-10 px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-neutral-900">
            Outsourcing Services We Offer
          </h2>
        </div>

        {/* 🔥 Row 1 */}
        <div className="relative w-full overflow-hidden mb-6">
          <div className="flex gap-4 md:gap-6 animate-scroll px-4">
            {loopItems.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>

        {/* 🔥 Row 2 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 md:gap-6 animate-scroll-reverse px-4">
            {loopItems.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scrollReverse 20s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll,
          .animate-scroll-reverse {
            animation-duration: 12s;
          }
        }
      `}</style>
    </section>
  );
};

// 🔥 Card Component
const Card: React.FC<{ item: CardItem }> = ({ item }) => {
  const Icon = item.Icon;

  return (
    <div
      className="
      group
      bg-white
      border border-slate-200
      rounded-xl
      p-4 md:p-5
      shrink-0
      w-[260px] sm:w-[300px] md:w-[320px] lg:w-[340px]
      transition-all duration-300 ease-in-out

      hover:bg-gray-100
      hover:scale-105
      "
    >
      <div className="flex mb-4 justify-center">
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-500 group-hover:text-blue-600 transition" />
      </div>

      <p className="text-neutral-700 text-sm md:text-base text-center">
        {item.text}
      </p>
    </div>
  );
};

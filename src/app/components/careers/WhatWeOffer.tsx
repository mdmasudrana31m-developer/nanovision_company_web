"use client";

import {
  BriefcaseBusiness,
  UserRoundPen,
  HeartPulse,
  UtensilsCrossed,
  Clock3,
  HandHeart,
} from "lucide-react";

const offers = [
  {
    icon: BriefcaseBusiness,
    title: "Career Development Programs",
  },
  {
    icon: UserRoundPen,
    title: "Personal Development Programs",
  },
  {
    icon: HeartPulse,
    title: "Gymnasium and recreational tools",
  },
  {
    icon: UtensilsCrossed,
    title: "Buffet meals, Breakfast & snacks",
  },
  {
    icon: Clock3,
    title: "Flexible work schedule for work-life balance",
  },
  {
    icon: HandHeart,
    title: "Meditation for greater focus and concentration",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-[#f5f5f7] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            className="
              text-[40px]
              sm:text-[52px]
              lg:text-[64px]
              leading-[1]
              tracking-[-2px]
              font-semibold
              text-[#111827]
              mb-6
            "
          >
            What We Offer
          </h2>

          <p
            className="
              text-[#4B5563]
              text-[16px]
              sm:text-[18px]
              leading-[1.8]
            "
          >
            When it comes to our benefits and perks, we have everything you’d
            expect from a good company
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-center lg:gap-8">
          {offers.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[18px]
                  p-2
                  sm:p-4
                  min-h-[120px]
                  flex
                  flex-col
                  justify-start
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-[45px]
                    h-[45px]
                    rounded-full
                    bg-[#EEF2FF]
                    flex
                    items-center
                    justify-center
                    mb-4
                  "
                >
                  <Icon size={23} className="text-[#4F6FAE]" strokeWidth={2} />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-[#111827]
                    text-[16px]
                    sm:text-[16px]
                    font-medium  mb-2
                  "
                >
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

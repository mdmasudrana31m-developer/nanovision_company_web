"use client";

import {
  Code2,
  Monitor,
  Smartphone,
  Settings,
  Database,
  Cloud,
  Shield,
  Cpu,
  Landmark,
  Brain,
  Bug,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software Development" },
  { icon: Monitor, title: "Web Application Development" },
  { icon: Smartphone, title: "Mobile App Development" },
  { icon: Settings, title: "Enterprise Software Development" },
  { icon: Database, title: "ERP Development" },
  { icon: Cloud, title: "Cloud Engineering & DevOps" },
  { icon: Bug, title: "QA Testing & Automation" },
  { icon: Database, title: "Data Engineering" },
  { icon: Brain, title: "AI & ML Development" },
  { icon: Shield, title: "Cyber Security" },
  { icon: Cpu, title: "Fintech Software Development" },
  { icon: Landmark, title: "Banking Solutions" },
  { icon: Settings, title: "Digital Transformation" },
];

export default function WeService() {
  return (
    <section className="w-full bg-[#0B0F2A] py-16 px-4 md:px-8 lg:px-16 text-white">
      
      {/* 🔹 Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Services We Offer
        </h2>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Every idea starts as a spark. We turn that spark into powerful software,
          addictive mobile apps, and flawless products. Our developers build the
          backbone of your digital journey, our mobile experts craft apps users
          love, and our QA team ensures everything is unbreakable.
        </p>
      </div>

      {/* 🔥 Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {services.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="
                bg-white/10 
                backdrop-blur-md 
                border border-white/10 
                rounded-2xl 
                p-6 
                flex flex-col items-start
                gap-4
                transition duration-300
                hover:bg-white/20
                hover:scale-105
              "
            >
              {/* Icon */}
              <Icon className="w-6 h-6 text-gray-200" />

              {/* Title */}
              <h3 className="text-sm md:text-base font-medium text-gray-100 leading-snug">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
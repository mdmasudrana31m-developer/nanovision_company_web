"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/dist/client/link";

const slides = [
  {
    title: "Scalable and Secured Platform for Retail & Wholesale SMS Business",
    desc: "An all-in-one A2P, P2P, and P2A platform with multi-protocol and SIGTRAN support, enabling faster delivery and higher success rates. Manage SMS and WhatsApp campaigns together with rich messaging and detailed tracking from one unified system.",
    img: "/hero1.webp",
    button: "Get a Free Demo",
    LernMore: "Learn More",
  },
  {
    title: "Next-Gen Outsourcing Solutions",
    desc: " We deliver reliable, enterprise-grade solutions that you can count on. Our dedicated teams seamlessly integrate with your workflows, combining deep expertise, agile delivery, and best-in-class practices to accelerate projects, reduce costs, and drive measurable business outcomes.",
    img: "/hero2.webp",
    LearnMore: "Learn More",
  },
  {
    title: "Self-Serving Platform for Wholesale Telecom Businesses",
    desc: "An award-winning unified platform for international voice, SMS, and DID buy/sell. Streamline your wholesale operations with automated business processes, advanced analytics, and collaboration tools.",
    img: "/hero3.webp",
    button: "Get a Free Demo",
    LearnMore: "Learn More",
  },
  {
    title: "AI-Enhanced Voice, Video & Messaging Apps",
    h3: "Customized IP Calling & Messaging Solution for <br> Communication Service Providers",
    desc: "Launch your market-ready IP communication App — join the next generation of global connectivity seamlessly integrate voice, video, and messaging into your applications and websites with ease. Powered by advanced AI voice suppression and engineered for optimal performance — even in low-bandwidth environments",
    img: "/hero4.webp",
    button: "Get a Free Demo",
  },
  {
    title: "AI-Powered Cloud PABX & Contact Center for Growing Enterprises",
    desc: "We bring AI-powered voice bot & chatbot, advanced call routing, and multichannel communication into one enterprise-ready platform, helping large teams handle high call volumes with speed, accuracy, and consistency.",
    img: "/cloud.webp",
    LearnMore: "Learn More",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="relative w-full min-h-[550px] md:h-[600px] flex items-center justify-center px-4 md:px-8 lg:px-16 py-12 md:py-0">
      <div className="max-w-7xl w-full min-h-full flex flex-col justify-between items-center overflow-hidden">
        {/* 🔹 Left Background Shape */}
        <div className="absolute left-0 top-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-full opacity-100 pointer-events-none">
          <Image
            src="/bg.webp"
            alt="Background"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 500px"
            priority
          />
        </div>

        {/* 🔥 Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col md:flex-row items-center justify-between gap-10"
          >
            {/* 🔹 Left Content */}
            <div className="max-w-xl md:max-w-2xl text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {slides[index].title}
              </h1>

              {slides[index].h3 && (
                <h4
                  className="text-lg sm:text-xl md:text-2xl font-semibold mb-4"
                  dangerouslySetInnerHTML={{ __html: slides[index].h3 }}
                />
              )}

              <p className="text-gray-600 mb-8 md:mb-12 text-sm sm:text-base">
                {slides[index].desc}
              </p>

              {/* 🔹 Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                {slides[index].button && (
                  <Link
                    href="/demo"
                    className="revesoft_common_demo_btn px-6 py-3 rounded-xl text-center"
                    data-content="Get a Free Demo"
                  >
                    {slides[index].button}
                  </Link>
                )}

                {slides[index].LearnMore && (
                  <button className="px-6 py-2 border border-gray-600 text-gray-600 rounded-md hover:bg-gray-600 hover:text-white transition">
                    {slides[index].LearnMore}
                  </button>
                )}
              </div>
            </div>

            {/* 🔹 Right Image */}
            <div className="w-full flex justify-center md:justify-end max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]">
              <Image
                src={slides[index].img}
                alt="hero"
                width={750}
                height={750}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 🔻 Dots */}
        <div className="absolute bottom-4 md:bottom-6 w-full flex justify-center items-center gap-3">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)} // 👈 click করলে ওই slide show
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                i === index ? "w-4 h-4 bg-blue-600" : "w-2 h-2 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

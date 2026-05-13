"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/dist/client/link";
import Button from "@/app/utils/Button";

const slides = [
  {
    title:
      "Custom AI Chatbot & Virtual Assistant for Smart Customer Engagement",
    alt: "Chatbot",
    desc: "Deliver instant, human-like customer support with our AI-powered custom chatbot solution. From website live chat to WhatsApp, Facebook, and mobile apps, automate conversations, answer queries 24/7, generate leads, and improve customer satisfaction with intelligent multilingual communication.",
    img: "/home/chatbot.jpeg",
    button: "Get a Free Demo",
    LernMore: "Learn More",
  },
  {
    title: "Advanced Big Data Analytics & Business Intelligence Solutions",
    alt: "Big Data",
    desc: " Turn massive volumes of structured and unstructured data into actionable business insights with our AI-powered big data analytics platform. Monitor real-time performance, predict trends, optimize operations, and make data-driven decisions using intelligent dashboards, machine learning, and cloud-scale processing.",
    img: "/home/BigData.jpeg",
    LearnMore: "Learn More",
  },
  {
    title: "Custom ERP & Cybersecurity Solutions for Modern Enterprises",
    alt: "Custom ERP",
    desc: "Streamline business operations and protect critical digital assets with our custom ERP and cybersecurity solutions. From finance, HR, inventory, and workflow automation to advanced threat detection, data protection, and secure cloud infrastructure, we deliver scalable software tailored to your business needs.",
    img: "/home/CustomERP.jpeg",
    button: "Get a Free Demo",
    LearnMore: "Learn More",
  },
  {
    title: "AI-Enhanced Voice, Video & Messaging Apps",
    alt: "",
    h3: "Customized IP Calling & Messaging Solution for <br> Communication Service Providers",
    desc: "Launch your market-ready IP communication App — join the next generation of global connectivity seamlessly integrate voice, video, and messaging into your applications and websites with ease. Powered by advanced AI voice suppression and engineered for optimal performance — even in low-bandwidth environments",
    img: "/hero4.webp",
    button: "Get a Free Demo",
  },
  {
    title: "AI-Powered Cloud PABX & Contact Center for Growing Enterprises",
    alt: "",
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[550px] md:h-[600px] flex items-center justify-center px-4 md:px-8 lg:px-16 py-12 md:py-0">
      <div className="max-w-7xl  w-full min-h-full flex flex-col justify-between items-center overflow-hidden">
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
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start  md:ml-4 ">
                {slides[index].button && (
                  <div className="min-w-50 ">
                    <Link href="/demo" className="bg-amber-600">
                      <Button buttonText={slides[index].button} />
                    </Link>
                  </div>
                )}

                {slides[index].LearnMore && (
                  <button className="px-6 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-600 hover:text-white transition cursor-pointer">
                    {slides[index].LearnMore}
                  </button>
                )}
              </div>
            </div>

            {/* 🔹 Right Image */}
            <div className="w-full flex justify-center md:justify-end max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]">
              <Image
                src={slides[index].img}
                alt={slides[index].alt}
                width={800}
                height={800}
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

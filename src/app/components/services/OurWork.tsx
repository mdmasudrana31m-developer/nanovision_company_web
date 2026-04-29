"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function OurWork() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // 📱 screen detect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.children[0] as HTMLElement | undefined;
    if (!card) return;

    const style = window.getComputedStyle(container);
    const gap = parseInt(style.columnGap || "32", 10);

    const cardWidth = card.clientWidth + gap;
    const moveCount = window.innerWidth < 768 ? 1 : 3;

    container.scrollBy({
      left: dir === "left" ? -cardWidth * moveCount : cardWidth * moveCount,
      behavior: "smooth",
    });

    // 🔥 pause auto scroll
    setIsPaused(true);

    // 🔥 resume after 4 sec
    setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  // 🔥 AUTO SCROLL
  useEffect(() => {
    if (isMobile || isPaused) return;

    const interval = setInterval(() => {
      scroll("right");
    }, 2500);

    return () => clearInterval(interval);
  }, [isMobile, isPaused]);

  const data = Array(20).fill({
    title: "AI SaaS Platform",
    desc: "Modern AI based automation system",
    img: "/ourworkimg/marcent-billing.webp",
  });

  return (
    <section className="py-20 bg-gray-100">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Latest Works
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Innovation in action. Every project you see represents a unique
          challenge we’ve solved and a powerful solution we’ve built to help a
          business thrive.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-[1300px] mx-auto px-4">
        {/* Desktop arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white shadow w-10 h-10 rounded-full items-center justify-center"
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white shadow w-10 h-10 rounded-full items-center justify-center"
        >
          →
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="
              min-w-full
              sm:min-w-[90%]
              md:min-w-[calc((100%-64px)/3)]
              bg-white rounded-2xl overflow-hidden shadow-md
              transition-transform duration-300 hover:scale-[1.02]
              "
            >
              {/* Image */}
              <div className="relative h-[200px]">
                <Image src={item.img} alt="" fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

                <button className="text-blue-600 text-sm hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex justify-center gap-6 mt-6 md:hidden">
          <button
            onClick={() => scroll("left")}
            className="bg-white shadow w-10 h-10 rounded-full"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white shadow w-10 h-10 rounded-full"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

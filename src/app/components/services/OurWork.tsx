"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function OurWork() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const data = [
    {
      title: "Auto Care Management System",
      desc: "A complete solution for car and bike service centers to manage vehicle washing, maintenance services, customer bookings, billing, and performance reports with ease.",
      img: "/service-img/our-products/Auto-Mobile.png",
    },

    {
      title: "ConstructPro",
      desc: "Construction Firm Management System is an all-in-one ERP platform that simplifies project, finance, workforce, inventory, and client management for efficient operations.",
      img: "/service-img/our-products/constraction.png",
    },

    {
      title: "Hostel Management System",
      desc: "Hostel Management System streamlines room allocation, resident records, billing, maintenance, and daily operations through a centralized, efficient, and easy-to-manage platform.",
      img: "/service-img/our-products/hostel-management.png",
    },

    {
      title: "MediSchedule Pro",
      desc: "A modern medical appointment management system that simplifies booking, scheduling, patient tracking, and healthcare administration through a secure and user-friendly platform.",
      img: "/service-img/our-products/MediSchedule.png",
    },

    {
      title: "NextGen School Management System",
      desc: "A modern School Management System automates student records, attendance, exams, fee collection, and reporting, improving efficiency, accuracy, and collaboration.",
      img: "/service-img/our-products/Uttar-High-school.jpeg",
    },
  ];

  const handleScrollToBusiness = useCallback(() => {
    const section = document.getElementById("business");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "business";
    }
  }, []);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    setCanScrollLeft(container.scrollLeft > 0);

    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 5,
    );
  };

  useEffect(() => {
    updateScrollButtons();

    const container = scrollRef.current;

    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);

    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.children[0] as HTMLElement;

    if (!card) return;

    const style = window.getComputedStyle(container);
    const gap = parseInt(style.columnGap || "32", 10);

    const cardWidth = card.clientWidth + gap;
    const moveCount = window.innerWidth < 768 ? 1 : 3;

    container.scrollBy({
      left: dir === "left" ? -cardWidth * moveCount : cardWidth * moveCount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-gray-100">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Latest Works
        </h2>

        <p className="text-gray-600 text-md sm:text-lg leading-relaxed">
          Innovation in action. Every project you see represents a unique
          challenge we’ve solved and a powerful solution we’ve built to help a
          business thrive.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-[1300px] mx-auto px-4 md:px-14 xl:px-4">
        {/* Desktop Left Arrow */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="
            hidden md:flex
            absolute
            left-2
            xl:left-[-50px]
            top-1/2
            -translate-y-1/2
            z-10
            bg-white
            shadow
            w-10
            h-10
            rounded-full
            items-center
            justify-center
            disabled:opacity-40
            disabled:cursor-not-allowed
          "
        >
          <IoIosArrowBack />
        </button>

        {/* Desktop Right Arrow */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="
            hidden md:flex
            absolute
            right-2
            xl:right-[-50px]
            top-1/2
            -translate-y-1/2
            z-10
            bg-white
            shadow
            w-10
            h-10
            rounded-full
            items-center
            justify-center
            disabled:opacity-40
            disabled:cursor-not-allowed
          "
        >
          <IoIosArrowForward />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-8
            overflow-x-auto
            scroll-smooth
            no-scrollbar
          "
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="
                min-w-full
                sm:min-w-[90%]
                md:min-w-[calc((100%-64px)/3)]
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-md
                transition-transform
                duration-300
              "
            >
              {/* Image */}
              <div className="relative h-[200px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

                <button
                  className="text-blue-600 text-sm cursor-pointer"
                  onClick={handleScrollToBusiness}
                >
                  Contact for project details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Arrows */}
        <div className="flex justify-center gap-6 mt-6 md:hidden">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="
              bg-white
              shadow
              w-10
              h-10
              rounded-full
              flex
              justify-center
              items-center
              disabled:opacity-40
              disabled:cursor-not-allowed
            "
          >
            <IoIosArrowBack />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="
              bg-white
              shadow
              w-10
              h-10
              rounded-full
              flex
              justify-center
              items-center
              disabled:opacity-40
              disabled:cursor-not-allowed
            "
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

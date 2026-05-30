"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  LayoutDashboard,
  Users,
  FileText,
  BadgeDollarSign,
  Route,
  Megaphone,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  User,
  Settings,
} from "lucide-react";

export default function TrafficBecomes() {
  const tabs = [
    {
      id: 1,
      title: "Login",
      icon: <User size={18} />,
      image: "/sms-platform/traffic-img/Login.webp",
    },

    {
      id: 2,
      title: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      image: "/sms-platform/traffic-img/Dashboard.webp",
    },

    {
      id: 3,
      title: "Client",
      icon: <Users size={18} />,
      image: "/sms-platform/traffic-img/Client.webp",
    },

    {
      id: 4,
      title: "Sender ID",
      icon: <FileText size={18} />,
      image: "/sms-platform/traffic-img/SenderID.webp",
    },

    {
      id: 5,
      title: "Rates",
      icon: <BadgeDollarSign size={18} />,
      image: "/sms-platform/traffic-img/Rates.webp",
    },

    {
      id: 6,
      title: "Route",
      icon: <Route size={18} />,
      image: "/sms-platform/traffic-img/Route.webp",
    },

    {
      id: 7,
      title: "Campaign",
      icon: <Megaphone size={18} />,
      image: "/sms-platform/traffic-img/Campaign.webp",
    },

    {
      id: 8,
      title: "Reports",
      icon: <BarChart3 size={18} />,
      image: "/sms-platform/traffic-img/Report.webp",
    },

    {
      id: 9,
      title: "Settings",
      icon: <Settings size={18} />,
      image: "/sms-platform/traffic-img/Settings.webp",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  // 🔥 AUTO CHANGE TAB
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, tabs.length]);

  // 🔥 ACTIVE BUTTON AUTO SCROLL

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const activeButton = container.children[activeTab] as HTMLElement;

    if (activeButton) {
      container.scrollTo({
        left:
          activeButton.offsetLeft -
          container.clientWidth / 2 +
          activeButton.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  useEffect(() => {
    if (autoPlay) return;

    const timer = setTimeout(() => {
      setAutoPlay(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, [activeTab, autoPlay]);

  const nextSlide = () => {
    setAutoPlay(false);
    setDirection(1);
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  const prevSlide = () => {
    setAutoPlay(false);
    setDirection(-1);
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  return (
    <section className="w-full bg-[#f5f6fa] py-16 md:py-24 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="text-center max-w-5xl mx-auto">
          <h2
            className="
              text-[#111827]
              font-bold
              leading-tight
              text-[34px]
              sm:text-[46px]
              md:text-[58px]
            "
          >
            Where Messaging Traffic Becomes Revenue
          </h2>

          <p
            className="
              mt-6
              text-[#4B5563]
              leading-[1.9]
              text-[16px]
              sm:text-[18px]
              md:text-[22px]
            "
          >
            A next-generation messaging platform with cloud-scale architecture,
            multi-protocol and SIGTRAN support, and intelligent automation,
            designed to handle millions of messages per hour while managing SMS
            and WhatsApp campaigns from a single platform.
          </p>
        </div>

        {/* TABS */}
        <div
          ref={scrollRef}
          className="
            mt-14
            flex
            gap-4
            overflow-x-auto
            scrollbar-hide
            pb-3
            no-scrollbar
            scroll-smooth
          "
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => {
                setAutoPlay(false);
                setActiveTab(index);
              }}
              className={`
                flex
                items-center
                gap-3
                px-4
                py-2
                rounded-xl
                border
                whitespace-nowrap
                transition-all
                duration-500
                min-w-fit

                ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#5B6CF0] to-[#7087ff] text-white border-transparent shadow-xl scale-[1.04]"
                    : "bg-white text-[#111827] border-gray-300 hover:border-[#5B6CF0]"
                }
              `}
            >
              {tab.icon}

              <span className="text-[16px] font-medium">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* IMAGE SECTION */}
        <div className="relative max-w-4xl mx-auto mt-10">
          {/* LEFT ARROW DESKTOP */}
          <button
            onClick={prevSlide}
            className="
    hidden lg:flex
    absolute
    top-1/2
    -translate-y-1/2
    -left-[60px]
    z-30
    w-12
    h-12
    rounded-full
    bg-gray-500
    text-white
    shadow-lg
    items-center
    justify-center
    hover:scale-110
    transition
  "
          >
            <ChevronLeft size={24} />
          </button>

          {/* RIGHT ARROW DESKTOP */}
          <button
            onClick={nextSlide}
            className="
    hidden lg:flex
    absolute
    top-1/2
    -translate-y-1/2
    -right-[60px]
    z-30
    w-12
    h-12
    rounded-full
    bg-gray-500
    text-white
    shadow-lg
    items-center
    justify-center
    hover:scale-110
    transition
  "
          >
            <ChevronRight size={24} />
          </button>

          {/* IMAGE */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[22px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tabs[activeTab].image}
                initial={{
                  x: direction > 0 ? 300 : -300,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: direction > 0 ? -300 : 300,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MOBILE NAVIGATION */}
          <div className="flex lg:hidden justify-center gap-4 mt-5">
            <button
              onClick={prevSlide}
              className="
      w-12
      h-12
      rounded-full
      bg-gray-500
      text-white
      flex
      items-center
      justify-center
      shadow-lg
      hover:scale-110
      transition
    "
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="
      w-12
      h-12
      rounded-full
      bg-gray-500
      text-white
      flex
      items-center
      justify-center
      shadow-lg
      hover:scale-110
      transition
    "
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // 👉 mobile এ গেলে scroll effect off
      if (window.innerWidth < 768) {
        setScrolled(false);
      } else {
        // 👉 desktop এ থাকলে scroll অনুযায়ী update
        setScrolled(window.scrollY > 50);
      }
    };

    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 50);
      }
    };

    // 👉 initial run (very important)
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* 🔥 Animated Background (desktop only effect) */}
      <motion.div
        initial={false}
        animate={{
          maxWidth: scrolled && window.innerWidth >= 768 ? "68%" : "100%",
          borderRadius: scrolled && window.innerWidth >= 768 ? "12px" : "0px",
        }}
        transition={{ duration: 0.4 }}
        className="bg-white w-full mx-auto border-b border-gray-200 shadow-sm"
      >
        {/* 🔹 Content */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* 🔹 Logo */}
          <h1 className="text-2xl font-semibold">
            <Link href="/">
              <span className="text-blue-600 text-3xl md:text-4xl">Nano</span>{" "}
              <span className="text-gray-700">vision</span>
            </Link>
          </h1>

          {/* 🔹 Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {/* Products */}

            <li className="relative group">
              {/* MENU BUTTON */}
              <span className="flex items-center gap-1 cursor-pointer py-2">
                Products <IoIosArrowDown />
              </span>

              {/* DROPDOWN */}
              <div
                className="
      absolute left-0 top-full pt-3
      opacity-0 invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all duration-300
      z-50
    "
              >
                <div className="bg-white shadow-xl rounded-xl min-w-[180px] p-3 flex flex-col gap-3">
                  <div className="absolute left-0 top-8 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[500px]">
                    <div className="grid grid-cols-2 gap-4">
                      <Link href="#">Call Center Solution</Link>
                      <Link href="#">Bulk SMS</Link>
                      <Link href="#">Cloud Telephony</Link>
                      <Link href="#">Communication API</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link href="/services">Services</Link>
            </li>

            {/* Company */}

            <li className="relative group">
              {/* MENU BUTTON */}
              <span className="flex items-center gap-1 cursor-pointer py-2">
                Company <IoIosArrowDown />
              </span>

              {/* DROPDOWN */}
              <div
                className="
      absolute left-0 top-full pt-3
      opacity-0 invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all duration-300
      z-50
    "
              >
                <div className="bg-white shadow-xl rounded-xl min-w-[180px] p-3 flex flex-col gap-3">
                  <Link
                    href="/about-us"
                    className="hover:text-blue-600 transition"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/careers"
                    className="hover:text-blue-600 transition"
                  >
                    Careers
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* 🔹 Mobile Menu Icon */}
          <div className="md:hidden">
            <FiMenu
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </motion.div>

      {/* 🔥 Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed top-0 left-0 h-full w-[260px] bg-white z-50 shadow-lg p-6"
            >
              {/* Close */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg">Menu</h2>
                <FiX
                  size={24}
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>

              {/* Menu Items */}
              <div
                className="flex flex-col gap-4 text-gray-700 "
                onClick={() => setOpen(false)}
              >
                <Link href="#">Products</Link>
                <Link href="/services">Services</Link>
                <Link href="#">Company</Link>
                <Link href="#">Blog</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about-us">About-Us</Link>

                <Link
                  href="/demo"
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-center"
                >
                  Get a Free Demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

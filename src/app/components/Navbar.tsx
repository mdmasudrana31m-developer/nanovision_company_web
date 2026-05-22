"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // 👉 only 1024px+ screen এ animation হবে
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const largeDesktop = window.innerWidth >= 1030;

      setIsLargeDesktop(largeDesktop);

      if (!largeDesktop) {
        setScrolled(false);
      } else {
        setScrolled(window.scrollY > 50);
      }
    };

    const handleScroll = () => {
      if (window.innerWidth >= 1030) {
        setScrolled(window.scrollY > 50);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-0 ">
      {/* 🔥 Animated Navbar */}
      <motion.div
        initial={false}
        animate={{
          width: scrolled && isLargeDesktop ? "63%" : "100%",

          scale: scrolled && isLargeDesktop ? 0.96 : 1,

          marginTop: scrolled && isLargeDesktop ? "10px" : "0px",

          borderRadius: scrolled && isLargeDesktop ? "18px" : "0px",

          y: scrolled && isLargeDesktop ? 6 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="
          bg-white
          border border-gray-200
          shadow-sm
          origin-top
          will-change-transform
        "
        style={{
          transformOrigin: "top center",
        }}
      >
        {/* 🔹 Content */}
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* 🔹 Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="NanoVision Logo"
              width={150}
              height={40}
              priority
              className="object-contain w-[130px] md:w-[150px] h-auto"
            />
          </Link>

          {/* 🔹 Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {/* Products */}
            <li className="relative group">
              {/* MENU BUTTON */}
              <span className="flex items-center gap-1 cursor-pointer py-2 text-[20px]">
                Products
                <IoIosArrowDown
                  size={18}
                  className="
        transition-transform
        duration-300
        ease-in-out
        group-hover:-rotate-180
      "
                />
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
                <div className="min-w-[180px] p-3 flex flex-col gap-3">
                  <div className="absolute left-0 top-4 bg-white shadow-lg rounded-md p-6 w-[500px]">
                    <div className="grid grid-cols-2 gap-4">
                      <Link href="#">SMS Platform</Link>

                      <Link href="#">Live Chat</Link>

                      <Link href="#">
                        Mobile Session Border Controller (SBC)
                      </Link>

                      <Link href="#">WhatsApp Campaign</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Services */}
            <li>
              <Link href="/services" className="text-[20px]">
                Services
              </Link>
            </li>

            {/* Company */}
            <li className="relative group">
              {/* MENU BUTTON */}
              <span className="flex items-center gap-1 cursor-pointer py-2 text-[20px]">
                Company{" "}
                <IoIosArrowDown
                  size={18}
                  className="
        transition-transform
        duration-300
        ease-in-out
        group-hover:-rotate-180
      "
                />
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

            {/* Blog */}
            <li>
              <Link href="#" className="text-[20px]">
                Blog
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link href="/contact" className="text-[20px]">
                Contact
              </Link>
            </li>
          </ul>

          {/* 🔹 Mobile Menu */}
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
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              className="
                fixed
                top-0
                left-0
                h-full
                w-[260px]
                bg-white
                z-50
                shadow-lg
                p-6
              "
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
                className="flex flex-col gap-4 text-gray-700"
                onClick={() => setOpen(false)}
              >
                <Link href="/">Home</Link>

                <Link href="#">Products</Link>

                <Link href="/services">Services</Link>

                <Link href="/careers">Careers</Link>

                <Link href="/contact">Contact</Link>

                <Link href="/about-us">About Us</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

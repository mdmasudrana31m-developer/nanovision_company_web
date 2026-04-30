"use client";

import { MapPin, Phone, Building2 } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";

export default function OfficeLocation() {
  const handleScrollToBusiness = useCallback(() => {
    const section = document.getElementById("business");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "business";
    }
  }, []);

  return (
    <section className="py-20 mt-15 lg:mt-25 bg-gray-100">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Office</h2>
        <p className="text-gray-600 text-sm md:text-base">
          We operate from key locations across the world. Here is our Bangladesh
          office.
        </p>
      </div>

      {/* SINGLE CARD */}
      <div className="max-w-4xl mx-auto  flex flex-col items-center justify-center px-4">
        <div
          className="bg-white rounded-2xl overflow-hidden 
    shadow-[0_10px_30px_rgba(0,0,0,0.08),0_4px_10px_rgba(0,0,0,0.05)]
    hover:shadow-[0_20px_50px_rgba(0,0,0,0.12),0_8px_20px_rgba(0,0,0,0.08)]
    transition-all duration-300
    hover:-translate-y-1   "
        >
          {/* Header */}
          <div className="bg-purple-100 px-6 py-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Bangladesh</h3>

            {/* Flag */}
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            {/* Address */}
            <div className="flex gap-3">
              <MapPin className="text-gray-500 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p className="text-gray-600 text-sm">
                  REVE Centre, Plot-94, Purbachal Express Highway, Dumni,
                  Khilkhet, Dhaka 1229, Bangladesh
                </p>
              </div>
            </div>

            <hr className="border-t-2 border-gray-300 my-4" />
            {/* Sales */}
            <div className="flex gap-3">
              <Phone className="text-gray-500 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-800">Sales</p>
                <p className="text-gray-600 text-sm">+880 1811-412834</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex gap-3">
              <Building2 className="text-gray-500 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-800">Office</p>
                <p className="text-gray-600 text-sm">+880 09606738300</p>
              </div>
            </div>

            <hr className="border-t-2 border-gray-300 " />

            {/* Map */}
            <Link
              href="https://www.google.com/maps/place/Boikali+Bazar/@22.8418467,89.5335217,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff9a90e51fdad5:0xd3b1f4bdfcee5740!8m2!3d22.8418418!4d89.5383926!16s%2Fg%2F1whdgrz5?authuser=1&entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D"
              target="blank"
              className="flex items-center gap-2 text-blue-600 text-sm hover:underline"
            >
              <MapPin size={19} className="text-gray-500"/> Locate on Map
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            type="button"
            onClick={handleScrollToBusiness}
            className="inline-block w-[220px] bg-white border border-[#0585FF] text-blue-600 font-bold rounded-lg py-3 transition hover:scale-105 hover:bg-blue-50 cursor-pointer"
          >
            Get in Touch with Us
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import Button from "@/app/utils/Button";
import { MapPin, Phone } from "lucide-react";
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
      <div className="max-w-4xl  mx-auto  flex flex-col items-center justify-center px-4">
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
                  337/1,Khondokar Azim Uddin Road West Side Of Goalkhali
                  Busstand,Khalishpur, Khulna.
                </p>
              </div>
            </div>

            <hr className="border-t-2 border-gray-300 my-4" />
            {/* Sales */}
            <div className="flex gap-3">
              <Phone className="text-gray-500 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-800">Contact</p>
                <a
                  href={`https://wa.me/+8801778807497`}
                  target="_blank"
                  className="
                  flex
                  justify-center
                  items-center
                  gap-1
                  flex-wrap
                  text-green-600 
                "
                >
                  <p className="break-all">+8801778807497</p>
                </a>
              </div>
            </div>

            {/* Office */}
          

            <hr className="border-t-2 border-gray-300 " />

            {/* Map */}
            <Link
              href="https://maps.app.goo.gl/3pKV9hy4Ca4coWW5A"
              target="blank"
              className="flex items-center gap-2 text-blue-600 text-sm hover:underline"
            >
              <MapPin size={19} className="text-gray-500" /> Locate on Map
            </Link>
          </div>
        </div>

        <div className="text-center mt-8  min-w-55 ">
          <Button
            buttonText="Get in Touch with Us"
            onClick={handleScrollToBusiness}
          />
        </div>
      </div>
    </section>
  );
}

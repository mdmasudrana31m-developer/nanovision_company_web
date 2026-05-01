"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";

export default function FounderSection() {
  const [open, setOpen] = useState(false);

  // ESC close
  useEffect(() => {
    const handleEsc = (e : KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* MAIN SECTION */}
      <section className="bg-[#f5f6f8] py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-1">
              {/* SMALL TITLE */}
              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#111827] mb-4 sm:mb-6">
                Meet Our Founder & Group CEO
              </p>

              {/* MAIN TITLE */}
              <h2 className="text-[38px] sm:text-[52px] md:text-[64px] lg:text-[72px] leading-[1.05] font-semibold text-[#111827] mb-6 sm:mb-8">
                M Rezaul Hassan
              </h2>

              {/* TEXT */}
              <div className="space-y-6 sm:space-y-8 text-[#4b5563] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.8]">
                <p>
                  M Rezaul Hassan is the founding Group CEO of REVE Systems,
                  which he established in 2003 after holding CXO roles in
                  several leading IT and Internet service providers. Under his
                  visionary leadership and with a dedicated team, REVE Group has
                  grown into a major global solution provider in the IP and
                  telecommunication sector, serving customers in over 80
                  countries.
                </p>

                <p>
                  Mr. Hassan holds an engineering degree and an MBA from the
                  prestigious Institute of Business Administration (IBA),
                  University of Dhaka. Widely recognized as an authority in IP
                  communications.
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="mt-8 sm:mt-10 flex items-center gap-3 bg-[#eef0ff] hover:bg-[#dfe4ff] transition-all duration-300 rounded-full  px-2 py-2 group hover:scale-105"
              >
                <span className="text-[#111827] font-medium text-[15px] sm:text-[17px]">
                  See More
                </span>

                <div className="w-6 h-6 rounded-full bg-[#6c63ff] flex items-center justify-center">
                  <Plus size={16} className="text-white" />
                </div>
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] w-full max-w-[520px] shadow-xl">
                <Image
                  src="/about-us/founder.png"
                  alt="Founder"
                  width={520}
                  height={700}
                  priority
                  className="w-full h-auto object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto">
          {/* CENTER */}
          <div className="min-h-full flex items-center justify-center p-3 sm:p-2 md:p-2">
            {/* MODAL BOX */}
            <div className="relative bg-white rounded-2xl w-full max-w-5xl shadow-2xl animate-[fadeIn_.3s_ease] overflow-hidden">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 sm:top-1 sm:right-1 z-30 w-10 h-10 rounded-full bg-black flex items-center justify-center hover:scale-110 transition"
              >
                <X className="text-white" size={18} />
              </button>

              {/* CONTENT */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_.9fr] gap-8 lg:gap-6 items-center p-5 sm:px-4 md:px-5 lg:px-6">
                {/* LEFT CONTENT */}
                <div className="order-2 lg:order-1  p-4 sm:p-6 rounded-xl">
                  <h2 className="text-[36px] sm:text-[48px] md:text-[58px] lg:text-[64px] leading-[1.05] font-semibold mb-6 sm:mb-8">
                    M Rezaul Hassan
                  </h2>

                  <div className="text-[15px] sm:text-[17px] md:text-[16px] leading-[1.9]">
                    <p>
                      M Rezaul Hassan is the founding Group CEO of REVE Systems,
                      which he established in 2003 after holding CXO roles in
                      several leading IT and Internet service providers. Under
                      his visionary leadership and with a dedicated team, REVE
                      Group has grown into a major global solution provider in
                      the IP and telecommunication sector, serving customers in
                      over 80 countries. Mr. Hassan holds an engineering degree
                      and an MBA from the prestigious Institute of Business
                      Administration (IBA), University of Dhaka.
                    </p>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-start  p-4 rounded-xl">
                  <div className="relative w-full max-w-[400px] h-[400px] overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px]">
                    <Image
                      src="/about-us/founder.png"
                      alt="Founder"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

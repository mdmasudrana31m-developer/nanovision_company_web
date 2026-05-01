"use client";

import Image from "next/image";
import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function LeadershipMember() {
  const [open, setOpen] = useState(false);

  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const leaders = [
    {
      name: "Monnujan Nargis",
      role: "Director - REVE Group",
      img: "/about-us/image.png",
    },
    {
      name: "Momi Monjili",
      role: "Chief Technical Strategy Officer (CTSO)",
      img: "/about-us/image.png",
    },
    {
      name: "Ajmat Iqbal",
      role: "Director - REVE Group",
      img: "/about-us/image.png",
    },
    {
      name: "Mir Monsoor Hossain",
      role: "Chief Commercial Officer (CCO) & Head of Growth",
      img: "/about-us/image.png",
    },
  ];

  return (
    <>
      <section className="py-16 sm:py-20 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADING */}
          <h2 className="text-[34px] sm:text-[46px] md:text-[58px] leading-none font-semibold text-[#111827] mb-10 sm:mb-14">
            Leadership Team
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {leaders.map((item, index) => (
              <div key={index}>
                {/* IMAGE */}
                <div
                  className="
                relative
                overflow-hidden
                rounded-[22px]
                sm:rounded-[26px]
                bg-white
                aspect-[4/4.6]
                "
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="pt-4">
                  <h3 className="text-[24px] leading-tight font-medium text-[#111827]">
                    {item.name}
                  </h3>

                  <p className="text-[14px] text-[#4B5563] mt-2 leading-relaxed">
                    {item.role}
                  </p>

                  {/* BUTTON */}
                  <button onClick={()=> setOpen(!open)}
                    className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  bg-[#EEF2FF]
                  hover:bg-[#E0E7FF]
                  transition
                  rounded-full
                  px-4
                  py-2
                  text-[13px]
                  font-medium
                  text-[#111827]
                  "
                  >
                    See More
                    <span
                      className="
                    w-5
                    h-5
                    rounded-full
                    bg-[#6366F1]
                    text-white
                    flex
                    items-center
                    justify-center
                    "
                    >
                      <Plus size={12} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
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
                className="absolute top-2.5 right-2.5 lg:right-3 lg:top-3 sm:top-1 sm:right-1 z-30 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-black flex items-center justify-center hover:scale-110 transition"
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

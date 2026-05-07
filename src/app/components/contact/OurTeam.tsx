"use client";

import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const team = [
  {
    region: "Khulna, Bangladesh",
    name: "Saiful Islam",
    post: "Chairman of Nanovision",
    img: "/hero1.webp",
    phone: "+44 7956170990",
    BsWhatsapp: "+44 7956170990",
    email: "quazi.limon@revesoft.com",
    lang: "English, Bangla",
    color: "bg-blue-400",
  },
  {
    region: "Khulna, Bangladesh",
    name: "Salman Rahman",
    post: "Executive Director - Nanovision",
    img: "/hero1.webp",
    phone: "+91 9891863927",
    BsWhatsapp: "+91 9891863927",
    email: "siddharth@revesoft.com",
    lang: "English, Bangla",
    color: "bg-gray-500",
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 flex flex-col justify-center items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Sales Team
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-[1.8]">
          REVE Systems has a team of expert sales professionals based across
          Europe, Africa, Middle East, North America, South America and the Asia
          Pacific regions.
        </p>
      </div>

      {/* GRID */}
      <div
        className="
      w-full
      px-2
      sm:px-4
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-8
      md:gap-10
      lg:gap-16
    "
      >
        {team.map((item, i) => (
          <div
            key={i}
            className="
          bg-white
          rounded-xl
          shadow-sm
          overflow-hidden
          transition-all
          duration-300
          hover:shadow-lg
          hover:scale-110
        "
          >
            {/* TOP BAR */}
            <div
              className={`${item.color} text-center py-3 text-sm font-medium text-white`}
            >
              {item.region}
            </div>

            {/* CONTENT */}
            <div className="p-5 sm:p-6 text-center">
              {/* IMAGE */}
              <div className="w-24 h-24 sm:w-25 sm:h-25 mx-auto mb-4 relative">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold mb-2 break-words">
                {item.name}
              </h3>

              <p className="text-gray-600 mb-3 text-sm sm:text-base">
                {item.post}
              </p>

              <hr className="my-3 border-t-2 border-gray-300" />

              {/* INFO */}
              <div className="text-sm text-gray-600 space-y-2 break-words">
                <p>🌐 {item.lang}</p>

                <p className="break-all">📞 {item.phone}</p>

                <div>
                  <Link
                    href={`https://wa.me/${item.BsWhatsapp}`}
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
                    <BsWhatsapp size={19} />
                    <span className="break-all">{item.BsWhatsapp}</span>
                  </Link>
                </div>

                <p className="break-all">✉️ {item.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

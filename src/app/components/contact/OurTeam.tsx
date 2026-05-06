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
    lang: "English",
    color: "bg-blue-200",
  },
  {
    region: "Khulna, Bangladesh",
    name: "Salman Rahman",
    post: "Executive Director - Nanovision",
    img: "/hero1.webp",
    phone: "+91 9891863927",
    BsWhatsapp: "+91 9891863927",
    email: "siddharth@revesoft.com",
    lang: "English, हिंदी",
    color: "bg-gray-200",
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 flex flex-col justify-center items-center  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Sales Team
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          REVE Systems has a team of expert sales professionals based across
          Europe, Africa, Middle East, North America, South America and the Asia
          Pacific regions.
        </p>
      </div>

      {/* GRID */}
      <div className="min-w-3xl  px-4    grid grid-cols-1 sm:grid-cols-2  gap-16">
        {team.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:scale-130 hover:shadow-lg"
          >
            {/* TOP BAR */}
            <div
              className={`${item.color} text-center py-3 text-sm font-medium`}
            >
              {item.region}
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              {/* IMAGE */}
              <div className="w-25 h-25 mx-auto mb-4  relative">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="rounded-full w-full object-cover"
                  priority
                />
              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-3">{item.post}</p>
              <hr className="my-3 border-t-2 border-gray-300" />

              {/* INFO */}
              <div className="text-sm text-gray-600 space-y-2">
                <p>🌐 {item.lang}</p>
                <p>📞 {item.phone}</p>
                <div>
                  <Link
                    href={`https://wa.me/${item.BsWhatsapp}`}
                    target="_blank"
                    className="flex justify-center items-center gap-1"
                  >
                    <BsWhatsapp size={19} /> <span>{item.BsWhatsapp}</span>
                  </Link>
                </div>

                <p>✉️ {item.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

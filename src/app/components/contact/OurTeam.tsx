"use client";

import Image from "next/image";

const team = [
  {
    region: "Europe, America & Africa",
    name: "Quazi Limon",
    img: "/hero1.webp",
    phone: "+44 7956170990",
    email: "quazi.limon@revesoft.com",
    lang: "English",
    color: "bg-blue-200",
  },
  {
    region: "India & Middle East",
    name: "Siddharth Yadav",
    img: "/hero1.webp",
    phone: "+91 9891863927",
    email: "siddharth@revesoft.com",
    lang: "English, हिंदी",
    color: "bg-gray-200",
  },
  {
    region: "India & Middle East",
    name: "Fayez Kamal",
    img: "/hero1.webp",
    phone: "+91 9999841318",
    email: "fayez@revesoft.com",
    lang: "English, हिंदी",
    color: "bg-orange-200",
  },
  {
    region: "Asia Pacific, Pakistan & Middle East",
    name: "Md Arafat Hossain",
    img: "/hero1.webp",
    phone: "+88 01814655955",
    email: "arafat@revesoft.com",
    lang: "English, বাংলা",
    color: "bg-green-200",
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-gray-100">
      
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
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {team.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:scale-130 hover:shadow-lg"
          >
            
            {/* TOP BAR */}
            <div className={`${item.color} text-center py-3 text-sm font-medium`}>
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
              <h3 className="text-lg font-semibold mb-2">
                {item.name}
              </h3>

              <hr className="my-3" />

              {/* INFO */}
              <div className="text-sm text-gray-600 space-y-2">

                <p>🌐 {item.lang}</p>
                <p>📞 {item.phone}</p>
                <p>✉️ {item.email}</p>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
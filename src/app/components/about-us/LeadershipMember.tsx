"use client";

import Image from "next/image";
import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "@/app/utils/Button";

export default function LeadershipMember() {
  type Leader = {
    name: string;
    role: string;
    img: string;
    detailsText: string;
    detailsImg: string;
  };

  const [open, setOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

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

  // 🔥 ALL DATA
  const leaders = [
    {
      name: "Md Saiful Islam",
      role: "AI Engineer (Chairman of Nanovision)",
      img: "/about-us/team-members/ai engineer.jpeg",

      alt: "ai engineer",

      detailsText:
        "Monnujan Nargis is one of the key leaders of REVE Group. She has played an important role in business development, management, and organizational growth. With strong leadership and strategic planning, she contributes to expanding the company’s global operations and long-term success.",

      detailsImg: "/about-us/team-members/ai engineer.jpeg",
    },

    {
      name: "Sheik Salman Sami",
      role: "Data Analysis (MD of Nanovision)",
      img: "/about-us/team-members/Data analysis.jpeg",

      alt: "Data analysis",

      detailsText:
        "Momi Monjili leads the technology strategy and innovation initiatives of the company. She focuses on advanced software architecture, product scalability, and modern technology solutions to ensure business growth and digital transformation.",

      detailsImg: "/about-us/team-members/Data analysis.jpeg",
    },

    {
      name: "Ajmat Iqbal",
      role: "Data Engineer",
      img: "/about-us/team-members/data engineer.jpeg",

      alt: "data engineer",

      detailsText:
        "Ajmat Iqbal is responsible for strategic business operations and leadership management within REVE Group. His expertise in operations and corporate strategy helps the company maintain sustainable growth in international markets.",

      detailsImg: "/about-us/team-members/data engineer.jpeg",
    },

    {
      name: "Mir Monsoor Hossain",
      role: "Next js Developer",
      img: "/about-us/team-members/next js developer.jpg",

      alt: "next js developer",

      detailsText:
        "Mir Monsoor Hossain oversees commercial operations and business growth strategies. He works closely with global partners and clients to expand market reach and strengthen the company’s commercial success.",

      detailsImg: "/about-us/team-members/next js developer.jpg",
    },

    {
      name: "Mir Monsoor Hossain",
      role: "React Developer",
      img: "/about-us/team-members/react developer.jpg",

      alt: "react developer",

      detailsText:
        "Mir Monsoor Hossain oversees commercial operations and business growth strategies. He works closely with global partners and clients to expand market reach and strengthen the company’s commercial success.",

      detailsImg: "/about-us/team-members/react developer.jpg",
    },

    {
      name: "Md Masud Rana",
      role: "MERN Full Stack Developer",
      img: "/about-us/team-members/react developer.jpeg",

      alt: "react developer",

      detailsText:
        "Mir Monsoor Hossain oversees commercial operations and business growth strategies. He works closely with global partners and clients to expand market reach and strengthen the company’s commercial success.",

      detailsImg: "/about-us/team-members/react developer.jpeg",
    },
    {
      name: "Md Showon Sheikh",
      role: "Senior Backend Developer",
      img: "/about-us/team-members/suner backend develper.jpeg",

      alt: "senior backend develper",

      detailsText:
        "Mir Monsoor Hossain oversees commercial operations and business growth strategies. He works closely with global partners and clients to expand market reach and strengthen the company’s commercial success.",

      detailsImg: "/about-us/team-members/suner backend develper.jpeg",
    },
    {
      name: "Saad",
      role: "Junior Backend Developer",
      img: "/about-us/team-members/junior backend developer.jpeg",

      alt: "junior backend developer",

      detailsText:
        "Mir Monsoor Hossain oversees commercial operations and business growth strategies. He works closely with global partners and clients to expand market reach and strengthen the company’s commercial success.",

      detailsImg: "/about-us/team-members/junior backend developer.jpeg",
    },
    {
      name: "Muhammad Amir Fahad",
      role: "UI_UX Designer",
      img: "/about-us/team-members/UI_UX designer.jpeg",

      alt: "UI_UX designer",

      detailsText:
        "Mir Monsoor Hossain oversees commercial operations and business growth strategies. He works closely with global partners and clients to expand market reach and strengthen the company’s commercial success.",

      detailsImg: "/about-us/team-members/UI_UX designer.jpeg",
    },
    {
      name: "Saifullah",
      role: "Cyber Security Expert",
      img: "/about-us/team-members/cybersecurity expert.jpeg",

      alt: "cybersecurity expert",

      detailsText:
        "Mir Monsoor Hossain oversees commercial operations and business growth strategies. He works closely with global partners and clients to expand market reach and strengthen the company’s commercial success.",

      detailsImg: "/about-us/team-members/cybersecurity expert.jpeg",
    },
    {
      name: "Mir Monsoor Hossain",
      role: "Marketing Officer",
      img: "/about-us/team-members/marketing officer.jpeg",

      alt: "marketing officer",

      detailsText:
        "Mir Monsoor Hossain oversees commercial operations and business growth strategies. He works closely with global partners and clients to expand market reach and strengthen the company’s commercial success.",

      detailsImg: "/about-us/team-members/marketing officer.jpeg",
    },
  ];

  // 🔥 OPEN MODAL
  const handleOpen = (leader: Leader) => {
    setSelectedLeader(leader);
    setOpen(true);
  };

  return (
    <>
      <section className="py-16 sm:py-20 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADING */}
          <h2 className="text-[34px] sm:text-[46px] md:text-[58px] leading-none font-semibold text-[#111827] mb-10 sm:mb-14">
            Leadership Team
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
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
                  <div className="max-w-30 mt-8 sm:mt-10">
                    <Button
                      buttonText="See More"
                      onClick={() => handleOpen(item)}
                      Plus={
                        <Plus
                          size={18}
                          className="text-white bg-gray-600 rounded-full"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && selectedLeader && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto">
          {/* CENTER */}
          <div className="min-h-full flex items-center justify-center p-3 sm:p-2 md:p-2">
            {/* MODAL BOX */}
            <div className="relative bg-white rounded-2xl w-full max-w-5xl shadow-2xl animate-[fadeIn_.3s_ease] overflow-hidden">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2.5 right-2.5 lg:right-3 lg:top-3 sm:top-1 sm:right-1 z-30 w-5 h-5 cursor-pointer lg:w-7 lg:h-7 rounded-full bg-black flex items-center justify-center  transition"
              >
                <X className="text-white" size={15} />
              </button>

              {/* CONTENT */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_.9fr] gap-8 lg:gap-6 justify-center p-5 sm:px-4 md:px-5 lg:px-6">
                {/* LEFT CONTENT */}
                <div className="order-2 lg:order-1  rounded-xl">
                  <h2 className="text-[18px] sm:text-[18px] md:text-[20px]  lg:text-[30px] leading-[1.05] font-semibold ">
                    {selectedLeader.name}
                  </h2>
                  <p>{selectedLeader.role}</p>

                  <div className="text-[15px] mt-10 sm:text-[17px] md:text-[16px] leading-[1.9]">
                    <p>{selectedLeader.detailsText}</p>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-start p-4 rounded-xl">
                  <div className="relative w-full max-w-100 h-100 overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-4xl">
                    <Image
                      src={selectedLeader.detailsImg}
                      alt={selectedLeader.img}
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

"use client";

import Image from "next/image";
import { Eye, X } from "lucide-react";
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
      role: "AI Engineer ",
      img: "/about-us/team-members/ai engineer.jpeg",

      alt: "AI Engineer",

      detailsText:
        "An AI Engineer develops intelligent systems using Artificial Intelligence, Machine Learning, and automation technologies. They design, train, and deploy AI models to solve real-world problems and improve business efficiency. Their work includes building chatbots, recommendation systems, predictive analytics, computer vision applications, and AI-powered web solutions. AI Engineers also process data, optimize model performance, integrate AI into products, and create scalable systems for modern digital experiences. Their goal is to transform data into smart decisions and deliver innovative, efficient, and future-ready solutions.",

      detailsImg: "/about-us/team-members/ai engineer.jpeg",
    },

    {
      name: "Sheik Salman Sami",
      role: "Data Analysis ",
      img: "/about-us/team-members/Data analysis.jpeg",

      alt: "Data analysis",

      detailsText:
        "Data Analysis is the process of collecting, organizing, and analyzing data to discover useful insights and support better decision-making. It helps businesses identify trends, measure performance, and solve problems using data-driven approaches. Data Analysts clean and interpret data, create reports and dashboards, and present information in a clear and meaningful way. Common tools include Excel, SQL, Python, and Power BI. The goal of Data Analysis is to transform raw data into valuable insights that improve efficiency, support growth, and help organizations make smarter business decisions.",

      detailsImg: "/about-us/team-members/Data analysis.jpeg",
    },

    {
      name: "Dip Adnan",
      role: "Data Engineer",
      img: "/about-us/team-members/data engineer.jpeg",

      alt: "data engineer",

      detailsText:
        "A Data Engineer designs, builds, and manages data systems that collect, process, and store large volumes of data efficiently. They create data pipelines, integrate multiple data sources, and ensure data is clean, reliable, and accessible for analysis and business use. Data Engineers work with databases, cloud platforms, and big data technologies to support reporting, analytics, and AI solutions. Common tools include SQL, Python, Apache Spark, ETL processes, and cloud services. Their goal is to build scalable and secure data infrastructure that helps organizations make faster and smarter decisions.",

      detailsImg: "/about-us/team-members/data engineer.jpeg",
    },

    {
      name: "Ehsanul H. Rizvy",
      role: "Next js Developer",
      img: "/about-us/team-members/next js developer.jpg",

      alt: "next js developer",

      detailsText:
        "A Next.js Developer builds fast, scalable, and SEO-friendly web applications using the Next.js framework and React. They develop responsive user interfaces, optimize performance, implement server-side rendering (SSR), static site generation (SSG), and create modern full-stack solutions. Their work includes API integration, routing, authentication, state management, and improving website speed and user experience. Next.js Developers commonly work with JavaScript, TypeScript, React, Tailwind CSS, Node.js, and modern deployment platforms. Their goal is to deliver secure, high-performance, and production-ready web applications for businesses and users.",

      detailsImg: "/about-us/team-members/next js developer.jpg",
    },

    {
      name: "Tasnia Sharin",
      role: "React Developer",
      img: "/about-us/team-members/react developer.jpg",

      alt: "react developer",

      detailsText:
        "A React Developer builds dynamic, responsive, and interactive web applications using React. They create reusable UI components, manage application state, and develop fast and user-friendly interfaces. Their work includes integrating APIs, optimizing performance, implementing modern frontend architecture, and ensuring responsive design across devices. React Developers commonly work with JavaScript, TypeScript, Redux, Tailwind CSS, REST APIs, and modern development tools. Their goal is to deliver scalable, high-performance, and seamless user experiences for modern web applications.",

      detailsImg: "/about-us/team-members/react developer.jpg",
    },

    {
      name: "Md Masud Rana",
      role: "MERN Full Stack Developer",
      img: "/about-us/team-members/MERN-Developer.png",

      alt: "MERN developer",

      detailsText:
        "A MERN Full Stack Developer builds modern, scalable, and high-performance web applications using MongoDB, Express.js, React, and Node.js. They develop both frontend and backend systems, create responsive user interfaces, design REST APIs, manage databases, and ensure seamless application performance. Experienced with Next.js, TypeScript, Prisma, and modern development tools, they build SEO-friendly, secure, and production-ready applications. They also work with authentication, state management, cloud deployment, database optimization, and third-party integrations. Their goal is to deliver efficient, user-focused, and scalable digital solutions for businesses and modern web platforms.",

      detailsImg: "/about-us/team-members/MERN-Developer.png",
    },
    {
      name: "Muhammad Shaon Sheikh ",
      role: "Senior Backend Developer",
      img: "/about-us/team-members/suner backend develper.jpeg",

      alt: "senior backend develper",

      detailsText:
        "A Senior Backend Developer designs, develops, and maintains scalable, secure, and high-performance server-side applications. They build APIs, manage databases, optimize system architecture, and ensure reliable application performance. Their work includes backend development, authentication, cloud integration, microservices, caching, and deployment automation. They commonly work with Node.js, Express.js, TypeScript, Prisma, SQL/NoSQL databases, Redis, Docker, and cloud platforms. Senior Backend Developers also lead technical decisions, improve system scalability, mentor developers, and build robust infrastructures that support modern web applications and business growth.",

      detailsImg: "/about-us/team-members/suner backend develper.jpeg",
    },
    {
      name: "Mushtaq Ahmad Saad",
      role: "Junior Backend Developer",
      img: "/about-us/team-members/junior backend developer.jpeg",

      alt: "junior backend developer",

      detailsText:
        "A Junior Backend Developer develops and maintains server-side applications and supports building secure and efficient backend systems. They work with APIs, databases, authentication, and application logic to ensure smooth functionality and performance. Their responsibilities include writing clean code, integrating frontend with backend services, debugging issues, and learning scalable architecture practices. They commonly work with Node.js, Express.js, SQL/NoSQL databases, REST APIs, TypeScript, and modern development tools. Their goal is to build reliable backend solutions while growing technical skills and contributing to modern web application development",

      detailsImg: "/about-us/team-members/junior backend developer.jpeg",
    },
    {
      name: "Muhammad Amir Fahad",
      role: "UI_UX Designer",
      img: "/about-us/team-members/UI_UX designer.jpeg",

      alt: "UI_UX designer",

      detailsText:
        "A UI/UX Designer creates visually appealing, user-friendly, and engaging digital experiences for web and mobile applications. They focus on understanding user needs, designing intuitive interfaces, improving usability, and enhancing overall user satisfaction. Their work includes user research, wireframing, prototyping, design systems, interaction design, and creating responsive layouts. UI/UX Designers commonly work with tools like Figma, Adobe XD, and modern design practices to transform ideas into functional and attractive digital products. Their goal is to deliver seamless, accessible, and user-centered experiences that improve engagement and business value.",

      detailsImg: "/about-us/team-members/UI_UX designer.jpeg",
    },
    {
      name: "Walid Saifullah Sadi ",
      role: "Cyber Security Expert",
      img: "/about-us/team-members/cybersecurity expert.jpeg",

      alt: "cybersecurity expert",

      detailsText:
        "A Cyber Security Expert protects digital systems, networks, and applications from cyber threats and unauthorized access. They identify security risks, monitor vulnerabilities, implement security measures, and ensure data protection across digital environments. Their work includes network security, ethical security testing, threat detection, incident response, security monitoring, and developing strategies to prevent cyber attacks. Cyber Security Experts commonly work with security tools, cloud platforms, firewalls, encryption, and risk management practices. Their goal is to build secure, reliable, and resilient systems that protect business operations and sensitive information.",

      detailsImg: "/about-us/team-members/cybersecurity expert.jpeg",
    },
    {
      name: "Mithu",
      role: "Marketing Officer",
      img: "/about-us/team-members/marketing officer.jpeg",

      alt: "marketing officer",

      detailsText:
        "A Marketing Officer develops and executes marketing strategies to promote products, services, and brand growth. They analyze market trends, identify customer needs, and create campaigns that increase engagement and business performance. Their work includes digital marketing, content planning, social media management, market research, lead generation, and performance tracking. Marketing Officers commonly use marketing tools, analytics platforms, and communication strategies to reach target audiences effectively. Their goal is to strengthen brand presence, attract customers, and drive sustainable business growth through creative and data-driven marketing initiatives.",

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
                        <Eye
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
                <div className="order-2 lg:order-1 md:mt-8  rounded-xl">
                  <h2 className="text-[18px] sm:text-[18px] md:text-[20px]  lg:text-[30px] leading-[1.05] font-semibold ">
                    {selectedLeader.name}
                  </h2>
                  <p>{selectedLeader.role}</p>

                  <div className="text-[15px] mt-3 sm:text-[17px] md:text-[16px] leading-[1.9]">
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

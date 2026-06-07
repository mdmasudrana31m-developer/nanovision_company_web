import {
  Server,
  MoveUpRight,
  MessageSquareShare,
  ShieldCogCorner,
  ChartNoAxesCombined,
} from "lucide-react";
import { FcOnlineSupport } from "react-icons/fc";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdPriceChange } from "react-icons/md";

export default function WhyNanoVision() {
  const features = [
    {
      icon: <MessageSquareShare size={26} />,
      title: "High-speed message delivery",
      desc: "Deliver SMS messages instantly through our optimized routing network, ensuring timely communication with your customers.",
    },
    {
      icon: <ShieldCogCorner size={26} />,
      title: "Enterprise-Grade Security",
      desc: "Protect sensitive data with advanced security protocols, encrypted transmissions, and secure infrastructure.",
    },
    {
      icon: <Server size={26} />,
      title: "Scalable Infrastructure",
      desc: "Handle thousands to millions of messages effortlessly with a platform designed to grow alongside your business.",
    },
    {
      icon: <MoveUpRight size={26} />,
      title: "Developer-Friendly API",
      desc: "Integrate SMS capabilities quickly and easily using our well-documented, flexible, and reliable API.",
    },
    {
      icon: <ChartNoAxesCombined size={26} />,
      title: "Detailed Reporting & Analytics",
      desc: "Track delivery status, campaign performance, and customer engagement through comprehensive reporting tools.",
    },
    {
      icon: <FcOnlineSupport size={26} />,
      title: "24/7 Technical Support",
      desc: "Receive expert assistance anytime from our dedicated support team to ensure uninterrupted communication.",
    },
    {
      icon: <MdPriceChange size={26} />,
      title: "Competitive pricing",
      desc: "Benefit from cost-effective SMS solutions that maximize value without compromising quality or performance.",
    },
    {
      icon: <GrDocumentPerformance size={26} />,
      title: "Reliable Uptime & Performance",
      desc: "Count on a robust and highly available platform that delivers consistent service and dependable message delivery.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        lg:py-28
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white
          via-[#edf3ff]
          to-[#d8e7ff]
        "
      />

      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          opacity-100
          bg-center
          bg-cover
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/sms-platform/why-Nanovision-bg.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1d2433]">
            Why Choose Nano Vision SMS Platform?{" "}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/90
                backdrop-blur-sm
                rounded-2xl
                p-7
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#eef2ff]
                  flex
                  items-center
                  justify-center
                  text-[#4f63d8]
                  mb-5
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1d2433] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#4b5563] text-md sm:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

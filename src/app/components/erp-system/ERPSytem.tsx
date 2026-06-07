import {
  LayoutPanelLeft,
  WalletCards,
  Server,
  MoveUpRight,
  Crosshair,
  CreditCard,
  MapPinned,
  Headset,
} from "lucide-react";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdPriceChange } from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";

export default function ERPSytem() {
  const features = [
    {
      icon: <TfiMoney size={26} />,
      title: "Financial Management",
      desc: "Maintain complete control over your organization's financial operations with automated accounting and reporting.",
    },
    {
      icon: <WalletCards size={26} />,
      title: "Human Resource Management (HRM)",
      desc: "Simplify workforce management, employee engagement, payroll processing, and attendance monitoring.",
    },
    {
      icon: <Server size={26} />,
      title: " Inventory & Warehouse Management",
      desc: "Optimize stock control, reduce inventory costs, and improve supply chain efficiency.",
    },
    {
      icon: <MoveUpRight size={26} />,
      title: " Customer Relationship Management (CRM)",
      desc: "Strengthen customer relationships through better sales tracking, communication, and customer service.",
    },
    {
      icon: <Crosshair size={26} />,
      title: " Procurement Management",
      desc: "Improve purchasing efficiency and gain greater visibility into supplier performance and procurement costs.",
    },
    {
      icon: <CreditCard size={26} />,
      title: "Asset Management",
      desc: "Track company assets, maintenance schedules, depreciation, and asset utilization throughout their lifecycle.",
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
          <h2 className="text-[36px] md:text-[54px] font-semibold text-[#1d2433]">
            Core ERP Modules
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

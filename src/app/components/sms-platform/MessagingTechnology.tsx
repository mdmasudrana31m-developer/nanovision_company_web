import {
  Network,
  Megaphone,
  Route,
  Users,
  Package,
  FilePenLine,
  Settings2,
  BadgeDollarSign,
} from "lucide-react";

export default function MessagingTechnology() {
  const features = [
    {
      icon: <Network size={28} />,
      title: "Multi-Protocol Support",
      description:
        "A complete and scalable solution to suit your requirements, capable of sending and receiving messages seamlessly from SMPP, HTTP, HTTPS, RESTful API, and SS7 (SIGTRAN M3UA, SCCP).",
    },
    {
      icon: <Megaphone size={28} />,
      title: "Effortless Campaign Management",
      description:
        "Take full control and manage dynamic and generic SMS campaigns with an intuitive web-based interface that enables users to schedule campaigns, customize sender IDs, and manage everything effortlessly.",
    },
    {
      icon: <Route size={28} />,
      title: "Advanced Routing Capabilities",
      description:
        "The cloud-based geographically distributed architecture is capable of processing millions of messages per hour. Priority, LLR, and LCR-based route selection ensure reliable SMS delivery.",
    },
    {
      icon: <Users size={28} />,
      title: "Multi-Level Client Management",
      description:
        "Client and reseller management gets easier than ever with interactive dashboards, multi-tier reseller management, and client-specific reporting portals.",
    },
    {
      icon: <Package size={28} />,
      title: "Bundle/Package Management",
      description:
        "Activate, deactivate, or modify SMS bundles. Create specific SMS types, sender ID types, subscription fees, SMS quantity limits, and periods.",
    },
    {
      icon: <FilePenLine size={28} />,
      title: "Content Whitelisting, Blocking & Modification",
      description:
        "Advanced filtering allows screening SMS text and sender IDs. The system can block URLs and prevent unauthorized links in SMS texts.",
    },
    {
      icon: <Settings2 size={28} />,
      title: "MNP Dipping & HLR Configuration",
      description:
        "Configure MNP and HLR lookup systems to improve routing efficiency and optimize message delivery accuracy.",
    },
    {
      icon: <BadgeDollarSign size={28} />,
      title: "Pricing & Rate Management",
      description:
        "Manage rates, pricing structures, billing rules, and revenue models through a centralized administration panel.",
    },
  ];

  return (
    <section className="py-20 bg-[#f7f8fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1d2433]">
            A Full-Scale Platform With Advanced
            <br />
            Messaging Technology
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Unlock the full potential of text messaging with the top-notch
            features of our futuristic platform. Whether promotional campaigns
            or transactional/service SMS, get it done with ease and accuracy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                border
                border-gray-100
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#eef3ff]
                  flex
                  items-center
                  justify-center
                  text-[#5d7df5]
                  mb-6
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium text-[#1d2433] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-7 text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

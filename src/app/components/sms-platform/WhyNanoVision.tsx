import {
  LayoutPanelLeft,
  WalletCards,
  Server,
  MoveUpRight,
  Crosshair,
  CreditCard,
  MapPinned,
  Headset,
  BadgeCheck,
} from "lucide-react";

export default function WhyNanoVision() {
  const features = [
    {
      icon: <LayoutPanelLeft size={26} />,
      title: "User-Friendly Interface",
      desc: "Efficiently manage campaigns with an intuitive and easy-to-navigate platform.",
    },
    {
      icon: <WalletCards size={26} />,
      title: "Telco-Grade Solution",
      desc: "Ideal for large-scale campaigns, offering high TPS with flexibility to scale capacity.",
    },
    {
      icon: <Server size={26} />,
      title: "Bare-Metal Server/Cloud",
      desc: "On-premise dedicated servers or cloud deployment to suit operational needs.",
    },
    {
      icon: <MoveUpRight size={26} />,
      title: "Flexible & Scalable",
      desc: "Supporting distributed architecture with 1+1 Hot Standby facility.",
    },
    {
      icon: <Crosshair size={26} />,
      title: "Campaign Versatility",
      desc: "Run powerful multi-channel campaigns with SMS and WhatsApp support.",
    },
    {
      icon: <CreditCard size={26} />,
      title: "Integrated Payment Flexibility",
      desc: "Choose from multiple international payment gateways.",
    },
    {
      icon: <MapPinned size={26} />,
      title: "Intelligent Routing & Delivery",
      desc: "Leverage HLR Lookup and MNP Dipping to improve delivery accuracy.",
    },
    {
      icon: <Headset size={26} />,
      title: "24/7 Technical Support",
      desc: "Dedicated support channels and prompt resolution of issues.",
    },
    {
      icon: <BadgeCheck size={26} />,
      title: "Licensed or Hosted Model",
      desc: "Choose between licensed ownership or hosted service deployment.",
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
            Why NanoVision
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
              <p className="text-[#4b5563] leading-7 text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

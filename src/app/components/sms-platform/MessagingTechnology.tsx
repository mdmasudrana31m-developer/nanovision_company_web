import {
  Megaphone,
  Route,
  Package,
  FilePenLine,
  Unplug,
  MessageSquareShare,
} from "lucide-react";

export default function MessagingTechnology() {
  const features = [
    {
      icon: <MessageSquareShare size={28} />,
      title: "Bulk SMS Campaigns",
      description:
        "Send promotional and marketing messages to thousands of recipients within seconds with advanced scheduling and audience management.",
    },
    {
      icon: <Megaphone size={28} />,
      title: "OTP & Verification Services",
      description:
        "Deliver secure one-time passwords and verification codes instantly to support authentication, account security, and user onboarding.",
    },
    {
      icon: <Route size={28} />,
      title: "Transactional Messaging",
      description:
        "Automatically send order confirmations, payment notifications, appointment reminders, delivery updates, and service alerts.",
    },
    {
      icon: <Unplug size={28} />,
      title: "API Integration",
      description:
        "Easily integrate SMS functionality into websites, mobile applications, CRM systems, ERP platforms, and custom business software.",
    },
    {
      icon: <Package size={28} />,
      title: "Real-Time Analytics",
      description:
        "Monitor message delivery, campaign performance, response rates, and engagement metrics through a centralized dashboard.",
    },
    {
      icon: <FilePenLine size={28} />,
      title: "Content Whitelisting, Blocking & Modification",
      description:
        "Advanced filtering allows screening SMS text and sender IDs. The system can block URLs and prevent unauthorized links in SMS texts.",
    },
  ];

  return (
    <section className="py-20 bg-[#f7f8fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1d2433]">
            A Complete SMS Platform Powered by Advanced Messaging Technology
          </h2>

          <p className="mt-6 text-gray-500 text-md sm:text-lg leading-relaxed">
            Empower your business communication with Nano Vision SMS Platform.
            Send promotional, transactional, OTP, and service messages through a
            secure, high-performance infrastructure designed for speed,
            reliability, and scalability.
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
              <p className="text-gray-500 text-md sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

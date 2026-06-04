import { MessageSquareText, Bot, RefreshCcw, Users } from "lucide-react";

export default function CustomerEngagement() {
  const features = [
    {
      title: " Real-Time Website Chat",
      description:
        "Provide instant support and answer customer inquiries directly from your website through a fast and user-friendly chat interface.",
      icon: MessageSquareText,
      color: "bg-blue-500",
    },
    {
      title: "AI-Powered Chat Assistant",
      description:
        "Automate common questions, qualify leads, and provide 24/7 customer assistance with intelligent chatbot integration.",
      icon: Bot,
      color: "bg-purple-500",
    },
    {
      title: "Visitor Monitoring",
      description:
        "Track website visitors in real-time, understand customer behavior, and proactively engage high-value prospects.",
      icon: RefreshCcw,
      color: "bg-red-400",
    },
    {
      title: "Omnichannel Communication",
      description:
        "Manage conversations from website chat, social media, messaging apps, and customer support channels through a single dashboard.",
      icon: Users,
      color: "bg-yellow-600",
    },
    {
      title: "Team Collaboration",
      description:
        "Assign chats to departments, transfer conversations between agents, and ensure every customer receives the right support.",
      icon: Users,
      color: "bg-yellow-600",
    },
    {
      title: "Customizable Chat Widget",
      description:
        "Match your chat interface with your brand identity using custom colors, logos, greetings, and design settings.",
      icon: Users,
      color: "bg-yellow-600",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Measure response times, customer satisfaction, agent performance, and conversion rates through detailed reports and dashboards.",
      icon: Users,
      color: "bg-yellow-600",
    },
    {
      title: "Mobile Accessibility",
      description:
        "Stay connected with customers from anywhere using mobile-friendly agent applications and notifications.",
      icon: Users,
      color: "bg-yellow-600",
    },
  ];

  return (
    <section className="bg-[#f5f6fa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[26px] sm:text-[35px] md:text-[45px] font-bold text-black leading-tight">
            Connect with Customers Instantly{" "}
          </h2>

          <p className="mt-5 text-[14px] md:text-[18px] text-[#4B5563] leading-relaxed">
            Deliver exceptional customer experiences with Nano Vision LTD&apos;s
            Live Chat Platform. Engage website visitors in real-time, provide
            instant support, generate qualified leads, and convert more
            prospects into customers through seamless online communication.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16">
          <h3 className="text-[42px] md:text-[64px] font-bold text-black">
            Real-Time Customer Engagement{" "}
          </h3>

          <p className="mt-5 text-[18px] md:text-[20px] text-[#4B5563] leading-[1.9] max-w-6xl">
            Today&apos;s customers expect immediate responses. Our Live Chat
            solution enables businesses to communicate with visitors the moment
            they need assistance, improving satisfaction, increasing
            conversions, and building stronger customer relationships.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[20px]
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >
                {/* Icon */}
                <div
                  className={`
                    w-16 h-16
                    rounded-full
                    ${item.color}
                    flex items-center justify-center
                  `}
                >
                  <Icon size={30} className="text-white" />
                </div>

                {/* Title */}
                <h4 className="mt-8 text-[28px] font-semibold text-[#111827]">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mt-4 text-[#4B5563] text-[18px] leading-[1.9]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

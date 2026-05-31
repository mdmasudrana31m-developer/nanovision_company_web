import { MessageSquareText, Bot, RefreshCcw, Users } from "lucide-react";

export default function CustomerEngagement() {
  const features = [
    {
      title: "Zero Coding",
      description:
        "No coding is required. Engage your website visitors seamlessly using our zero-coding platform.",
      icon: MessageSquareText,
      color: "bg-blue-500",
    },
    {
      title: "Live Chat + Bots",
      description:
        "Combine the power of live chat and bots to offer the best customer experience. Let bots handle FAQs while support agents manage complex queries.",
      icon: Bot,
      color: "bg-purple-500",
    },
    {
      title: "Automate Support",
      description:
        "Automate customer support 24/7 with chatbots, reducing the workload on live agents.",
      icon: RefreshCcw,
      color: "bg-red-400",
    },
    {
      title: "Qualify Leads",
      description:
        "Automatically convert website visitors into qualified leads and transfer them to your sales team.",
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
            All-in-One Customer Engagement Tool
          </h2>

          <p className="mt-5 text-[14px] md:text-[18px] text-[#4B5563] leading-relaxed">
            Engage your customers with digital customer engagement tools to
            provide a better contextual and conversational support in real time
          </p>
        </div>

        {/* Content */}
        <div className="mt-16">
          <h3 className="text-[42px] md:text-[64px] font-bold text-black">
            Chatbot
          </h3>

          <p className="mt-5 text-[18px] md:text-[20px] text-[#4B5563] leading-[1.9] max-w-6xl">
            The advanced AI-powered chatbot resolves 75% of customer queries and
            increases sales conversions. Leveraging machine learning to deliver
            exceptional service, REVE Chatbot reduces customer service costs by
            up to 30% and effectively resolves 90% of healthcare and banking
            queries.
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

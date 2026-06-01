import Image from "next/image";
import { MousePointerClick, Video, Bot, Workflow } from "lucide-react";
import Button from "@/app/utils/Button";

export default function LiveChatSection() {
  const features = [
    {
      title: "Co-browsing",
      description:
        "Collaborate in real-time with your customer's browser to improve First Call Resolution (FCR)",
      icon: MousePointerClick,
      color: "bg-[#6E86F4]",
    },
    {
      title: "Video Chat",
      description:
        "Engage directly with customers on your website or mobile apps through live video chat",
      icon: Video,
      color: "bg-[#D07A68]",
    },
    {
      title: "Chatbots",
      description:
        "Integrate live chat with AI-powered chatbots for quick, automated responses and enhanced customer experiences",
      icon: Bot,
      color: "bg-[#8B4CC4]",
    },
    {
      title: "Omnichannel Platform",
      description:
        "Resolve issues faster by combining live video chat and other channels for seamless customer collaboration",
      icon: Workflow,
      color: "bg-[#586BEF]",
    },
  ];

  return (
    <section className="bg-[#f5f6fa] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-5xl">
          <h2 className="text-[42px] md:text-[64px] font-bold leading-none text-[#111827]">
            Live Chat
          </h2>

          <p className="mt-5 text-[#4B5563] text-[16px] md:text-[20px] leading-[1.9]">
            Enhance customer experience with REVE Chat’s omnichannel live chat
            solution. With 79% of consumers preferring live chat over other
            support channels due to no hold times, REVE Live Chat ensures quick
            and efficient customer interactions. Satisfaction rates soar, with
            82% of customers happy with their live chat experiences, compared to
            email and phone support.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[18px] p-6 min-h-[280px]"
              >
                <div
                  className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center`}
                >
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="mt-6 text-[26px] font-semibold text-[#111827]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#4B5563] leading-[1.9] text-[16px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* BUTTON */}
        <div className="w-[200px] mt-8">
          <Button buttonText="Get a Free Demo" />
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-20">
          {/* Content */}
          <div>
            <div className="bg-white rounded-[12px] p-6 md:p-8 border-b-2 border-[#5B6CF0]">
              <h3 className="text-[24px] md:text-[30px] font-bold text-[#111827]">
                Live Engagement Tools for Better Collaboration
              </h3>

              <p className="mt-5 text-[#4B5563] text-[16px] md:text-[18px] leading-[1.9]">
                Deliver the fastest, most reliable real-time support through
                co-browsing and live video chat for eCommerce, automotive,
                financial services, and more.
              </p>
            </div>

            <h4 className="mt-10 text-[24px] md:text-[34px] font-bold text-[#111827]">
              Faster Customer Onboarding
            </h4>
          </div>

          {/* Image */}
          <div>
            <div className="relative aspect-[1/1] w-full max-w-[520px] ml-auto rounded-[24px] bg-[#EEF3FF] overflow-hidden">
              <Image
                src="/sms-platform/live-chat/Live-Frame.webp"
                alt="Live Engagement"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

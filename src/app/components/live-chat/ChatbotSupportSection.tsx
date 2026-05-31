import Button from "@/app/utils/Button";
import Image from "next/image";

export default function ChatbotSupportSection() {
  return (
    <section className="bg-[#f5f6fa] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* TOP CARD */}
            <div className="bg-white rounded-[12px] p-6 md:p-8 border-b-2 border-[#5B6CF0]">
              <h3 className="text-[24px]  font-bold text-[#111827]">
                Reduce Support Tickets for Human Agents
              </h3>

              <p className="mt-2 text-[16px]   text-[#4B5563]">
                Let chatbots manage all informational conversations effortlessly
                from the start, reducing common help desk tickets. This allows
                your team to focus on more critical support issues.
              </p>
            </div>

            {/* SUB TITLE */}
            <h4 className="mt-12 text-[24px] md:text-[34px] font-bold text-[#111827]">
              Answer Your FAQS with Support Bot
            </h4>

            {/* BUTTON */}
            <div className="w-[200px] mt-6">
              <Button buttonText="Get a Free Demo" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[24px] bg-[#EEF2FF]">
              <Image
                src="/sms-platform/live-chat/customer.webp"
                alt="Support Bot"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

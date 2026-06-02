import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Button from "@/app/utils/Button";

export default function WhatsAppCampaignSection() {
  const features = [
    "Marketing Campaigns",
    "Authentication Campaigns",
    "Utility Campaigns",
  ];

  const workflow = [
    "Connect the WhatsApp number from the integration",
    "Create segments from the contact option",
    "Create a template from our template builder",
    "Send the template to WhatsApp for approval",
    "Send the campaign to different user segments",
  ];

  return (
    <section className="bg-[#f5f6fa] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[26px] md:text-[44px] font-bold text-[#111827]">
              WhatsApp Campaign
            </h2>

            <p className="mt-6 text-[#4B5563] leading-[1.9] text-[16px] md:text-[18px]">
              Run targeted WhatsApp campaigns to turn conversations into
              conversions. With a precise campaign strategy, businesses can
              engage customers more effectively through WhatsApp, driving higher
              ROI. Leverage WhatsApp to optimize your returns and boost customer
              engagement.
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-5">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#5D7DF7] flex-shrink-0"
                  />

                  <span className="text-[#111827] text-lg">{item}</span>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="w-[200px] mt-8">
              <Button buttonText="Get a Free Demo" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <Image
                src="/sms-platform/live-chat/WhatsApp.webp"
                alt="WhatsApp Campaign"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* WORKFLOW */}
        <div className="mt-24 lg:mt-32">
          <h3 className="text-center text-[22px] md:text-[38px] font-bold text-[#111827] mb-14">
            Campaign Workflow
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workflow.map((item, index) => (
              <div key={index} className="relative">
                {/* CARD */}
                <div
                  className="
          bg-white
          rounded-xl
          border
          border-[#DDE6CF]
          p-5
          h-full
          text-[#374151]
          leading-relaxed
          shadow-sm
        "
                >
                  {item}
                </div>

                {/* ARROW */}
                {index !== workflow.length - 1 && (
                  <>
                    {/* TOP ARROW */}
                    {(index === 0 || index === 2) && (
                      <div className="hidden lg:block absolute -right-14 -top-14 z-10">
                        <Image
                          src="/sms-platform/live-chat/Hand-topArrow.svg"
                          alt="top arrow"
                          width={130}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    )}

                    {/* BOTTOM ARROW */}
                    {(index === 1 || index === 3) && (
                      <div className="hidden lg:block absolute -right-14 -bottom-14 z-10">
                        <Image
                          src="/sms-platform/live-chat/Hand-downArrow.svg"
                          alt="bottom arrow"
                          width={130}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

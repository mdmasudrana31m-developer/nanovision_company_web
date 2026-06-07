import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Nanovision LTD",
  description:
    "Nanovision's privacy policy describes what personal information we collect, how we use it, and how we keep it secure.",
  openGraph: { images: ["/og-image.jpg"] },
};

const PrivacyPolicy = () => {
  return (
    <section className="w-full bg-[#f5f5f5] mt-15 py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="
        text-3xl
        sm:text-4xl
        lg:text-5xl
        font-semibold
        text-center
        text-[#222]
        mb-12
      "
        >
          Privacy Policy
        </h2>

        {/* Content */}
        <div
          className="
        text-[#333]
        space-y-10
      "
        >
          {/* Item */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              What personal information do we collect?
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              We collect your personal information when you fill up our
              &quot;Free Trial&quot; or any other contact form. You are asked to
              share your name, e-mail, contact number and some company details.
              Apart from this, you also need to share your &quot;Server
              IP&quot;, &quot;SIP Switch IP&quot;, &quot;Signaling Port&quot;
              and &quot;IVR Extension&quot;.
            </p>
          </div>

          {/* Item */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              What we do with the collected information?
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              The collected information is used in the following ways:
            </p>

            <ul className="mt-3 space-y-2 text-base sm:text-lg pl-5 list-decimal">
              <li>To personalize the visitor’s experience</li>
              <li>To offer a Free Trial of our listed products</li>
            </ul>
          </div>

          {/* Item */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              What do we practice to keep the information confidential?
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              We maintain the collected information of service providers or
              end-users with utmost confidentiality. This information is never
              shared with any third-party entity.
            </p>
          </div>

          {/* Item */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              What happens with the information after the trial is given?
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              We provide service providers/resellers with panels where they can
              easily edit the info anytime after the trial.
            </p>
          </div>

          {/* Item */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              How can anyone unsubscribe our emails?
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              We provide an unsubscribe link at the bottom of every email that
              we send out to our registered users, which are for product
              information, any upgrades or new features launched apart from
              regular company information. In case any user wants to opt-out of
              future communication, he can click that link anytime.
            </p>
          </div>

          {/* Item */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              Collected data are never reused
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              We never use collected data for any contest or free gifting. Also,
              we never resell this database.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

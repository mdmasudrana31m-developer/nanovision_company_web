"use client";

import Button from "@/app/utils/Button";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ImSpinner } from "react-icons/im";

export default function BusinessEnquiry() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null); // null, 'success', or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    if (!form.current) {
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        "service_gyxumyw",
        "template_8ym4azz",

        // Public Key
        form.current,
        "w5Fi2DsIzIzz3056P",
      )
      .then(
        () => {
          setStatus("success");
          setIsSubmitting(false);
          form.current?.reset();
        },
        (error) => {
          setStatus("error");
          setIsSubmitting(false);
          console.error("Email send failed:", error);
        },
      );
  };

  return (
    <section
      className="min-h-screen  flex items-center justify-center px-4 py-16 
    bg-linear-to-br from-[#0b1446] via-[#132c6b] to-[#4c7d73]"
      id="business"
    >
      {/* Container */}
      <div className="w-full max-w-3xl text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Business Enquiry
        </h2>
        <p className="text-sm text-gray-300 mb-8">
          To request a quote or a product enquiry, please fill in your details:
        </p>

        {/* Form Box */}
        <div className="bg-white rounded-xl p-6 md:p-8 text-gray-700 shadow-xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">
            {status
              ? (() => {
                  const config = {
                    success: {
                      icon: "✓",
                      message: "Message sent successfully!",
                      bgColor: "bg-green-100",
                      textColor: "text-green-800",
                      borderColor: "border-green-300",
                    },
                    error: {
                      icon: "✕",
                      message: "Failed to send message. Please try again.",
                      bgColor: "bg-red-100",
                      textColor: "text-red-800",
                      borderColor: "border-red-300",
                    },
                  };

                  const { icon, message, bgColor, textColor, borderColor } =
                    config[status];
                  return (
                    <div
                      className={`p-4 mb-6 rounded-lg border ${bgColor} ${textColor} ${borderColor} flex items-center`}
                    >
                      <span className="text-xl mr-3 font-bold">{icon}</span>
                      <span>{message}</span>
                    </div>
                  );
                })()
              : null}
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>First Name*</label>
                <input
                  name="first_name"
                  type="text"
                  placeholder="Enter first name"
                  className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label>Last Name*</label>
                <input
                  name="last_name"
                  type="text"
                  placeholder="Enter last name"
                  className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Contact</label>
                <input
                  name="contact"
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label>Email*</label>

                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>What&apos;s app Number*</label>

                <input
                  name="whatsapp"
                  type="text"
                  required
                  placeholder="Enter your WhatsApp number"
                  className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label>Are you currently in a Telecom Business</label>

                <select
                  name="telecom_business"
                  className="w-full border rounded-md px-4 py-3 outline-none"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            {/* Company */}

            <div>
              <label>Company/Organization Name</label>

              <input
                name="company"
                type="text"
                placeholder="Enter your company/organization name"
                className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label>Message*</label>

              <textarea
                name="message"
                rows={4}
                placeholder="Type message"
                className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Fake Captcha */}
            <div className="bg-gray-100 border rounded-md p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-sm text-gray-700">
                  I&apos;m not a robot
                </span>
              </div>
              <span className="text-xs text-gray-500">reCAPTCHA</span>
            </div>

         

            <Button
              type="button"
              buttonText={
                isSubmitting ? <ImSpinner className="animate-spin" /> : "Submit"
              }
              onClick={() => form.current?.requestSubmit()}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

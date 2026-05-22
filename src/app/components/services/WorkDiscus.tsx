"use client";
import emailjs from "@emailjs/browser";
import Button from "@/app/utils/Button";
import { useRef, useState } from "react";
import { ImSpinner } from "react-icons/im";

export default function WorkDiscus() {
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
        "template_ff8pzeg",

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/contactBg.webp')] bg-cover bg-center"></div>

      {/* Dark overlay (important for readability) */}

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT TEXT */}
        <div className="text-white text-center md:text-left">
          <h1
            className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            font-bold 
            leading-tight 
            mb-6
          "
          >
            Build, Transform & Grow Your Business with Us
          </h1>

          <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Turn your ideas into powerful digital solutions with our expert
            team. We deliver innovative, scalable, and high-performance software
            tailored to your business needs.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div
          className="
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          rounded-2xl 
          p-5 sm:p-6 md:p-8 
          shadow-xl 
          text-white 
          w-full 
          max-w-lg 
          mx-auto
        "
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Let&apos;s Discuss Your Project!
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 mb-6">
            Need assistance? Fill out the form and our experts will get in
            touch, or reach out through our dedicated email for personalized
            support.
          </p>

          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
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
            {/* Name */}
            <input
              name="user_name"
              type="text"
              placeholder="Enter full name"
              required
              className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400"
            />

            {/* Phone */}
            <div className="flex border border-white/30 rounded-lg overflow-hidden">
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                required
                className="w-full bg-transparent px-4 py-3 text-sm outline-none"
              />
            </div>

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Enter email address"
              required
              className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400"
            />

            {/* Message */}
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              required
              className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 resize-none"
            ></textarea>

            {/* Fake captcha */}
            <div className="bg-white text-black rounded-md p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-xs sm:text-sm">I&apos;m not a robot</span>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-500">
                reCAPTCHA
              </span>
            </div>

            {/* Button */}

            <Button
              type="submit"
              buttonText={
                isSubmitting ? <ImSpinner className="animate-spin" /> : "Submit"
              }
            />
          </form>
        </div>
      </div>
    </section>
  );
}

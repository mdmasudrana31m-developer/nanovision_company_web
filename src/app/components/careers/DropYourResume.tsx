"use client";

import Button from "@/app/utils/Button";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ImSpinner } from "react-icons/im";

export default function DropYourResume() {
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
        "service_irr8i7t",
        "template_dy4xt5u",

        // Public Key
        form.current,
        "TiUssFr8-wWWLB81q",
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
      className="
      min-h-screen
      flex items-center justify-center
      px-4 py-16
      bg-gradient-to-br from-[#0b1446] via-[#132c6b] to-[#4c7d73]
      "
      id="business"
    >
      <div className="w-full max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-white mb-3">
          Drop Your Resume Here
        </h2>

        <p className="text-[16px] text-gray-300 mb-10">
          We&apos;ll contact you if your qualification match with the
          requirements
        </p>

        {/* FORM BOX */}
        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-2xl text-left">
          <form className="space-y-2" ref={form} onSubmit={sendEmail}>
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
            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  First Name*
                </label>

                <input
                  type="text"
                  name="first_name"
                  placeholder="Type first name"
                  required
                  className="
                  w-full h-[56px]
                  rounded-xl
                  border border-[#e5e7eb]
                  bg-[#fafafa]
                  px-4
                  text-[16px]
                  placeholder:text-[16px]
                  outline-none
                  focus:border-[#4c56e8]
                "
                />
              </div>

              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  Last Name*
                </label>

                <input
                  type="text"
                  name="last_name"
                  placeholder="Type last name"
                  required
                  className="
                  w-full h-[56px]
                  rounded-xl
                  border border-[#e5e7eb]
                  bg-[#fafafa]
                  px-4
                  text-[16px]
                  placeholder:text-[16px]
                  outline-none
                  focus:border-[#4c56e8]
                "
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* PHONE */}
              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  Phone Number*
                </label>

                <div className="flex gap-3">
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    required
                    className="
                    flex-1 h-[56px]
                    rounded-xl
                    border border-[#e5e7eb]
                    bg-[#fafafa]
                    px-4
                    text-[16px]
                    placeholder:text-[16px]
                    outline-none
                    focus:border-[#4c56e8]
                  "
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  Email*
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  required
                  className="
                  w-full h-[56px]
                  rounded-xl
                  border border-[#e5e7eb]
                  bg-[#fafafa]
                  px-4
                  text-[16px]
                  placeholder:text-[16px]
                  outline-none
                  focus:border-[#4c56e8]
                "
                />
              </div>
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  Select department you wish to work
                </label>

                <select
                  name="wish_to_work"
                  required
                  className="
                  w-full h-[56px]
                  rounded-xl
                  border border-[#e5e7eb]
                  bg-[#fafafa]
                  px-4
                  text-[16px]
                  text-gray-500
                  outline-none
                  focus:border-[#4c56e8]
                "
                >
                  <option value="">Select department you wish to work</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                </select>
              </div>

              <div>
                <label className="block text-[16px] font-medium text-[#111827] mb-3">
                  Select your location you wish to work
                </label>

                <select
                  name="select_location"
                  required
                  className="
                  w-full h-[56px]
                  rounded-xl
                  border border-[#e5e7eb]
                  bg-[#fafafa]
                  px-4
                  text-[16px]
                  text-gray-500
                  outline-none
                  focus:border-[#4c56e8]
                "
                >
                  <option value={""}>
                    Select your location you wish to work
                  </option>
                  <option value={"On-site"}>On-site</option>
                  <option value={"Remote"}>Remote</option>
                  <option value={"Hybrid"}>Hybrid</option>
                </select>
              </div>
            </div>

            {/* RESUME LINK INSTEAD OF FILE UPLOAD */}
            <div>
              <label className="block text-[16px] font-medium text-[#111827] mb-3">
                Resume/CV Link (Google Drive, Dropbox, etc.):
              </label>
              <input
                type="url"
                name="resume_link"
                placeholder="Paste your resume link here (Google Drive, Dropbox, etc.)"
                className="
                w-full
                h-[56px]
                rounded-xl
                border border-[#e5e7eb]
                bg-[#fafafa]
                px-4
                text-[16px]
                placeholder:text-[16px]
                outline-none
                focus:border-[#4c56e8]
              "
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Please upload your resume to Google Drive, Dropbox, or a similar
                service and paste the shareable link here.
              </p>
            </div>

            {/* TEXTAREA */}
            <div>
              <textarea
                name="message"
                rows={6}
                placeholder="What interests you about this department? Please write briefly. We would love to read"
                required
                className="
                w-full
                rounded-xl
                border border-[#e5e7eb]
                bg-[#fafafa]
                px-5 py-5
                text-[16px]
                placeholder:text-[16px]
                outline-none
                resize-none
                focus:border-[#4c56e8]
              "
              />
            </div>

            {/* BUTTON */}

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

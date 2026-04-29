"use client";

export default function WorkDiscus() {
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
            We Fix, <br />
            Transform, <br />
            and Skyrocket <br />
            Your Software
          </h1>

          <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Require further assistance? Fill in the form to have our experts
            reach out to you or write to us on our dedicated email ID
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
            Let’s Discuss Your Project!
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 mb-6">
            Share the details of your project- like scope or business
            challenges.
          </p>

          <form className="space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400"
            />

            {/* Phone */}
            <div className="flex border border-white/30 rounded-lg overflow-hidden">
              <span className="px-3 flex items-center bg-white/10 text-sm">
                +880
              </span>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-transparent px-4 py-3 text-sm outline-none"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400"
            />

            {/* Message */}
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 resize-none"
            ></textarea>

            {/* Country */}
            <select className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none">
              <option className="text-black">United States</option>
              <option className="text-black">Bangladesh</option>
              <option className="text-black">India</option>
            </select>

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
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-lg text-white text-sm sm:text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

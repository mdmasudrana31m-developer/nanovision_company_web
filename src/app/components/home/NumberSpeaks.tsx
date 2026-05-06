"use client";

export default function NumberSpeaks() {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      {/* MAIN CONTAINER */}
      <div
        className="
    max-w-6xl
    mx-auto
    flex flex-col md:flex-row
    items-center
    justify-center
    gap-8 md:gap-12
    "
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center">
          <h3
            className="
        text-4xl
        sm:text-5xl
        lg:text-6xl
        font-bold
        text-[#0072BA]
        "
          >
            08+ Years
          </h3>

          <p className="text-[#0072BA] text-sm sm:text-base mt-3">
            of Partnership with Telcos & Service Providers
          </p>
        </div>

        {/* CENTER LINE */}
        <div
          className="
      hidden md:block
      w-[3px]
      h-[120px]
      bg-gray-300
      "
        />

        {/* RIGHT CONTENT */}
        <div className="flex-1 text-center">
          <h3
            className="
        text-4xl
        sm:text-5xl
        lg:text-6xl
        font-bold
        text-[#0072BA]
        "
          >
            50+ Countries
          </h3>

          <p className="text-[#0072BA] text-sm sm:text-base mt-3">
            Worldwide Business Presence
          </p>
        </div>
      </div>
    </section>
  );
}

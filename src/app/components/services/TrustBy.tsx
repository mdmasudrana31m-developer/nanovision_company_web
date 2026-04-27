import Image from "next/image";

export const TrustBy = () => {
  const companyLogos = [
    "/airtel.png",
    "/bkash.png",
    "/21st-century.png",
    "/AbuNawas.png",
    "/al-tijari.png",
    "/babilon.png",
    "/btcl.png",
    "/btrc.png",
    "/comsys_logo.png",
    "/cytel.png",
    "/logo_4g.png",
    "/pdr.png",
    "/netspot.png",
    "/stc.png",
  ];

  return (
    <>
      <style>{`
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marqueeScroll 25s linear infinite;
  }

  @keyframes marqueeScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .marquee-wrapper:hover .marquee-track {
    animation-play-state: paused;
  }
`}</style>

      <div className="w-full overflow-hidden marquee-wrapper relative py-10 md:py-14">
        {/* 🔹 Heading */}
        <h1
          className="
    text-center 
    text-xl sm:text-2xl md:text-3xl lg:text-4xl 
    font-semibold 
    text-gray-700 
    mb-6 md:mb-10
  "
        >
          Trusted By
        </h1>

        {/* 🔥 Marquee */}
        <div className="w-full overflow-hidden relative">
          {/* Left Blur */}
          <div className="absolute left-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

          {/* Track */}
          <div className="marquee-track flex gap-6 sm:gap-8 md:gap-12 px-4">
            {[...companyLogos, ...companyLogos, ...companyLogos].map(
              (logo, i) => (
                <div
                  key={i}
                  className="
        shrink-0 
        flex items-center justify-center
        
        w-[80px] h-[40px] 
        sm:w-[100px] sm:h-[50px] 
        md:w-[120px] md:h-[60px]
      "
                >
                  <Image
                    src={logo}
                    alt="company logo"
                    width={120}
                    height={60}
                    className="
          w-full h-full 
          object-contain
          transition duration-300
        "
                  />
                </div>
              ),
            )}
          </div>

          {/* Right Blur */}
          <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </>
  );
};

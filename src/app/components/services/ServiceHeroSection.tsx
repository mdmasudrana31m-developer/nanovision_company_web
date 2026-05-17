"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/app/utils/Button";

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch((err) => {
        console.log("Video autoplay error:", err);
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* 🔥 Poster Image */}
      {!videoLoaded && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/service-img/poster.webp"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      {/* 🔥 Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoLoaded(true)}
        className={`
          absolute inset-0 w-full h-full object-cover
          
          ${videoLoaded ? "opacity-100" : "opacity-0"}
        `}
      >
        <source src="/service-img/services_video.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* 🔥 Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
        {/* 🔹 Heading */}
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-5xl leading-tight mb-6">
          Your Dream – Our Code <br />
          Digital Transformation
        </h1>

        {/* 🔹 Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="lg:mt-20 mt-0 md:w-60 w-50">
            <Button buttonText="Contact Us" />
          </div>
        </div>

        {/* 🔥 Cards */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-6 lg:mt-10 px-4">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl text-white hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/service-img/svg-icon/Layer_1.svg"
                alt="Innovation"
                width={30}
                height={30}
                className="object-contain"
              />
              <h3 className="text-base md:text-lg font-semibold">Innovation</h3>
            </div>

            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              Building future-ready solutions with AI, cloud-native design, and
              scalable architectures that keep you ahead of the curve.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl text-white hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/service-img/svg-icon/Layer_2.svg"
                alt="Precision"
                width={30}
                height={30}
                className="object-contain"
              />
              <h3 className="text-base md:text-lg font-semibold">Precision</h3>
            </div>

            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              Delivering clean code, robust frameworks, and rigorous quality
              assurance for reliable and high-performing software.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl text-white hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/service-img/svg-icon/Layer_3.svg"
                alt="Execution"
                width={30}
                height={30}
                className="object-contain"
              />
              <h3 className="text-base md:text-lg font-semibold">Execution</h3>
            </div>

            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              Adapting quickly with iterative development, flexible models, and
              seamless integration to accelerate time-to-market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

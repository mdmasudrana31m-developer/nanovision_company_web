"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function OurWorkFlow() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("workflow");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollY = window.scrollY;
      const offsetTop = section.offsetTop;

      const progress = scrollY - offsetTop;

      if (progress < 200) {
        setStep(1);
      } else if (progress < 400) {
        setStep(2);
      } else if (progress < 600) {
        setStep(3);
      } else {
        setStep(4);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="workflow" className="text_anmation">
      <div className="max-w-7xl w-full mx-auto px-4 ">
        <div className="max-w-7xl w-full mx-auto mb-10 top-text">
          <h2 className="text-center">Our Working Flow</h2>
          <p className="text-center w-full max-w-7xl mx-auto">
            Great software doesn’t happen by chance —We start with ideation and
            planning, transform concepts into intuitive designs, engineer secure
            and scalable systems, put every feature through rigorous QA, and
            finally deploy with full support. It’s a transparent, step-by-step
            journey designed to turn your vision into impact.
          </p>
        </div>

        <div className="m_image_animate_box_wrapper">
          <div className="m_image_animate_box">
            {/* 1 */}
            <div
              className={`m_image_animate_box_one ${step >= 1 ? "active" : ""}`}
            >
              <div className="circle">
                <p className="">1. Discovery</p>
                <div className=" top-10px border-b-2 border-gray-500 border-dashed"/>
              </div>
              <Image
                src="/arrow1.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="object-contain arrow1"
              />
              <div className="m_image_animate_box_one_text one ">
                <p className="paragraph ">
                  We begin with an intensive discovery phase - conducting
                  workshops, competitor analysis & technical feasibility
                  studies.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div
              className={`m_image_animate_box_two ${step >= 2 ? "active" : ""}`}
            >
              <div className="circle">
                <p className="">2. UX/UI Design</p>
              </div>
              <Image
                src="/arrow2.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="object-contain arrow2"
              />
              <div className="m_image_animate_box_two_text">
                <p className="paragraph ">
                  From wireframes to polished UI, we design user journeys that
                  balance business logic with aesthetics.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div
              className={`m_image_animate_box_three  ${step >= 3 ? "active" : ""}`}
            >
              <div className="circle ">
                <p className="">3. Development</p>
                <hr />
              </div>
              <Image
                src="/arrow3.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="object-contain arrow3  z-0"
              />
              <div className="m_image_animate_box_three_text">
                <p className="paragraph">
                  Our development team builds functional, scalable, and
                  efficient code that brings designs to life.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div
              className={`m_image_animate_box_four ${step >= 4 ? "active" : ""}`}
            >
              <div className="circle">
                <p className="">4. QA & Deployment</p>
              </div>
              <Image
                src="/arrow5.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="object-contain arrow4"
              />
              <div className="m_image_animate_box_four_text">
                <p className="paragraph">
                  We rigorously test and deploy your solution ensuring quality
                  and reliability for your users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

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
      <div className="container">
        <h2 className="text-center">Our Working Flow</h2>

        <div className="m_image_animate_box_wrapper">
          <div className="m_image_animate_box">
            {/* 1 */}
            <div
              className={`m_image_animate_box_one ${step >= 1 ? "active" : ""}`}
            >
              <p>1. Discovery</p>
              <img src="https://www.revesoft.com/cdn/assets/images/outsourcing/Object%20(2).svg" />
              <div className="m_image_animate_box_one_text">
                <p>We begin with discovery & planning.</p>
              </div>
            </div>

            {/* 2 */}
            <div
              className={`m_image_animate_box_two ${step >= 2 ? "active" : ""}`}
            >
              <p>2. UX/UI Design</p>
              <img src="https://www.revesoft.com/cdn/assets/images/outsourcing/Object.svg" />
              <div className="m_image_animate_box_two_text">
                <p>We design user-friendly interfaces.</p>
              </div>
            </div>

            {/* 3 */}
            <div
              className={`m_image_animate_box_three ${step >= 3 ? "active" : ""}`}
            >
              <p>3. Development</p>
              <img src="https://www.revesoft.com/cdn/assets/images/outsourcing/Object%20(1).svg" />
              <div className="m_image_animate_box_three_text">
                <p>We build scalable systems.</p>
              </div>
            </div>

            {/* 4 */}
            <div
              className={`m_image_animate_box_four ${step >= 4 ? "active" : ""}`}
            >
              <p>4. QA & Deployment</p>
              <img src="https://www.revesoft.com/cdn/assets/images/outsourcing/Object%20(3).svg" />
              <div className="m_image_animate_box_four_text">
                <p>Testing & deployment with support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

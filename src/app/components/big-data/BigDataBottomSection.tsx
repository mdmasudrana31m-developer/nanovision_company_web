"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function BigDataBottomSection() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Big Data used for?",
      answer:
        "Big Data is used to understand and predict customer behavior, identify patterns, optimize business operations, and support data-driven decision making.",
    },
    {
      question: "What is Big Data technology?",
      answer:
        "Big Data technology refers to tools and frameworks used to store, process, and analyze large-scale datasets.",
    },
    {
      question: "What is Hadoop used for?",
      answer:
        "Hadoop is used for distributed storage and processing of massive datasets across clusters of computers.",
    },
    {
      question: "What is Spark used for?",
      answer:
        "Apache Spark is used for fast data processing, analytics, machine learning, and streaming workloads.",
    },
    {
      question: "What is data lake?",
      answer:
        "A data lake is a centralized repository that stores structured and unstructured data at scale.",
    },
    {
      question: "What is data fabric?",
      answer:
        "Data Fabric is an architecture that connects data across different environments and platforms.",
    },
  ];

  const applications = [
    "Finance organizations use Big Data analytics to identify fraud, optimize investments, and assess risks.",
    "Healthcare providers use Big Data for patient monitoring, disease prediction, and treatment optimization.",
    "Retail companies analyze customer behavior to improve product recommendations and sales.",
    "Telecommunications firms leverage Big Data to improve network performance and customer satisfaction.",
    "Manufacturing industries use predictive analytics for equipment maintenance and operational efficiency.",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* HOW BIG DATA WORKS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            How Big Data works
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Big Data refers to the analysis of large volumes of structured and
            unstructured information to uncover insights, patterns, and trends.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto">
                <Image
                  src="/bigdata/icons/collect-data.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-semibold mt-4">Gather Big Data</h3>

              <p className="text-gray-600 text-sm mt-2">
                Collect data from multiple sources including applications,
                sensors, websites and databases.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto">
                <Image
                  src="/bigdata/icons/store-data.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-semibold mt-4">Store Big Data</h3>

              <p className="text-gray-600 text-sm mt-2">
                Store massive volumes of information using distributed storage
                systems.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto">
                <Image
                  src="/bigdata/icons/analyze-data.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-semibold mt-4">Analyze Big Data</h3>

              <p className="text-gray-600 text-sm mt-2">
                Extract valuable insights using analytics, AI, machine learning,
                and visualization tools.
              </p>
            </div>
          </div>
        </div>

        {/* BIG DATA APPLICATIONS */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Big Data applications
          </h2>

          <div className="mt-8 space-y-5">
            {applications.map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#4F46E5]" />

                <p className="text-gray-700 leading-8">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Big Data FAQs
          </h2>

          <div className="mt-10  rounded-xl overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-6
                    py-5
                    text-left
                    font-medium
                  "
                >
                  {faq.question}

                  {open === index ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>

                {open === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-7">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BLOG CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          <div className="group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src="/big-data/bigdata1.jpeg"
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              Explore SA&apos;s data management solutions
            </h3>

            <p className="mt-3 text-gray-600">
              Manage enterprise data throughout your digital transformation
              journey.
            </p>

            <button className="mt-4 text-[#4F46E5] font-medium">
              Learn more →
            </button>
          </div>

          <div className="group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src="/big-data/bigdata2.webp"
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              Ideas you won&apos;t find anywhere else
            </h3>

            <p className="mt-3 text-gray-600">
              Stay up-to-date with thought leadership and innovation trends.
            </p>

            <button className="mt-4 text-[#4F46E5] font-medium">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

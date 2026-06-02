"use client";

import Image from "next/image";

export default function BigDataExtraSections() {
  const vData = [
    {
      title: "Volume",
      icon: "/bigdata/icons/volume.svg",
      text: "Massive amounts of structured and unstructured data generated every second.",
    },
    {
      title: "Velocity",
      icon: "/bigdata/icons/velocity.svg",
      text: "Data is generated, collected, and processed in real-time.",
    },
    {
      title: "Variety",
      icon: "/bigdata/icons/variety.svg",
      text: "Data comes from multiple formats such as text, images, video, audio, and logs.",
    },
    {
      title: "Veracity",
      icon: "/bigdata/icons/veracity.svg",
      text: "Ensures the reliability, accuracy, and trustworthiness of data.",
    },
    {
      title: "Value",
      icon: "/bigdata/icons/value.svg",
      text: "Transforms raw data into actionable business insights.",
    },
  ];

  const benefits = [
    "Improved customer experience",
    "Faster and more accurate decision-making",
    "Operational efficiency and automation",
    "Risk management and fraud detection",
    "Competitive business advantage",
    "Revenue growth opportunities",
  ];

  const technologies = [
    {
      title: "Big Data Architecture",
      text: "A scalable framework designed to store, process, and analyze massive datasets efficiently.",
    },
    {
      title: "Big Data Analytics",
      text: "Extracts valuable insights and trends from structured and unstructured datasets.",
    },
    {
      title: "Big Data and Apache Hadoop",
      text: "Hadoop enables distributed storage and parallel processing across multiple servers.",
    },
    {
      title: "Data Lakes",
      text: "Centralized repositories that store structured, semi-structured, and unstructured data.",
    },
    {
      title: "In-Memory Databases",
      text: "Databases optimized for ultra-fast data access and real-time analytics.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* FIVE Vs */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            The five V’s that define Big Data
          </h2>

          <p className="mt-4 text-gray-600 max-w-4xl leading-8">
            Big Data is characterized by five key dimensions that define its
            complexity and business value.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {vData.map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </div>

                <h3 className="font-semibold text-lg">{item.title}</h3>

                <p className="text-gray-600 text-sm mt-3 leading-6">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Benefits of Big Data
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 rounded-xl"
              >
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-2"></div>

                <p className="text-gray-700 leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI & BIG DATA */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            AI and Big Data
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Big Data empowers Artificial Intelligence by providing vast amounts
            of structured and unstructured information for training models.
            Advanced AI systems rely on large-scale datasets to identify
            patterns, make predictions, and automate decision-making processes.
          </p>

          <blockquote className="mt-10 border-l-4 border-blue-600 pl-6 italic text-lg text-gray-800">
            Data is the lifeblood of AI. AI systems need to learn from data in
            order to be able to fulfill their function.
          </blockquote>
        </div>

        {/* MACHINE LEARNING */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Machine Learning and Big Data
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Machine Learning algorithms learn from historical and real-time data
            patterns. Big Data provides the scale required to train highly
            accurate predictive models, recommendation engines, fraud detection
            systems, and intelligent automation platforms.
          </p>
        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Big Data Technologies
          </h2>

          <div className="mt-12 space-y-8">
            {technologies.map((item, index) => (
              <div
                key={index}
                className=" rounded-2xl p-6 md:p-8 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-gray-600 leading-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

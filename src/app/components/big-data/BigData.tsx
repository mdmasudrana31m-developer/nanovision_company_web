"use client";

import Image from "next/image";

const bigDataTypes = [
  {
    icon: "📊",
    title: "Data Integration",
    description:
      "Connect data from multiple sources into a unified analytics platform, creating a single source of truth for your organization.",
  },
  {
    icon: "📂",
    title: "Business Intelligence",
    description:
      "Connect data from multiple sources into a unified analytics platform, creating a single source of truth for your organization.",
  },

  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Discover hidden patterns, predict outcomes, automate insights, and accelerate innovation using advanced analytics and AI technologies.",
  },

  {
    icon: "📈",
    title: "Real-Time Analytics",
    description:
      "Monitor business performance, customer behavior, and operational metrics through real-time data processing and reporting.",
  },
  {
    icon: "📉",
    title: "Advanced Analytics",
    description:
      "Leverage statistical modeling, predictive analytics, and business intelligence tools to transform raw data into actionable insights.",
  },
  {
    icon: "💾",
    title: "Enterprise Data Management",
    description:
      "Store and manage structured, semi-structured, and unstructured data securely using scalable cloud-ready infrastructure.",
  },
  {
    icon: "📊",
    title: "Interactive Dashboards",
    description:
      "Visualize KPIs, performance metrics, and business trends through customizable dashboards and reporting tools.",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable Architecture",
    description:
      "Built for growing organizations with enterprise-grade security, governance, and high-performance processing capabilities.",
  },
];

export default function BigData() {
  return (
    <main className="bg-white mt-15 text-[#111827]">
      {/* HERO */}
      <section className="bg-[#EEF3F8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold">
              Harness the Power of Big Data
            </h1>

            <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
              Collect, analyze, and transform massive data into real-time
              insights, predictive intelligence, and smarter business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8">
            Turn Data Into Your Competitive Advantage{" "}
          </h2>

          <p className="text-gray-700 leading-8">
            Organizations generate enormous amounts of data every day from
            websites, applications, customer interactions, business operations,
            and connected devices. Our Big Data Platform helps businesses
            centralize, process, and analyze this information to uncover
            opportunities, improve efficiency, and drive growth through
            data-driven decision making.
          </p>
        </div>
      </section>

      {/* EVOLUTION */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8">Business Benefits</h2>

          <p className="text-gray-700 leading-8">
            Our Big Data Platform empowers organizations to make faster
            decisions, improve operational efficiency, identify growth
            opportunities, optimize customer experiences, and gain a competitive
            advantage through intelligent use of data. Companies increasingly
            rely on AI-driven analytics and real-time business intelligence to
            transform data into measurable business outcomes.
          </p>

          {/* STATS */}
          <div className="grid md:grid-cols-2 gap-10 mt-14">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-600">64.2</h3>

              <p className="mt-4 text-gray-700">From Data to Innovation </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-600">2x</h3>

              <p className="mt-4 text-gray-700">
                Transform complex information into strategic insights. Nano
                Vision LTD helps businesses unlock the true value of their data
                through modern analytics, artificial intelligence, and business
                intelligence solutions.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF BIG DATA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Types of Big Data
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {bigDataTypes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>

                <h3 className="font-bold text-xl">{item.title}</h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="py-10 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-14">Sources of Big Data</h2>

          {/* IMAGE */}
          <div className="relative  max-w-4xl mx-auto w-full aspect-[3/1]">
            <Image
              src="/big-data/what-is-big-data-sources.svg"
              alt="Big Data Sources"
              width={800}
              height={200}
              className="object-contain w-full h-auto"
            />
          </div>

          {/* CONTENT */}
          <div className="lg:mt-16 mt-8">
            <p className="text-gray-700">
              Big Data is generated from numerous sources including social media
              platforms, IoT devices, business applications, sensors, websites,
              financial transactions, mobile applications, customer
              interactions, and machine-generated logs.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <h4 className="font-bold text-lg">Social Media</h4>

                <p className="text-gray-600">
                  Facebook, X, Instagram, LinkedIn, YouTube and more.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">IoT Devices</h4>

                <p className="text-gray-600">
                  Sensors, smart devices, vehicles and connected equipment.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">Business Systems</h4>

                <p className="text-gray-600">
                  ERP, CRM, eCommerce platforms and enterprise software.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">Machine Data</h4>

                <p className="text-gray-600">
                  Server logs, monitoring systems and automated processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

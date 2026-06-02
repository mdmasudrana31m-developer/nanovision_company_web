"use client";

import Image from "next/image";

export default function BigData() {
  return (
    <main className="bg-white mt-15 text-[#111827]">
      {/* HERO */}
      <section className="bg-[#EEF3F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold">
              What is Big Data?
            </h1>

            <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
              Big Data is the ocean of information we swim in every day —
              zettabytes of data flowing from our computers, mobile devices and
              machine sensors.
            </p>
          </div>
        </div>
      </section>

      {/* BIG DATA DEFINITION */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8">
            Big Data definition in detail
          </h2>

          <p className="text-gray-700 leading-8">
            Big Data refers to extremely large volumes of structured,
            semi-structured, and unstructured information generated from
            multiple sources. This data is used by organizations to discover
            patterns, trends, and insights that help improve business decisions.
            The volume, velocity, and variety of modern data exceed the
            capabilities of traditional processing systems.
          </p>
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8">
            The importance of Big Data analytics
          </h2>

          <p className="text-gray-700 leading-8">
            Big Data analytics enables organizations to uncover hidden trends,
            improve customer experiences, optimize operations, reduce costs, and
            create new business opportunities. Industries such as healthcare,
            finance, manufacturing, retail, and telecommunications rely on
            analytics to gain a competitive advantage.
          </p>
        </div>
      </section>

      {/* EVOLUTION */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8">Evolution of Big Data</h2>

          <p className="text-gray-700 leading-8">
            As internet-connected devices continue to increase, organizations
            generate more information than ever before. The rise of cloud
            computing, IoT devices, machine learning, and artificial
            intelligence has accelerated data creation at an unprecedented
            scale.
          </p>

          {/* STATS */}
          <div className="grid md:grid-cols-2 gap-10 mt-14">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-600">64.2</h3>

              <p className="mt-4 text-gray-700">
                zettabytes of digital data created in 2020
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-600">2x</h3>

              <p className="mt-4 text-gray-700">
                Expected increase in data volume within 5 years
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
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">📊</div>

              <h3 className="font-bold text-xl">Structured Data</h3>

              <p className="mt-4 text-gray-600 leading-7">
                Highly organized data stored in rows and columns, such as
                databases and spreadsheets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">📂</div>

              <h3 className="font-bold text-xl">Unstructured Data</h3>

              <p className="mt-4 text-gray-600 leading-7">
                Images, videos, social media content, emails, and text
                documents.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">⚙️</div>

              <h3 className="font-bold text-xl">Semi-Structured Data</h3>

              <p className="mt-4 text-gray-600 leading-7">
                Data that contains organizational properties but doesn’t fit
                neatly into relational databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="py-20">
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
          <div>
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

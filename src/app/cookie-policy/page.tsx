import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cookie Policy | Nanovision LTD",
  description:
    "Read Nanovision's cookie policy: how we use cookies, third-party analytics, and how to manage your preferences.",
  openGraph: { images: ["/og-image.jpg"] },
};

const CookiePolicy = () => {
  return (
    <section className="w-full mt-15 bg-[#f5f5f5] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="
        text-3xl
        sm:text-4xl
        lg:text-5xl
        font-semibold
        text-center
        text-[#222]
        mb-12
      "
        >
          Cookie Policy for Nanovision Systems
        </h2>

        {/* Content */}
        <div className="space-y-10 text-[#333]">
          {/* Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              What Are Cookies?
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              As is common practice with almost all professional websites, this
              site uses cookies, which are tiny files that are downloaded to
              your computer, to improve your experience. This page describes
              what information they gather, how we use it and why we sometimes
              need to store these cookies. We will also share how you can
              prevent these cookies from being stored, however this may
              downgrade or break certain elements of the site&apos;s
              functionality.
            </p>

            <p className="text-base sm:text-lg leading-[1.9] mt-5">
              For more general information on cookies see the:{" "}
              <a
                href="https://en.wikipedia.org/wiki/HTTP_cookie"
                target="_blank"
                className="text-blue-600 underline"
              >
                Wikipedia article on HTTP Cookies
              </a>
              .
            </p>
          </div>

          {/* Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              How We Use Cookies?
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              We use cookies for a variety of reasons detailed below.
              Unfortunately in most cases there are no industry standard options
              for disabling cookies without completely disabling the
              functionality and features they add to this site. It is
              recommended that you leave on all cookies if you are not sure
              whether you need them or not in case they are used to provide a
              service that you use.
            </p>
          </div>

          {/* Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              Disabling Cookies
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              You can prevent the setting of cookies by adjusting the settings
              on your browser. Be aware that disabling cookies will affect the
              functionality of this and many other websites that you visit.
              Disabling cookies will usually result in also disabling certain
              functionality and features of this site.
            </p>
          </div>

          {/* Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              The Cookies We Set
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              This site offers newsletter or email subscription services and
              cookies may be used to remember if you are already registered and
              whether to show certain notifications which might only be valid to
              subscribed/unsubscribed users.
            </p>

            <p className="text-base sm:text-lg leading-[1.9] mt-5">
              When you submit data through a form such as those found on contact
              pages or comment forms cookies may be set to remember your user
              details for future correspondence.
            </p>
          </div>

          {/* Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              Third Party Cookies
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              In some special cases we also use cookies provided by trusted
              third parties. The following section details which third party
              cookies you might encounter through this site.
            </p>

            <p className="text-base sm:text-lg leading-[1.9] mt-5">
              This site uses Google Analytics which is one of the most
              widespread and trusted analytics solutions on the web for helping
              us to understand how you use the site and ways that we can improve
              your experience.
            </p>

            <p className="text-base sm:text-lg leading-[1.9] mt-5">
              For more information on Google Analytics cookies, see the{" "}
              <a href="/" target="_blank" className="text-blue-600 underline">
                official Google Analytics page
              </a>
              .
            </p>

            <p className="text-base sm:text-lg leading-[1.9] mt-5">
              Third party analytics are used to track and measure usage of this
              site so that we can continue to produce engaging content.
            </p>
          </div>

          {/* Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-4">
              More Information
            </h3>

            <p className="text-base sm:text-lg leading-[1.9]">
              Hopefully that has clarified things for you and as was previously
              mentioned if there is something that you aren&apos;t sure whether
              you need or not it&apos;s usually safer to leave cookies enabled
              in case it does interact with one of the features you use on our
              site.
            </p>

            <p className="text-base sm:text-lg leading-[1.9] mt-5">
              However if you are still looking for more information then you can
              contact us through one of our preferred contact methods.
            </p>

            <p className="text-base sm:text-lg leading-[1.9] mt-5">
              Email:{" "}
              <a
                href="mailto:sparsh@revesoft.com"
                className="text-blue-600 underline break-all"
              >
                info@nanovisionltd.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;

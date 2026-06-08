import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nanovisionltd.com"),

  title: {
    default: "Nanovision - Revolutionize Your Communication",
    template: "%s | Nanovision",
  },

  description:
    "Nanovision provides enterprise communication solutions including SMS Platform, Live Chat, ERP Systems, Big Data Analytics, and custom software development services.",

  keywords: [
    "Nanovision",
    "SMS Platform",
    "Bulk SMS",
    "Live Chat",
    "ERP Software",
    "Big Data Analytics",
    "Software Development",
    "Business Solutions",
    "Communication Solutions",
    "Enterprise Software",
    "Web Development",
    "Cloud Solutions",
  ],

  authors: [
    {
      name: "Nanovision",
      url: "https://nanovisionltd.com",
    },
  ],

  creator: "Nanovision",
  publisher: "Nanovision",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nanovision",
    url: "https://nanovisionltd.com",

    title: "Nanovision - Revolutionize Your Communication",

    description:
      "Enterprise communication solutions including SMS Platform, Live Chat, ERP Systems, Big Data Analytics, and custom software development.",

    images: [
      {
        url: "/Avision.jpeg",
        width: 1200,
        height: 630,
        alt: "Nanovision Communication Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nanovision - Revolutionize Your Communication",
    description:
      "Enterprise communication solutions including SMS Platform, Live Chat, ERP Systems, and Big Data Analytics.",
    images: ["/Avision.jpeg"],
  },

  alternates: {
    canonical: "https://nanovisionltd.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Nanovision",

    url: "https://nanovisionltd.com",

    logo: "https://nanovisionltd.com/Avision.jpeg",

    description:
      "Nanovision provides enterprise communication solutions including SMS Platform, Live Chat, ERP Systems, Big Data Analytics, and custom software development.",

    email: "info@nanovisionltd.com",

    telephone: "+8801778807497",

    sameAs: [
      "https://www.facebook.com/profile.php?id=61579937264212",
      "https://www.linkedin.com/company/108462454/admin/dashboard",
      "https://www.instagram.com/nanovisionltd",
    ],

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+8801778807497",
        contactType: "customer support",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
          }}
        />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

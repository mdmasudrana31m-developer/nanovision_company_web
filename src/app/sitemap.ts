import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nanovision-company-web-poe5.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://nanovision-company-web-poe5.vercel.app/about-us",
      lastModified: new Date(),
    },
    {
      url: "https://nanovision-company-web-poe5.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://nanovision-company-web-poe5.vercel.app/contact-us",
      lastModified: new Date(),
    },
    {
      url: "https://nanovision-company-web-poe5.vercel.app/products/sms-platform",
      lastModified: new Date(),
    },
    {
      url: "https://nanovision-company-web-poe5.vercel.app/products/live-chat",
      lastModified: new Date(),
    },
    {
      url: "https://nanovision-company-web-poe5.vercel.app/products/big-data",
      lastModified: new Date(),
    },
  ];
}
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nanovisionltd.com/",
      lastModified: new Date(),
    },
    {
      url: "https://nanovisionltd.com/about-us",
      lastModified: new Date(),
    },
    {
      url: "https://nanovisionltd.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://nanovisionltd.com/contact-us",
      lastModified: new Date(),
    },
    {
      url: "https://nanovisionltd.com/products/sms-platform",
      lastModified: new Date(),
    },
    {
      url: "https://nanovisionltd.com/products/live-chat",
      lastModified: new Date(),
    },
    {
      url: "https://nanovisionltd.com/products/big-data",
      lastModified: new Date(),
    },
  ];
}
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/links",
    },
    sitemap: "https://lightsteelblue-ant-761299.hostingersite.com/sitemap.xml",
  };
}

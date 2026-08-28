import type { MetadataRoute } from "next";
import { pages } from "../data/site";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://literatureedit.com"
).replace(/\/$/, "");

const publicPathForSlug = (slug: string) => (slug === "home" ? "" : `/${slug}`);

const priorityForSlug = (slug: string) => {
  if (slug === "home") {
    return 1;
  }

  if (
    [
      "about",
      "programmes",
      "editorial-services",
      "resources",
      "journal",
      "contact",
    ].includes(slug)
  ) {
    return 0.8;
  }

  return 0.6;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((page) => ({
    url: `${siteUrl}${publicPathForSlug(page.slug)}`,
    lastModified,
    changeFrequency: page.slug === "home" ? "weekly" : "monthly",
    priority: priorityForSlug(page.slug),
  }));
}

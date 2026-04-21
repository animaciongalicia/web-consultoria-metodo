import type { MetadataRoute } from "next";
import { STATIC_PAGES, getVisiblePosts } from "@/lib/posts";

const BASE_URL = "https://consultoriametodo.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path === "/" ? "" : page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const visiblePosts = getVisiblePosts();
  const blogEntries: MetadataRoute.Sitemap = visiblePosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: post.isPillar ? 0.8 : 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}

import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE_URL = "https://jesusfpv.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/empezar`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/tienda`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/guias`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/normativa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/setup`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/legal`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}

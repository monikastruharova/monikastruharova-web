import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { blogPosts } from "@/data/blog";

const staticRoutes = [
  "",
  "/moj-pribeh",
  "/sluzby",
  "/sluzby/terapia-cesta",
  "/sluzby/harmonizacia-cakier",
  "/sluzby/zenske-kruhy",
  "/sluzby/intuitivny-tanec",
  "/dvojplamene",
  "/skusenosti-klientov",
  "/blog",
  "/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;
  const routes = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
  const posts = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
  }));
  return [...routes, ...posts];
}

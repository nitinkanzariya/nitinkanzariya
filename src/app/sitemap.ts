import type { MetadataRoute } from "next";
import content from "@/data/content.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nitinkanzariya.vercel.app";
  const lastModified = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic project detail pages
  const projectPages: MetadataRoute.Sitemap = content.projects.items
    .filter((project) => project.id)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Dynamic tech pages — collect unique tags from projects + experience
  const allTags = new Set<string>();

  content.projects.items.forEach((project) => {
    project.tags?.forEach((tag: string) => allTags.add(tag));
    if ("libraries" in project && Array.isArray(project.libraries)) {
      project.libraries.forEach((lib: string) => allTags.add(lib));
    }
  });

  content.experience.items.forEach((exp) => {
    exp.technologies?.forEach((tech: string) => allTags.add(tech));
    if ("libraries" in exp && Array.isArray(exp.libraries)) {
      exp.libraries.forEach((lib: string) => allTags.add(lib));
    }
  });

  const techPages: MetadataRoute.Sitemap = Array.from(allTags).map((tech) => ({
    url: `${baseUrl}/tech/${encodeURIComponent(tech)}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...projectPages, ...techPages];
}

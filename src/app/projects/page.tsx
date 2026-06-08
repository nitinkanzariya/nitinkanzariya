import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "Explore Nitin Kanzariya's portfolio of production-grade projects — including AI-powered SaaS platforms, RAG chatbots, real-time monitoring systems, and full-stack web applications built with React, Next.js, Node.js, Python FastAPI, and LangGraph.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "All Projects | Nitin Kanzariya",
    description:
      "Explore production-grade projects — AI SaaS platforms, RAG chatbots, real-time systems, and full-stack web applications.",
    url: "https://nitinkanzariya.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://nitinkanzariya.vercel.app" },
          { name: "Projects", url: "https://nitinkanzariya.vercel.app/projects" },
        ]}
      />
      <ProjectsPageClient />
    </>
  );
}

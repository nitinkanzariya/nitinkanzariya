import type { Metadata } from "next";
import ExperiencePageClient from "./ExperiencePageClient";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Nitin Kanzariya's professional journey — from React Intern to Senior Full Stack Developer. 2.5+ years building production SaaS platforms, AI pipelines, and real-time systems with React, Next.js, Node.js, Python FastAPI, LangGraph, and .NET.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Professional Experience | Nitin Kanzariya",
    description:
      "2.5+ years building production SaaS platforms, AI pipelines, and real-time systems.",
    url: "https://nitinkanzariya.vercel.app/experience",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://nitinkanzariya.vercel.app" },
          {
            name: "Experience",
            url: "https://nitinkanzariya.vercel.app/experience",
          },
        ]}
      />
      <ExperiencePageClient />
    </>
  );
}

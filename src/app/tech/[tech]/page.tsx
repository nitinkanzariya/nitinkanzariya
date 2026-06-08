import type { Metadata } from "next";
import content from "@/data/content.json";
import TechDetailClient from "./TechDetailClient";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

type Props = {
  params: Promise<{ tech: string }>;
};

export async function generateStaticParams() {
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

  return Array.from(allTags).map((tech) => ({
    tech: encodeURIComponent(tech),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tech } = await params;
  const decodedTech = decodeURIComponent(tech);

  return {
    title: `${decodedTech} Experience & Projects`,
    description: `Explore Nitin Kanzariya's experience and projects using ${decodedTech}. See real-world applications, professional roles, and production systems built with ${decodedTech}.`,
    alternates: {
      canonical: `/tech/${tech}`,
    },
    openGraph: {
      title: `${decodedTech} Experience & Projects | Nitin Kanzariya`,
      description: `Projects and professional experience using ${decodedTech} by Nitin Kanzariya.`,
      url: `https://nitinkanzariya.vercel.app/tech/${tech}`,
    },
  };
}

export default async function TechDetailPage({ params }: Props) {
  const { tech } = await params;
  const decodedTech = decodeURIComponent(tech);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://nitinkanzariya.vercel.app" },
          {
            name: decodedTech,
            url: `https://nitinkanzariya.vercel.app/tech/${tech}`,
          },
        ]}
      />
      <TechDetailClient />
    </>
  );
}

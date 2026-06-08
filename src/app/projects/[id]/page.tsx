import type { Metadata } from "next";
import content from "@/data/content.json";
import ProjectDetailClient from "./ProjectDetailClient";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return content.projects.items
    .filter((project) => project.id)
    .map((project) => ({
      id: project.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = content.projects.items.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const description =
    project.description.length > 160
      ? project.description.substring(0, 157) + "..."
      : project.description;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `/projects/${id}`,
    },
    openGraph: {
      title: `${project.title} | Nitin Kanzariya`,
      description,
      url: `https://nitinkanzariya.vercel.app/projects/${id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Nitin Kanzariya`,
      description,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://nitinkanzariya.vercel.app" },
          {
            name: "Projects",
            url: "https://nitinkanzariya.vercel.app/projects",
          },
          {
            name:
              content.projects.items.find((p) => p.id === id)?.title ||
              "Project",
            url: `https://nitinkanzariya.vercel.app/projects/${id}`,
          },
        ]}
      />
      <ProjectDetailClient />
    </>
  );
}

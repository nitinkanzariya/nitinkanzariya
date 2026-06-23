"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import content from "@/data/content.json";
import { useEffect, useState } from "react";

export default function ProjectDetailClient() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundProject = content.projects.items.find((p: any) => p.id === id);
      if (foundProject) {
        setProject(foundProject);
      } else {
        router.push("/projects");
      }
    }
  }, [id, router]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-center">
        <div className="text-(--color-text-secondary)">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-(--color-text-secondary) hover:text-(--color-text-heading) transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-text-heading) mb-6">
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <Link
                key={tag}
                href={`/tech/${encodeURIComponent(tag)}`}
                className="text-sm font-medium px-4 py-2 rounded-full bg-(--color-tag-bg) text-(--color-tag-text) border border-(--color-border) hover:bg-(--color-card-hover-bg) transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.websiteLink && (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r ${project.gradient} text-white font-medium hover:shadow-lg hover:opacity-90 transition-all`}
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full glass-strong border border-(--color-border-hover) text-(--color-text-heading) font-medium hover:bg-(--color-card-hover-bg) transition-all"
              >
                <Github className="w-5 h-5" />
                Source Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-(--color-border) shadow-2xl"
        >
          <div
            className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-20`}
          />
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-(--color-text-heading) mb-4 flex items-center gap-2">
                Overview
              </h2>
              <p className="text-(--color-text-body) text-lg leading-relaxed">
                {project.description}
              </p>
            </section>

            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-(--color-text-heading) mb-6 flex items-center gap-2">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {project.features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl glass border border-(--color-border)"
                    >
                      <div className="mt-1 text-blue-400 shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <p className="text-(--color-text-body) leading-relaxed">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </motion.div>

          {/* Sidebar / Extra info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl glass-strong border border-(--color-border)">
              <h3 className="text-xl font-bold text-(--color-text-heading) mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/tech/${encodeURIComponent(tag)}`}
                    className="text-sm font-medium px-3 py-1.5 rounded-full bg-(--color-tag-bg) text-(--color-tag-text) border border-(--color-border) hover:bg-(--color-card-hover-bg) transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
                {project.libraries &&
                  project.libraries?.map((library: string) => (
                    <Link
                      key={library}
                      href={`/tech/${encodeURIComponent(library)}`}
                      className="text-sm font-medium px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                    >
                      {library}
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

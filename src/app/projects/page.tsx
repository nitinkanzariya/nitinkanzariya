"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import content from "@/data/content.json";
import type { Metadata } from "next";

export default function AllProjects() {
  const { projects } = content;

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          All Projects
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {projects.description}
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-20">
        {projects.items.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="glass-strong rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass-strong border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform bg-white/10 hover:bg-white/20"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass-strong border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform bg-white/10 hover:bg-white/20"
                      title="View Source Code"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-center relative min-h-[300px]">
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${project.gradient} opacity-5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2`}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <div
                      className={`h-1.5 w-full rounded-full bg-linear-to-r ${project.gradient}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

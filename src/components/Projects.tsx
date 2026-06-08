"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, Star, Layers, Zap } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "./ImageWithFallback";
import content from "@/data/content.json";

export function Projects() {
  const { projects } = content;
  const [isExpanded, setIsExpanded] = useState(false);

  // Aegis is the first project — feature it separately
  const aegisProject = projects.items[0];
  const otherProjects = projects.items.slice(1);
  const displayedProjects = isExpanded
    ? otherProjects
    : otherProjects.slice(0, 3);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 uppercase tracking-wider">
            {projects.sectionTitle}
          </span>
          <h2 className="mt-4 gradient-text">{projects.headline}</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            {projects.description}
          </p>
        </motion.div>

        {/* Featured Aegis Project — Full-width hero card */}
        {aegisProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 group"
          >
            <div className="glass-strong rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto min-h-[320px] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${aegisProject.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
                  <ImageWithFallback
                    src={aegisProject.image}
                    alt={aegisProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/20">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Featured Project
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center relative">
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${aegisProject.gradient} opacity-5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2`}
                  />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {aegisProject.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed mb-6 line-clamp-4">
                      {aegisProject.description}
                    </p>

                    {/* Architecture Highlights */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <Layers className="w-4 h-4 text-blue-400" />
                        <span>4-Service Architecture</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span>6-Node LangGraph Pipeline</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>Multi-LLM Routing</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span>Embeddable Chat Widget</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {aegisProject.tags.slice(0, 8).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                      {aegisProject.tags.length > 8 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                          +{aegisProject.tags.length - 8} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {aegisProject.websiteLink && (
                        <a
                          href={aegisProject.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {aegisProject.githubLink && (
                        <a
                          href={aegisProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-white text-sm hover:bg-white/10 transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-strong rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay with buttons */}
                  <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full glass-strong border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full glass-strong border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                        title="View Source Code"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 flex flex-col items-center gap-6"
        >
          {otherProjects.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-400 hover:text-blue-300 transition-colors focus:outline-none font-medium"
            >
              {isExpanded ? "Show Less" : "Show More Projects..."}
            </button>
          )}

          <Link
            href="/projects"
            className="inline-block px-8 py-4 rounded-full glass-strong border border-white/20 text-white hover:bg-white/10 transition-all group"
          >
            <span className="flex items-center gap-2">
              {projects.cta}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useParams } from "next/navigation";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Briefcase,
  ExternalLink,
  Github,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import content from "@/data/content.json";

export default function TechDetailClient() {
  const params = useParams();
  const techParam = params.tech as string;
  const decodedTech = decodeURIComponent(techParam);

  const { projects, experience } = content;

  // Filter projects by matching tags case-insensitively
  const matchingProjects = projects.items.filter(
    (p: any) =>
      p.tags?.some(
        (t: string) => t.toLowerCase() === decodedTech.toLowerCase(),
      ) ||
      p.libraries?.some(
        (l: string) => l.toLowerCase() === decodedTech.toLowerCase(),
      ),
  );

  // Filter experiences by matching technologies case-insensitively
  const matchingExperience = experience.items.filter(
    (e: any) =>
      e.technologies?.some(
        (t: string) => t.toLowerCase() === decodedTech.toLowerCase(),
      ) ||
      e.libraries?.some(
        (l: string) => l.toLowerCase() === decodedTech.toLowerCase(),
      ),
  );

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <button
        onClick={() => window.history.back()}
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 cursor-pointer bg-transparent border-none p-0 focus:outline-none"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="text-blue-400">{decodedTech}</span> Experience &
          Projects
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Explore where I've utilized {decodedTech} to build scalable solutions.
        </p>
      </motion.div>

      <div className="space-y-24">
        {/* Matching Experience */}
        {matchingExperience.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Experience</h2>
            </div>
            <div className="grid gap-8">
              {matchingExperience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-strong rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-3 text-slate-400">
                        <span className="font-medium text-slate-200">
                          {item.company}
                        </span>
                        <span>•</span>
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlight the tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies?.map((tech: string, i: number) => {
                      const isMatch =
                        tech.toLowerCase() === decodedTech.toLowerCase();
                      return (
                        <Link
                          key={`tech-${i}`}
                          href={`/tech/${encodeURIComponent(tech)}`}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            isMatch
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
                          }`}
                        >
                          {tech}
                        </Link>
                      );
                    })}
                    {item.libraries?.map((library: string, i: number) => {
                      const isMatch =
                        library.toLowerCase() === decodedTech.toLowerCase();
                      if (!isMatch) return null;
                      return (
                        <Link
                          key={`lib-${i}`}
                          href={`/tech/${encodeURIComponent(library)}`}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            isMatch
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20"
                          }`}
                        >
                          {library}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Matching Projects */}
        {matchingProjects.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-10">
              <Layers className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {matchingProjects.map((project, index) => (
                <motion.div
                  key={project.id || project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group h-full"
                >
                  <div className="glass-strong rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden shrink-0">
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                      />
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3">
                        {project.id && (
                          <Link
                            href={`/projects/${project.id}`}
                            className="px-4 py-2 rounded-full glass-strong border border-white/20 text-white text-sm hover:scale-105 active:scale-95 transition-transform hover:bg-white/10"
                          >
                            View Details
                          </Link>
                        )}
                        {project.websiteLink && (
                          <a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full glass-strong border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                            title="View Live Demo"
                          >
                            <ExternalLink className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      {project.id ? (
                        <Link href={`/projects/${project.id}`}>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors cursor-pointer inline-block">
                            {project.title}
                          </h3>
                        </Link>
                      ) : (
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                      )}

                      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags?.map((tag: string, i: number) => {
                          const isMatch =
                            tag.toLowerCase() === decodedTech.toLowerCase();
                          return (
                            <Link
                              key={`tag-${i}`}
                              href={`/tech/${encodeURIComponent(tag)}`}
                              className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                                isMatch
                                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                  : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
                              }`}
                            >
                              {tag}
                            </Link>
                          );
                        })}
                        {project.libraries?.map(
                          (library: string, i: number) => {
                            const isMatch =
                              library.toLowerCase() ===
                              decodedTech.toLowerCase();
                            if (!isMatch) return null;
                            return (
                              <Link
                                key={`lib-${i}`}
                                href={`/tech/${encodeURIComponent(library)}`}
                                className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                                  isMatch
                                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                    : "bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20"
                                }`}
                              >
                                {library}
                              </Link>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {matchingExperience.length === 0 && matchingProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              No matching experience or projects found for{" "}
              <span className="text-white font-medium">{decodedTech}</span>.
            </p>
            <Link
              href="/"
              className="inline-block mt-6 px-6 py-3 rounded-full glass-strong border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

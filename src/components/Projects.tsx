import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import content from "../data/content.json";

export function Projects() {
  const { projects } = content;

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, index) => (
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

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                    <button className="w-10 h-10 rounded-full glass-strong border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full glass-strong border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                      <Github className="w-5 h-5 text-white" />
                    </button>
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
          className="text-center mt-12"
        >
          <button className="px-8 py-4 rounded-full glass-strong border border-white/20 text-white hover:bg-white/10 transition-all group">
            <span className="flex items-center gap-2">
              {projects.cta}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

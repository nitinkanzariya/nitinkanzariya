"use client";

import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, Award, Eye } from "lucide-react";
import Link from "next/link";
import content from "@/data/content.json";
import { ResumeModal } from "./ui/ResumeModal";

export function Experience() {
  const { experience } = content;

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--color-orb-bg-blue)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 uppercase tracking-wider">
            {experience.sectionTitle}
          </span>
          <h2 className="mt-4 gradient-text">{experience.headline}</h2>
          <p className="mt-4 text-(--color-text-secondary) max-w-2xl mx-auto">
            {experience.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-transparent" />

            {experience.items.slice(0, 2).map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications & Education Preview */}
        <div className="max-w-4xl mx-auto mt-20 grid md:grid-cols-1 gap-8">
          {experience.certifications && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-3xl p-8 border border-(--color-border)"
            >
              <h3 className="text-xl font-bold text-(--color-text-heading) mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {experience.certifications.map((cert: any, index: number) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-(--color-card-hover-bg) transition-all group border border-transparent hover:border-(--color-border)"
                  >
                    <div
                      className={`p-2 rounded-lg bg-linear-to-r ${cert.gradient} bg-opacity-20 shrink-0`}
                    >
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-(--color-text-heading) font-medium group-hover:text-purple-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-(--color-text-secondary) mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <ResumeModal resumeLink={experience.resumeLink}>
            <button className="inline-block px-8 py-4 rounded-full glass-strong border border-(--color-border-hover) text-(--color-text-heading) hover:bg-(--color-card-hover-bg) transition-all group cursor-pointer focus:outline-none">
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                View Resume
              </span>
            </button>
          </ResumeModal>

          <Link
            href="/experience"
            className="inline-block px-8 py-4 rounded-full glass-strong border border-(--color-border-hover) text-(--color-text-heading) hover:bg-(--color-card-hover-bg) transition-all group"
          >
            <span className="flex items-center gap-2">
              View Full Experience
              <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({ item, index }: { item: any; index: number }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const displayedAchievements = isExpanded
    ? item.achievements
    : item.achievements.slice(0, 3);
  const showButton = item.achievements.length > 3;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative mb-16 ${
        index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
      } md:w-1/2`}
    >
      {/* Timeline Dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`absolute left-0 md:left-auto ${
          index % 2 === 0 ? "md:right-0" : "md:left-0"
        } top-8 w-4 h-4 rounded-full bg-linear-to-r ${
          item.gradient
        } border-4 border-(--color-timeline-dot-border) md:translate-x-0 ${
          index % 2 === 0 ? "md:translate-x-1/2" : "md:-translate-x-1/2"
        }`}
      />

      {/* Content Card */}
      <div className="ml-8 md:ml-0 glass-strong rounded-3xl p-8 border border-(--color-border) hover:border-(--color-border-hover) transition-all group">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
          <div className="flex-1">
            <h3 className="text-(--color-text-heading) group-hover:text-blue-400 transition-colors mb-2">
              {item.role}
            </h3>
            <div className="flex items-center gap-2 text-(--color-text-secondary) mb-1">
              <Briefcase className="w-4 h-4" />
              <span>{item.company}</span>
            </div>
            <div className="text-sm text-(--color-text-muted)">
              {item.location}
            </div>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-(--color-text-body)">{item.period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-(--color-text-secondary) mb-4">{item.description}</p>

        {/* Achievements */}
        <div className="space-y-2">
          {displayedAchievements.map((achievement: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <div
                className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-linear-to-r ${item.gradient} shrink-0`}
              />
              <span className="text-sm text-(--color-text-body)">
                {achievement}
              </span>
            </div>
          ))}
        </div>

        {showButton && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors focus:outline-none"
          >
            {isExpanded ? "Show Less" : "Show More..."}
          </button>
        )}

        {/* Technologies */}
        {item.technologies && item.technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {item.technologies.map((tech: string, i: number) => (
              <Link
                key={i}
                href={`/tech/${encodeURIComponent(tech)}`}
                className="text-xs px-3 py-1 rounded-full bg-(--color-tag-bg) text-(--color-tag-text) border border-(--color-border) hover:bg-(--color-card-hover-bg) hover:text-(--color-text-heading) transition-colors"
              >
                {tech}
              </Link>
            ))}
          </div>
        )}

        {/* Gradient Line */}
        <div
          className={`mt-6 h-1 rounded-full bg-linear-to-r ${item.gradient}`}
        />
      </div>
    </motion.div>
  );
}

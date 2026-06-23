"use client";

import { motion } from "motion/react";
import { MapPin, Briefcase, Award, TrendingUp } from "lucide-react";
import content from "@/data/content.json";

export function About() {
  const { about, experience } = content;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return Briefcase;
      case "Award":
        return Award;
      case "TrendingUp":
        return TrendingUp;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--color-orb-bg-purple)" }}
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
            {about.sectionTitle}
          </span>
          <h2 className="mt-4 gradient-text">{about.headline}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-3xl p-8 border border-(--color-border)">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-(--color-text-heading) mb-1">
                    {about.bio.name}
                  </h3>
                  <p className="text-sm md:text-base text-(--color-text-secondary) flex flex-wrap items-center gap-1">
                    Based in{" "}
                    <span className="text-(--color-text-body) font-medium">
                      {about.bio.location}
                    </span>
                  </p>
                </div>
              </div>

              {about.bio.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-(--color-text-body) leading-relaxed ${
                    index < about.bio.paragraphs.length - 1 ? "mb-6" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {about.stats.map((stat, index) => {
                const Icon = getIcon(stat.icon);
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-strong rounded-xl p-4 border border-(--color-border) text-center"
                  >
                    <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="gradient-text">{stat.value}</div>
                    <p className="text-xs text-(--color-text-secondary) mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Experience Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-(--color-text-heading) mb-6">
              Professional Journey
            </h3>

            {experience.items.slice(0, 3).map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-strong rounded-2xl p-6 border border-(--color-border) group hover:border-(--color-border-hover) transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-(--color-text-heading) group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-(--color-text-secondary) mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-(--color-text-muted) glass px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <div
                  className={`h-1 rounded-full bg-linear-to-r ${exp.gradient}`}
                />
              </motion.div>
            ))}

            {/* Key Strengths */}
            <div className="glass-strong rounded-2xl p-6 border border-(--color-border) mt-8">
              <h4 className="text-(--color-text-heading) mb-4">
                Key Strengths
              </h4>
              <div className="space-y-3">
                {about.strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-400 to-purple-600" />
                    <span className="text-(--color-text-body) text-sm">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

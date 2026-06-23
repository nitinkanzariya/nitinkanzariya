"use client";

import { motion } from "motion/react";
import { Code2, Database, Brain, Wrench } from "lucide-react";
import Link from "next/link";
import content from "@/data/content.json";

export function Skills() {
  const { skills } = content;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return Code2;
      case "Database":
        return Database;
      case "Brain":
        return Brain;
      case "Wrench":
        return Wrench;
      default:
        return Code2;
    }
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--color-orb-bg-blue)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--color-orb-bg-purple)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 uppercase tracking-wider">
            {skills.sectionTitle}
          </span>
          <h2 className="mt-4 gradient-text">{skills.headline}</h2>
          <div className="h-1 w-24 mx-auto mt-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-full" />
          <p className="mt-4 text-(--color-text-secondary) max-w-2xl mx-auto">
            {skills.description}
          </p>
        </motion.div>

        {/* Categorized Tech Stack Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.categories.map((category, categoryIndex) => {
            const Icon = getIcon(category.icon);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-8 border border-(--color-border) hover:border-(--color-border-hover) transition-all group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-linear-to-br ${category.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-(--color-text-heading) leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ amount: 0.2 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.05 + index * 0.03,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Link
                        href={`/tech/${encodeURIComponent(skill.name)}`}
                        className="relative block px-3 py-2.5 rounded-xl bg-(--color-tag-bg) border border-(--color-border) hover:border-(--color-border-hover) transition-all cursor-pointer text-center group/item"
                      >
                        {/* Subtle gradient glow on hover */}
                        <div
                          className={`absolute inset-0 rounded-xl bg-linear-to-br ${category.color} opacity-0 group-hover/item:opacity-10 transition-opacity`}
                        />
                        <span className="relative text-sm text-(--color-text-body) font-medium group-hover/item:text-(--color-text-heading) transition-colors">
                          {skill.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-(--color-text-secondary) mb-6">
            Also experienced with:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.otherSkills.map((tag: string) => (
              <motion.div key={tag} whileHover={{ scale: 1.05, y: -2 }}>
                <Link
                  href={`/tech/${encodeURIComponent(tag)}`}
                  className="glass block px-4 py-2 rounded-full text-sm text-(--color-text-body) border border-(--color-border) hover:border-(--color-border-hover) hover:text-(--color-text-heading) hover:bg-(--color-card-hover-bg) transition-all cursor-pointer"
                >
                  {tag}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

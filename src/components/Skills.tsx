"use client";

import { motion } from "motion/react";
import { Code2, Database, Brain, Wrench } from "lucide-react";
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
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

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
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            {skills.description}
          </p>
        </motion.div>

        {/* Categorized Tech Stack Grid — replaces percentage bars */}
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
                className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-linear-to-br ${category.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Tech Grid — clean cells with name only, no fake percentages */}
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
                      className={`relative px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-default text-center group/item`}
                    >
                      {/* Subtle gradient glow on hover */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-linear-to-br ${category.color} opacity-0 group-hover/item:opacity-10 transition-opacity`}
                      />
                      <span className="relative text-sm text-slate-300 font-medium">
                        {skill.name}
                      </span>
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
          <p className="text-slate-400 mb-6">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.otherSkills.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass px-4 py-2 rounded-full text-sm text-slate-300 border border-white/10 hover:border-white/20 transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

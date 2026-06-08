"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import content from "@/data/content.json";

export default function AllExperience() {
  const { experience } = content;

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
          Professional Experience
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {experience.description}
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-12">
        {experience.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            <div className="glass-strong rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden">
              {/* Background Gradient */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${item.gradient} opacity-5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2`}
              />

              <div className="relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-white/5 pb-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-xl bg-linear-to-r ${item.gradient} bg-opacity-20`}
                      >
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.role}
                      </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg text-slate-200">
                          {item.company}
                        </span>
                      </div>
                      <span className="hidden sm:block text-slate-600">•</span>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 glass px-6 py-3 rounded-full shrink-0">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                        Overview
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div
                              className={`mt-2 w-2 h-2 rounded-full bg-linear-to-r ${item.gradient} shrink-0`}
                            />
                            <span className="text-slate-300 leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech stack sidebar */}
                  <div className="hidden md:flex flex-col justify-between border-l border-white/5 pl-8">
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        Skills & Tech
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies?.map((tech: string, i: number) => (
                          <div
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-medium text-slate-300"
                            style={{
                              borderColor: "rgba(255,255,255,0.1)",
                              backgroundColor: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.1)",
                            }}
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`h-32 w-full rounded-2xl bg-linear-to-b ${item.gradient} opacity-10`}
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

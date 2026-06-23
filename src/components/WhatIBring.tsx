"use client";

import { motion } from "motion/react";
import { Code, Brain, Zap, Database } from "lucide-react";
import content from "@/data/content.json";

export function WhatIBring() {
  const { services } = content;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return Code;
      case "Brain":
        return Brain;
      case "Zap":
        return Zap;
      case "Database":
        return Database;
      default:
        return Code;
    }
  };

  return (
    <section id="what-i-bring" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
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
          <span className="text-purple-400 uppercase tracking-wider">
            What I Bring
          </span>
          <h2 className="mt-4 gradient-text">Core Engineering Strengths</h2>
          <p className="mt-4 text-(--color-text-secondary) max-w-2xl mx-auto">
            Deep expertise across the full stack — from interactive frontends to
            production AI pipelines and real-time infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.items.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-strong rounded-3xl p-8 border border-(--color-border) hover:border-(--color-border-hover) transition-all h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-(--color-text-heading) mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-(--color-text-secondary) leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.gradient}`}
                        />
                        <span className="text-sm text-(--color-text-body)">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`mt-6 h-1 rounded-full bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center glass-strong rounded-3xl p-12 border border-(--color-border)"
        >
          <h3 className="text-(--color-text-heading) mb-4">
            {services.cta.headline}
          </h3>
          <p className="text-(--color-text-secondary) mb-8 max-w-2xl mx-auto">
            {services.cta.description}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl hover:shadow-purple-500/50 transition-all"
          >
            {services.cta.button}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

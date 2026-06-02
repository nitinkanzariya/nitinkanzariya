import { motion } from "motion/react";
import { Code, Brain, Palette, Database, Zap } from "lucide-react";
import content from "../data/content.json";

export function Services() {
  const { services } = content;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return Code;
      case "Brain":
        return Brain;
      case "Palette":
        return Palette;
      case "Database":
        return Database;
      case "Zap":
        return Zap;
      default:
        return Code;
    }
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 uppercase tracking-wider">
            {services.sectionTitle}
          </span>
          <h2 className="mt-4 gradient-text">{services.headline}</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            {services.description}
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
                <div className="glass-strong rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.gradient}`}
                        />
                        <span className="text-sm text-slate-300">
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
          className="mt-16 text-center glass-strong rounded-3xl p-12 border border-white/10"
        >
          <h3 className="text-white mb-4">{services.cta.headline}</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
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

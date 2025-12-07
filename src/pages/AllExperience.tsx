import { motion } from "motion/react";
import { Briefcase, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import content from "../data/content.json";

export function AllExperience() {
  const { experience } = content;

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link
        to="/"
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

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          {experience.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              } md:w-1/2`}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`absolute left-0 md:left-auto ${
                  index % 2 === 0 ? "md:right-0" : "md:left-0"
                } top-8 w-4 h-4 rounded-full bg-gradient-to-r ${
                  item.gradient
                } border-4 border-dark-bg md:translate-x-0 ${
                  index % 2 === 0 ? "md:translate-x-1/2" : "md:-translate-x-1/2"
                }`}
              />

              <div className="ml-8 md:ml-0 glass-strong rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div className="flex-1">
                    <h3 className="text-white group-hover:text-blue-400 transition-colors mb-2">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{item.company}</span>
                    </div>
                    <div className="text-sm text-slate-500">
                      {item.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">{item.period}</span>
                  </div>
                </div>

                <p className="text-slate-400 mb-4">{item.description}</p>

                <div className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} shrink-0`}
                      />
                      <span className="text-sm text-slate-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-6 h-1 rounded-full bg-gradient-to-r ${item.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { Code2, Database, Brain, Wrench } from "lucide-react";
import content from "../data/content.json";

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
                className="glass-strong rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.items.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-sm text-slate-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ amount: 0.2 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + index * 0.05,
                          }}
                          className={`absolute top-0 left-0 h-full bg-linear-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
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

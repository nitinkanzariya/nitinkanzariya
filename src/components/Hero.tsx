import { motion } from "motion/react";
import { ArrowRight, Sparkles, Code, Brain } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import content from "../data/content.json";

export function Hero() {
  const { hero } = content;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-slate-300">{hero.status}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-white">{hero.title.line1}</span>
              <br />
              <span className="gradient-text">{hero.title.line2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <a
                href={hero.buttons.primary.link}
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {hero.buttons.primary.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={hero.buttons.secondary.link}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass border border-white/20 text-white hover:bg-white/10 transition-all text-center text-sm sm:text-base"
              >
                {hero.buttons.secondary.text}
              </a>
            </motion.div>

            {/* Tech Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-8"
            >
              {hero.techIcons.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 text-slate-400 text-sm sm:text-base">
                    {item.icon === "Code" ? (
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    ) : (
                      <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    )}
                    <span>{item.label}</span>
                  </div>
                  {index < hero.techIcons.length - 1 && (
                    <div className="hidden sm:block w-px h-8 bg-white/10 ml-4 sm:ml-6" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />

              {/* Image Container */}
              <div className="relative glass-strong rounded-3xl overflow-hidden border-2 border-white/10">
                <ImageWithFallback
                  src={hero.image.src}
                  alt={hero.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Cards */}
              {hero.floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  className={`hidden md:block absolute ${
                    index === 0 ? "-right-4 top-1/4" : "-left-4 bottom-1/4"
                  } glass px-4 py-3 rounded-xl border border-white/10 shadow-xl`}
                  animate={{ y: index === 0 ? [0, -10, 0] : [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index === 0 ? 0 : 1,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 ${
                        card.color === "green" ? "bg-green-400" : "bg-blue-400"
                      } rounded-full animate-pulse`}
                    />
                    <span className="text-sm">{card.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

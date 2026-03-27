import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Planet } from "../components/Planet";
import RevealText from "../components/RevealText";
import {
  highlights,
  portfolioData,
  socials,
  spotlightStats,
} from "../constants";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-48"
    >
      <div className="hero-grid mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center relative z-10">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-accent backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            {portfolioData.availability}
          </motion.div>

          <div className="space-y-4">
            <motion.p
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.4em] text-slate-500 font-bold"
            >
              Data, code, and product thinking
            </motion.p>

            <div className="relative">
              <RevealText
                text={portfolioData.name}
                className="max-w-4xl h1-xl text-white"
                delay={0.8}
              />
              <motion.div 
                variants={itemVariants}
                className="h-1 w-24 bg-accent mt-4 rounded-full"
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-2xl font-bold leading-relaxed text-slate-200 md:text-3xl pt-2"
            >
              {portfolioData.role}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
            >
              {portfolioData.tagline}
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-5 pt-4">
            <a
              href={portfolioData.resume}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(79,105,255,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Grab Resume
                <Icon icon="lucide:arrow-right" className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 h-full w-0 bg-white/20 transition-all duration-500 group-hover:w-full"></span>
            </a>
            
            <Link
              to="projects"
              smooth
              duration={900}
              offset={-80}
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              Archives
              <Icon icon="lucide:arrow-down-right" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </Link>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-4">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/5 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-400 backdrop-blur-sm transition-all duration-300 hover:text-accent hover:border-accent/40"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column / Spotlight Cards */}
        <motion.div
           className="relative space-y-8 lg:ml-auto w-full lg:max-w-md perspective-[2000px]"
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, delay: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent/20 to-transparent blur-3xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 glass">
              <motion.img
                src={portfolioData.image}
                alt={portfolioData.name}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out hover:scale-110 grayscale hover:grayscale-0"
              />
            </div>
            
            <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
              {spotlightStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + idx * 0.1 }}
                  className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-lg transition-all hover:bg-white/10 hover:-translate-y-1"
                >
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="glass-card rounded-[2rem] p-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold">
              Mission
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300 font-medium">
              {portfolioData.summary}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

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
      className="relative overflow-hidden px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36"
    >
      {/* Immersive 3D Background */}
      <div className="absolute top-0 right-0 w-full h-[120vh] pointer-events-none opacity-50 z-0">
         <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <Environment preset="city" />
            <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
               <Planet scale={1.8} position={[4, 1, -2]} />
            </Float>
         </Canvas>
      </div>

      <div className="hero-grid mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center relative z-10">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-[#4f69ff]/25 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.28rem] text-[#2947a9] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4f69ff] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4f69ff]"></span>
            </span>
            {portfolioData.availability}
          </motion.div>

          <div className="space-y-2">
            <motion.p
              variants={itemVariants}
              className="text-sm uppercase tracking-[0.38rem] text-slate-500"
            >
              Data, code, and product thinking
            </motion.p>

            <RevealText
              text={portfolioData.name || "RAVI RANJAN"}
              className="max-w-4xl text-5xl font-black uppercase leading-[0.95] text-[#08111f] sm:text-6xl lg:text-[7.5rem]"
              delay={0.8}
            />

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-xl leading-relaxed text-slate-600 md:text-2xl pt-4"
            >
              {portfolioData.role}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base leading-8 text-slate-500 md:text-lg"
            >
              {portfolioData.tagline}
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a
              href={portfolioData.resume}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#08111f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2rem] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#08111f]/20"
            >
              <span className="relative z-10 flex items-center gap-3 w-full">
                Resume
                <Icon icon="lucide:arrow-right" className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 h-full w-0 bg-[linear-gradient(90deg,#4b63ff_0%,#7eb8ff_50%,#b7ffd4_100%)] transition-all duration-500 group-hover:w-full"></span>
            </a>
            
            <Link
              to="projects"
              smooth
              duration={900}
              offset={-80}
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#08111f]/15 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2rem] text-[#08111f] backdrop-blur transition-all duration-300 hover:border-[#08111f]/40 hover:bg-white"
            >
              View Projects
              <Icon icon="lucide:arrow-down-right" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </Link>
          </motion.div>

          {/* Socials & Highlights */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[#08111f]/10 bg-white/70 text-slate-600 backdrop-blur transition-colors duration-300 hover:border-[#4f69ff]/30 hover:bg-[#eff3ff] hover:text-[#2947a9]"
              >
                <span className="sr-only">{social.name}</span>
                <span className="text-xs uppercase font-medium">{social.name.charAt(0)}</span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#4f69ff]/15 bg-[#eff3ff] px-4 py-2 text-xs uppercase tracking-[0.18rem] text-[#2947a9] transition-transform duration-300 hover:-translate-y-1"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column / Spotlight Cards */}
        <motion.div
           className="relative space-y-6 lg:ml-auto w-full lg:max-w-md perspective-[2000px]"
           initial={{ opacity: 0, x: 50, rotateY: 15 }}
           animate={{ opacity: 1, x: 0, rotateY: 0 }}
           transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
           whileHover={{ rotateY: -5, rotateX: 5, transition: { duration: 0.5 } }}
           style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(227,237,255,0.82)_100%)] p-5 shadow-[0_30px_90px_rgba(23,42,89,0.12)] backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-x-5 top-5 h-32 rounded-full bg-[radial-gradient(circle,_rgba(79,105,255,0.35)_0%,_rgba(79,105,255,0)_72%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#dfe8ff] group">
              <motion.img
                src={portfolioData.image}
                alt={portfolioData.name}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            
            <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
              {spotlightStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + idx * 0.1 }}
                  className="rounded-[1.25rem] border border-[#08111f]/8 bg-white/85 p-4 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-3xl font-black text-[#08111f]">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.16rem] text-slate-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Quick Snapshot Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-[#08111f] p-6 text-white shadow-[0_24px_60px_rgba(8,17,31,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4f69ff]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <p className="relative z-10 text-sm uppercase tracking-[0.28rem] text-white/45">
              Quick Snapshot
            </p>
            <p className="relative z-10 mt-3 text-lg leading-8 text-white/80">
              {portfolioData.summary}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

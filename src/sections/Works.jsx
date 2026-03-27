import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";

const Works = () => {
  const text =
    "A selection of high-impact engineering projects, built precisely using modern architectures and data-driven principles.";

  return (
    <section id="projects" className="relative pb-32">
      <div className="mx-auto w-full max-w-7xl px-4 pt-24 md:px-10">
        <AnimatedHeaderSection
          subTitle={"Featured Work"}
          title={"Projects"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="mt-20 flex flex-col gap-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative flex w-full flex-col md:flex-row gap-12"
            >
              {/* Content Side */}
              <div className="relative z-10 flex w-full flex-col justify-center md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-accent">
                    0{index + 1} // {project.category}
                  </p>
                  <h2 className="mb-6 h1-xl text-white">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    {project.period}
                  </p>
                  <p className="mb-8 text-lg leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                  
                  <div className="mb-8 space-y-3">
                    {project.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-4">
                        <Icon icon="lucide:arrow-right" className="mt-1 shrink-0 text-accent" />
                        <p className="text-sm text-slate-400 font-medium">{bullet}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-10 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/5 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-slate-400 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all hover:bg-accent hover:text-white"
                  >
                    Launch Case
                    <Icon icon="lucide:external-link" className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Media Side */}
              <div className="relative w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="group relative aspect-video w-full overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                  />
                  <div
                    className={`absolute inset-0 z-10 bg-gradient-to-tr ${project.accent} mix-blend-overlay opacity-30`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

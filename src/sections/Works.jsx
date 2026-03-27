import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";

const Works = () => {
  const text =
    "A selection of high-impact engineering projects, built precisely using modern architectures and data-driven principles.";

  return (
    <section id="projects" className="relative bg-[#08111f] pb-32">
      <div className="mx-auto w-full max-w-7xl px-4 pt-24 md:px-10">
        <AnimatedHeaderSection
          subTitle={"Featured Work"}
          title={"Projects"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="mt-20 flex flex-col gap-10 md:gap-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative flex w-full flex-col md:h-[150vh] md:flex-row xl:h-[180vh]"
            >
              {/* Scrollable Content Side */}
              <div className="relative z-10 flex w-full flex-col justify-start md:w-1/2 md:pr-12 md:pt-[15vh]">
                <div className="sticky top-[15vh]">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35rem] text-[#4f69ff]">
                      0{index + 1} • {project.category}
                    </p>
                    <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
                      {project.title}
                    </h2>
                    <p className="mb-6 text-sm uppercase tracking-[0.2rem] text-white/40">
                      {project.period}
                    </p>
                    <p className="mb-8 text-lg leading-relaxed text-white/70 lg:text-xl">
                      {project.description}
                    </p>
                    
                    <div className="mb-8 space-y-4">
                      {project.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-4">
                          <Icon icon="lucide:check" className="mt-1 shrink-0 text-xl text-[#b7ffd4]" />
                          <p className="text-base text-white/80">{bullet}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-12 flex flex-wrap gap-3">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 text-xs font-medium uppercase tracking-[0.15rem] text-white"
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
                      className="inline-flex cursor-none items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2rem] text-[#08111f] transition-all hover:bg-[#4f69ff] hover:text-white"
                    >
                      View Project
                      <Icon icon="lucide:arrow-up-right" className="text-xl" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              {/* Sticky Media Side */}
              <div className="relative w-full md:w-1/2">
                <div className="sticky top-0 flex h-[60vh] md:h-screen w-full items-center justify-center p-4 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    className="group relative h-full w-full overflow-hidden rounded-[2.5rem] bg-[#1a1c29]"
                  >
                    {/* Parallax Image Map */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover opacity-80 transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                    {/* Atmospheric Lighting Overlay */}
                    <div
                      className={`absolute inset-0 z-10 bg-gradient-to-tr ${project.accent} mix-blend-overlay opacity-50`}
                    />
                    {/* Vignette */}
                    <div className="absolute inset-0 z-20 shadow-[inset_0_0_100px_rgba(8,17,31,0.8)]" />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

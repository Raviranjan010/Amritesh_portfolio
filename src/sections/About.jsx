import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { achievements, education, portfolioData } from "../constants";

const About = () => {
  const text = `Grounded in computer science, interested in product execution,
    and motivated by building things that are both useful
    and measurable.`;
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.985,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  }, []);

  return (
    <section id="about" className="min-h-[100vh] rounded-b-[2.5rem] bg-white py-8">
      <AnimatedHeaderSection
        subTitle={"Profile & Focus"}
        title={"About"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="grid gap-8 px-4 pb-16 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          ref={imgRef}
          className="group relative overflow-hidden rounded-[2rem] border border-[#08111f]/8 bg-[linear-gradient(180deg,#eef3ff_0%,#ffffff_100%)] p-4 shadow-[0_25px_80px_rgba(19,40,83,0.08)]"
        >
          <div className="overflow-hidden rounded-[1.5rem] w-full aspect-[4/5] relative">
            <motion.img
              initial={{ scale: 1.2, y: 50 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              src={portfolioData.image}
              alt={portfolioData.name}
              className="h-[120%] w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
          </div>
        </div>
        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-[#08111f]/8 bg-[#f6f8fc] p-6 md:p-8 transition-colors hover:bg-[#eef3ff] duration-500">
            <p className="text-sm uppercase tracking-[0.35rem] text-slate-500">
              Summary
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {portfolioData.summary}
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              My work currently sits at the intersection of full-stack product
              building, applied machine learning, and analytical reporting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-[#08111f]/8 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-sm uppercase tracking-[0.35rem] text-slate-500">
                Achievements
              </p>
              <div className="mt-5 space-y-4 cursor-none">
                {achievements.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.02, x: 10, backgroundColor: "#e0e7ff" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-[1.25rem] bg-[#eff3ff] p-4 text-sm leading-7 text-slate-700 transition-colors"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#08111f]/8 bg-[#08111f] p-6 text-white shadow-sm hover:shadow-lg transition-shadow duration-300">
              <p className="text-sm uppercase tracking-[0.35rem] text-white/35">
                Education Snapshot
              </p>
              <div className="mt-5 space-y-4 cursor-none">
                {education.map((item) => (
                  <motion.div
                    key={item.school}
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-2xl border-b border-white/10 p-4 last:border-b-0 transition-colors"
                  >
                    <p className="text-lg font-semibold">{item.school}</p>
                    <p className="mt-1 text-sm text-white/65">{item.degree}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2rem] text-white/35">
                      {item.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

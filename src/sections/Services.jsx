import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { skillsData } from "../constants";

const Services = () => {
  const text = `Technical range across full-stack development,
  analytics, dashboards, and problem solving
  built on a strong CS foundation.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 160,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section
      id="skills"
      className="rounded-[2.5rem] bg-[#08111f] py-12 text-white md:py-16"
    >
      <AnimatedHeaderSection
        subTitle={"Technical Toolkit"}
        title={"Skills"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {skillsData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={service.title}
          className="sticky border-t border-white/12 bg-[#08111f] px-4 pb-10 pt-6 md:px-10"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(skillsData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="flex flex-col gap-5">
              <p className="text-xs uppercase tracking-[0.35rem] text-white/35">
                0{index + 1}
              </p>
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="max-w-xl text-base leading-8 text-white/65 md:text-lg">
                {service.description}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.items.map((item, itemIndex) => (
                <motion.div
                  key={`${service.title}-${item.name}`}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)", y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition-colors duration-500 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-none"
                >
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28rem] text-white/30 transition-colors group-hover:text-white/50">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </p>
                    <div className="rounded-full bg-white/5 p-3 outline outline-1 outline-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:outline-white/20">
                      <Icon icon={item.icon} className="text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium leading-snug tracking-wide text-white/80 transition-colors group-hover:text-white">
                    {item.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;

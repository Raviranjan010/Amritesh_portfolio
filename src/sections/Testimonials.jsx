import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { achievements, education } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".journey-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 py-16 md:px-10">
      <div ref={cardsRef} className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {education.map((item) => (
          <div
            key={item.school}
            className="journey-card rounded-[2rem] border border-[#08111f]/8 bg-white p-6 shadow-[0_24px_70px_rgba(18,29,54,0.06)]"
          >
            <p className="text-xs uppercase tracking-[0.32rem] text-slate-400">
              {item.period}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-[#08111f]">
              {item.school}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.18rem] text-[#2947a9]">
              {item.place}
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">{item.degree}</p>
            <p className="mt-3 rounded-[1rem] bg-[#eff3ff] px-4 py-3 text-sm text-slate-700">
              {item.meta}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto my-16 h-px max-w-7xl bg-gradient-to-r from-transparent via-[#08111f]/20 to-transparent" />

      <div
        ref={statsRef}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3"
      >
        {achievements.map((item, index) => (
          <div
            key={index}
            className="stat-item rounded-[1.75rem] border border-[#08111f]/8 bg-[#08111f] p-6 text-white"
          >
            <p className="text-xs uppercase tracking-[0.3rem] text-white/35">
              Highlight {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-4 text-lg leading-8 text-white/78">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

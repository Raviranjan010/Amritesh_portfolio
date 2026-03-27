import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { portfolioData, socials } from "../constants";

const Contact = () => {
  const text = `If you need a motivated developer with a strong mix of
    data thinking, web development, and execution focus,
    let's connect.`;

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.2,
      duration: 1,
      stagger: 0.18,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section id="contact" className="relative bg-[#08111f] overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4f69ff]/20 via-[#4f69ff]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[-100px] h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#b7ffd4]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative flex min-h-screen flex-col justify-between rounded-t-[2.5rem] bg-[#08111f]/50 backdrop-blur-3xl z-10 border-t border-white/5">
        <div className="mx-auto w-full max-w-7xl pt-10">
          <AnimatedHeaderSection
            subTitle={"Let's Connect"}
            title={"Contact"}
            text={text}
            textColor={"text-white"}
            withScrollTrigger={true}
          />
          <div className="mb-14 mt-6 grid gap-10 px-4 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.01)_100%)] p-8 text-white shadow-2xl backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4f69ff]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="relative z-10 text-sm uppercase tracking-[0.3rem] text-white/40">
                Current Focus
              </p>
              <p className="relative z-10 mt-6 text-xl leading-relaxed text-white/80">
                Internships, project-based work, and opportunities where analytics
                and engineering intersect.
              </p>
              <div className="relative z-10 mt-10">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-none items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.2rem] text-[#08111f] transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                  Download Resume
                  <Icon icon="lucide:download" className="text-lg" />
                </motion.a>
              </div>
            </motion.div>
            
            <div className="flex flex-col justify-center gap-8 font-light text-white uppercase lg:text-[40px] text-[28px] leading-none mb-10 pl-4 lg:pl-10">
              <div className="social-link group">
                <h2 className="text-sm font-semibold tracking-widest text-[#4f69ff] mb-2">E-mail</h2>
                <motion.a 
                  href={`mailto:${portfolioData.email}`}
                  whileHover={{ x: 10, color: "#ffffff" }}
                  className="cursor-none text-2xl tracking-wider lowercase text-white/70 transition-colors md:text-3xl lg:text-4xl hover:text-white inline-block"
                >
                  {portfolioData.email}
                </motion.a>
                <div className="my-6 h-px w-full max-w-md bg-white/10 transition-colors group-hover:bg-white/30" />
              </div>
              
              <div className="social-link group">
                <h2 className="text-sm font-semibold tracking-widest text-[#4f69ff] mb-2">Phone</h2>
                <motion.a
                  href={`tel:${portfolioData.phone}`}
                  whileHover={{ x: 10, color: "#ffffff" }}
                  className="cursor-none text-2xl lowercase text-white/70 transition-colors md:text-3xl lg:text-4xl hover:text-white inline-block"
                >
                  {portfolioData.phone}
                </motion.a>
                <div className="my-6 h-px w-full max-w-md bg-white/10 transition-colors group-hover:bg-white/30" />
              </div>
              
              <div className="social-link group">
                <h2 className="text-sm font-semibold tracking-widest text-[#4f69ff] mb-4">Social Media</h2>
                <div className="flex gap-6">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      whileHover={{ y: -5, color: "#ffffff" }}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-none text-sm font-medium tracking-widest text-white/50 transition-colors hover:text-white md:text-base relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 hover:border-white/30"
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.name.charAt(0)}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-8 text-center text-xs uppercase tracking-[0.35rem] text-white/35 md:px-10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-4">
          <span>Crafted for {portfolioData.name || "Amritesh Jangir"}</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#4f69ff] animate-pulse"></div> Smooth scrolling portfolio</span>
          <span>© 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

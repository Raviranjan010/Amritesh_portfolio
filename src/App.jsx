import React, { useEffect, useState, useRef } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";

// GSAP registration
gsap.registerPlugin(ScrollTrigger);

const ScrollTracker = ({ setShowTop }) => {
  useLenis(({ scroll }) => {
    // Only trigger state updates explicitly when crossing the threshold, do not trigger continuously!
    if (scroll > 500) {
      setShowTop((prev) => (prev ? prev : true));
    } else {
      setShowTop((prev) => (prev ? false : prev));
    }
  });

  return null;
};

const App = () => {
  const [showTop, setShowTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Sync GSAP with Lenis to completely fix sticking and lag
    gsap.ticker.lagSmoothing(0);
    
    // Manage lenis based on preloading status
    if (lenisRef.current?.lenis) {
      if (isLoading) {
        lenisRef.current.lenis.stop();
        window.scrollTo(0, 0);
      } else {
        lenisRef.current.lenis.start();
        ScrollTrigger.refresh();
      }
    }
  }, [isLoading]);

  const scrollToTop = () => {
    lenisRef.current?.lenis?.scrollTo(0, { duration: 1.5 });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader setLoading={setIsLoading} />}
      </AnimatePresence>

      <CustomCursor />

      <ReactLenis
        ref={lenisRef}
        root
        options={{
          lerp: 0.07,
          duration: 1.2,
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1.2,
          touchMultiplier: 2,
          infinite: false,
        }}
        className="relative min-h-screen overflow-x-clip"
      >
        <ScrollTracker setShowTop={setShowTop} />

        <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-white/10">
          <motion.div
            style={{ scaleX, transformOrigin: "0% 50%" }}
            className="h-full w-full bg-[linear-gradient(90deg,#4b63ff_0%,#7eb8ff_50%,#b7ffd4_100%)]"
          />
        </div>

        <div className="mesh-bg" />
        <div className="relative">
          <Navbar />
          <Hero />
          <ServiceSummary />
          <Services />
          <About />
          <Works />
          <ContactSummary />
          <Testimonials />
          <Contact />
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 z-[65] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#08111f]/90 text-white backdrop-blur transition-all duration-300 hover:scale-110 ${
            showTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
          aria-label="Scroll to top"
        >
          <Icon icon="lucide:arrow-up" className="text-lg" />
        </button>
      </ReactLenis>
    </>
  );
};

export default App;

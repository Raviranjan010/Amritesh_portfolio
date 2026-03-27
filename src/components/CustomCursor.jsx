import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // Use motion values directly to skip React renders
      cursorX.set(e.clientX - (isHovered ? 35 : 10));
      cursorY.set(e.clientY - (isHovered ? 35 : 10));
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName?.toLowerCase() === "a" ||
        e.target.tagName?.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [cursorX, cursorY, isHovered]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full sm:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      initial={{
        width: 20,
        height: 20,
        backgroundColor: "rgba(8, 17, 31, 1)",
        border: "0px solid rgba(8, 17, 31, 0)",
        mixBlendMode: "normal",
      }}
      animate={{
        width: isHovered ? 70 : 20,
        height: isHovered ? 70 : 20,
        backgroundColor: isHovered ? "transparent" : "rgba(8, 17, 31, 1)",
        border: isHovered ? "2px solid rgba(255, 255, 255, 1)" : "0px solid rgba(8, 17, 31, 0)",
        mixBlendMode: isHovered ? "difference" : "normal",
      }}
      transition={{ type: "spring", mass: 0.1, stiffness: 800, damping: 30 }}
    />
  );
};

export default CustomCursor;

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../utils";

const RevealText = ({ text, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -90,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  if (typeof text !== "string") {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("flex flex-wrap overflow-hidden pb-2", className)}
      style={{ perspective: "1000px" }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default RevealText;

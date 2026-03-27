import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideUp = {
  initial: { y: "0%" },
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

const Preloader = ({ setLoading }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => setLoading(false), 800);
      return;
    }
    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timeout);
  }, [index, setLoading]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#08111f] text-white"
    >
      <div className="flex items-center gap-4 text-4xl font-black md:text-5xl">
        <span className="block h-3 w-3 rounded-full bg-white"></span>
        <motion.p
          className="m-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          {words[index]}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;

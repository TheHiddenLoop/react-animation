import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.3,
      ease: [0.33, 1, 0.68, 1], 
      duration: 1.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 45,
      damping: 20,
      mass: 1.2,
    },
  },
};

const items = ["Explore", "Create", "Animate", "Deploy"];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-8">
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl"
      >
        {items.map((text, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              rotate: 0.5,
              boxShadow:
                "0px 10px 25px rgba(0, 0, 0, 0.12), 0px 4px 10px rgba(0, 0, 0, 0.06)",
            }}
            whileTap={{ scale: 0.96 }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-md text-center text-xl font-semibold text-gray-700 cursor-pointer transition-all"
          >
            {text}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

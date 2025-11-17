import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInSection({ children }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="p-6 mb-12 bg-white rounded shadow-md snap-start"

    >
      {children}
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function DragCompoent({ label, ref }) {
  return (
    <motion.div
      drag
      dragConstraints={ref}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 1.05 }}
      className="w-64 p-6 bg-white rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
    >
      <h2 className="text-xl text-center font-bold text-gray-800">{label}</h2>
      <p className="mt-2 text-gray-600">You can drag me around!</p>
    </motion.div>
  );
}

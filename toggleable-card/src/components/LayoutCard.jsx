import { motion } from "framer-motion";

export default function LayoutCard({ title, expanded, onClick }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`p-6 rounded-lg shadow-md cursor-pointer bg-white ${
        expanded ? "bg-blue-200" : "bg-white"
      }`}
    >
      <motion.h2 layout className="text-xl font-bold text-gray-800">
        {title}
      </motion.h2>
      {expanded && (
        <motion.p layout className="mt-2 text-gray-600">
          This is some extra content that fades in when expanded.
        </motion.p>
      )}
    </motion.div>
  );
}
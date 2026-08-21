import { useState } from "react";
import LayoutCard from "./components/LayoutCard";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [expandedId, setExpandedId] = useState(null);

  const cards = [
    { id: 1, title: "Card One" },
    { id: 2, title: "Card Two" },
    { id: 3, title: "Card Three" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-6">
      <AnimatePresence>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LayoutCard
              title={card.title}
              expanded={expandedId === card.id}
              onClick={() =>
                setExpandedId(expandedId === card.id ? null : card.id)
              }
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import AnimatedModal from "./components/AnimatedModal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        Open Modal
      </button>

      <AnimatedModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-bold text-gray-800">Animated Modal</h2>
        <p className="mt-2 text-gray-600">
          This modal fades and scales in beautifully!
        </p>
      </AnimatedModal>
    </div>
  );
}

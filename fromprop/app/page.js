"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

function Page() {
  const container = useRef(null);
  const aniRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      aniRef.current = gsap.from(".card", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, container);

    return () => { ctx.revert(); aniRef.current?.kill(); };
  }, []);

  const handleClick = () => {
    aniRef.current.restart();
  }

  return (
    <div
      ref={container}
      className="min-h-screen flex items-center justify-center flex-col bg-black/80 gap-4"
    >
      <div className="card size-36 bg-blue-400 rounded-xl shadow-md"></div>
      <div className="card size-36 bg-green-400 rounded-xl shadow-md"></div>
      <div className="card size-36 bg-red-400 rounded-xl shadow-md"></div>

      <button onClick={handleClick} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200">
        Repeat
      </button>
    </div>
  );
}

export default Page;

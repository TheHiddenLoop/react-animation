import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import {motion} from "framer-motion"

export default function Rotate() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="bg-blue-950 min-h-screen text-white grid grid-cols-2 p-8 gap-8">
      <div className="flex items-center justify-center">
        <motion.div animate={{x, y, rotate}} transition={{type:"spring"}} className="border-[5px] border-pink-400 border-dotted h-[250px] w-[250px] rounded-xl shadow-lg  "></motion.div>
      </div>

      <div className="bg-white/10 p-6 h-72 rounded-lg shadow-md border border-white/20 space-y-6">
        <h2 className="text-xl font-semibold mb-2">Controls</h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm opacity-80">X Position</label>
            <div className="flex items-center gap-3">
              <ProgressBar value={x} min={-200} max={200} setValue={setX} />
              <span>{x}</span>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm opacity-80">Y Position</label>
            <div className="flex items-center gap-3">
              <ProgressBar value={y} min={-200} max={170} setValue={setY} />
              <span>{y}</span>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm opacity-80">Rotation</label>
            <div className="flex items-center gap-3">
              <ProgressBar value={rotate} min={-200} max={200} setValue={setRotate} />
              <span>{rotate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

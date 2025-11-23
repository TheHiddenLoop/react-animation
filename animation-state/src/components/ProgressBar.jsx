import React from "react";

export default function ProgressBar({ value, setValue, min, max }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-3 rounded-lg appearance-none bg-black cursor-pointer 
                   accent-pink-600 transition-all duration-300 
                   focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-1 focus:ring-offset-background"
      />
    </div>
  );
}
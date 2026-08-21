"use client"

import gsap from "gsap"
import { useEffect, useRef } from "react"

const CONTROLLERS = ["Play", "Pause", "Resume", "Reverse", "Kill", "Yoyo", "Restart"];

function Page() {
  const boxRef = useRef(null);
  const animRef = useRef(null); 

  useEffect(() => {
    animRef.current = gsap.to(boxRef.current, {
      opacity: 1,
      y: -50,
      rotation: 360,
      duration: 1.5,
      borderRadius: '50%'
    });

    return () => {
      animRef.current?.kill();
    };
  }, []);

  const handleClickAnimation = (type) => {
    if (!animRef.current) return;

    switch (type) {
      case "Play":
        animRef.current.play(0); 
        break;
      case "Pause":
        animRef.current.pause();
        break;
      case "Resume":
        animRef.current.resume();
        break;
      case "Restart":
        animRef.current.restart();
        break;
      case "Reverse":
        animRef.current.reverse();
        break;
      case "Kill":
        animRef.current.kill();
        break;
      case "Yoyo":
        animRef.current.yoyo(true); 
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-blue-950/90 flex flex-col items-center justify-center">
      <div 
        ref={boxRef} 
        className="w-62.5 h-62.5 bg-[linear-gradient(135deg,#54a0ff,#6facde)] rounded-xl shadow-xl mb-52 opacity-0"
      ></div>

      <div>
        {CONTROLLERS.map((e) => (
          <button 
            className="py-3 px-8 rounded-xl bg-[#54a0ff] m-2 text-white font-medium hover:bg-[#4090ef] transition-colors cursor-pointer" 
            key={e} 
            onClick={() => handleClickAnimation(e)}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Page;
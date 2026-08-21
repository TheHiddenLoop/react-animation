"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";

function page() {
  const aniRef = useRef(null);

  useEffect(()=>{
    gsap.to(aniRef.current , {
      opacity:1,
      rotate:360,
      rotateY:360,
      rotateX:360,
      borderRadius: '50%',
      duration: 3,
      ease:"power1.inOut",
      repeat: 1,
      yoyo:true,
    })
  }, []);
  return (
    <section className="min-h-screen bg-blue-950 flex items-center justify-center">
      <div ref={aniRef} className="w-62.5 h-62.5 bg-[linear-gradient(135deg,#1dd1a1,#54a0ff)] rounded-xl shadow-xl opacity-100 ">
        
      </div>
    </section>
  )
}

export default page

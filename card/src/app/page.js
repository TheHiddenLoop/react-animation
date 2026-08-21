"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Page() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      opacity: 1,
      scale:1,
      duration: 2,
      ease: "power2.out",
      onComplete:()=>{
        gsap.to(boxRef.current, {
          y:-20,
          repeat:-1,
          yoyo:true,
          duration:0.5
        })
        
      }
    });
  }, []);

  return (
    <section className="bg-[#11274a] min-h-screen flex items-center justify-center">
      <div
        ref={boxRef}
        className="w-[205px] h-[205px] bg-[linear-gradient(135deg,#1dd1a1,#54a0ff)] rounded-xl shadow-xl opacity-1"
      />
    </section>
  );
}

export default Page;
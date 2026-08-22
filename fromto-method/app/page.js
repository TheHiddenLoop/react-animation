"use client"
import gsap from "gsap"
import { useEffect } from "react"

function Page() { // Capital 'P'

  useEffect(()=>{
    const bars = document.querySelectorAll(".bar");

    bars.forEach((e, i)=>{
      gsap.fromTo(e, {
        scaleY: 0.4,
      }, {
        scaleY: 1.6,
        duration: 0.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.1
      })
    })
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/80">
      <section>
        <div className="flex gap-1 items-center h-24">
          <div className="bar h-16 w-3 opacity-80 rounded-xl bg-blue-400 origin-center"></div>
          <div className="bar h-16 w-3 opacity-80 rounded-xl bg-blue-400 origin-center"></div>
          <div className="bar h-16 w-3 opacity-80 rounded-xl bg-blue-400 origin-center"></div>
          <div className="bar h-16 w-3 opacity-80 rounded-xl bg-blue-400 origin-center"></div>
          <div className="bar h-16 w-3 opacity-80 rounded-xl bg-blue-400 origin-center"></div>
          <div className="bar h-16 w-3 opacity-80 rounded-xl bg-blue-400 origin-center"></div>
          <div className="bar h-16 w-3 opacity-80 rounded-xl bg-blue-400 origin-center"></div>
          <div className="bar h-16 w-3 opacity-80 rounded-xl bg-blue-400 origin-center"></div>
        </div>
      </section>
    </div>
  )
}

export default Page
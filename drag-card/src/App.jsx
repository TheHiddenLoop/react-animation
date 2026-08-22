import { useRef } from "react";
import DragCompoent from "./components/DragCompoent";

export default function App() {
    const containerRef=useRef(null);
  return (
    <div ref={containerRef} className='flex items-center h-screen justify-center bg-gray-100 overflow-hidden'>
      <DragCompoent ref={containerRef} label={"Drag Me"}/>
    </div>
  )
}

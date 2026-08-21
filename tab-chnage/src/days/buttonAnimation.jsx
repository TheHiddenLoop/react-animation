import { motion } from "framer-motion";
import { hover } from "framer-motion";

export default function App() {
  return (
    <motion.div
    initial={{opacity:0, x:20}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.5}}
    className="flex justify-center items-center h-screen bg-gray-100">
     <motion.div
     whileHover={{scale:1.1}}
     whileTap={{scale:0.95}}
     transition={{type:"spring", stiffness:300}}
     className="py-3 px-8 bg-blue-600 hover:bg-blue-800  rounded-3xl outline-none border text-white font-semibold cursor-pointer">
      Click Me
     </motion.div>
    </motion.div>
  )
}

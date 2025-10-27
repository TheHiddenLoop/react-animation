
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
    initial={{opacity:0, x:-50}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.5}}
    exit={{opacity:0, x:-50}}
    className="p-8"
    >
    <h1 className="text-3xl font-bold text-blue-600">Home Page</h1>
      <p className="mt-4 text-gray-700">Welcome to the animated home page!</p>
    </motion.div>

  )
}

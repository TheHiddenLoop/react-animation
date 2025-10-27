import { motion } from "framer-motion"

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
     <motion.div 
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{duration:1, ease:"easeInOut"}}
     className="p-6 bg-white rounded-md shadow-lg"

     >
      <h1 className="text-2xl font-bold text-gray-800">Hello, Animation!</h1>
      </motion.div>
    </div>
  )
}

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./days/routing/Home.jsx";
import About from "./days/routing/About.jsx";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return <Router>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="flex gap-4 mb-6">
          <AnimatedButton label="Home" to="/" />
          <AnimatedButton label="About" to="/about" />
        </div>
        <AnimatedRoutes />
      </div>
    </Router>
}

function AnimatedButton({ label, to }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
      >
        {label}
      </Link>
    </motion.div>
  );
}

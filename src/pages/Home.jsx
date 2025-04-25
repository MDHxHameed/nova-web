import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet <span>NovaMind AI</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        AI Agents. Shared Memory. Limitless Automation.
      </motion.p>
      <motion.a
        href="#launch"
        className="launch-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Launch Now
      </motion.a>
    </section>
  );
};

export default Home;

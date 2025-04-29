import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      {/* Glowing orbit background */}
      <div className="orbital-glow" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        Meet <span>NovaMind AI</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        whileInView={{ scale: [0.95, 1] }}
      >
        AI Agents. Shared Memory. Limitless Automation.
      </motion.p>

      <motion.a
        href="#launch"
        className="launch-btn"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px #00ffe7, 0 0 60px #00ffe7aa",
          textShadow: "0 0 8px #000",
        }}
        whileTap={{ scale: 0.92 }}
      >
        🚀 Launch Now
      </motion.a>

      {/* Subtle ambient flicker effect */}
      <div className="cosmic-flicker" />
    </section>
  );
};

export default Home;

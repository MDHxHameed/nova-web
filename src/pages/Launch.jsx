import { motion } from "framer-motion";
import "./Launch.css";

const Launch = () => {
  return (
    <section className="launch" id="launch">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ready to Launch 🚀
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Activate your AI agent fleet and transform the way you work. Experience real-time collaboration, automation, and limitless intelligence—now.
      </motion.p>

      <motion.a
        href="#agents"
        className="launch-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🚀 Deploy NovaMind AI
      </motion.a>
    </section>
  );
};

export default Launch;

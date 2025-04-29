import { motion } from "framer-motion";
import "./Demo.css";

const Demo = () => {
  return (
    <section className="demo" id="demo">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Live AI Demo 🚀
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Watch NovaMind AI agents tackle tasks in real-time — from coding to research to automation.
      </motion.p>

      <motion.div
        className="demo-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <video
          src="/novamind-demo.mp4"
          autoPlay
          muted
          playsInline
          loop
          controls
          className="demo-video"
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
};

export default Demo;

import { motion } from "framer-motion";
import "./Features.css";

const features = [
  {
    title: "Multi-Agent Collaboration",
    desc: "Let AI agents work together to solve complex tasks autonomously.",
  },
  {
    title: "Real-Time Memory Sync",
    desc: "Seamless knowledge retention across agents using shared memory graphs.",
  },
  {
    title: "Plug & Play Tools",
    desc: "Integrate any API, plugin, or tool into an agent’s workflow in seconds.",
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Features Built for the Future 🤖
      </motion.h2>

      <div className="feature-grid">
        {features.map((f, index) => (
          <motion.div
            className="feature-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

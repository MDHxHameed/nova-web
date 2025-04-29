import { motion } from "framer-motion";
import "./Features.css";

const features = [
  {
    title: "⚡ Multi-Agent Collaboration",
    desc: "Let intelligent AI units join forces and accomplish complex tasks autonomously.",
  },
  {
    title: "🧠 Real-Time Memory Sync",
    desc: "Seamless knowledge transfer between agents through persistent graph memory.",
  },
  {
    title: "🔌 Plug & Play Tools",
    desc: "Instantly connect APIs, extensions, or services to any agent with one command.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const Features = () => {
  return (
    <section className="features" id="features">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        🚀 Features Built for the Future
      </motion.h2>

      <div className="feature-grid">
        {features.map((f, index) => (
          <motion.div
            className="feature-card"
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
          >
            <h3 data-text={f.title}>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

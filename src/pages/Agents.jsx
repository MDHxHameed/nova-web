import { motion } from "framer-motion";
import "./Agents.css";

const agents = [
  {
    name: "ResearchBot",
    role: "Gathers real-time data & academic info",
  },
  {
    name: "CodeSmith",
    role: "Writes and debugs code with precision",
  },
  {
    name: "Visionary",
    role: "Analyzes images and creates visual content",
  },
  {
    name: "TalkWizard",
    role: "Handles conversation, speech & translation",
  },
];

const Agents = () => {
  return (
    <section className="agents" id="agents">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Your AI Agents 🧠
      </motion.h2>

      <div className="agent-grid">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            className="agent-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.4 }}
          >
            <h3>{agent.name}</h3>
            <p>{agent.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Agents;

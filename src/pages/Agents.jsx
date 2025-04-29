import { motion } from "framer-motion";
import "./Agents.css";

const agents = [
  {
    name: "Nova Researcher",
    role: "Data Specialist",
    description: "Scours the web and databases to extract real-time insights.",
  },
  {
    name: "Mind Coder",
    role: "Developer Agent",
    description: "Writes, debugs, and optimizes code collaboratively with you.",
  },
  {
    name: "TaskMaster AI",
    role: "Automation Brain",
    description: "Automates your repetitive workflows and cross-app tasks.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      bounce: 0.3,
    },
  }),
};

const Agents = () => {
  return (
    <section className="agents" id="agents">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Meet Your <span className="glow">AI Agents</span>
      </motion.h2>

      <div className="agent-grid">
        {agents.map((agent, i) => (
          <motion.div
            className="agent-card"
            key={i}
            custom={i}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3>{agent.name}</h3>
            <p className="role">{agent.role}</p>
            <p>{agent.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Agents;

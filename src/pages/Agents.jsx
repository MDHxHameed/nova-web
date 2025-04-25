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

const Agents = () => {
  return (
    <section className="agents" id="agents">
      <h2>Meet Your AI Agents</h2>
      <div className="agent-grid">
        {agents.map((agent, index) => (
          <div className="agent-card" key={index}>
            <h3>{agent.name}</h3>
            <p className="role">{agent.role}</p>
            <p>{agent.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agents;

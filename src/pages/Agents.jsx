import { useEffect, useState } from "react";
import axios from "axios";
import "./Agents.css";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/agents");
        setAgents(res.data);
      } catch (err) {
        console.error("Error fetching agents:", err);
      }
    };

    fetchAgents();
  }, []);

  return (
    <section className="agents" id="agents">
      <h2>Meet Our AI Agents</h2>
      <div className="agent-cards">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <h3>{agent.name}</h3>
            <p><strong>{agent.role}</strong></p>
            <p>{agent.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agents;

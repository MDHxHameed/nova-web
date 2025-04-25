import "./Pricing.css";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Starter",
    price: "Free",
    features: ["1 Agent", "Limited Tools", "Community Support"],
  },
  {
    title: "Pro",
    price: "$29/mo",
    features: ["3 Agents", "Memory Sync", "Priority Support"],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "$99/mo",
    features: ["Unlimited Agents", "Custom Tools", "Dedicated Support"],
  },
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Choose Your Plan 🚀
      </motion.h2>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`plan ${plan.highlight ? "highlight" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.4 }}
          >
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>✅ {f}</li>
              ))}
            </ul>
            <button>Get Started</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

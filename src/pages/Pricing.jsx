import { motion } from "framer-motion";
import "./Pricing.css";

const pricingPlans = [
  {
    title: "Starter",
    price: "$0/mo",
    features: [
      "1 AI Agent",
      "Community Support",
      "Basic Tools Integration"
    ],
    highlight: false
  },
  {
    title: "Pro",
    price: "$29/mo",
    features: [
      "Up to 5 Agents",
      "Priority Support",
      "Advanced Tools & Plugins"
    ],
    highlight: true
  },
  {
    title: "Enterprise",
    price: "$99/mo",
    features: [
      "Unlimited Agents",
      "Dedicated Account Manager",
      "Custom Toolchain Deployment"
    ],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Choose Your Plan 🚀
      </motion.h2>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <motion.div
            className={`plan ${plan.highlight ? "highlight" : ""}`}
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <h3>{plan.title}</h3>
            <div className="price">{plan.price}</div>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
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

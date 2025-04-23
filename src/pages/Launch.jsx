import { motion } from "framer-motion";
import "./Launch.css";
import Button from "../components/Button";

const Launch = () => {
  return (
    <section className="launch" id="launch">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ready to Build with NovaMind? 🚀
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Join the future of AI — create, collaborate, and deploy intelligent agents in seconds.
      </motion.p>

      <Button text="Get Started" onClick={() => console.log("Launch initiated")} />
    </section>
  );
};

export default Launch;

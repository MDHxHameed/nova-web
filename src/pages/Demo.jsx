import { motion } from "framer-motion";
import "./Demo.css";
import Button from "../components/Button";

const Demo = () => {
  return (
    <section className="demo" id="demo">
      <motion.div
        className="demo-box"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Try NovaMind in Action 🔥</h2>
        <p>
          Experience the intelligence of AI agents solving real-world tasks — all inside your browser.
        </p>
        <Button text="Launch Demo" onClick={() => console.log("Demo Launch")} />
      </motion.div>
    </section>
  );
};

export default Demo;

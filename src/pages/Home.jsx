import { motion } from "framer-motion";
import "./Home.css";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="home" id="home">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet <span>NovaMind AI</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Your next-gen AI Agent hub — built for automation, creativity, and intelligence.
      </motion.p>

      <Button text="Launch Now 🚀" onClick={() => console.log("Launch clicked")} />
    </div>
  );
};

export default Home;

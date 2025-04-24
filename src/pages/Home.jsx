import { motion } from 'framer-motion';
import './Home.css'; // Optional: If you want to use extra styles

const Home = () => {
  return (
    <div className="home-container min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white text-center px-6">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to <span className="text-purple-400">NovaMind AI</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-xl mb-8 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Powering intelligent agents for your business, creativity, and automation — beautifully simple, shockingly smart.
      </motion.p>

      <motion.button
        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={() => console.log("Launch clicked")}
      >
        Launch Now 🚀
      </motion.button>
    </div>
  );
};

export default Home;

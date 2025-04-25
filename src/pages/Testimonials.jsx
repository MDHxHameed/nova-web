import "./Testimonials.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah J.",
    text: "NovaMind AI changed the way my team works. The agent collaboration is next level!",
  },
  {
    name: "Mark T.",
    text: "Impressed by how smooth the real-time memory sync is. Super helpful for dev workflows.",
  },
  {
    name: "Lena K.",
    text: "The best AI productivity suite I’ve used. Worth every penny.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        What People Say ❤️
      </motion.h2>
      <div className="testimonial-cards">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

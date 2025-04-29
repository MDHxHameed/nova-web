import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "NovaMind AI changed how I work—these agents literally anticipate my next step.",
    author: "Sarah M., Product Designer",
  },
  {
    quote: "An absolute game changer. The memory sync across agents is freaky accurate.",
    author: "Devansh R., Automation Engineer",
  },
  {
    quote: "The AI developers write cleaner code than some of my colleagues 😅.",
    author: "Lena K., Full Stack Developer",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Users Are Saying 💬
      </motion.h2>

      <div className="testimonial-cards">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial"
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * i, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ffe733" }}
          >
            <p>“{t.quote}”</p>
            <h4>- {t.author}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

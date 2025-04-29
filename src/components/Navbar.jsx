import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const navItems = ["home", "features", "agents", "demo", "pricing", "testimonials", "launch"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">⚡ NovaMind</div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {navItems.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <a href={`#${item}`} onClick={() => setOpen(false)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className={`burger ${open ? "toggle" : ""}`} onClick={() => setOpen(!open)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

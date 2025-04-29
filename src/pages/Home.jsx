import { useEffect, useRef } from "react";
import anime from "animejs";
import "./Home.css";

const Home = () => {
  const titleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    anime({
      targets: titleRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutExpo",
    });

    anime({
      targets: btnRef.current,
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: 600,
      duration: 1000,
      easing: "easeOutBack",
    });
  }, []);

  return (
    <section className="home" id="home">
      <h1 ref={titleRef}>
        Meet <span>NovaMind AI</span>
      </h1>
      <p>AI Agents. Shared Memory. Limitless Automation.</p>
      <a ref={btnRef} href="#launch" className="launch-btn">
        Launch Now 🚀
      </a>
    </section>
  );
};

export default Home;

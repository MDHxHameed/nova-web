import "./Demo.css";

const Demo = () => {
  return (
    <section className="demo" id="demo">
      <h2>Live AI Demo</h2>
      <p>Experience NovaMind AI agents solving tasks in real-time.</p>
      <div className="demo-box">
        <video
          src="/novamind-demo.mp4"
          title="AI Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></video>
      </div>
    </section>
  );
};

export default Demo;

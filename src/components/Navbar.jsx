import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NovaMind AI 🚀</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#demo">Demo</a></li>
        <li><a href="#launch">Launch</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

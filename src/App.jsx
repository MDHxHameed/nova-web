import Navbar from './components/Navbar';
import Home from './pages/Home';
import "./styles/globals.css";
import Agents from "./pages/Agents";
import Demo from "./pages/Demo";
import Launch from './pages/Launch';
import Features from './pages/Features';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Agents />
      <Demo />
      <Launch />
    </>
  );
}

export default App;

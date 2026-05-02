import ParticlesBg from "./components/ParticlesBg";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import CustomCursor from "./components/CustomCursor";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import DSA from "./sections/DSA";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <CustomCursor />
      <ParticlesBg />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <DSA />
      <Contact />
    </>
  );
}

export default App;
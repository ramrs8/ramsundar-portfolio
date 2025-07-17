import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ New
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer /> {/* ✅ Footer added */}
    </div>
  );
}

export default App;

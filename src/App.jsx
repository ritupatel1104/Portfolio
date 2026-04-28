import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog"; 
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"; // Import the high-five footer

export default function App() {
  const [isDark, setIsDark] = useState(true); // Defaulting to dark for that premium look

  return (
    <div className={`min-h-screen transition-colors duration-700 selection:bg-blue-500/30 ${
        isDark ? "bg-[#020617] text-white" : "bg-white text-slate-900"
      }`}>
      
      {/* Navbar is fixed, so we don't need to wrap it in <main>. 
        The z-index in the Navbar component handles stacking.
      */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      <main className="relative">
        {/* Each section inside should have responsive padding-x 
          (handled within components) to ensure content doesn't touch screen edges.
        */}
        <Hero isDark={isDark} />
        
        {/* Added a relative wrapper to ensure background glows stay contained */}
        <div className="relative overflow-hidden">
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <Blog isDark={isDark} />
          <Contact isDark={isDark} />
        </div>
      </main>

      {/* Replaced the simple footer with the high-impact version */}
      <Footer isDark={isDark} />
    </div>
  );
}
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      {/* Background overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Main container */}
      <div className="relative z-10 container mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

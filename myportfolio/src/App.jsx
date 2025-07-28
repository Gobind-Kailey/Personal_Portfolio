import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import BlurBlob from './components/BlurBlob'; // Uncomment if you're using it

const App = () => {
  return (
    // <div className="bg-[#050414] relative min-h-screen overflow-hidden">
    <div className="bg-[#050414]">
      
      {/* Optional blur blob background */}
      {/* <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} /> */}

      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    
      {/* Main Content */}
      <div className="relativept-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Project /> {/* Was originally written as Work, corrected here */}
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
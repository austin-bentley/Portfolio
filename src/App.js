import React from "react";
import Particles from "react-particles-js";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
      <Particles className="particle-background" />
    </div>
  );
}

export default App;

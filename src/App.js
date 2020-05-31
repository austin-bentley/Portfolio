import React from "react";
import Particles from "react-particles-js";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Particles className="particle-background" />
    </div>
  );
}

export default App;

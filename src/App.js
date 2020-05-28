import React from "react";
import svg from "./assets/sprite_60fps.svg";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        class="shapeshifter play"
        style={{ backgroundImage: `url(${svg})` }}
      ></div>
    </div>
  );
}

export default App;

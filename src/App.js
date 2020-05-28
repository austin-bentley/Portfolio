import React from "react";
import svg from "./assets/sprite_60fps.svg";

function App() {
  return (
    <div className="App">
      <div
        class="shapeshifter play"
        style={{ backgroundImage: `url(${svg})` }}
      ></div>
      <div id="particles-js"></div>
    </div>
  );
}

export default App;

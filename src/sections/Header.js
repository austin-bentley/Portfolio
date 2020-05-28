import React from "react";
import MobileNameSVG from "../assets/MobileName.svg";

function Header() {
  return (
    <div className="header-section">
      <div
        className="shapeshifter play name-svg"
        style={{ backgroundImage: `url(${MobileNameSVG})` }}
      ></div>
    </div>
  );
}

export default Header;

import React from "react";
import MobileNameSVG from "../assets/MobileName.svg";
import TabletNameSVG from "../assets/TabletName.svg";

function Header() {
  return (
    <div className="header-section">
      <div
        className="shapeshifter play name-svg mobile"
        style={{ backgroundImage: `url(${MobileNameSVG})` }}
      ></div>
      <div
        className="shapeshifter play name-svg tablet"
        style={{ backgroundImage: `url(${TabletNameSVG})` }}
      ></div>
    </div>
  );
}

export default Header;

import * as React from "react"
import Particles from "react-particles-js"
import "./Header.scss"

export const Header = () => (
  <div className="header-section">
    <Particles className="particle-background" />
    <div
      className="shapeshifter play name-svg mobile"
      style={{ backgroundImage: `url(/Name--mobile.svg)` }}
    ></div>
    <div
      className="shapeshifter play name-svg tablet"
      style={{ backgroundImage: `url(/Name--tablet.svg)` }}
    ></div>
  </div>
)

export default Header

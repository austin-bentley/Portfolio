import React from "react";
import LOGOMobileAB from "../assets/LOGO-mobileAB.svg";
import FadeInSection from "../components/FadeInSection";

function AboutMe() {
  return (
    <FadeInSection>
      <div className="about-me-section dp-section">
        <div className="title-container">
          <div
            className="name-logo"
            style={{ backgroundImage: `url(${LOGOMobileAB})` }}
          ></div>
          <h2 className="dp-title">out me</h2>
        </div>
        <p className="dp-section--text">
          I'm passionate in many aspects of my life but passion always seems to
          go a little bit farther when you're with the right people. I enjoy
          programing, learning, teaching, solving problems, and possible most of
          all working together with a well focused team.
        </p>
        <p className="dp-section--text">
          Nonetheless programing takes it's toll on the body and I think it's
          important to spend time outdoors being active. I rock climb
          extensivley, sometimes up to 5 times a week. I share this passion with
          two friends who I constantly entrust my life too.
        </p>
      </div>
    </FadeInSection>
  );
}

export default AboutMe;

import React from "react";
import RubiksCube from "../components/RubiksCube";
import FadeInSection from "../components/FadeInSection";

function Skills() {
  return (
    <div className="skills-section dp-section">
      <FadeInSection>
        <div className="skills-section--text">
          <h2 className="dp-title">Skills</h2>
          <p className="dp-section--text">
            I've worked with hundreds of toolkits/librarys/frameworks...etc.
            I've done front-end for most of my career and while it never gets
            boring I sure do love being able to build from the ground up. These
            are some of the more recognizable technologies that i've enjoyed
            working with over the years.
          </p>
          <p className="dp-section--text">
            Fun Fact: My best time on a 3X3 rubix cube is 36 seconds!
          </p>
        </div>
      </FadeInSection>
      <RubiksCube />
    </div>
  );
}

export default Skills;

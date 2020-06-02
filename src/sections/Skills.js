import React from "react";
import RubiksCube from "../components/RubiksCube";
// maybe a rubix cube of skills?
function Skills() {
  return (
    <div className="skills-section dp-section">
      <div className="skills-section--text">
        <h2 className="dp-title">Skills</h2>
        <p className="dp-section--text">
          I've worked with hundreds of toolkits/librarys/frameworks...etc. I've
          done front-end for most of my career and while it never gets boring I
          sure do love being able to build from the ground up. These are some of
          the more recognizable technologies that i've enjoyed working with over
          the years.
        </p>
        <p className="dp-section--text">
          Fun Fact: My best time on a rubix cube is 36 seconds!
        </p>
      </div>
      <RubiksCube />
      {/* <h4 className="dp-subtitle">Front-end</h4>
      <ul>
        <li>React</li>
        <li>Vanilla JS</li>
        <li>SCSS/CSS</li>
        <li>Webpack</li>
        <li>Handlebars</li>
        <li>Karma/Chai/Jasmine/Mocha</li>
      </ul>
      <h4 className="dp-subtitle">Back-end</h4>
      <ul>
        <li>Elixir</li>
        <li>Phoenix</li>
        <li>Phoenix Live View</li>
        <li>Postgres</li>
        <li>AWS (Lambda/API Gateway)</li>
      </ul> */}
    </div>
  );
}

export default Skills;

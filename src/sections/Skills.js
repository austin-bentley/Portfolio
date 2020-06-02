import React from "react";
// maybe a rubix cube of skills?
function Skills() {
  return (
    <div className="skills-section dp-section">
      <h2 className="dp-title">Skills</h2>
      <p className="dp-section--text">
        I've worked with hundreds of toolkits/librarys/frameworks...etc. Here
        are a few of the big ones.
      </p>
      <h4 className="dp-subtitle">Front-end</h4>
      <ul>
        <li>React</li>
        <li>Vanilla JS</li>
        <li>SCSS/CSS</li>
        <li>Webpack</li>
        <li>Karma/Chai/Jasmine/Mocha</li>
      </ul>
      <h4 className="dp-subtitle">Back-end</h4>
      <ul>
        <li>Elixir</li>
        <li>Phoenix</li>
        <li>Phoenix Live View</li>
        <li>Postgres</li>
        <li>AWS (Lambda/API Gateway)</li>
      </ul>
    </div>
  );
}

export default Skills;

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Resume from "../../assets/resume.pdf"
import { Section } from "../../components"
import "./About.scss"

export const About = () => (
  <Section color="white" className="about-section">
    <h2 className="dp-title title">About</h2>
    <div className="about">
      <StaticImage
        src="../../assets/mountain.webp"
        height={875}
        width={500}
        alt="Mountain Image"
      />
      <div className="content">
        <h3 className="quote">
          <i>- "I'm no stranger to conquering mountains"</i>
        </h3>
        <p className="description">
          I'm a very goal oriented person. Climbing the tallest climb in the
          Sandias, completing a rubiks cube in under 30 seconds, surfing the
          north shore, teaching myself web development. I love pushing myself to
          new heights. All of these things are easier with the help of others
          which is why I also love helping others not only achieve their goals
          but realize new ones.
        </p>
        <div className="social">
          <a href={Resume} download="austin_bentley_resume" className="icon">
            <i className="far fa-file"></i>
          </a>
          <a href="mailto:australinsurf@gmail.com" className="icon">
            <i className="far fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/austinbentley/" className="icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://abqshowfinder.com/" className="icon">
            <i className="fas fa-music"></i>
          </a>
          <a href="https://github.com/austin-bentley" className="icon">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </Section>
)

export default About

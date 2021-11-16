import * as React from "react"
import { Section, Card } from "../../components"
import { projects } from "../../data"
import "./Projects.scss"

export const Projects = () => {
  return (
    <Section className="projects-section">
      <h2 className="dp-title title">Projects</h2>
      <div className="projects">
        {projects().map(({ name, link, image }) => (
          <Card name={name} link={link} image={image} key={link} />
        ))}
      </div>
    </Section>
  )
}

export default Projects

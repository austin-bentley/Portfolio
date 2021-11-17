import * as React from "react"
import { technologies } from "../../data"
import { Section } from "../../components"
import "./Technologies.scss"

export const Technologies = () => (
  <Section color="white" className="technologies-section">
    <h2 className="dp-title title">Technologies</h2>
    <div className="technologies">
      {technologies.map(({ name, tools }) => (
        <div className="tech-category" key={name}>
          <h3 className="tech-category-title">{name}</h3>
          <ul className="tech">
            {tools.map(({ name, link }) => (
              <li key={name}>
                <a href={link} className="tech-link">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      )
    </div>
  </Section>
)

export default Technologies

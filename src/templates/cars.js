import * as React from "react"

import { Layout, Seo } from "../components"
import "./cars.scss"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const CarsTemplate = ({ pageContext }) => {
  const { timeline, name, color } = pageContext
  console.log("bbb", pageContext)

  return (
    <Layout className="cars">
      <Seo title={`Cars | ${name}`} />
      <div className="header">
        <h1 className="title">
          Cars.com{" "}
          <span className={`title-color page-color--${color}`}>{name}</span>
        </h1>
      </div>
      <VerticalTimeline className="vertical-timeline">
        {timeline.map(({ name, body }) => (
          <VerticalTimelineElement
            className="vertical-timeline-element"
            iconClassName="icon"
            key={name}
          >
            <h3 className="vertical-timeline-element-title">{name}</h3>
            <p>{body}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          className={`vertical-timeline-element--end page-color--${color}`}
          iconClassName="icon"
        ></VerticalTimelineElement>
      </VerticalTimeline>
      <div className="page-bottom"></div>
    </Layout>
  )
}

export default CarsTemplate

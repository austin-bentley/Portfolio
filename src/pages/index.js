import * as React from "react"
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component"
// import "react-vertical-timeline-component/style.min.css"

import { Seo, Layout } from "../components"
import { About, Technologies, Header, Projects } from "../Sections"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <Technologies />
    <Projects />
    <About />
  </Layout>
)

export default IndexPage

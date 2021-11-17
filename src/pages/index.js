import * as React from "react"
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

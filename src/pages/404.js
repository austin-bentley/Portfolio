import * as React from "react"

import { Layout, Seo } from "../components"
import "./404.scss"

const NotFoundPage = () => (
  <Layout className="not-found-page">
    <Seo title="404: Not found" />
    <div
      className="header-svg"
      style={{ backgroundImage: `url(/404.svg)` }}
    ></div>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

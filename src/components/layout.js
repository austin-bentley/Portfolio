import * as React from "react"
import PropTypes from "prop-types"
import "./Layout.scss"

export const Layout = ({ children, className }) => (
  <>
    <header></header>
    <main className={className}>{children}</main>
    <footer></footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

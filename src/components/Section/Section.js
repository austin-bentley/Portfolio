import * as React from "react"
import PropTypes from "prop-types"
import "./Section.scss"

export const Section = ({ color, children, className }) => {
  const sectionColor = (color ?? "") && `section-${color}`
  const classes = `${sectionColor} ${className}`

  return (
    <section className={classes}>
      <div className="page-section">{children}</div>
    </section>
  )
}

Section.propTypes = {
  siteTitle: PropTypes.string,
}

Section.defaultProps = {
  siteTitle: ``,
}

export default Section

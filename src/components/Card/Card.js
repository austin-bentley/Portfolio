import * as React from "react"
import PropTypes from "prop-types"
import "./Card.scss"

export const Card = ({ name, link, image }) => (
  <a href={link} className="card-link">
    <div className="card">
      {image}
      <p className="name">{name}</p>
    </div>
  </a>
)

Card.propTypes = {
  siteTitle: PropTypes.string,
}

Card.defaultProps = {
  siteTitle: ``,
}

export default Card

import React from "react"
import PropTypes from "prop-types"

import { SVG } from "./styles"

const Skew = ({ path, viewBox, fill }) => (
  <SVG>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      preserveAspectRatio="none"
    >
      <polygon fill={fill} points={path} />
    </svg>
  </SVG>
)

Skew.propTypes = {
  path: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
}

Skew.defaultProps = {
  path: "0,100 100,0 100,100",
  viewBox: "0 0 100 100",
  fill: "white",
}

export default Skew

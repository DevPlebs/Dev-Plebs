import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import PropTypes from "prop-types"

// TODO: This should all be part of a theme
const typeMap = new Map([
  ["primary", "rubik"],
  ["secondary", "montserrat"],
])
const fontMap = new Map([
  ["md", "1.5rem"],
  ["lg", "2.4rem"],
  ["xl", "3rem"],
  ["2xl", "4rem"],
  ["3xl", "5rem"],
])
const styleMap = new Map([
  ["regular", "400"],
  ["light-bold", "600"],
  ["bold", "800"],
])

const dynamicStyle = props =>
  css`
    font-family: ${typeMap.get(props.family)};
    color: ${props.color};
    font-size: ${fontMap.get(props.size)};
    font-weight: ${styleMap.get(props.fontWeight)};
    text-align: ${props.align};
    text-shadow: ${props.shadow && "2px 2px 2px rgba(0, 0, 0, 0.3)"};
  `

const StyledHeader = styled.h1`
  ${dynamicStyle};
`

const Header = ({
  family,
  color,
  fontWeight,
  size,
  align,
  shadow,
  children,
  className,
}) => (
  <StyledHeader
    family={family}
    className={className}
    color={color}
    fontWeight={fontWeight}
    size={size}
    align={align}
    shadow={shadow}
  >
    {children}
  </StyledHeader>
)

Header.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  family: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  size: PropTypes.string,
  align: PropTypes.string,
  shadow: PropTypes.bool,
}

Header.defaultProps = {
  children: "",
  className: "",
  family: "primary",
  color: "white",
  fontWeight: "regular",
  size: "md",
  align: "left",
  shadow: false,
}

export default Header

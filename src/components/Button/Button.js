import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import PropTypes from "prop-types"

const classMap = new Map([["rounded", "30px"]])
const sizeMap = new Map([
  ["xsmall", ".5rem"],
  ["small", "1rem"],
  ["regular", "1.5rem"],
])
const styleMap = new Map([["bold", "800"]])
const colorMap = new Map([["primary", "#c04abc"]])
const widthMap = new Map([["none", "0px"]])

const dynamicStyle = props =>
  css`
    background-color: ${colorMap.get(props.buttonColor)};
    color: ${props.fontColor};
    border-radius: ${classMap.get(props.buttonStyle)};
    border-width: ${widthMap.get(props.borderWidth)};
    font-size: ${sizeMap.get(props.fontSize)};
    font-weight: ${styleMap.get(props.fontWeight)};
    font-family: "montserrat", sans-serif;
    padding: ${sizeMap.get(props.padding)};
    box-shadow: ${props.shadow && "2px 2px 1px rgba(150, 150, 150, 0.4)"};
    cursor: pointer;
  `

const StyledButton = styled.button`
  ${dynamicStyle};
`

const Button = ({
  onClick,
  className,
  borderWidth,
  buttonText,
  buttonColor,
  fontColor,
  buttonStyle,
  fontSize,
  fontWeight,
  padding,
  shadow,
}) => (
  <StyledButton
    className={className}
    borderWidth={borderWidth}
    buttonColor={buttonColor}
    buttonStyle={buttonStyle}
    fontColor={fontColor}
    fontSize={fontSize}
    fontWeight={fontWeight}
    padding={padding}
    shadow={shadow}
  >
    {buttonText}
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  borderWidth: PropTypes.string,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonStyle: PropTypes.string,
  className: PropTypes.string,
  fontColor: PropTypes.string,
  fontSize: PropTypes.oneOf(["xsmall", "small", "regular"]),
  padding: PropTypes.oneOf(["xsmall", "small", "regular"]),
  fontWeight: PropTypes.string,
  shadow: PropTypes.bool,
}

Button.defaultProps = {
  className: "",
  borderWidth: "none",
  buttonText: "",
  buttonColor: "primary",
  fontColor: "white",
  buttonStyle: "rounded",
  fontSize: "regular",
  fontWeight: "bold",
  padding: "small",
  shadow: true,
}

export default Button

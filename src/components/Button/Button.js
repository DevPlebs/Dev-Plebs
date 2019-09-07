import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import PropTypes from "prop-types"

const classMap = new Map([["rounded", "30px"]])
const fontMap = new Map([["regular", "1.5rem"]])
const styleMap = new Map([["bold", "800"]])
const colorMap = new Map([["primary", "#c04abc"]])

const dynamicStyle = props =>
  css`
    background-color: ${colorMap.get(props.buttonColor)};
    color: ${props.fontColor};
    border-radius: ${classMap.get(props.buttonStyle)};
    font-size: ${fontMap.get(props.fontSize)};
    font-weight: ${styleMap.get(props.fontWeight)};
    font-family: "montserrat", sans-serif;
    padding: 1rem;
    box-shadow: ${props.shadow && "2px 2px 1px rgba(150, 150, 150, 0.4)"};
  `

const StyledButton = styled.button`
  ${dynamicStyle};
`

const Button = ({
  onClick,
  buttonText,
  buttonColor,
  fontColor,
  buttonStyle,
  fontSize,
  fontWeight,
  shadow,
}) => (
  <StyledButton
    buttonColor={buttonColor}
    buttonStyle={buttonStyle}
    fontColor={fontColor}
    fontSize={fontSize}
    fontWeight={fontWeight}
    shadow={shadow}
  >
    {buttonText}
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonStyle: PropTypes.string,
  fontColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  shadow: PropTypes.bool,
}

Button.defaultProps = {
  buttonText: "",
  buttonColor: "primary",
  fontColor: "white",
  buttonStyle: "rounded",
  fontSize: "regular",
  fontWeight: "bold",
  shadow: true,
}

export default Button

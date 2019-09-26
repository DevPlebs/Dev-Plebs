import { string, bool } from "prop-types"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import placeholderBg from "../../images/hills.svg"
import Card from "./Card"

export const BackgroundCard = styled(Card)`
  ${tw`text-white text-shadow text-center no-underline`}
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${props => props.backgroundImage});
  background-size: cover;
  background-position-x: center;
  background-position-y: 70%;
  ${props =>
    props.hover &&
    `:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(${props.backgroundImage});
    background-size: cover;
    background-position-x: center;
    background-position-y: 55%;
  }`}
`

BackgroundCard.propTypes = {
  backgroundImage: string,
  hover: bool,
}

BackgroundCard.defaultProps = {
  backgroundImage: placeholderBg,
  hover: true,
}
export default BackgroundCard

import styled from "@emotion/styled"
import tw from "tailwind.macro"

export const Section = styled.div`
  ${tw`relative pb-16 sm:pb-18 md:pb-20 pt-16 sm:pt-18 md:pt-20`}
  background-color: ${props => props.bgColor};
  min-height: 525px;
  svg {
    top: 0;
  }
`

Section.defaultProps = {
  bgColor: "#fff",
}

export default Section

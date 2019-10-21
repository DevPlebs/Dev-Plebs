import styled from "@emotion/styled"
import Header from "../Header"
import tw from "tailwind.macro"

export const StyledFooter = styled.footer`
  background-color: #2d3047;
  color: #fff;
  min-height: 150px;
`

export const StyledHeader = styled(Header)`
  ${tw`pt-4`}
`

import styled from "@emotion/styled"

import Header from "../Header"
import tw from "tailwind.macro"

export const StyledFooter = styled.footer`
  ${tw`text-center`}
  background-color: #222535;
  color: #fff;
`
export const StyledText = styled.p`
  ${tw`py-4 text-lg text-center m-0 text-gray-300 max-w-6xl mx-auto px-2 leading-normal md:px-8`}
  font-family: montserrat
`

export const StyledSmallText = styled.p`
  ${tw`py-4 text-xs text-center m-0 text-gray-500 max-w-6xl mx-auto px-2 md:px-8`}
  font-family: montserrat
`
export const IconLink = styled.a`
  ${tw`mx-4 text-5xl text-white hover:text-gray-500 cursor-pointer`}
  transition: .3s;
  svg {
    ${tw`my-6`}
  }
`

export const StyledHeader = styled(Header)`
  ${tw`pt-6 pb-2 m-0 max-w-6xl mx-auto px-2 md:px-8`}
`

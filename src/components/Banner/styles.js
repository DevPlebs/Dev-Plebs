import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { Container } from "../Container"
import bg from "../../images/hills.svg"

export const BannerWrapper = styled.header`
  ${tw`bg-no-repeat bg-bottom bg-cover relative w-screen`}
  height: 28em;
  background-image: url(${bg});
`

export const BannerContainer = styled(Container)`
  ${tw`flex justify-center items-center h-full flex-col`}
`

export const Title = styled.h1`
  ${tw`text-white font-bold ml-2 text-center`}
  font-size: calc(60px + (120 - 60) * ((100vw - 300px) / (1600 - 300)));
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  font-family: "Rubik", sans-serif;
`

export const StyledLink = styled(Link)`
  ${tw`no-underline`}
`

export const Navigation = styled.ul`
  ${tw`m-0 mb-6 mt-2 py-2 w-screen-95 max-w-5xl mx-6`}
  border-bottom: 4px solid white;
  border-top: 4px solid white;
`

export const NavigationItem = styled.li`
  ${tw`text-white text-center text-xl font-bold m-0`}
  text-shadow: 1px 1px 1px rgba(30, 30, 30, 0.9);
  list-style: none;
  font-family: "Rubik", sans-serif;
`

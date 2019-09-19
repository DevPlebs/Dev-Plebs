import tw from "tailwind.macro"
import styled from "@emotion/styled"
import bg from "../../images/hills.svg"

export const BannerWrapper = styled.header`
  ${tw`bg-no-repeat bg-top relative w-screen`}
  height: 28em;
  background-image: url(${bg});
`

export const Container = tw.div`flex justify-center h-full flex-col ml-20`

export const Title = styled.h1`
  ${tw`text-white font-bold ml-2`}
  font-size: calc(60px + (120 - 60) * ((100vw - 300px) / (1600 - 300)));
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  font-family: "Rubik", sans-serif;
`

export const Subtitle = styled.h2`
  color: #ffdbb5;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  margin: -1rem 0 0 0.75rem;
  text-shadow: 1px 1px 1px rgba(30, 30, 30, 0.9);
`

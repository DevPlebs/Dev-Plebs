import tw from "tailwind.macro"
import styled from "@emotion/styled"
import bg from "../../images/hills.svg"

export const BannerWrapper = styled.header`
  ${tw`bg-no-repeat bg-bottom bg-cover relative w-screen`}
  height: 28em;
  background-image: url(${bg});
`

export const Container = tw.div`flex justify-center h-full flex-col md:ml-20`

export const Title = styled.h1`
  ${tw`text-white font-bold ml-2 text-left`}
  font-size: calc(60px + (120 - 60) * ((100vw - 300px) / (1600 - 300)));
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  font-family: "Rubik", sans-serif;
`

export const Subtitle = styled.h2`
  ${tw`text-white p-3`}
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  margin: -1rem 0 0 0.75rem;
  text-shadow: 1px 1px 1px rgba(30, 30, 30, 0.9);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 1);
  width: max-content;
  background-color: #d4431e;
  font-size: calc(24px + (48 - 24) * ((100vw - 300px) / (1600 - 300)));
`

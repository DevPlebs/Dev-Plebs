import styled from "@emotion/styled"
import tw from "tailwind.macro"

// Core Card styles
export const DefaultCard = styled.div`
  ${tw`flex flex-wrap shadow bg-white rounded-lg shadow hover:shadow-lg`}
  width: 100%;
  position: relative;
  font-family: montserrat;
  transition: 0.35s;
  :hover {
    transform: ${props => props.hover && "translateY(-10px)"};
  }
`

export const CardHeader = styled.h4`
  ${tw`py-2 pl-2 pr-6 mb-0 text-white rounded-tl-lg`}
  max-height: 2rem;
  font-family: Rubik;
  background-color: #c04abc;
  clip-path: polygon(0 0, 100% 0%, 85% 100%, 0 100%);
`

export const CardBody = styled.div`
  ${tw`p-4 w-full text-lg flex flex-col`}
  h1, h2, h3, h4, h5 {
    font-family: Rubik;
  }
`

export const CardContainer = styled.div`
  ${tw`relative flex flex-row flex-wrap justify-center md:flex-no-wrap`}
`
export const CardText = styled.p`
  color: #000;
`
export default DefaultCard

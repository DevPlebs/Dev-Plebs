import styled from "@emotion/styled"
import tw from "tailwind.macro"

// Core Card styles
export const DefaultCard = styled.div`
  ${tw`flex flex-wrap shadow bg-white`}
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
  ${tw`p-4 w-full text-lg`}
  h1, h2, h3, h4, h5 {
    ${tw`text-2xl`}
    font-family: Rubik;
  }
`

export const CardTitle = styled.h4`
  ${tw`text-black`}
`

export const CardContainer = styled.div`
  ${tw`relative flex flex-row flex-wrap justify-center md:flex-no-wrap`}
`

export const CardDeck = styled.div`
  ${tw`bg-gray-200 w-auto rounded-bl-lg md:rounded-tr-lg rounded-br-lg pl-6 py-4 self-center w-97 md:h-97 ml-0 md:-ml-4`}
  left: 90%;
  font-family: montserrat;
`

export default DefaultCard

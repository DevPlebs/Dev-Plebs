import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import Banner from "../components/Banner"
import Button from "../components/Button"
import Header from "../components/Header"
import Skew from "../components/Skew"
import logo from "../images/pk.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Banner>
      <Skew />
    </Banner>
    <BioSection>
      <SectionImage>
        <Image>
          <img src={logo} alt="Phil and Keith as cartoons" />
        </Image>
      </SectionImage>
      <SectionContent>
        <Header size="lg" color="black" fontWeight="light-bold" align="right">
          Two Friends Making Content For Developers
        </Header>
        <Bio>
          {`
            We're not the first ones to do it (and we're certainly not the best),
            but we're hoping to create fun, relatable content. Keith is your average developer; 
            a stint of homelessness in his early 20's provided him with incredible psychological 
            damange. Phil is from jolly ol' England! He likes marmite, steak & kidney pie,
            and struggling to make ends meet.
          `}
        </Bio>
        <Button buttonText="SEE MORE" onClick={() => {}} />
      </SectionContent>
    </BioSection>
    <YouTubeSection>
      <Header size="xl" align="center" fontWeight="light-bold" shadow>
        Latest & Greatest
      </Header>
    </YouTubeSection>
  </Layout>
)

const BioSection = styled.div`
  ${tw`flex justify-between flex-wrap`}
  min-height: 525px;
`
const SectionImage = styled.div`
  ${tw`w-1/2`}
  margin-top: -50px;
`
const SectionContent = tw.div`w-1/2 text-right p-12`
const Bio = styled.p`
  ${tw`pl-12`}
  font-family: montserrat;
  font-size: 1.1rem;
`
const YouTubeSection = styled.div`
  ${tw`p-12`}
  background-color: #419d78;
  min-height: 525px;
`
const Image = styled.div`
  position: absolute;
  transform: scale(0.75);
  z-index: -1;
`

export default IndexPage

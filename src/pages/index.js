import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Link } from "gatsby"

import bg from "../images/pk.png"
import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import Banner from "../components/Banner"
import Button from "../components/Button"
import Header from "../components/Header"
import Skew from "../components/Skew"
import logo from "../images/pk.png"
import { BackgroundCard } from "../components/Card"

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
    <LatestSection>
      <Skew path="0,0 100,0 0,100" />
      <Header size="xl" align="center" fontWeight="light-bold" shadow>
        Latest & Greatest
      </Header>
      <LatestCards>
        <LatestCard
          header="Podcast"
          title="DevPlebs Podcast: Episode 1"
          text="Right about now"
          hover
        />
        <LatestCard
          header="Podcast"
          title="DevPlebs Podcast: Episode 0"
          text="Remember this isn't canon"
          hover
        />
        <LatestCard
          as={Link}
          to="/page-2"
          header="Youtube"
          title="How do I get my enviornment set up? | MacOS"
          text="See how we set up our MacOS web enviornments, maybe you'll like it"
          backgroundImage={bg}
        />
      </LatestCards>
    </LatestSection>
  </Layout>
)

const BioSection = styled.div`
  ${tw`flex justify-between flex-wrap `}
  min-height: 525px;
`
const SectionImage = styled.div`
  ${tw`w-full lg:w-1/2`}
  margin-top: -10px;
  @media screen and (min-width: 1024px) {
    margin-top: -50px;
  }
`
const SectionContent = tw.div`w-full text-center lg:w-1/2 lg:text-right p-4 sm:p-8 md:p-12`
const Bio = styled.p`
  ${tw`pl-0 md:pl-12`}
  font-family: montserrat;
  font-size: 1.1rem;
`
const LatestSection = styled.div`
  ${tw`relative pb-4 sm:pb-8 md:pb-12 pt-16 sm:pt-18 md:pt-20`}
  background-color: #419d78;
  min-height: 525px;
  svg {
    top: 0;
  }
`
const Image = styled.div`
  ${tw`relative text-center lg:text-left lg:absolute`}
  transform: scale(.96);
  z-index: 1;

  @media screen and (min-width: 1024px) {
    transform: scale(0.7);
    margin-left: -3.5rem;
  }
`

const LatestCards = styled.div`
  ${tw`flex flex-row flex-wrap justify-center`}
`

const LatestCard = styled(BackgroundCard)`
  ${tw`m-3`}
  flex-basis: 100%;
  flex-grow: 1;
  @media (min-width: 820px) {
    flex-basis: 23%;
  }
`

export default IndexPage

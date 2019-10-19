import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import fridayNightDeploys from "../images/podcast_cover_neon.png"
import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import Banner from "../components/Banner"
import Button from "../components/Button"
import Header from "../components/Header"
import Skew from "../components/Skew"
import logo from "../images/pk.png"
import { BackgroundCard, DefaultCard, CardDeck } from "../components/Card"

const IndexPage = () => {
  const FeatuedDeck = (
    <>
      <DeckHeader
        size="md"
        align="left"
        fontWeight="light-bold"
        shadow
        color="#000"
      >
        Episode 1: Horrible Bosses
      </DeckHeader>
      <p>Cast: Keith, Phil</p>
      <iframe
        title="Friday Night Deploys: Episode 1"
        src="https://www.buzzsprout.com/676587/1889849-episode-1-horrible-bosses-subject-to-dmca-from-new-line-cinema?client_source=small_player&amp;iframe=true&amp;referrer=https%253A%252F%252Fwww.buzzsprout.com%252F676587%252F1889849-episode-1-horrible-bosses-subject-to-dmca-from-new-line-cinema.js%253Fplayer%253Dsmall"
        width="100%"
        height="200"
        frameBorder="0"
        srcolling="no"
      ></iframe>
    </>
  )

  return (
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
          <Text>
            {`
            We're not the first ones to do it (and we're certainly not the best),
            but we're hoping to create fun, relatable content. Keith is your average developer; 
            a stint of homelessness in his early 20's provided him with incredible psychological 
            damange. Phil is from jolly ol' England! He likes marmite, steak & kidney pie,
            and struggling to make ends meet.
          `}
          </Text>
        </SectionContent>
      </BioSection>
      <FeaturedSection>
        <Skew path="0,0 100,0 0,100" />
        <FeaturedHeader size="lg" align="center" fontWeight="light-bold" shadow>
          Friday Night Deploys
        </FeaturedHeader>
        <TextWhite>
          Join the devplebs on the podcast series Friday Night Deploys. Every
          friday we come together to talk about all kinds of things around web
          development like personal experiences, news, tech, communities, and
          maybe everything else not web development related!
        </TextWhite>
        <FeaturedCardContainer>
          <FeaturedCard
            backgroundImage={fridayNightDeploys}
            deck={FeatuedDeck}
            hover={false}
            overlay={false}
          />
        </FeaturedCardContainer>
      </FeaturedSection>
    </Layout>
  )
}

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
const Text = styled.p`
  ${tw`pl-0 md:pl-12`}
  font-family: montserrat;
  font-size: 1.1rem;
`

const TextWhite = styled.p`
  ${tw`text-white text-center px-12 mb-0`}
  font-family: montserrat;
  font-size: 1.1rem;
`
const FeaturedSection = styled.div`
  ${tw`relative pb-16 sm:pb-18 md:pb-20 pt-16 sm:pt-18 md:pt-20`}
  background-color: #419d78;
  min-height: 525px;
  svg {
    top: 0;
  }
`

const FeaturedHeader = styled(Header)`
  ${tw`mt-6`}
`

const FeaturedCardContainer = styled.div`
  ${tw`flex flex-row flex-wrap p-4 pb-0 sm:p-8 sm:pb-0 md:p-12 md:pb-0 justify-center`}
`

const FeaturedCard = styled(BackgroundCard)`
  ${DefaultCard} {
    ${tw`w-full min-h-9/10w md:w-20 md:min-h-20 md:min-w-20`}
  }
  ${CardDeck} {
    padding-right: 1rem;
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

const DeckHeader = styled(Header)`
  ${tw`mb-1`}
`

export default IndexPage

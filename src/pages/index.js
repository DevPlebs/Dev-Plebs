import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Skew from "../components/Skew"
import { BackgroundCard, DefaultCard, CardDeck } from "../components/Card"

import logo from "../images/dev_plebs_heads.png"
import fridayNightDeploys from "../images/podcast_cover_neon.png"

const IndexPage = () => {
  const FeatuedDeck = (
    <>
      <DeckHeader size="md" align="left" fontWeight="light-bold" color="#000">
        Episode 1: Horrible Bosses
      </DeckHeader>
      <p>Cast: Keith, Phil</p>
      <iframe
        title="Friday Night Deploys"
        id="multi_iframe"
        src="https://www.podbean.com/media/player/multi?playlist=http%3A%2F%2Fplaylist.podbean.com%2F6414558%2Fplaylist_multi.xml&vjs=1&kdsowie31j4k1jlf913=76aa996d66ba97005063b3c6e68595688eca9990&size=430&skin=&episode_list_bg=%23ffffff&bg_left=%23000000&bg_mid=%230c5056&bg_right=%232a1844&podcast_title_color=%23c4c4c4&episode_title_color=%23ffffff&auto=0&download=1&show_playlist_recent_number=10&pbad=1"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="432"
        allowfullscreen=""
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
          <ImageContainer>
            <img src={logo} alt="Phil and Keith as cartoons" />
          </ImageContainer>
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
              damage. Phil is from jolly ol' England! He likes marmite, steak & kidney pie,
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
          {`
            Join the DevPlebs on their podcast series "Friday Night Deploys". Every
            Friday we come together to talk about all things web development:
            lifestyle, news, tech, communities, and maybe—just maybe—we'll become 
            best friends in the process. Join us every Friday for another round of
            discourse, as we try and tackle the world of web development in our
            unorthodox ways. Please validate us.
          `}
        </TextWhite>
        <FeaturedPodcast>
          <iframe
            title="Episode 1 - JOBS [Five Easy Steps to Earn a Six Figure Salary]"
            height="400"
            width="400"
            scrolling="no"
            data-name="pb-iframe-player"
            src="https://www.podbean.com/media/player/atj67-c5ad49?from=yiiadmin&download=1&version=1&vjs=1&skin=1&auto=0&download=1&pbad=1"
          ></iframe>
        </FeaturedPodcast>
      </FeaturedSection>
    </Layout>
  )
}

const BioSection = styled.div`
  ${tw`flex justify-between flex-wrap pt-10 py-12`}
`

const SectionImage = styled.div`
  ${tw`w-full lg:w-1/2`}
  margin: auto 0;
`

const ImageContainer = tw.div`relative text-center lg:relative`

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

const FeaturedCardContainer = tw.div`flex flex-row flex-wrap p-4 pb-0 sm:p-8 sm:pb-0 md:p-12 md:pb-0 justify-center`

const FeaturedCard = styled(BackgroundCard)`
  ${DefaultCard} {
    ${tw`w-full min-h-9/10w md:w-20 md:min-h-20 md:min-w-20`}
  }
  ${CardDeck} {
    padding-right: 1rem;
  }
`

const DeckHeader = styled(Header)`
  ${tw`mb-1`}
`

const FeaturedPodcast = tw.div`flex justify-center pt-8`

export default IndexPage

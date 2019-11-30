import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { graphql, Link } from "gatsby"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Skew from "../components/Skew"
import Button from "../components/Button"
import { EmbededPlayer } from "../components/EmbededPlayer"
import { Container } from "../components/Container"

import logo from "../images/dev_plebs_heads.png"

const IndexPage = ({ data }) => {
  const { fridayNightDeployEpisode } = data

  return (
    <Layout>
      <Seo title="Home" />
      <Banner />
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
        <CenterContainer>
          <FeaturedHeader
            size="lg"
            align="center"
            fontWeight="light-bold"
            shadow
          >
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
            <EmbededPlayer
              title={fridayNightDeployEpisode.title}
              mediaUrl={fridayNightDeployEpisode.player_url}
            />
          </FeaturedPodcast>
          <Link to="/friday-night-deploys">
            <Button buttonText="See More Episodes" />
          </Link>
        </CenterContainer>
      </FeaturedSection>
    </Layout>
  )
}

export const query = graphql`
  query LatestFridayNightDeploy {
    fridayNightDeployEpisode {
      title
      episode_id
      slug
      player_url
    }
  }
`

const BioSection = styled(Container)`
  ${tw`flex justify-between flex-wrap pt-10 py-12`}
`

const CenterContainer = styled(Container)`
  ${tw`text-center`}
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

const FeaturedPodcast = tw.div`flex justify-center pt-8`

export default IndexPage

import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import { Container } from "../components/Container"
import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import Banner from "../components/Banner"
import Header from "../components/Header"
import { Card, CardBody } from "../components/Card"

const FridayNightDeploys = ({ data }) => {
  const { allFridayNightDeployEpisode } = data

  return (
    <Layout>
      <Seo title="Friday Night Deploys" />
      <Banner />
      <FeaturedSection>
        <Container>
          <FeaturedHeader
            size="2xl"
            align="center"
            fontWeight="light-bold"
            shadow
          >
            Friday Night Deploys Podcast
          </FeaturedHeader>
          <Header size="md" align="left" fontWeight="light-bold" shadow>
            Episodes
          </Header>
          <EpisodesList>
            {allFridayNightDeployEpisode.edges.map(({ node }) => {
              return (
                <EpisodeLink to={`/friday-night-deploys/${node.slug}`}>
                  <EpisodeCard
                    key={node.episode_id}
                    title={node.title}
                    header={node.publish_time_formatted}
                  >
                    <span>{node.duration_formatted}</span>
                  </EpisodeCard>
                </EpisodeLink>
              )
            })}
          </EpisodesList>
        </Container>
      </FeaturedSection>
    </Layout>
  )
}

export const query = graphql`
  query FridayNightDeploysEpisodes {
    allFridayNightDeployEpisode {
      edges {
        node {
          episode_id
          content
          duration
          slug
          title
          publish_time_formatted
          duration_formatted
        }
      }
    }
  }
`

const FeaturedSection = styled.div`
  ${tw`relative pb-16 sm:pb-18 md:pb-20 pt-12`}
  background-color: #419d78;
  min-height: 525px;
  svg {
    top: 0;
  }
`

const FeaturedHeader = styled(Header)`
  ${tw`mt-6`}
`

const EpisodesList = styled.div`
  ${tw`flex flex-col`}
`

const EpisodeCard = styled(Card)`
  ${tw`mb-6 shadow hover:shadow-lg hover:ml-2`}
  transition: .2s;
  .DefaultCard {
    ${tw`rounded-lg`}
    width: 100%;
    h4 {
      ${tw`mb-0`}
    }
    span {
      ${tw`pl-4 text-black`}
    }
    ${CardBody} {
      ${tw`py-8`}
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

const EpisodeLink = styled(Link)`
  ${tw`no-underline`}
`

export default FridayNightDeploys

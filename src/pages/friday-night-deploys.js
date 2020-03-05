import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import { Container } from "../components/Container"
import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import Header from "../components/Header"
import Section from "../components/Section"
import { Card } from "../components/Card"

const FridayNightDeploys = ({ data }) => {
  const { allFridayNightDeployEpisode } = data

  return (
    <Layout>
      <Seo title="Friday Night Deploys" />
      <Section bgColor="#419d78">
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
      </Section>
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

const FeaturedHeader = styled(Header)`
  ${tw`mt-6`}
`

const EpisodesList = styled.div`
  ${tw`flex flex-col`}
`

const EpisodeCard = styled(Card)`
  ${tw`mb-6 hover:ml-2`}
  transition: .2s;
`

const EpisodeLink = styled(Link)`
  ${tw`no-underline`}
`

export default FridayNightDeploys

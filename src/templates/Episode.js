import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import Button from "../components/Button"
import Header from "../components/Header"
import { EmbededPlayer } from "../components/EmbededPlayer"
import { Container } from "../components/Container"
import Section from "../components/Section"

const Episode = ({ pageContext }) => {
  const { title, content, player_url, next, previous } = pageContext

  return (
    <Layout>
      <Seo title={title} />
      <Section bgColor="#419d78">
        <Container>
          <FeaturedHeader
            size="lg"
            align="center"
            fontWeight="light-bold"
            shadow
          >
            {title}
          </FeaturedHeader>
          <FeaturedPodcast>
            <EmbededPlayer title={title} mediaUrl={player_url} />
          </FeaturedPodcast>
          <TextWhite dangerouslySetInnerHTML={{ __html: content }} />
          <NextPrevButtons>
            {next && (
              <Link to={`/friday-night-deploys/${next.slug}`}>
                <Button
                  padding="xsmall"
                  fontSize="small"
                  buttonText="Previous Episode"
                />
              </Link>
            )}
            {previous && (
              <Link to={`/friday-night-deploys/${previous.slug}`}>
                <Button
                  padding="xsmall"
                  fontSize="small"
                  buttonText="Next Episode"
                />
              </Link>
            )}
          </NextPrevButtons>
        </Container>
      </Section>
    </Layout>
  )
}

const TextWhite = styled.p`
  ${tw`text-white text-center px-12 mb-0`}
  font-family: montserrat;
  font-size: 1.1rem;
`

const FeaturedHeader = styled(Header)`
  ${tw`mt-6`}
`

const FeaturedPodcast = tw.div`flex justify-center pt-8`

const NextPrevButtons = styled.div`
  ${tw`flex justify-around pt-8`}
`

export default Episode

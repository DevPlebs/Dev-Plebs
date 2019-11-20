import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import Button from "../components/Button"
import Banner from "../components/Banner"
import Header from "../components/Header"
import { EmbededPlayer } from "../components/EmbededPlayer"
import { Container } from "../components/Container"

const Episode = ({ pageContext }) => {
  const { title, content, player_url, next, previous } = pageContext

  return (
    <Layout>
      <Seo title={title} />
      <Banner />
      <FeaturedSection>
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
      </FeaturedSection>
    </Layout>
  )
}

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

const NextPrevButtons = styled.div`
  ${tw`flex justify-around pt-8`}
`

export default Episode

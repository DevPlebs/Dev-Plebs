import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import Layout from "./layout"
import { Container } from "../../components/Container"
import SEO from "gatsby-theme-blog/src/components/seo"
import { Card } from "../../components/Card"
import Header from "../../components/Header"
import Section from "../../components/Section"

const Posts = ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <Section bgColor="#419d78">
      <Container>
        <Header size="2xl" align="center" fontWeight="light-bold" shadow>
          Blog Posts
        </Header>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          const keywords = node.keywords || []
          return (
            <Fragment key={node.slug}>
              <SEO title="Blog" keywords={keywords} />
              <PostLink to={node.slug}>
                <PostCard
                  key={node.slug}
                  title={title}
                  header={node.date}
                  text={node.excerpt}
                />
              </PostLink>
            </Fragment>
          )
        })}
      </Container>
    </Section>
  </Layout>
)

const PostCard = styled(Card)`
  ${tw`mb-6`}
`

const PostLink = styled(Link)`
  ${tw`no-underline`}
`

export default Posts

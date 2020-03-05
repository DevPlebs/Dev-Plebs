import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import Layout from "./layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container } from "../../components/Container"
import { Card } from "../../components/Card"
import Header from "../../components/Header"
import Section from "../../components/Section"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <Section bgColor="#419d78">
      <Container>
        <SEO title={post.title} description={post.excerpt} />
        <PostCard>
          <Header
            color="black"
            size="xl"
            align="center"
            fontWeight="light-bold"
          >
            {post.title}
          </Header>
          {post.tags && (
            <div>
              {post.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
          <MDXRenderer>{post.body}</MDXRenderer>
          <PostFooter {...{ previous, next }} />
        </PostCard>
      </Container>
    </Section>
  </Layout>
)

const PostCard = styled(Card)`
  ${tw`mb-6`}
`

export default Post

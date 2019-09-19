import PropTypes from "prop-types"
import React from "react"

import { BannerWrapper, Container, Title, Subtitle } from "./styles"

const Banner = ({ children }) => (
  <BannerWrapper>
    <Container>
      <Title>devplebs.</Title>
      <Subtitle>Good Content For People Who Love Bad Content</Subtitle>
    </Container>
    {children}
  </BannerWrapper>
)

Banner.propTypes = {
  children: PropTypes.any,
}

export default Banner

import PropTypes from "prop-types"
import React from "react"

import {
  BannerWrapper,
  BannerContainer,
  Title,
  StyledLink,
  Navigation,
  NavigationItem,
} from "./styles"

const Banner = ({ children }) => (
  <BannerWrapper>
    <BannerContainer>
      <StyledLink to="/">
        <Title>devplebs.</Title>
      </StyledLink>
      <Navigation>
        <StyledLink to="/friday-night-deploys">
          <NavigationItem>Friday Night Deploys</NavigationItem>
        </StyledLink>
        <StyledLink to="/blog">
          <NavigationItem>Blog</NavigationItem>
        </StyledLink>
      </Navigation>
    </BannerContainer>
    {children}
  </BannerWrapper>
)

Banner.propTypes = {
  children: PropTypes.any,
}

export default Banner

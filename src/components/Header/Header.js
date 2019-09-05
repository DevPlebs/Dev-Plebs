import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {HeaderWrapper, Container, Brand, BrandLink} from './styles'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <Brand>
        <BrandLink as={Link} to="/">
          {siteTitle}
        </BrandLink>
      </Brand>
    </Container>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

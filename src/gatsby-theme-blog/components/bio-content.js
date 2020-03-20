import React, { Fragment } from "react"
import styled from "@emotion/styled"

import Header from "../../components/Header"

export default () => (
  <Fragment>
    <AuthorHeader color="#232129">Written by Keith Brewster.</AuthorHeader>
  </Fragment>
)

const AuthorHeader = styled(Header)`
  margin-bottom: 0;
`

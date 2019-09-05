import React from "react"
import { create } from "react-test-renderer"

import Header from "./Header"
import { HeaderWrapper, Container, Brand, BrandLink } from "./styles"

describe("Header", () => {
  const testProps = {
    siteTitle: "test",
  }
  const tree = create(<Header {...testProps} />)

  it("renders correctly", () => {
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("contains <HeaderWrapper />", () => {
    const instance = tree.root
    expect(instance.findAllByType(HeaderWrapper).length).toBe(1)
  })

  it("contains <Container />", () => {
    const instance = tree.root
    expect(instance.findAllByType(Container).length).toBe(1)
  })

  it("contains <Brand />", () => {
    const instance = tree.root
    expect(instance.findAllByType(Container).length).toBe(1)
  })

  it("contains <BrandLink />", () => {
    const instance = tree.root
    expect(instance.findAllByType(Container).length).toBe(1)
  })
})

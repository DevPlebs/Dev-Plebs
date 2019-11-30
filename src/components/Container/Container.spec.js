import React from "react"
import { create } from "react-test-renderer"

import Container from "./Container"

describe("Container", () => {
  it("renders correctly", () => {
    const tree = create(<Container />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

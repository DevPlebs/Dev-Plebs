import React from "react"
import { create } from "react-test-renderer"

import Section from "./Section"

describe("Section", () => {
  it("renders correctly", () => {
    const tree = create(<Section />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

import React from "react"
import { create } from "react-test-renderer"

import Footer from "./Footer"

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = create(<Footer />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

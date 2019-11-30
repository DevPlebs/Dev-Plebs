import React from "react"
import { create } from "react-test-renderer"

import Header from "./Header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = create(<Header />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

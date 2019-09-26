import React from "react"
import { create } from "react-test-renderer"

import BackgroundCard from "./BackgroundCard"

describe("BackgroundCard", () => {
  it("renders correctly", () => {
    const tree = create(<BackgroundCard />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

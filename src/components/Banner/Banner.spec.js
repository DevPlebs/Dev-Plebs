import React from "react"
import { create } from "react-test-renderer"

import Banner from "./Banner"

describe("Banner", () => {
  it("renders correctly", () => {
    const tree = create(<Banner />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

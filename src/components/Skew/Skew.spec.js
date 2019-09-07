import React from "react"
import { create } from "react-test-renderer"

import Skew from "./Skew"

describe("Skew", () => {
  const testProps = {
    path: "0,100 100,0 100,100",
    viewBox: "0 0 100 100",
    fill: "white",
  }

  it("renders correctly", () => {
    const tree = create(<Skew {...testProps} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

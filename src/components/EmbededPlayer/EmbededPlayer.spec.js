import React from "react"
import { create } from "react-test-renderer"

import EmbededPlayer from "./EmbededPlayer"

describe("EmbededPlayer", () => {
  it("renders correctly", () => {
    const tree = create(<EmbededPlayer />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

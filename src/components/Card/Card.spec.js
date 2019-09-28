import React from "react"
import { create } from "react-test-renderer"

import Card from "./Card"

describe("Card", () => {
  it("renders correctly", () => {
    const tree = create(<Card />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

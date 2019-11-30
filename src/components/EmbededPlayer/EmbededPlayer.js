import React from "react"
import { string } from "prop-types"
import { StyledEmbededPlayer } from "./styles"

export const EmbededPlayer = ({ title, mediaUrl }) => (
  <StyledEmbededPlayer
    title={title}
    src={`${mediaUrl}&?from=usersite&vjs=1&skin=1&fonts=Helvetica&auto=0&download=1`}
    height="400"
    width="400"
    scrolling="no"
    data-name="pb-iframe-player"
  ></StyledEmbededPlayer>
)

EmbededPlayer.propTypes = {
  title: string,
  mediaUrl: string,
}

export default EmbededPlayer

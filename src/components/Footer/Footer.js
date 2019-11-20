import React from "react"
import {
  FaTwitterSquare,
  FaInstagram,
  FaYoutubeSquare,
  FaItunes,
  FaRssSquare,
  FaGooglePlay,
  FaSpotify,
  FaPodcast,
} from "react-icons/fa"

import { Container } from "../Container"
import {
  StyledFooter,
  StyledHeader,
  StyledText,
  StyledSmallText,
  IconLink,
} from "./styles"

const Footer = () => (
  <StyledFooter>
    <Container>
      <StyledHeader size="lg" align="center" fontWeight="light-bold" shadow>
        We'll Listen To You Too!
      </StyledHeader>
      <StyledText>
        We would love to hear from our audience out there! Send in a question,
        share a story, drop some feedback, or maybe a shoutout at the end of our
        Friday Night Deploys podcast show. Send in an email or reach us on
        twitter by mentions or DMs to get our attention!
      </StyledText>
      <StyledText>devplebs@gmail.com</StyledText>
      <IconLink href="https://twitter.com/DevPlebs">
        <FaTwitterSquare />
      </IconLink>
      <IconLink href="https://www.instagram.com/devplebs/">
        <FaInstagram />
      </IconLink>
      <IconLink href="https://open.spotify.com/show/7oXdJ5aETg5GBSNC6jZSNq">
        <FaSpotify />
      </IconLink>
      <IconLink href="https://play.google.com/music/listen?u=0#/ps/I54hbbplhdmovo2so6cxsctkcaq">
        <FaGooglePlay />
      </IconLink>
      <IconLink href="https://podcasts.apple.com/ca/podcast/friday-night-deploys/id1485252900">
        <FaItunes />
      </IconLink>
      <IconLink href="https://devplebs.podbean.com/">
        <FaPodcast />
      </IconLink>
      <IconLink href="https://www.youtube.com/channel/UCrhq0YN4VeTmSZNO6SBJpfg">
        <FaYoutubeSquare />
      </IconLink>
      <IconLink href="https://feed.podbean.com/devplebs/feed.xml">
        <FaRssSquare />
      </IconLink>

      <StyledSmallText>
        ©DevPlebs 2019 produced by Keith Brewster and Phil Tietjen
      </StyledSmallText>
    </Container>
  </StyledFooter>
)

export default Footer

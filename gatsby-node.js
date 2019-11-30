require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path")
const axios = require("axios")
const format = require("date-fns/format")
// const data = require("./mock_episodes") // some mock data

const SECONDS_TO_HOURS = 3600
const SECONDS_TO_MINUTES = 60
const PREPEND_ZERO_THRESHHOLD = 10
const BASE_URL = "https://api.podbean.com"

// fixes issues with tailwind.macro and tailwindV1+
// https://github.com/bradlc/babel-plugin-tailwind-components/issues/39
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  const processEpisode = episode => {
    episode.slug = episode.permalink_url.replace(
      "https://devplebs.podbean.com/e/",
      ""
    )

    episode.publish_time_formatted = format(
      new Date(episode.publish_time * 1000),
      "MMM do, yyy"
    )

    // This definitely wasn't from a stack overflow post
    let sec = episode.duration
    let hrs = Math.floor(sec / SECONDS_TO_HOURS)
    let min = Math.floor((sec - hrs * SECONDS_TO_HOURS) / SECONDS_TO_MINUTES)
    let seconds = sec - hrs * SECONDS_TO_HOURS - min * SECONDS_TO_MINUTES
    seconds = Math.round(seconds * 100) / 100

    let length = hrs < PREPEND_ZERO_THRESHHOLD ? "0" + hrs : hrs
    length += ":" + (min < PREPEND_ZERO_THRESHHOLD ? "0" + min : min)
    length +=
      ":" + (seconds < PREPEND_ZERO_THRESHHOLD ? "0" + seconds : seconds)
    episode.duration_formatted = length

    const nodeId = createNodeId(`fidaynightdeploy-episode-${episode.id}`)
    const nodeContent = JSON.stringify(episode)
    const nodeData = Object.assign({}, episode, {
      id: nodeId,
      episode_id: episode.id,
      parent: null,
      children: [],
      internal: {
        type: `FridayNightDeployEpisode`,
        content: nodeContent,
        contentDigest: createContentDigest(episode),
      },
    })

    return nodeData
  }

  try {
    const auth = await axios({
      method: "post",
      baseURL: "https://api.podbean.com",
      url: "/v1/oauth/token",
      auth: {
        username: process.env.PODBEAN_API_TOKEN,
        password: process.env.PODBEAN_API_SECRET,
      },
      data: {
        grant_type: "client_credentials",
      },
    })

    const { data } = await axios.get(
      `${BASE_URL}/v1/episodes?access_token=${auth.data.access_token}`
    )
    data.episodes.forEach(episode => {
      createNode(processEpisode(episode))
    })
  } catch (e) {
    console.log(e.message)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const episodeTemplate = path.resolve("src/templates/Episode.js")

  try {
    const { data } = await graphql(`
      {
        allFridayNightDeployEpisode {
          edges {
            node {
              id
              episode_id
              title
              slug
              permalink_url
              content
              player_url
            }
            next {
              slug
              title
            }
            previous {
              slug
              title
            }
          }
        }
      }
    `)

    data.allFridayNightDeployEpisode.edges.forEach(
      ({ node, next, previous }) => {
        createPage({
          path: `/friday-night-deploys/${node.slug}`,
          component: episodeTemplate,
          context: { ...node, next, previous },
        })
      }
    )
  } catch (e) {
    console.log(e.message)
  }
}

import React from "react"
import { useStaticQuery } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

export default function HomepageSlider() {
  return (
    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "backgrounds" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxWidth: 4000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
    />
  )
}

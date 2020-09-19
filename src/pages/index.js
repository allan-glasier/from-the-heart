import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({ data }) {
  const images = data.allFile.nodes

  return images.map((image, index) => {
    return <Img fluid={image.childImageSharp.fluid} key={index} />
  })
}

export const query = graphql`
  {
    allFile {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

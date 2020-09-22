import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/bootstrap.min.css"
import "../styles/global.css"

export default function Home({ data }) {
  const images = data.allFile.nodes

  return (
    <div className="gallery">
      <div className="img-container">
        {images.map((image, index) => {
          return (
            <div className="box">
              <Img
                className="grow"
                fluid={image.childImageSharp.fluid}
                key={index}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
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

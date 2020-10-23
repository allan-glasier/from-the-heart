import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/bootstrap.min.css"
import "../styles/global.css"
import Layout from "../layouts/Layout"

export default function Home({ data }) {
  const images = data.allFile.nodes

  return (
    <Layout>
      <div className="header">
        <div className="title-bar">
          <h1 className="text-center">Gallery</h1>
        </div>
      </div>
      <div className="gallery mt-5">
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
    </Layout>
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

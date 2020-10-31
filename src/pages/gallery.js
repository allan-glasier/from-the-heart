import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layouts/Layout"
import "../styles/bootstrap.min.css"
import "../styles/global.css"

export default function Home({ data }) {
  const images = data.allFile.nodes

  return (
    <Layout>
      <div className="header header-gallery">
        <div className="title-bar">
          <h1 className="text-center">Gallery</h1>
        </div>
      </div>
      <div className="container my-5 pt-2">
        <p>
          We don't just take pictures, we capture memories, experiences and
          emotion. We don't want to give you a photo album that just collects
          dust over the years. We want to deliver photos that make you laugh
          about the great times you had. Photos that remind you of your special
          day and all the nerves, happiness and love you felt. We believe you
          will love our work and our personalities so much that we offer a free
          engagement session so you can get to know us and see if we are right
          for you and feel better that we are worth your time and money.
        </p>
      </div>
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
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/images/" } }) {
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

import React from "react"
import Layout from "../layouts/Layout"
import Img from "gatsby-image"

export default function about({ data }) {
  return (
    <Layout>
      <div className="header header-about">
        <div className="title-bar">
          <h1 className="text-center">About Us</h1>
        </div>
      </div>
      <div className="container my-5 py-3 flex">
        <p className="flex-item px-4 text-justify">
          I started Celebrity Music 30 years ago because there was a void in the
          city of a DJ that cared. Most DJs sit at a booth with the lights off,
          not caring about the crowd. I had to change that. Approximately 2,700
          weddings later, we are the company that are booked through word of
          mouth rather than ads or wedding shows. Trust opinions, not a
          brochure. A wedding is a live performance, and we believe in making
          your day memorable and run smoothly. Over the years, we have taken
          pride in being able to read a crowd and keep everyone happy. Your meal
          may be good, but if your entertainment isn’t, then everyone goes home
          early and will not remember your wedding. Numerable times, even years
          later, we receive glowing reviews by guests of a wedding Celebrity
          Music has been a part of. It is often remarked upon how much fun the
          reception was. As first impressions go, Celebrity Music aims high.
        </p>
        <div className="flex-item px-3">
          <Img
            className="img-shadow"
            fluid={data.image1.childImageSharp.fluid}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    image1: file(
      relativePath: { eq: "EA8B10A0-D352-4BB1-981E-F17306691741.jpeg" }
    ) {
      childImageSharp {
        fluid(jpegQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

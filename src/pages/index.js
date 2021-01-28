import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Videography from "../inc/Videography"
import Testimonials from "../inc/Testimonials"
import Layout from "../layouts/Layout"
import Carousel from "react-elastic-carousel"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css?raw"

import AnimatedHero4 from "../components/AnimatedHero4"

export default function Home({ data }) {
  const AutoplaySlider = withAutoplay(AwesomeSlider)
  const images = data.sliderImages.images
  const carouselItems = [
    { id: 1, text: "2,700 weddings and counting" },
    { id: 2, text: "100% word of mouth" },
    { id: 3, text: "Experience the best in wedding entertainment" },
  ]
  return (
    <Layout>
      <section className="hero">
        <div className="hero-overlay text-center">
          <div className="hero-top">
            <div className="hero-logos">
              <div className="logo">
                <Img fluid={data.fthLogo.childImageSharp.fluid} />
              </div>
              <div className="logo">
                <Img fluid={data.celebrityLogo.childImageSharp.fluid} />
              </div>
            </div>
            <Carousel
              itemsToShow={1}
              easing={"ease"}
              enableAutoPlay={true}
              autoPlaySpeed={2000}
            >
              {carouselItems.map(item => (
                <h3 key={item.id}>{item.text}</h3>
              ))}
            </Carousel>
          </div>
          <div className="hero-bottom">
            <AnimatedHero4 />
          </div>
        </div>
      </section>
      <AutoplaySlider
        style={AwesomeSliderStyles}
        className="homeSlider"
        infinite={true}
        play={true}
        interval={5000}
        bullets={false}
        buttons={false}
      >
        {images.map((image, index) => {
          return <div data-src={image.asset.fluid.srcWebp} key={index} />
        })}
      </AutoplaySlider>
      <section className="section container">
        <h2 className="text-center">From the Heart Photography</h2>
        <div className="flex">
          <div className="flex-item">
            <p>
              Before booking a photographer, allow me to take you for an
              engagement session for free to establish if we bond (to get a feel
              for one another) and show you the quality of pictures for your
              day. After 10 years of working with an array of professional
              photographers, I was able to establish From the Heart Photography
              15 years ago, blending all the best attributes of my colleagues
              and removing the boredom and rules of time that a lot in the
              industry have.
            </p>
            <p>
              Its now been 15 years of wedding photography with professionalism
              of uniform, equipment and results adding a sense of relaxation to
              the bride, groom and wedding party giving full day coordination
              along with it. An iPhone can now take an awesome picture so
              careful of why you’re investing in a camera that someone carries
              rather than the person behind it. We also include standard video
              with all photography packages.
            </p>
            <div className="text-center">
              <Link to="/gallery" className="btn btn-outline-primary">
                View Gallery
              </Link>
            </div>
          </div>
          <div className="flex-item">
            <Img
              className="img-shadow"
              fluid={data.photoImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </section>
      <Videography />
      <section className="section container">
        <h2 className="text-center">Celebrity Music DJ / Choreography</h2>
        <div className="flex">
          <div className="flex-item">
            <p>
              Choosing a song because its a hit is simple. You might as well use
              and iPod. Having someone represent, MC, coordinate and play the
              2nd song and keep your dance floor packed all night is priceless.
              (Yes, I stole that phrase).
              <br />
              <br />
              Our DJ business is unique to the point that the music is half the
              job in comparison to the feeling and motivation we try to give
              towards coordinating the perfect day. Without a doubt, our
              dedication to our clients is uncomparable in the business. We
              would like to thank all who have allowed us to be part of their
              day and would be honored to be part of yours!
            </p>

            <div className="text-center">
              <Link to="/dj-choreography" className="btn btn-outline-primary">
                Additional Info
              </Link>
            </div>
          </div>
          <div className="flex-item">
            <Img
              className="img-shadow"
              fluid={data.djImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </section>
      <Testimonials />
    </Layout>
  )
}

export const query = graphql`
  {
    photoImage: file(
      relativePath: { eq: "0C867FC8-51F6-4264-A26F-52D4D2BE32B6.jpeg" }
    ) {
      childImageSharp {
        fluid(jpegQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    djImage: file(
      relativePath: { eq: "BE832D04-31BE-4711-AA2A-C11E197EE57A.jpeg" }
    ) {
      childImageSharp {
        fluid(jpegQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    celebrityLogo: file(relativePath: { eq: "celebrityLogo-white.png" }) {
      childImageSharp {
        fluid(jpegQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fthLogo: file(relativePath: { eq: "fthLogo-white.png" }) {
      childImageSharp {
        fluid(jpegQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sliderImages: sanityHomeSlider {
      images {
        asset {
          fluid(maxWidth: 1200) {
            srcWebp
          }
        }
      }
    }
  }
`

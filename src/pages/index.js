import React from "react"
import Photography from "../inc/Photography"
import Videography from "../inc/Videography"
import DJ from "../inc/DJ"
import Testimonials from "../inc/Testimonials"
import Layout from "../layouts/Layout"
import { FaArrowDown } from "react-icons/fa"

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-overlay text-center">
          <div className="hero-top">
            <h1>FROM THE HEART | CELEBRITY MUSIC</h1>
            <h5>(background to scroll through photos)</h5>
            <h3>2,700 weddings and counting --// fade in</h3>
            <h3>100% word of mouth --// fade in second</h3>
            <h3>
              Experience why we are the most trusted name <br /> in wedding
              entertainment --// fade in and replace above 2 lines
            </h3>
          </div>
          <div className="hero-bottom">
            <h5>
              Scroll for More info --// jump up from bottom after above complete
              <br />
              <FaArrowDown />
            </h5>
          </div>
        </div>
      </section>
      <Photography />
      <h5 className="text-center">*!*Photos will be updated this weekend*!*</h5>
      <Videography />
      <h5 className="text-center">*!*Need to add a bit more here*!*</h5>
      <DJ />
      <h5 className="text-center">*!*Need to add testimonials*!*</h5>
      <Testimonials />
    </Layout>
  )
}

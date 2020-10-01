import React from "react"
import "../styles/bootstrap.min.css"
import Navbar from "../inc/Navbar"
import Photography from "../inc/Photography"
import Videography from "../inc/Videography"
import DJ from "../inc/DJ"
import Testimonials from "../inc/Testimonials"
import Contact from "../inc/Contact"
import Footer from "../inc/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero"></section>
      <Photography />
      <Videography />
      <DJ />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

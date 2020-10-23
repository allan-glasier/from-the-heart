import React from "react"
import Photography from "../inc/Photography"
import Videography from "../inc/Videography"
import DJ from "../inc/DJ"
import Testimonials from "../inc/Testimonials"
import Layout from "../layouts/Layout"

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <h1>Welcome</h1>
      </section>
      <Photography />
      <Videography />
      <DJ />
      <Testimonials />
    </Layout>
  )
}

import React from "react"
import Layout from "../layouts/Layout"

export default function about() {
  return (
    <Layout>
      <div className="header">
        <div className="title-bar">
          <h1 className="text-center">About Us</h1>
        </div>
      </div>
      <div className="container my-5">
        <h5 className="text-center">
          *!*Photos will be updated this weekend, may need to add more to
          this*!*
        </h5>
        <p className="flex-item px-4 text-justify">
          I started Celebrity Music 30 years ago because there was a void in the
          city of a DJ that cared. Most DJs sit at a booth with the lights off,
          not caring about the crowd. I had to change that. Approximately 2,700
          weddings later, we are the company that are booked through word of
          mouth rather than ads or wedding shows. Trust opinions, not a
          brochure.
        </p>
        // TODO: EA8B10A0-D352-4BB1-981E-F17306691741.jpeg
      </div>
    </Layout>
  )
}

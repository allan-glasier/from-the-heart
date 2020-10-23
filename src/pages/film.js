import React from "react"
import Layout from "../layouts/Layout"

export default function film() {
  return (
    // TODO: Header image: 9D9A2C41-CDA5-4138-9BF6-A89206527EA6.jpeg
    <Layout>
      <div className="header">
        <div className="title-bar">
          <h1 className="text-center">Videography</h1>
        </div>
      </div>
      <div className="container my-5">
        <p className="flex-item px-4 text-justify">
          I started Celebrity Music 30 years ago because there was a void in the
          city of a DJ that cared. Most DJs sit at a booth with the lights off,
          not caring about the crowd. I had to change that. Approximately 2,700
          weddings later, we are the company that are booked through word of
          mouth rather than ads or wedding shows. Trust opinions, not a
          brochure.
        </p>
      </div>
    </Layout>
  )
}

import React from "react"
import Layout from "../layouts/Layout"

export default function about() {
  return (
    <Layout>
      <div className="header header-about">
        <div className="title-bar">
          <h1 className="text-center">About Us</h1>
        </div>
      </div>
      <div className="container my-5 py-3 flex">
        <p className="flex-item px-4 text-justify">
          I started Celebrity music 30 years ago because there was a void in the
          city for a disc jockey company that cared. Most DJs sit at a booth
          with the lights off, not caring about the crowd. I had to change that.
          Approximately 2,700 weddings later, we are the company that is booked
          through “word of mouth” rather than ads or wedding shows. Trust
          opinions, not a brochure. We start with a consultation with our
          couples and urge parents to attend to discuss protocols of the day and
          night. A wedding is a once in a lifetime event. We believe in making
          your day run smoothly and memorable through our excellent Coordinating
          & Master of Ceremonies skills. We take the pressure off the parents
          and the bride and groom for the day. We make sure that your speeches
          and your special dances get the respect they deserve. Over the years
          we have taken pride in being able to read a crowd and keep everyone
          motivated and entertained. From your background music, to when your
          guests arrive, and until the last song of the night, we care on the
          vibe of the room. Numerous times, even years later, we receive glowing
          reviews and comments by guests of a wedding Celebrity Music has been
          part of. It is often remarked upon how much fun the reception was. As
          first impressions go, Celebrity Music aims high.
        </p>
        <div className="flex-item px-3">
          <img className="img-shadow" src={"/joe.jpeg"} />
        </div>
      </div>
    </Layout>
  )
}

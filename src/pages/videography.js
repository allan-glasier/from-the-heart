import React from "react"
import Layout from "../layouts/Layout"

export default function videography() {
  return (
    <Layout>
      <div className="header">
        <div className="title-bar">
          <h1 className="text-center">Videography</h1>
        </div>
      </div>
      <div className="container my-5">
        <div className="flex">
          <div className="flex-item pr-5">
            <p>
              20 years ago we brought videography to our company and have done
              over 400 weddings. We maintain professionalism in our uniform,
              equipment and attributes of coordinating your wedding for the day.
              We believe in trying not to stage any videos but instead use our
              humor to make you feel relaxed.
              <br />
              <br />A camera pointed at you for 10 hours is a horrible feeling.
              Asking someone to smile makes for unflattering pictures. Finding a
              way to relax you and make you smile naturally is an ability we are
              known for.
            </p>
          </div>
          <div className="flex-item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rHQri6V45pY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="text-center pt-4">
          <a
            className="btn btn-outline-primary"
            href="https://www.youtube.com/channel/UCl8ikOyHZWHk_wFQrScaVHQ/videos"
            target="_blank"
          >
            Visit our Youtube Channel
          </a>
        </div>
      </div>
    </Layout>
  )
}

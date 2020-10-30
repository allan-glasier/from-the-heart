import { Link } from "gatsby"
import React from "react"

const Videography = () => {
  return (
    <section className="section dark">
      <div className="container">
        <h2 className="text-center">From the Heart Videography</h2>
        <div className="flex flex-row-reverse">
          <div className="flex-item">
            <p>
              20 years ago we brought videography to our company and have done
              over 400 weddings. We maintain professionalism in our uniform,
              equipment and attributes of coordinating your wedding for the day.
              We believe in trying not to stage any videos but instead use our
              humor to make you feel relaxed.
            </p>
            <p>
              A camera pointed at you for 10 hours is a horrible feeling. Asking
              someone to smile makes for unflattering pictures. Finding a way to
              relax you and make you smile naturally is an ability we are known
              for.
            </p>
            <div className="text-center">
              <Link to="/videography" className="btn btn-outline-secondary">
                additional info
              </Link>
            </div>
          </div>
          <div className="flex-item hidden-small">
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
      </div>
    </section>
  )
}

export default Videography
